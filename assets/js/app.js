/* Поведение сайта: появление секций, галерея, лайтбокс, аккордеон, счётчики. */
window.LB = (function () {
  let box, img, vid, cap, items = [], idx = 0;
  function ensure() {
    if (box) return;
    box = document.createElement("div");
    box.className = "lb";
    box.innerHTML = `<button class="close" aria-label="Закрыть">×</button>
      <button class="nav prev" aria-label="Назад">‹</button>
      <button class="nav next" aria-label="Вперёд">›</button>
      <div class="wrap" style="display:contents"></div>
      <div class="cap"></div>`;
    document.body.appendChild(box);
    cap = box.querySelector(".cap");
    box.querySelector(".close").onclick = close;
    box.querySelector(".prev").onclick = () => step(-1);
    box.querySelector(".next").onclick = () => step(1);
    box.addEventListener("click", e => { if (e.target === box) close(); });
    document.addEventListener("keydown", e => {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }
  function show() {
    const it = items[idx];
    if (!it) return;
    const old = box.querySelector("img,video");
    if (old) old.remove();
    let el;
    if (it.type === "video" && it.src) {
      el = document.createElement("video");
      el.src = it.src; el.controls = true; el.autoplay = true; el.playsInline = true; el.poster = it.poster || "";
    } else {
      el = document.createElement("img");
      el.src = it.type === "video" ? (it.poster || "") : it.src;
      el.alt = it.cap || "";
    }
    box.insertBefore(el, cap);
    cap.textContent = (it.cap ? it.cap + " · " : "") + (idx + 1) + " / " + items.length +
      (it.type === "video" && !it.src ? " · видео покажем в переписке или по запросу" : "");
  }
  function step(d) { idx = (idx + d + items.length) % items.length; show(); }
  function open(src, alt) { ensure(); items = [{ src: src, cap: alt || "" }]; idx = 0; box.classList.add("open"); show(); }
  function openSet(list, i) { ensure(); items = list; idx = i || 0; box.classList.add("open"); show(); }
  function close() {
    box.classList.remove("open");
    const v = box.querySelector("video"); if (v) v.pause();
  }
  return { open: open, openSet: openSet, close: close };
})();

(function () {
  const D = window.BANYA_DATA || {};

  /* появление секций при скролле */
  function reveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("in")); return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(e => io.observe(e));
  }

  /* галерея по разделам */
  function gallery() {
    const host = document.getElementById("galRoot");
    if (!host) return;
    const media = D.media || {};
    const FILTERS = [
      ["all", "Все фото"],
      ["veranda", "С верандой"], ["k6", "Квадро 6 м"], ["k5", "Квадро 5 м"],
      ["k4", "Квадро 4 м"], ["k3", "Квадро 3 м"], ["tank", "Форма «Танк»"],
      ["pricep", "На прицепе"], ["palitra", "Цвета"], ["otzyvy", "Отзывы"],
      ["proizvodstvo", "Производство"], ["komplekt", "Внутри"], ["schemes", "Схемы"]
    ];
    const SCHEME_SLUGS = ["shema_k2_k3", "shema_k4", "shema_k5", "shema_k6", "shema_tank",
                          "shema_veranda", "shema_razrez"];
    const titles = {
      veranda: "Бани с верандой", k6: "Квадро 6 м", k5: "Квадро 5 м", k4: "Квадро 4 м",
      k3: "Квадро 3 м", tank: "Форма «Танк»", pricep: "Баня на прицепе", palitra: "Палитра цветов",
      otzyvy: "Отзывы клиентов", proizvodstvo: "Производство", komplekt: "Внутри бани",
      schemes: "Схемы и чертежи", dogovor: "Документы"
    };
    const groups = {};
    Object.keys(media).forEach(slug => {
      const key = SCHEME_SLUGS.indexOf(slug) >= 0 ? "schemes" : slug;
      groups[key] = groups[key] || { photos: [], videos: [] };
      groups[key].photos = groups[key].photos.concat(media[slug].photos || []);
      groups[key].videos = groups[key].videos.concat(media[slug].videos || []);
    });

    const filters = document.getElementById("galFilters");
    if (filters) {
      filters.innerHTML = FILTERS.filter(f => f[0] === "all" || groups[f[0]]).map((f, i) =>
        `<button data-f="${f[0]}"${i === 0 ? ' class="active"' : ""}>${f[1]}</button>`).join("");
      filters.addEventListener("click", e => {
        const b = e.target.closest("button[data-f]");
        if (!b) return;
        filters.querySelectorAll("button").forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        document.querySelectorAll("#galRoot .gal-block").forEach(block => {
          block.style.display = (b.dataset.f === "all" || block.dataset.f === b.dataset.f) ? "" : "none";
        });
      });
    }

    const LIMIT = 12;
    host.innerHTML = Object.keys(groups).filter(k => titles[k]).map(k => {
      const g = groups[k];
      const items = g.photos.map(p => ({ type: "photo", src: p, cap: titles[k] }))
        .concat(g.videos.map(v => ({ type: "video", poster: v.poster, src: v.src, cap: titles[k] })));
      if (!items.length) return "";
      const cards = items.slice(0, LIMIT).map((it, i) =>
        it.type === "video"
          ? `<figure data-i="${i}" data-t="video"><img src="${it.poster}" alt="Видео: ${titles[k]}" loading="lazy" decoding="async">
               <span class="play">▶</span>
               <figcaption>${it.src ? "Смотреть видео" : "Видео по запросу"}</figcaption></figure>`
          : `<figure data-i="${i}" data-t="photo"><img src="${it.src}" alt="${titles[k]}" loading="lazy" decoding="async">
               <figcaption>${titles[k]}</figcaption></figure>`).join("");
      const more = items.length > LIMIT
        ? `<div class="loadmore"><button class="btn ghost sm" data-more="${k}">Показать ещё фото (${items.length - LIMIT})</button></div>` : "";
      return `<div class="gal-block reveal" data-f="${k}" data-slug="${k}">
        <div class="sec-head"><h2>${titles[k]}</h2>
          <p class="muted small">${items.length} материалов · ${g.photos.length} фото${g.videos.length ? " · " + g.videos.length + " видео" : ""}</p></div>
        <div class="gal" data-items='${JSON.stringify(items).replace(/'/g, "&#39;")}'>${cards}</div>${more}</div>`;
    }).join("");

    host.addEventListener("click", e => {
      const fig = e.target.closest("figure[data-i]");
      if (fig) {
        const gal = fig.closest(".gal");
        const items = JSON.parse(gal.dataset.items || "[]");
        window.LB.openSet(items, parseInt(fig.dataset.i, 10));
        return;
      }
      const more = e.target.closest("button[data-more]");
      if (more) {
        const block = more.closest(".gal-block");
        const gal = block.querySelector(".gal");
        const items = JSON.parse(gal.dataset.items || "[]");
        const shown = gal.children.length;
        items.slice(shown, shown + 12).forEach((it, k) => {
          const i = shown + k;
          const fig2 = document.createElement("figure");
          fig2.dataset.i = i; fig2.dataset.t = it.type;
          fig2.innerHTML = it.type === "video"
            ? `<img src="${it.poster}" alt="Видео" loading="lazy"><span class="play">▶</span>`
            : `<img src="${it.src}" alt="Фото" loading="lazy">`;
          gal.appendChild(fig2);
        });
        if (gal.children.length >= items.length) more.style.display = "none";
      }
    });
    reveal();
  }

  /* счётчики в hero */
  function counters() {
    document.querySelectorAll("[data-count]").forEach(el => {
      const to = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      let cur = 0, steps = 26;
      const t = setInterval(() => {
        cur++;
        el.textContent = Math.round(to * (cur / steps)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + suffix;
        if (cur >= steps) { clearInterval(t); el.textContent = to.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + suffix; }
      }, 26);
    });
  }

  function init() {
    try { reveal(); } catch (e) { console.error(e); }
    try { gallery(); } catch (e) { console.error(e); }
    try { counters(); } catch (e) { console.error(e); }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
