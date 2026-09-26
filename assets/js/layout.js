/* Общий каркас: шапка, подвал, мобильная кнопка. Вставляется на каждой странице. */
(function () {
  const NAV = [
    { href: "index.html", text: "Калькулятор" },
    { href: "catalog.html", text: "Модели и цены" },
    { href: "komplektacii.html", text: "Комплектации" },
    { href: "dostavka.html", text: "Доставка и монтаж" },
    { href: "galereya.html", text: "Галерея" },
    { href: "faq.html", text: "Вопросы" },
    { href: "contacts.html", text: "Заказ и контакты" }
  ];

  const BESOM = `<svg viewBox="0 0 44 44" aria-hidden="true"><g fill="none" stroke="#7E8F5B" stroke-width="2.2" stroke-linecap="round"><path d="M22 40V14"/></g><g fill="#96A96C"><ellipse cx="22" cy="11" rx="7" ry="10" opacity=".95"/><ellipse cx="12" cy="18" rx="5.4" ry="9" transform="rotate(-28 12 18)"/><ellipse cx="32" cy="18" rx="5.4" ry="9" transform="rotate(28 32 18)"/><ellipse cx="9" cy="28" rx="4.6" ry="8" transform="rotate(-38 9 28)"/><ellipse cx="35" cy="28" rx="4.6" ry="8" transform="rotate(38 35 28)"/></g><circle cx="22" cy="38" r="3" fill="#D98324"/></svg>`;

  function header() {
    const file = (location.pathname.split("/").pop() || "index.html");
    const links = NAV.map(n =>
      `<a href="${n.href}"${n.href === file ? ' class="active"' : ""}>${n.text}</a>`).join("");
    return `<header class="site">
      <div class="wrap nav">
        <a class="logo" href="index.html">
          <span class="logo-icon">${BESOM}</span>
          <span>Бани-бочки<br><span class="sub">производство Ижевск</span></span>
        </a>
        <button class="burger" id="burger" aria-label="Меню">☰ Меню</button>
        <nav class="nav-links" id="navLinks">${links}</nav>
      </div>
    </header>`;
  }

  function footer() {
    return `<footer class="site">
      <div class="wrap">
        <div class="cols">
          <div>
            <h4>Бани-бочки от производителя</h4>
            <p class="small">Сибирская ель категории «А» (Архангельск) и кедр. Формы «Квадро», «Танк», «Овал»,
            с террасой и на прицепе. Гарантия 12 месяцев, оплата после установки.</p>
            <p class="small">Производство: г. Ижевск, ул. Пойма, д. 32 · осмотр 8:00–18:00</p>
          </div>
          <div>
            <h4>Разделы</h4>
            <ul>${NAV.map(n => `<li><a href="${n.href}">${n.text}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Связь</h4>
            <ul>
              <li>Телефон: <a href="tel:+79674723665">8-967-472-36-65</a></li>
              <li>Доп.: <a href="tel:+79120200004">+7 (912) 020-00-04</a></li>
              <li>Каталог: <a href="https://taplink.cc/banyaforyou" target="_blank" rel="noopener">taplink.cc/banyaforyou</a></li>
            </ul>
          </div>
        </div>
        <div class="copy">
          Расчёт на сайте предварительный: итоговую стоимость подтверждает менеджер.
          Цены актуальны на 26.09.2026. Доставка считается по километражу без платных участков дороги.
        </div>
      </div>
    </footer>`;
  }

  function mount() {
    document.body.insertAdjacentHTML("afterbegin", header());
    document.body.insertAdjacentHTML("beforeend", footer());
    if (document.querySelector("#calcForm")) {
      document.body.insertAdjacentHTML("beforeend",
        `<div class="mobile-cta no-print">
           <a class="btn ghost sm" href="galereya.html">Фото бань</a>
           <a class="btn sm" href="#calcResult">К расчёту →</a>
         </div>`);
    }
    const b = document.getElementById("burger"), n = document.getElementById("navLinks");
    if (b) b.addEventListener("click", () => n.classList.toggle("open"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
