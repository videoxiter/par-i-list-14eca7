/* Свайное поле для бани-бочки: расчёт + отрисовка SVG прямо в браузере.
   Правила (по чертежу «Пример свайного поля» и словам Марии):
     • основание короче бани на 20 см с каждой стороны;
     • сваи по краям основания, шаг не более 1 000 мм, свай = ceil(размер/1000)+1;
     • свая — труба ø76 мм;
     • дополнительные ряды под перегородками отсеков.
   Проверено на чертеже: поле 5800 × 3000 мм → 7 свай и 4 ряда. */
window.PILE = (function () {
  var PILE_D = 76;        // мм, диаметр сваи
  var STEP_MAX = 1000;    // мм, максимальный шаг
  var INSET = 200;        // мм, на сколько основание короче бани с каждой стороны

  function grid(size, stops) {
    var n = Math.max(2, Math.ceil(size / STEP_MAX) + 1);
    var xs = [];
    for (var i = 0; i < n; i++) xs.push(Math.round(size * i / (n - 1)));
    if (stops && stops.length) {
      stops.forEach(function (s) {
        if (!(s > 0 && s < size)) return;
        var nearest = 0, best = Infinity;
        xs.forEach(function (x, i) { if (Math.abs(x - s) < best) { best = Math.abs(x - s); nearest = i; } });
        if (best > 80) xs.push(Math.round(s));
      });
      xs.sort(function (a, b) { return a - b; });
    }
    return xs;
  }

  function build(o) {
    var len = o.len, wid = o.wid;
    var baseL = Math.round(len * 1000 - 2 * INSET);
    var baseW = Math.round(wid * 1000 - 2 * INSET);
    var stops = [];
    var acc = 0;
    var secs = (o.sections || []).filter(function (s) { return s > 0; });
    for (var i = 0; i < secs.length - 1; i++) { acc += secs[i] * 1000; stops.push(Math.round(acc - INSET)); }
    var xs = grid(baseL, stops), ys = grid(baseW, null);

    var kW = 820 / baseL, kH = 460 / baseW;
    var k = Math.min(kW, kH, 0.22);
    var padL = 70, padT = 64;
    var W = baseL * k + padL * 2, H = baseW * k + padT * 2 + 96;
    var x0 = padL, y0 = padT;
    var s = [];
    s.push('<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ' +
      W.toFixed(0) + ' ' + H.toFixed(0) + '" font-family="inherit" role="img" ' +
      'aria-label="Свайное поле ' + baseL + ' на ' + baseW + ' мм">');
    s.push('<rect x="0" y="0" width="' + W.toFixed(0) + '" height="' + H.toFixed(0) + '" fill="#fffdf8"/>');
    s.push('<text x="' + padL + '" y="26" font-size="19" font-weight="700" fill="#4a3222">Свайное поле — ' +
      (o.form === 'tank' ? 'Танк' : 'Квадро') + ' ' + String(len).replace('.', ',') + '×' +
      String(wid).replace('.', ',') + ' м</text>');
    s.push('<text x="' + padL + '" y="47" font-size="15" fill="#7a6a58">Основание ' + baseL + ' × ' + baseW +
      ' мм — короче бани на ' + (INSET / 10) + ' см с каждой стороны</text>');
    s.push('<rect x="' + x0 + '" y="' + y0 + '" width="' + (baseL * k).toFixed(1) + '" height="' +
      (baseW * k).toFixed(1) + '" fill="#fdf7ec" stroke="#8b6b3e" stroke-width="1.6"/>');
    stops.forEach(function (st) {
      var sx = x0 + st * k;
      s.push('<line x1="' + sx.toFixed(1) + '" y1="' + y0 + '" x2="' + sx.toFixed(1) + '" y2="' +
        (y0 + baseW * k).toFixed(1) + '" stroke="#c39b5f" stroke-width="1.2" stroke-dasharray="8 5"/>');
    });
    var r = Math.max(3.5, PILE_D * k / 2);
    ys.forEach(function (yy) {
      xs.forEach(function (xx) {
        s.push('<circle cx="' + (x0 + xx * k).toFixed(1) + '" cy="' + (y0 + yy * k).toFixed(1) +
          '" r="' + r.toFixed(1) + '" fill="#2f2a24"/>');
      });
    });
    var dy = y0 + baseW * k + 30;
    s.push('<line x1="' + x0 + '" y1="' + dy + '" x2="' + (x0 + baseL * k).toFixed(1) + '" y2="' + dy +
      '" stroke="#8a7a66" stroke-width="1"/>');
    s.push('<text x="' + (x0 + baseL * k / 2).toFixed(1) + '" y="' + (dy + 18) +
      '" font-size="14" text-anchor="middle" fill="#4a3222">' + baseL + ' мм · свай ' + xs.length +
      ' · шаг ' + Math.round(baseL / (xs.length - 1)) + ' мм</text>');
    var dx = x0 + baseL * k + 12;
    s.push('<line x1="' + dx + '" y1="' + y0 + '" x2="' + dx + '" y2="' + (y0 + baseW * k).toFixed(1) +
      '" stroke="#8a7a66" stroke-width="1"/>');
    s.push('<text x="' + (dx + 6) + '" y="' + (y0 + baseW * k / 2).toFixed(1) +
      '" font-size="14" fill="#4a3222">' + baseW + ' мм · рядов ' + ys.length +
      ' · шаг ' + Math.round(baseW / (ys.length - 1)) + ' мм</text>');
    s.push('<text x="' + padL + '" y="' + (H - 12) + '" font-size="13" fill="#8a7a66">Свая — труба ø' +
      PILE_D + ' мм. Шаг не более ' + STEP_MAX + ' мм. Схема типовая: производство подтверждает перед заказом.</text>');
    s.push('</svg>');
    return { svg: s.join(''), baseL: baseL, baseW: baseW, xs: xs.length, ys: ys.length, stops: stops };
  }

  var last = null;

  function render(host, o) {
    if (!host) return;
    var res = build(o);
    last = res;
    host.innerHTML = res.svg;
  }

  function download(name) {
    if (!last) return;
    var blob = new Blob([last.svg], { type: 'image/svg+xml;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = (name || 'svaynoe-pole') + '.svg';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }

  return { render: render, download: download, build: build, grid: grid, INSET: INSET, PILE_D: PILE_D };
})();
