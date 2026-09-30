/* Калькулятор бани-бочки: считает итоговую сумму, показывает разбивку,
   изображения бань, рекламное описание и точные характеристики.
   Данные берутся из data.js (генерируется из базы знаний). */
(function () {
  const D = window.BANYA_DATA;
  if (!D) { console.error("Нет данных BANYA_DATA"); return; }

  const KIT_TITLES = { "стандарт": "Стандарт", "люкс": "Люкс", "премиум": "Премиум" };
  const GROUP_TITLES = {
    "вход": "Вход и входная группа", "печь": "Печь и топка", "геометрия": "Геометрия",
    "двери": "Двери", "снаружи": "Снаружи", "внутри": "Комфорт внутри", "окна": "Окна",
    "электрика": "Электрика", "материал": "Материал", "прицеп": "Баня на прицепе",
    "комплект": "Готовый комплект"
  };
  const MODEL_PHOTO_SLUG = { k2: "k3", k3: "k3", k4: "k4", k5: "k5", k6: "k6", tank: "tank" };
  const rub = v => (Math.round(v) || 0).toLocaleString("ru-RU").replace(/\u00a0/g, " ") + " ₽";
  const GAL_VISIBLE = 8;                       // сколько фото видно в блоке результата
  const GAL = { shown: 0, total: 0 };

  const S = {
    modelId: "k4", kit: "люкс", material: "ель", tankLen: 4, extraLen: 0, extraSection: false,
    widthPlusCm: 0, heightPlusCm: 0,
    trailer: false, straps: false, veranda: 0, verandaType: "terrace", options: {},
    buildOnSite: "none", buildAuto: false, city: "", km: null, kmSource: "", kmManual: null, tariffMode: "auto",
    loading: false
  };

  /* ── утилиты ───────────────────────────────────────────────────────────── */
  const $ = s => document.querySelector(s);
  const model = () => S.modelId === "tank" ? D.tank : D.models.find(m => m.id === S.modelId);
  const isTank = () => S.modelId === "tank";
  const photoSlug = () => MODEL_PHOTO_SLUG[S.modelId] || "k3";

  /* ── галерея результата: набор фото зависит от выбора ─────────────────── */
  function hashSel() {
    const opts = Object.keys(S.options).filter(k => S.options[k]);
    const seed = [S.modelId, S.kit, S.material, isTank() ? S.tankLen : "", S.extraLen,
                  S.extraSection, S.veranda, S.verandaType, S.trailer, S.straps,
                  S.buildOnSite, opts.join(",")].join("|");
    let h = 7;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 99991;
    return h;
  }

  function modelLabel() {
    if (isTank()) return `Баня «Танк» ${S.tankLen.toString().replace(".", ",")}×2,4 м`;
    const m = model();
    if (S.modelId === "k2") return "Квадро 2×2 м (фото 3-метровой модели — форма и отделка те же)";
    return m.name;
  }

  const MOUNT = mediaSlug => ((D.media || {})[mediaSlug] || {}).photos || [];

  // группы фото под текущий выбор: модель — основная, веранда/прицеп/сборка/опции — доп. плитки
  function galGroups() {
    const gs = [];
    const kitName = "комплектация «" + KIT_TITLES[S.kit] + "»" + (S.material === "кедр" ? ", кедр" : ", ель «А»");
    gs.push({ slug: "model", cap: modelLabel() + ", " + kitName, photos: MOUNT(photoSlug()) });
    if (S.veranda > 0) gs.push({ slug: "veranda", cap: "Веранда (терраса) " + S.veranda + " м²", photos: MOUNT("veranda") });
    if (S.trailer) gs.push({ slug: "pricep", cap: "Баня на прицепе «БАРС»", photos: MOUNT("pricep") });
    if (S.buildOnSite !== "none") gs.push({ slug: "proizvodstvo", cap: "Сборка бани на участке", photos: MOUNT("proizvodstvo") });
    if (Object.keys(S.options).some(k => S.options[k])) gs.push({ slug: "komplekt", cap: "Внутри бани: отделка и опции", photos: MOUNT("komplekt") });
    return gs.filter(g => g.photos.length);
  }

  const rotate = (arr, off) => arr.slice(off).concat(arr.slice(0, off));

  function groupOffset(slug, len, want) {
    if (len <= want) return 0;
    let h = 7;
    const seed = [slug, S.modelId, S.kit, S.material, S.veranda, S.verandaType, S.trailer,
                  S.buildOnSite, isTank() ? S.tankLen : "", S.extraLen, S.extraSection,
                  Object.keys(S.options).filter(k => S.options[k]).join(",")].join("|");
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 99991;
    return h % (len - want + 1);
  }

  // сколько плиток показать: основная группа — большинство, доп. разделы — по несколько
  function galItems(count) {
    const gs = galGroups();
    const out = [];
    if (!gs.length) return out;
    const extras = gs.slice(1);
    const extraShare = extras.length ? Math.max(1, Math.round((count * 0.35) / extras.length)) : 0;
    const baseShare = Math.max(1, count - extraShare * extras.length);
    const push = (g, want) => {
      if (want <= 0) return;
      const off = groupOffset(g.slug, g.photos.length, want);
      rotate(g.photos, off).slice(0, want).forEach(src => out.push({ src: src, cap: g.cap }));
    };
    push(gs[0], baseShare);
    extras.forEach(g => push(g, extraShare));
    // добор из основной группы, если доп. разделы длиннее нужного
    if (out.length < count) {
      const off = groupOffset(gs[0].slug + "-more", gs[0].photos.length, Math.max(1, Math.min(count, gs[0].photos.length)));
      for (const src of rotate(gs[0].photos, off)) {
        if (out.length >= count) break;
        if (!out.some(x => x.src === src)) out.push({ src: src, cap: gs[0].cap });
      }
    }
    return out.slice(0, count);
  }

  function galTotal() {
    return galItems(999).length;
  }

  function galleryCaption() {
    const parts = [modelLabel()];
    parts.push("комплектация «" + KIT_TITLES[S.kit] + "»");
    parts.push(S.material === "кедр" ? "кедр" : "ель «А»");
    if (S.veranda > 0) parts.push("веранда");
    if (S.trailer) parts.push("прицеп");
    if (S.buildOnSite !== "none") parts.push("сборка на участке");
    if (Object.keys(S.options).some(k => S.options[k])) parts.push("с опциями");
    return "Фото под ваш выбор: " + parts.join(" · ");
  }

  function drawGallery() {
    const gal = $("#resultGallery");
    if (!gal) return;
    const items = galItems(GAL.shown);
    gal.dataset.items = JSON.stringify(items.map(x => ({ type: "photo", src: x.src, cap: x.cap })))
      .replace(/'/g, "&#39;");
    gal.innerHTML = items.map((x, i) =>
      `<img src="${x.src}" alt="${x.cap}" title="${x.cap}" loading="lazy" decoding="async" data-i="${i}">`).join("");
  }

  function kitKeys() {
    if (isTank()) return ["люкс", "премиум"];
    return ["стандарт", "люкс", "премиум"].filter(k => model().prices && model().prices[k]);
  }

  /* ── расчёт ───────────────────────────────────────────────────────────── */
  function compute() {
    const rows = [];
    let bathBase = 0;

    if (isTank()) {
      const area = S.tankLen * D.tank.width;
      const rate = D.tank.price_per_m2[S.kit] || D.tank.price_per_m2["люкс"];
      bathBase = area * rate;
      rows.push({ label: `Баня «Танк» ${S.tankLen}×${D.tank.width} м, комплектация «${KIT_TITLES[S.kit]}»`,
                  note: `${area.toFixed(1)} м² × ${rub(rate)}/м²`, value: bathBase });
    } else {
      const m = model();
      bathBase = m.prices[S.kit];
      rows.push({ label: `${m.name}, комплектация «${KIT_TITLES[S.kit]}»`, note: m.sections, value: bathBase });
      if (S.extraLen > 0) {
        const v = S.extraLen * 13000;
        rows.push({ label: `Увеличение длины на ${(S.extraLen * 0.5).toFixed(1).replace(".", ",").replace(",0", "")} м`,
                    note: "13 000 ₽, только один раз; дальше — следующий размер по прайсу", value: v });
        bathBase += v;
      }
    }
    if (S.extraSection) {
      rows.push({ label: "Дополнительное отделение", note: "доступно от 5 м", value: 15000 });
      bathBase += 15000;
    }
    // материал
    if (S.material === "кедр") {
      const add = Math.round(bathBase * (D.cedar_markup || 0.2));
      rows.push({ label: "Баня из кедра", note: `+${Math.round((D.cedar_markup || 0.2) * 100)} % к цене из ели`, value: add });
      bathBase += add;
    }

    // дополнительные опции
    const optSum = [];
    Object.keys(S.options).forEach(id => {
      if (!S.options[id]) return;
      const o = D.options.find(x => x.nome === id);
      if (o && o.price) optSum.push({ label: o.nome, value: o.price });
    });
    optSum.forEach(o => rows.push(o));

    // веранда
    if (S.veranda > 0) {
      const VT = {
        terrace: { r: 13500, n: "двускатная крыша — баня под крышей" },
        wall: { r: 13000, n: "односкатная крыша, навес с одной стороны" },
        open: { r: 9000, n: "без крыши: подиум и ограждение" },
        podium: { r: 7000, n: "подиум без крыши и ограждения" }
      };
      const vt = VT[S.verandaType] || VT.terrace;
      rows.push({ label: `Терраса ${S.veranda} м²`, note: `${vt.n}, ${rub(vt.r)}/м²`,
                  value: S.veranda * vt.r });
    }
    // увеличение ширины и высоты (10 000 ₽ за каждые 10 см)
    if (!isTank() && S.widthPlusCm > 0) {
      const w = model().width + S.widthPlusCm / 100;
      rows.push({ label: `Ширина бани +${S.widthPlusCm} см`,
                  note: `10 000 ₽ за 10 см; ширина ${String(+w.toFixed(2)).replace(".", ",")} м`,
                  value: (S.widthPlusCm / 10) * 10000 });
    }
    if (S.heightPlusCm > 0) {
      rows.push({ label: `Высота бани +${S.heightPlusCm} см`, note: "10 000 ₽ за 10 см; стандарт 2,05 м",
                  value: (S.heightPlusCm / 10) * 10000 });
    }
    // прицеп
    if (S.trailer) {
      rows.push({ label: "Прицеп «БАРС» 3,5×1,5 м", note: "усиленный двухосный, 100 % предоплата", value: D.trailer.price });
      if (S.straps) rows.push({ label: "Три стропы", note: "по 2 000 ₽", value: 6000 });
    }
    // сборка на участке (решение заказчика 30.09.2026):
    // «Квадро» до 2,5 м — 10 000 ₽; «Квадро» 2,5–3,5 м — 15 000 ₽; «Танк»/«Овал» — 15 000 ₽;
    // баня с террасой — 25 000 ₽; свыше 1 000 км к сборке автоматически +5 000 ₽
    if (S.buildOnSite !== "none") {
      const buildPrices = { quadro: 10000, quadro_wide: 15000, tank: 15000, terrace: 25000 };
      const names = { quadro: "Сборка на участке, «Квадро» до 2,5 м (1 день)",
                      quadro_wide: "Сборка на участке, «Квадро» 2,5–3,5 м",
                      tank: "Сборка на участке, «Танк»/«Овал» (2 дня)",
                      terrace: "Сборка на участке, баня с террасой (2 дня)" };
      const price = buildPrices[S.buildOnSite];
      if (price) rows.push({ label: names[S.buildOnSite] || "Сборка на участке", value: price });
      const far = (D.delivery && D.delivery.assembly_long_distance) || { "от_км": 1000, "надбавка": 5000 };
      if (S.km && S.km > (far["от_км"] || 1000)) {
        rows.push({ label: "Сборка: надбавка за расстояние свыше 1 000 км",
                    note: `${S.km} км — автоматически`, value: far["надбавка"] || 5000 });
      }
    }
    // доставка
    let deliv = null;
    if (S.km && S.km > 0) {
      deliv = window.GEO.deliveryCost(S.km, S.tariffMode);
      rows.push({ label: `Доставка: ${S.km} км`, note: `${deliv.label} + 2 000 ₽`,
                  value: deliv.total - (deliv.fee || 2000) });
      rows.push({ label: "Подача и строповка (фикс.)", note: deliv.km + " км", value: deliv.fee || 2000 });
    }

    const total = rows.reduce((a, r) => a + r.value, 0);
    return { rows, total, deliv };
  }

  /* ── характеристики и описание ────────────────────────────────────────── */
  function characteristics() {
    const kit = D.kits[S.kit] || D.kits["люкс"];
    const mat = S.material === "кедр" ? "кедр" : "сибирская ель категории «А» (Архангельск)";
    let size, area, sections;
    if (isTank()) {
      size = `${S.tankLen} × ${D.tank.width} м`;
      area = (S.tankLen * D.tank.width).toFixed(1) + " м²";
      sections = kit === D.kits["премиум"] ? "3 отделения" : "2 отделения";
    } else {
      const m = model();
      const len = m.length + S.extraLen * 0.5;
      const wid = m.width + S.widthPlusCm / 100;
      size = `${len.toFixed(1).replace(".0", "")} × ${String(+wid.toFixed(2)).replace(".", ",")} м` +
             (S.heightPlusCm ? `, высота +${S.heightPlusCm} см` : "");
      area = (len * wid).toFixed(1).replace(".", ",") + " м²";
      sections = m.sections + (S.extraSection ? " (+ доп. отделение)" : "");
    }
    return [
      ["Габариты", size + ", площадь " + area],
      ["Отделения", sections],
      ["Материал", mat + "; доска «лунный паз» 45 мм, камерная сушка 10–12 %"],
      ["Печь", kit["печь"]],
      ["Бак для воды", kit["бак"]],
      ["Камни для печи", kit["камни"]],
      ["Дверь в парную", kit["дверь_парной"]],
      ["Трапы", kit["трапы"]],
      ["Окна", kit["окна"]],
      ["Стол и рундуки", (kit["стол"] || "—") + "; " + (kit["рундуки"] || "—")],
      ["Кровля", "«Дёке» 3,2 мм, 4 цвета на выбор"],
      ["Гарантия", D.guarantee || "12 месяцев"]
    ];
  }

  function kitBullets() {
    const full = (D.kits[S.kit] && D.kits[S.kit].состав) || null;
    if (full) return full;
    const kit = D.kits[S.kit] || {};
    return [
      "Каркас бани — доска «лунный паз» 45 мм (сибирская ель)",
      "Кровля «Дёке» 3,2 мм, цвет на выбор",
      kit["печь"] ? "Печь " + kit["печь"] : "",
      "Электрика, светодиодные лампы",
      "Полки из липы в парной, лавки в предбаннике",
      "Краска «Акватекс 2в1» с воском (обработка до 50 мм)",
      "Обработка внутренняя (горючесть, плесень, синева, древоточец)",
      "Бетонные блоки 300×300×400 мм, слив — сифон 50 мм",
      "Ступени перед входом, наличники, флама (до 600 °C)"
    ].filter(Boolean);
  }

  function adText() {
    const kit = KIT_TITLES[S.kit];
    const mat = S.material === "кедр" ? "кедра" : "сибирской ели категории «А»";
    const m = isTank() ? null : model();
    const len = isTank() ? S.tankLen : m.length + S.extraLen * 0.5;
    const form = isTank() ? "Танк" : m.form;
    const aroma = S.material === "кедр"
      ? "насыщенный кедровый аромат с фитонцидами"
      : "мягкий хвойный аромат без смоляной тяжести";
    const kitLine = {
      "стандарт": "честная комплектация без лишнего: чугунная печь «Рада Мини», бак 40 л, полки из липы и всё необходимое для первого пара",
      "люкс": "печь «Рада 4/14» со стеклянной дверцей, трап в парной, рундук, стол и окно в комнате отдыха — тот самый комфорт, за который вас потом благодарят",
      "премиум": "мощная печь «Рада 6/14» (сталь 6 мм), трапы во всех отделениях, два рундука и стеклянная дверь 8 мм — баня, в которой хочется остаться подольше"
    }[S.kit];
    return `Баня-бочка формы «${form}» ${len.toString().replace(".", ",")} метра из ${mat} в комплектации «${kit}» — ` +
      `прогревается за 30–60 минут и держит жар без «холодных зон»: округлая форма и доска 45 мм работают как природный утеплитель. ` +
      `Внутри — ${kitLine}. Древесина камерной сушки 10–12 %: не трескается, не коробится и наполняет парную ` +
      `${aroma}. Лёгкий пар, липовые полки, тёплый свет — и никакой смолы: мы используем только сибирскую ель категории «А» из Архангельска. ` +
      `Стяжка — оцинкованный трос с талрепами: подтянул на пару оборотов, и конструкция снова как новая. ` +
      `Доставка по всей России, оплата после установки и приёмки на вашем участке.`;
  }

  /* Монтаж: баня с верандой шире 2,40 м, поэтому её везём только сборкой на участке.
     При выборе веранды подставляем подходящий вариант сборки, при отказе — убираем. */
  /* Схемы: планировка + свайное поле под текущую конфигурацию — приложение к договору. */
  function schematicOptions() {
    const m = isTank() ? null : model();
    const kit = D.kits[S.kit] || {};
    const raw = ($("#pileSections") && $("#pileSections").value) || "";
    const sections = raw.split(/[\s,;]+/).map(x => parseFloat(x.replace(",", "."))).filter(x => x > 0);
    const opts = Object.keys(S.options).filter(k => S.options[k]);
    const has = t => opts.some(o => o.indexOf(t) >= 0);
    let zones = isTank() ? 2 : (S.kit === "премиум" ? 3 : 2);
    if (m && m.id === "k2") zones = 1;
    if (S.extraSection) zones += 1;
    return {
      len: isTank() ? S.tankLen : m.length + S.extraLen * 0.5,
      wid: isTank() ? D.tank.width : m.width + S.widthPlusCm / 100,
      form: isTank() ? "tank" : "quadro",
      kitName: KIT_TITLES[S.kit], zones: zones, sections: sections,
      polki: true,
      runbook: !!(kit["рундуки"] && kit["рундуки"] !== "нет"),
      shkaf: has("Шкаф"),
      stol: !!((kit["стол"] && kit["стол"] !== "нет") || has("Стол")),
      win600: (String(kit["окна"] || "").indexOf("600") >= 0) || has("600×600") || has("600x600"),
      win300: String(kit["окна"] || "").indexOf("300") >= 0,
      heaterOutside: has("Топка с улицы"),
      equipment: window.PLAN ? window.PLAN.equipmentList(kit, opts) : []
    };
  }

  function drawSchematics() {
    const o = schematicOptions();
    const ph = $("#planHost");
    if (ph && window.PLAN) window.PLAN.render(ph, o);
    const plh = $("#pileHost");
    if (plh && window.PILE) window.PILE.render(plh, o);
  }

  function pileText() {
    const host = $("#pileHost");
    if (!host || !window.PILE) return "";
    const b = window.PILE.build({
      len: isTank() ? S.tankLen : model().length + S.extraLen * 0.5,
      wid: isTank() ? D.tank.width : model().width + S.widthPlusCm / 100,
      form: isTank() ? "tank" : "quadro",
      sections: ((($("#pileSections") || {}).value) || "").split(/[\s,;]+/)
        .map(x => parseFloat(x.replace(",", "."))).filter(x => x > 0)
    });
    return `Свайное поле под баню ${isTank() ? "Танк " + S.tankLen : ""}${isTank() ? "" : model().name}:\n` +
      `Основание: ${b.baseL} × ${b.baseW} мм (короче бани на 200 мм с каждой стороны)\n` +
      `Сваи: ${b.xs} по длине × ${b.ys} по ширине = ${b.xs * b.ys} шт., шаг ${Math.round(b.baseL / (b.xs - 1))} мм \n` +
      `Свая — труба ø76 мм. Схему пришлём файлом.`;
  }

  function applyBuildAuto() {
    const tank = isTank();
    const veranda = S.veranda > 0;
    if (veranda && ["none", "quadro", "quadro_wide", "tank"].indexOf(S.buildOnSite) >= 0) {
      S.buildOnSite = "terrace"; S.buildAuto = true;
    } else if (!veranda && S.buildAuto) {
      S.buildOnSite = "none"; S.buildAuto = false;
    }
    // «Квадро»: тариф сборки зависит от ширины (до 2,5 м — 10 000 ₽, 2,5–3,5 м — 15 000 ₽)
    if (!tank && !veranda && (S.buildOnSite === "quadro" || S.buildOnSite === "quadro_wide")) {
      S.buildOnSite = (model().width + S.widthPlusCm / 100) > 2.5 ? "quadro_wide" : "quadro";
    }
    const sel = $("#buildSelect");
    if (sel && sel.value !== S.buildOnSite) sel.value = S.buildOnSite;
  }

  /* ── вывод ────────────────────────────────────────────────────────────── */
  function render() {
    applyBuildAuto();
    const r = compute();
    const sumEl = $("#sumValue"), brk = $("#breakdown"), chars = $("#chars"),
          ad = $("#adText"), gal = $("#resultGallery"), inсл = $("#kitBullets");
    if (sumEl) {
      const old = sumEl.textContent;
      sumEl.textContent = r.total ? rub(r.total) : "—";
      if (old !== sumEl.textContent) {
        sumEl.classList.add("flash"); setTimeout(() => sumEl.classList.remove("flash"), 500);
      }
    }
    const sub = $("#sumSub");
    if (sub) {
      if (r.total) {
        const parts = [modelLabel(), "комплектация «" + KIT_TITLES[S.kit] + "»"];
        if (S.material === "кедр") parts.push("кедр");
        if (S.city) parts.push("доставка: " + S.city + (S.km ? " (" + S.km + " км)" : ""));
        sub.textContent = parts.join(" · ") + " — предварительная стоимость «под ключ».";
      } else {
        sub.textContent = "Выберите модель, комплектацию и населённый пункт доставки.";
      }
    }
    syncUrl();
    drawSchematics();
    if (brk) {
      let html = r.rows.map(x =>
        `<tr><td>${x.label}${x.note ? '<span class="note">' + x.note + "</span>" : ""}</td>
         <td class="v">${x.value ? rub(x.value) : "—"}</td></tr>`).join("");
      if (!S.km) {
        html += `<tr><td>Доставка<span class="note">укажите населённый пункт — посчитаем километраж</span></td>
                 <td class="v">не рассчитана</td></tr>`;
      }
      html += `<tr class="total"><td>Итого</td><td class="v">${rub(r.total)}</td></tr>`;
      brk.innerHTML = html;
    }
    if (chars) {
      chars.innerHTML = characteristics().map(([k, v]) =>
        `<dt>${k}</dt><dd>${v}</dd>`).join("");
    }
    if (inсл) inсл.innerHTML = kitBullets().map(x => `<li>${x}</li>`).join("");
    if (ad) ad.textContent = adText();
    if (gal) {
      GAL.total = galTotal();
      GAL.shown = Math.min(GAL_VISIBLE, GAL.total);
      drawGallery();
      const cap = $("#galCaption");
      if (cap) cap.textContent = galleryCaption();
      const more = $("#galleryMore");
      if (more) {
        more.style.display = "";
        more.dataset.goto = "";
        if (GAL.total > GAL.shown) {
          more.textContent = "Показать ещё фото (" + Math.min(GAL_VISIBLE, GAL.total - GAL.shown) + ")";
        } else if (GAL.total > 0) {
          more.textContent = "Все подборки фото →";
          more.dataset.goto = "galereya.html";
        } else {
          more.style.display = "none";
        }
      }
    }
    const routeBox = $("#routeBox");
    if (routeBox) {
      if (S.loading) routeBox.innerHTML = "Считаю маршрут от производства…";
      else if (S.km) {
        const d = r.deliv || window.GEO.deliveryCost(S.km, S.tariffMode);
        routeBox.className = "route-box" + (S.kmSource.indexOf("Яндекс Карты") === 0 ? "" : " warn");
        routeBox.innerHTML = `Маршрут до <b>${S.city || "населённого пункта"}</b>: <b>${d.km} км</b>` +
          `<span class="src">${S.kmSource || "—"}</span><br>` +
          `Стоимость доставки: ${d.km} км × ${d.rate} ₽ + ${d.fee} ₽ = <b>${rub(d.total)}</b><br>` +
          `<span class="tiny">Проверьте маршрут в Яндекс Навигаторе: выбирайте вариант без платных участков и наименьший километраж.` +
          (S.kmManual ? " Километраж указан вручную." : "") + "</span>";
      } else {
        routeBox.className = "route-box";
        routeBox.innerHTML = "Начните вводить населённый пункт — подскажем и посчитаем километраж " +
          "от производства (Ижевск, ул. Пойма, 32).";
      }
    }
  }

  /* ── построение формы ─────────────────────────────────────────────────── */
  function buildForm() {
    const sel = $("#modelSelect");
    sel.innerHTML = D.models.map(m =>
      `<option value="${m.id}"${m.id === S.modelId ? " selected" : ""}>${m.name} — от ${rub(m.prices[Object.keys(m.prices)[0]])}</option>`).join("") +
      `<option value="tank">Баня «Танк» — от ${rub(D.tank.price_per_m2["люкс"] * D.tank.width * 4)}</option>`;

    const tl = $("#tankLengthWrap");
    tl.innerHTML = `<label for="tankLength">Длина бани «Танк», м</label>
      <select id="tankLength">${[4, 4.5, 5, 5.5, 6].map(v =>
        `<option value="${v}"${v === S.tankLen ? " selected" : ""}>${v.toString().replace(".", ",")} м (ширина 2,4 м)</option>`).join("")}</select>`;

    const wp = $("#widthPlusWrap");
    if (wp) wp.innerHTML = `<label for="widthPlus">Увеличение ширины, см (только «Квадро»)</label>
      <select id="widthPlus">${[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150].map(cm =>
        `<option value="${cm}"${cm === S.widthPlusCm ? " selected" : ""}>${cm ? "+" + cm + " см — " + rub((cm / 10) * 10000) : "стандартная 2,0 м"}</option>`).join("")}</select>
      <div class="hint">10 000 ₽ за каждые 10 см. Стандартная ширина — 2,0 м, максимум 3,5 м. Шире 2,40 м — только сборка на участке.</div>`;

    const hp = $("#heightPlusWrap");
    if (hp) hp.innerHTML = `<label for="heightPlus">Увеличение высоты, см («Квадро» и «Танк»)</label>
      <select id="heightPlus">${[0, 10, 20, 30, 40].map(cm =>
        `<option value="${cm}"${cm === S.heightPlusCm ? " selected" : ""}>${cm ? "+" + cm + " см — " + rub((cm / 10) * 10000) : "стандартная 2,05 м"}</option>`).join("")}</select>
      <div class="hint">10 000 ₽ за каждые 10 см. Стандартная высота — 2,05 м наружная (1,95 м внутренняя), от трапа до потолка 190 см.</div>`;

    renderKits();

    const og = $("#optionsGroups");
    const groups = {};
    D.options.filter(o => o.group !== "материал" && o.price && !o.calcOnly).forEach(o => {
      (groups[o.group] = groups[o.group] || []).push(o);
    });
    og.innerHTML = Object.keys(groups).map(g =>
      `<div class="opt-group"><span class="lbl">${GROUP_TITLES[g] || g}</span>
        <div class="opt-grid">${groups[g].map(o =>
          `<label class="opt"><input type="checkbox" data-opt="${o.nome}">
             <span>${o.nome}${o.hint ? ' <span class="tiny muted">(' + o.hint + ")</span>" : ""}</span>
             <span class="p">${rub(o.price)}</span></label>`).join("")}</div></div>`).join("");

    const bs = $("#buildSelect");
    bs.innerHTML = `<option value="none">Не нужна (доставка в собранном виде)</option>
      <option value="quadro">«Квадро» до 2,5 м — 10 000 ₽ (1 день)</option>
      <option value="quadro_wide">«Квадро» 2,5–3,5 м — 15 000 ₽</option>
      <option value="tank">«Танк»/«Овал» — 15 000 ₽ (2 дня)</option>
      <option value="terrace">Баня с террасой — 25 000 ₽ (2 дня)</option>`;
  }

  function renderKits() {
    const wrap = $("#kitChips");
    wrap.innerHTML = kitKeys().map(k =>
      `<label class="chip"><input type="radio" name="kit" value="${k}"${k === S.kit ? " checked" : ""}>
        <span>${KIT_TITLES[k]}</span></label>`).join("");
  }

  function syncVisibility() {
    $("#tankLengthWrap").style.display = isTank() ? "block" : "none";
    $("#extraLenWrap").style.display = isTank() ? "none" : "block";
    const m = isTank() ? null : model();
    const canExtraSection = isTank() ? S.tankLen >= 5 : (m.length >= 5);
    $("#extraSectionWrap").style.display = canExtraSection ? "block" : "none";
    if (!canExtraSection) S.extraSection = false;
    const wpw = $("#widthPlusWrap");
    if (wpw) wpw.style.display = isTank() ? "none" : "block";
    const hpw = $("#heightPlusWrap");
    if (hpw) hpw.style.display = "block";
    // прицеп только для бань 3 и 4 м
    const len = isTank() ? S.tankLen : m.length + S.extraLen * 0.5;
    const canTrailer = !isTank() && (len <= 4.5);
    $("#trailerWrap").style.display = canTrailer ? "block" : "none";
    if (!canTrailer) { S.trailer = false; S.straps = false; $("#trailerChk").checked = false; }
    const cv = $("#cedarNote");
    if (cv) cv.style.display = S.material === "кедр" ? "block" : "none";
  }

  /* ── маршрут ──────────────────────────────────────────────────────────── */
  let routeSeq = 0;
  async function calcRoute(city, lat, lon) {
    const seq = ++routeSeq;
    S.loading = true; render();
    try {
      let km, source;
      if (lat && lon) {
        const d = await window.GEO.distance(city, lat, lon);
        km = d.km; source = d.source;
      } else {
        const c = await window.GEO.coords(city);
        const d = await window.GEO.distance(city, c.lat, c.lon);
        km = d.km; source = d.source;
      }
      if (seq !== routeSeq) return;
      S.km = km; S.kmSource = source; S.kmManual = null;
      const mi = $("#kmManual"); if (mi) mi.value = km;
    } catch (e) {
      if (seq !== routeSeq) return;
      S.km = null; S.kmSource = "не удалось определить — укажите километраж вручную";
      const t = window.GEO.tableFind(city);
      if (t) { S.km = t.km; S.kmSource = "справочник (километраж по прямому маршруту)"; }
    } finally {
      if (seq === routeSeq) { S.loading = false; render(); }
    }
  }

  /* ── события ──────────────────────────────────────────────────────────── */
  function bind() {
    $("#modelSelect").addEventListener("change", e => {
      S.modelId = e.target.value;
      if (!kitKeys().includes(S.kit)) S.kit = kitKeys()[0];
      renderKits(); syncVisibility(); render();
    });
    document.addEventListener("change", e => {
      const t = e.target;
      if (t.id === "tankLength") { S.tankLen = parseFloat(t.value); syncVisibility(); render(); }
      else if (t.name === "kit") { S.kit = t.value; render(); }
      else if (t.name === "material") { S.material = t.value; syncVisibility(); render(); }
      else if (t.id === "extraLen") { S.extraLen = parseInt(t.value, 10); render(); }
      else if (t.id === "widthPlus") { S.widthPlusCm = parseInt(t.value, 10) || 0; render(); }
      else if (t.id === "heightPlus") { S.heightPlusCm = parseInt(t.value, 10) || 0; render(); }
      else if (t.id === "extraSection") { S.extraSection = t.checked; render(); }
      else if (t.id === "trailerChk") { S.trailer = t.checked; render(); }
      else if (t.id === "strapsChk") { S.straps = t.checked; render(); }
      else if (t.id === "verandaSqm") { S.veranda = parseFloat(t.value) || 0; render(); }
      else if (t.id === "verandaType") { S.verandaType = t.value; render(); }
      else if (t.id === "buildSelect") { S.buildOnSite = t.value; render(); }
      else if (t.id === "tariffSelect") { S.tariffMode = t.value; render(); }
      else if (t.dataset && t.dataset.opt) { S.options[t.dataset.opt] = t.checked; render(); }
      else if (t.id === "kmManual") {
        const v = parseFloat(t.value) || 0;
        if (v > 0) { S.km = v; S.kmManual = true; S.kmSource = "километраж указан вручную"; }
        else { S.km = null; }
        render();
      }
    });

    // схемы для договора: пересчёт при вводе отсеков и кнопки скачивания/копирования
    const ps = $("#pileSections");
    if (ps) ps.addEventListener("input", () => { drawSchematics(); });
    const sizeTag = () => {
      const m = isTank() ? null : model();
      const len = isTank() ? S.tankLen : m.length + S.extraLen * 0.5;
      const wid = isTank() ? D.tank.width : m.width + S.widthPlusCm / 100;
      return (isTank() ? "tank" : m.id) + "-" + String(len).replace(".", ",") + "x" + String(wid).replace(".", ",") + "-" + S.kit;
    };
    const pd = $("#pileDownload");
    if (pd) pd.addEventListener("click", () => {
      if (window.PILE) window.PILE.download("svaynoe-pole-" + sizeTag());
    });
    const pld = $("#planDownload");
    if (pld) pld.addEventListener("click", () => {
      if (window.PLAN) window.PLAN.download("plan", "planirovka-" + sizeTag());
    });
    const sd = $("#sheetDownload");
    if (sd) sd.addEventListener("click", () => {
      if (!window.PLAN || !window.PILE) return;
      const o = schematicOptions();
      const pileSvg = window.PILE.build(o).svg;
      const sheet = window.PLAN.sheetSvg(Object.assign({}, o, { pileSvg: pileSvg }));
      window.PLAN.downloadSvg(sheet, "shema-dlya-dogovora-" + sizeTag());
    });
    const pc = $("#pileCopy");
    if (pc) pc.addEventListener("click", () => {
      const t = pileText();
      try { navigator.clipboard && navigator.clipboard.writeText(t); } catch (e) {}
      const old = pc.textContent;
      pc.textContent = "Скопировано ✓";
      setTimeout(() => { pc.textContent = old; }, 2000);
    });

    // подсказки населённого пункта
    const cityInput = $("#cityInput"), list = $("#suggestList");
    let timer = null;
    const close = () => list.classList.remove("open");
    cityInput.addEventListener("input", () => {
      const v = cityInput.value.trim();
      S.city = v;
      clearTimeout(timer);
      if (v.length < 2) { close(); return; }
      timer = setTimeout(() => {
        window.GEO.suggest(v, (items, source) => {
          if (!items || !items.length) { close(); return; }
          list.innerHTML = items.map((it, i) =>
            `<div data-i="${i}" data-lat="${it.lat || ""}" data-lon="${it.lon || ""}" data-title="${it.title}">
               <b>${it.title}</b>${it.km ? " · " + it.km + " км" : ""}<span class="tiny muted"> — ${it.full}</span></div>`).join("");
          list.dataset.source = source || "";
          list.classList.add("open");
        });
      }, 250);
    });
    list.addEventListener("click", e => {
      const row = e.target.closest("div[data-title]");
      if (!row) return;
      const lat = parseFloat(row.dataset.lat) || null, lon = parseFloat(row.dataset.lon) || null;
      const title = row.dataset.title;
      cityInput.value = title; S.city = title; close();
      calcRoute(title, lat, lon);
    });
    document.addEventListener("click", e => {
      if (!e.target.closest(".suggest")) close();
    });
    cityInput.addEventListener("change", () => {
      const v = cityInput.value.trim();
      if (v.length >= 3 && v !== S.city) { S.city = v; calcRoute(v, null, null); }
    });

    // показать больше фото / уйти в полную галерею
    $("#galleryMore").addEventListener("click", () => {
      const more = $("#galleryMore");
      if (more.dataset.goto) { location.href = more.dataset.goto; return; }
      GAL.shown = Math.min(GAL.shown + GAL_VISIBLE, GAL.total);
      drawGallery();
      if (GAL.shown >= GAL.total) {
        more.textContent = "Вся галерея фото и видео →";
        more.dataset.goto = "galereya.html";
      } else {
        more.textContent = "Показать ещё фото (" + Math.min(GAL_VISIBLE, GAL.total - GAL.shown) + ")";
      }
    });

    // печать и копирование
    $("#btnPrint").addEventListener("click", () => window.print());
    $("#btnCopy").addEventListener("click", async () => {
      const r = compute();
      let text = "Расчёт бани-бочки\n\n";
      r.rows.forEach(x => { text += `• ${x.label}${x.note ? " (" + x.note + ")" : ""} — ${rub(x.value)}\n`; });
      text += `\nИТОГО: ${rub(r.total)}\n`;
      if (S.km) text += `Доставка: ${S.km} км (${S.kmSource}) — ${rub(r.deliv.total)}\n`;
      text += "\nХарактеристики:\n";
      characteristics().forEach(([k, v]) => { text += `• ${k}: ${v}\n`; });
      try {
        await navigator.clipboard.writeText(text);
        $("#btnCopy").textContent = "Скопировано ✓";
        setTimeout(() => { $("#btnCopy").textContent = "Скопировать расчёт"; }, 2000);
      } catch (e) {
        alert("Не удалось скопировать. Выделите текст вручную или нажмите «Распечатать».");
      }
    });

    // лайтбокс на превью результата (с пролистыванием)
    document.addEventListener("click", e => {
      const img = e.target.closest("#resultGallery img");
      if (!img || !window.LB) return;
      const gal = img.closest("#resultGallery");
      let items = [];
      try { items = JSON.parse(gal.dataset.items || "[]"); } catch (err) { items = []; }
      if (items.length) window.LB.openSet(items, parseInt(img.dataset.i, 10) || 0);
      else window.LB.open(img.src, img.alt);
    });
  }

  /* ── текущий расчёт в адресной строке: ссылкой можно поделиться ───────── */
  function syncUrl() {
    try {
      const p = new URLSearchParams();
      p.set("model", S.modelId);
      p.set("kit", S.kit);
      if (S.material === "кедр") p.set("mat", "кедр");
      if (isTank()) p.set("len", String(S.tankLen));
      else if (S.extraLen) p.set("extra", String(S.extraLen));
      if (S.extraSection) p.set("sec", "1");
      if (S.widthPlusCm) p.set("w", String(S.widthPlusCm));
      if (S.heightPlusCm) p.set("h", String(S.heightPlusCm));
      if (S.veranda) { p.set("ver", String(S.veranda)); p.set("vt", S.verandaType); }
      if (S.trailer) p.set("tr", "1");
      if (S.buildOnSite !== "none") p.set("build", S.buildOnSite);
      Object.keys(S.options).forEach(k => { if (S.options[k]) p.set("o_" + k, "1"); });
      if (S.city) { p.set("city", S.city); if (S.km) p.set("km", String(S.km)); }
      const qs = p.toString();
      if (location.search.replace(/^\?/, "") !== qs) {
        history.replaceState(null, "", location.pathname + "?" + qs);
      }
    } catch (e) { /* ссылка — не критично */ }
  }

  function init() {
    try {
      const st = $("#tariffSelect");
      if (st) st.innerHTML =
        `<option value="auto">65 ₽/км до 1 000 км, свыше — 70 ₽/км</option>
         <option value="65">Принудительно 65 ₽/км</option>
         <option value="70">Принудительно 70 ₽/км</option>`;
      // предвыбор по ссылке: index.html?model=k5&kit=премиум&mat=кедр&ver=8&vt=open
      const q = new URLSearchParams(location.search);
      if (q.get("model") && (q.get("model") === "tank" || D.models.some(m => m.id === q.get("model")))) {
        S.modelId = q.get("model");
        const k = q.get("kit");
        if (k && kitKeys().indexOf(k) < 0) { /* комплектация недоступна для модели */ }
        else if (k) S.kit = k;
        else S.kit = kitKeys().indexOf("люкс") >= 0 ? "люкс" : kitKeys()[0];
      }
      if (q.get("mat") === "кедр") S.material = "кедр";
      const qLen = parseFloat(q.get("len")); if (qLen) S.tankLen = qLen;
      const qX = parseInt(q.get("extra"), 10); if (qX) S.extraLen = qX;
      if (q.get("sec") === "1") S.extraSection = true;
      const qW = parseInt(q.get("w"), 10); if (qW) S.widthPlusCm = qW;
      const qH = parseInt(q.get("h"), 10); if (qH) S.heightPlusCm = qH;
      const qVer = parseFloat(q.get("ver")); if (qVer > 0) S.veranda = qVer;
      if (q.get("vt")) S.verandaType = q.get("vt");
      if (q.get("tr") === "1") S.trailer = true;
      const qBuild = q.get("build");
      if (qBuild && qBuild !== "none") {
        // старые ссылки: раздельные варианты с верандой заменены общим «с террасой»
        S.buildOnSite = ({ quadro_veranda: "terrace", tank_veranda: "terrace" })[qBuild] || qBuild;
      }
      if (q.get("city")) S.city = q.get("city");
      const qKm = parseFloat(q.get("km")); if (qKm) { S.km = qKm; S.kmManual = true; S.kmSource = "километраж из ссылки"; }

      buildForm(); syncVisibility(); bind();
      const vs = $("#verandaSqm"); if (vs && S.veranda) vs.value = S.veranda;
      const vtSel = $("#verandaType"); if (vtSel && S.verandaType) vtSel.value = S.verandaType;
      const bsSel = $("#buildSelect"); if (bsSel && S.buildOnSite !== "none") bsSel.value = S.buildOnSite;
      const ci = $("#cityInput"); if (ci && S.city) ci.value = S.city;
      const kmi = $("#kmManual"); if (kmi && S.km) kmi.value = S.km;
      render();
    } catch (e) {
      console.error("Ошибка инициализации калькулятора", e);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
