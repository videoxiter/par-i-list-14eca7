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
    "электрика": "Электрика", "материал": "Материал"
  };
  const MODEL_PHOTO_SLUG = { k2: "k3", k3: "k3", k4: "k4", k5: "k5", k6: "k6", tank: "tank" };
  const rub = v => (Math.round(v) || 0).toLocaleString("ru-RU").replace(/\u00a0/g, " ") + " ₽";

  const S = {
    modelId: "k4", kit: "люкс", material: "ель", tankLen: 4, extraLen: 0, extraSection: false,
    trailer: false, straps: false, veranda: 0, verandaType: "roof", options: {},
    buildOnSite: "none", city: "", km: null, kmSource: "", kmManual: null, tariffMode: "auto",
    loading: false
  };

  /* ── утилиты ───────────────────────────────────────────────────────────── */
  const $ = s => document.querySelector(s);
  const model = () => S.modelId === "tank" ? D.tank : D.models.find(m => m.id === S.modelId);
  const isTank = () => S.modelId === "tank";
  const photoSlug = () => MODEL_PHOTO_SLUG[S.modelId] || "k3";

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
        rows.push({ label: `Увеличение длины на ${(S.extraLen * 0.5).toFixed(1).replace(".0", "")} м`,
                    note: "13 000 ₽ за каждые 0,5 м", value: v });
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
      const rate = S.verandaType === "wall" ? 13000 : 13500;
      rows.push({ label: `Веранда (терраса) ${S.veranda} м²`,
                  note: S.verandaType === "wall" ? "крыша до стены бани, 13 000 ₽/м²" : "двускатная крыша, 13 500 ₽/м²",
                  value: S.veranda * rate });
    }
    // прицеп
    if (S.trailer) {
      rows.push({ label: "Прицеп «БАРС» 3,5×1,5 м", note: "усиленный двухосный, 100 % предоплата", value: D.trailer.price });
      if (S.straps) rows.push({ label: "Три стропы", note: "по 2 000 ₽", value: 6000 });
    }
    // сборка на участке
    const buildPrices = { quadro: 10000, tank: 15000, terrace: 25000 };
    if (S.buildOnSite !== "none") {
      const names = { quadro: "Сборка на участке, форма «Квадро» (1 день)",
                      tank: "Сборка на участке, форма «Танк»/«Овал» (2 дня)",
                      terrace: "Сборка на участке, баня с террасой (2 дня)" };
      rows.push({ label: names[S.buildOnSite], value: buildPrices[S.buildOnSite] });
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
      size = `${len.toFixed(1).replace(".0", "")} × ${m.width} м`;
      area = (len * m.width).toFixed(1) + " м²";
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

  /* ── вывод ────────────────────────────────────────────────────────────── */
  function render() {
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
      sub.textContent = r.total
        ? "Предварительная стоимость «под ключ» с доставкой. Итог подтверждает менеджер."
        : "Выберите модель, комплектацию и населённый пункт доставки.";
    }
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
      const photos = ((D.media || {})[photoSlug()] || {}).photos || [];
      gal.innerHTML = photos.slice(0, 6).map((src, i) =>
        `<img src="${src}" alt="Баня-бочка ${i + 1}" loading="lazy" decoding="async"
              data-photo="${photoSlug()}" data-idx="${i}">`).join("");
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

    renderKits();

    const og = $("#optionsGroups");
    const groups = {};
    D.options.filter(o => o.group !== "материал" && o.price).forEach(o => {
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
      <option value="quadro">Квадро — 10 000 ₽ (1 день)</option>
      <option value="tank">Танк / Овал — 15 000 ₽ (2 дня)</option>
      <option value="terrace">С террасой — 25 000 ₽ (2 дня)</option>`;
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

    // показать больше фото
    $("#galleryMore").addEventListener("click", () => {
      const photos = ((D.media || {})[photoSlug()] || {}).photos || [];
      const gal = $("#resultGallery");
      const from = gal.children.length;
      gal.insertAdjacentHTML("beforeend", photos.slice(from, from + 6).map((src, i) =>
        `<img src="${src}" alt="Баня-бочка" loading="lazy" decoding="async">`).join(""));
      if (gal.children.length >= photos.length) $("#galleryMore").style.display = "none";
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

    // лайтбокс на превью результата
    document.addEventListener("click", e => {
      const img = e.target.closest("#resultGallery img");
      if (img && window.LB) window.LB.open(img.src, img.alt);
    });
  }

  function init() {
    try {
      // предвыбор модели/комплектации по ссылке: index.html?model=k5&kit=премиум
      const q = new URLSearchParams(location.search);
      if (q.get("model") && (q.get("model") === "tank" || D.models.some(m => m.id === q.get("model")))) {
        S.modelId = q.get("model");
        const k = q.get("kit");
        if (k && kitKeys().indexOf(k) < 0) { /* комплектация недоступна для модели */ }
        else if (k) S.kit = k;
        else S.kit = kitKeys().indexOf("люкс") >= 0 ? "люкс" : kitKeys()[0];
      }
      buildForm(); syncVisibility(); bind(); render();
      const st = $("#tariffSelect");
      if (st) st.innerHTML =
        `<option value="auto">С 1 апреля: 70 ₽/км до 1 000 км, свыше — 75 ₽/км</option>
         <option value="legacy">Старый тариф: 65 ₽/км</option>`;
    } catch (e) {
      console.error("Ошибка инициализации калькулятора", e);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
