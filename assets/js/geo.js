/* Гео-модуль: подсказки населённых пунктов (Яндекс Подсказки), координаты (Nominatim),
   километраж маршрута (Яндекс Карты API при наличии ключа → иначе OSRM).
   Без интернета работает справочник расстояний из базы знаний (data.js → distances). */
window.GEO = (function () {
  const CFG = window.SITE_CONFIG || {};
  const DATA = window.BANYA_DATA || {};
  const TABLE = DATA.distances || {};
  const LSKEY = "banya_geo_cache_v1";

  const norm = s => (s || "").toString().toLowerCase()
    .replace(/ё/g, "е").replace(/[^a-zа-я0-9 ]/gi, " ").replace(/\s+/g, " ").trim();

  function cacheGet(name) {
    try { return (JSON.parse(localStorage.getItem(LSKEY)) || {})[norm(name)]; } catch (e) { return null; }
  }
  function cacheSet(name, val) {
    try {
      const c = JSON.parse(localStorage.getItem(LSKEY)) || {};
      c[norm(name)] = val; localStorage.setItem(LSKEY, JSON.stringify(c));
    } catch (e) { /* приватный режим — просто не кэшируем */ }
  }

  /* ── 1. Справочник расстояний (офлайн) ────────────────────────────────── */
  function tableList() {
    return Object.keys(TABLE)
      .filter(k => TABLE[k] && TABLE[k]["км"])
      .map(k => ({ title: k, km: TABLE[k]["км"], lat: TABLE[k].lat, lon: TABLE[k].lon,
                   region: TABLE[k].region || "" }))
      .sort((a, b) => a.km - b.km);
  }
  function tableFind(name) {
    const n = norm(name);
    if (!n) return null;
    const list = tableList();
    let hit = list.find(c => norm(c.title) === n);
    if (hit) return hit;
    hit = list.find(c => norm(c.title).startsWith(n) || n.startsWith(norm(c.title)));
    if (hit) return hit;
    const first = n.split(" ")[0];
    return list.find(c => norm(c.title).split(" ")[0] === first) || null;
  }

  /* ── 2. Подсказки населённых пунктов ─────────────────────────────────── */
  function localSuggest(part, cb) {
    const n = norm(part);
    if (!n) return cb([]);
    const list = tableList();
    const starts = list.filter(c => norm(c.title).startsWith(n));
    const inner = list.filter(c => !norm(c.title).startsWith(n) && norm(c.title).includes(n));
    cb([...starts, ...inner].slice(0, 8).map(c => ({
      title: c.title, full: c.region ? c.region + ", " + c.title : c.title,
      km: c.km, lat: c.lat, lon: c.lon, source: "справочник"
    })));
  }

  let suggestTimer = null, suggestSeq = 0;
  function suggest(part, cb) {
    clearTimeout(suggestTimer);
    const seq = ++suggestSeq;
    suggestTimer = setTimeout(() => {
      let answered = false;
      const done = (res, source) => {
        if (answered || seq !== suggestSeq) return;
        answered = true;
        cb(res, source);
      };
      const timer = setTimeout(() => { if (!answered) localSuggest(part, r => done(r, "справочник")); }, 3500);
      try {
        window.suggest = {
          apply: function (data) {
            clearTimeout(timer);
            const items = (data && data.results ? data.results : [])
              .filter(r => r && r.type === "toponym" && r.where)
              .map(r => {
                const title = (r.title && (r.title.text || r.title)) || r.where.title || "";
                const full = r.where.name || title;
                const known = tableFind(title);
                return { title: title, full: full, km: known ? known.km : null,
                         lat: known ? known.lat : null, lon: known ? known.lon : null,
                         source: "Яндекс Подсказки" };
              })
              .filter(r => r.title);
            if (items.length) done(items, "Яндекс Подсказки");
            else localSuggest(part, r => done(r, "справочник"));
          }
        };
        const s = document.createElement("script");
        s.charset = "utf-8";
        s.src = "https://suggest-maps.yandex.ru/suggest-geo?v=9&lang=ru_RU&results=9&highlight=1&part=" +
                encodeURIComponent(part) + "&_=" + Date.now();
        s.onerror = () => { clearTimeout(timer); if (!answered) localSuggest(part, r => done(r, "справочник")); };
        document.head.appendChild(s);
        setTimeout(() => s.remove(), 5000);
      } catch (e) {
        clearTimeout(timer);
        localSuggest(part, r => done(r, "справочник"));
      }
    }, 220);
  }

  /* ── 3. Координаты населённого пункта ────────────────────────────────── */
  async function coords(name) {
    const c = cacheGet(name);
    if (c && c.lat) return c;
    const t = tableFind(name);
    if (t) { const v = { lat: t.lat, lon: t.lon, km: t.km, source: "справочник" }; cacheSet(name, v); return v; }
    const url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&accept-language=ru&q=" +
                encodeURIComponent(name + ", Россия");
    const r = await fetch(url, { headers: { "Accept": "application/json" } });
    const j = await r.json();
    if (!j || !j.length) throw new Error("не удалось определить координаты: " + name);
    const v = { lat: parseFloat(j[0].lat), lon: parseFloat(j[0].lon), source: "Nominatim/OSM" };
    cacheSet(name, v);
    return v;
  }

  /* ── 4. Километраж маршрута ──────────────────────────────────────────── */
  let ymapsLoading = null;
  function loadYmaps() {
    if (!CFG.YANDEX_API_KEY) return Promise.reject(new Error("нет ключа Яндекс Карт"));
    if (window.ymaps && window.ymaps.route) return Promise.resolve(window.ymaps);
    if (ymapsLoading) return ymapsLoading;
    ymapsLoading = new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = "https://api-maps.yandex.ru/2.1/?apikey=" + encodeURIComponent(CFG.YANDEX_API_KEY) + "&lang=ru_RU";
      s.onload = () => window.ymaps.ready(() => res(window.ymaps));
      s.onerror = () => rej(new Error("Яндекс Карты не загрузились"));
      document.head.appendChild(s);
    });
    return ymapsLoading;
  }

  async function routeByYandex(lat, lon) {
    const ym = await loadYmaps();
    const o = CFG.origin;
    return new Promise((res, rej) => {
      ym.route([[o.lat, o.lon], [lat, lon]], { avoidTolls: true, routingMode: "auto" })
        .then(r => res({ km: Math.round(r.getLength() / 1000), source: "Яндекс Карты (без платных участков)" }))
        .catch(rej);
    });
  }

  async function routeByOsrm(lat, lon) {
    const o = CFG.origin;
    const url = "https://router.project-osrm.org/route/v1/driving/" +
                o.lon + "," + o.lat + ";" + lon + "," + lat + "?overview=false&alternatives=true";
    const r = await fetch(url);
    const j = await r.json();
    if (!j.routes || !j.routes.length) throw new Error("маршрут не построен");
    // among alternatives choose the shortest (аналог «наименьший километраж без платных участков»)
    const km = Math.round(Math.min.apply(null, j.routes.map(x => x.distance)) / 1000);
    return { km: km, source: "OSRM/OSM" };
  }

  async function distance(name, lat, lon) {
    // 1) Яндекс (если есть ключ) — точно как в Навигаторе, без платных дорог
    try { return await routeByYandex(lat, lon); } catch (e) { /* откатываемся */ }
    // 2) OSRM — открытый роутер
    try { return await routeByOsrm(lat, lon); } catch (e) { /* откатываемся */ }
    // 3) справочник
    const t = tableFind(name);
    if (t) return { km: t.km, source: "справочник (офлайн)" };
    throw new Error("не удалось рассчитать километраж");
  }

  /* ── 5. Стоимость доставки ───────────────────────────────────────────── */
  function tariff(km, mode) {
    const t = CFG.tariffDefault;
    if (mode === "65") return { rate: 65, label: "65 ₽/км (тариф вручную)" };
    if (mode === "70") return { rate: 70, label: "70 ₽/км (тариф вручную)" };
    if (km > 1000) return { rate: t.over1000, label: t.over1000 + " ₽/км (свыше 1 000 км)" };
    return { rate: t.to1000, label: t.to1000 + " ₽/км (до 1 000 км)" };
  }
  function deliveryCost(km, mode) {
    const t = tariff(km, mode);
    return { km: km, rate: t.rate, label: t.label, fee: CFG.fixedFee || 2000,
             total: Math.round(km * t.rate + (CFG.fixedFee || 2000)) };
  }

  return { suggest: suggest, coords: coords, distance: distance, deliveryCost: deliveryCost,
           tariff: tariff, tableList: tableList, tableFind: tableFind, norm: norm };
})();
