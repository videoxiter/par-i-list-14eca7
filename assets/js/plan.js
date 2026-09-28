/* Планировка бани-бочки и общий лист «план + свайное поле» — для приложения к договору.
   Рисует: контур бани в масштабе, отсеки с названиями, оборудование (печь, полки, лавка, рундук,
   шкаф, стол, окна, двери, трап), размеры (длина, ширина, отсеки) и свайное поле под основанием.
   Всё — SVG, кнопка «Скачать лист» отдаёт файл, который можно приложить к договору. */
window.PLAN = (function () {
  var PILE_D = 76, STEP_MAX = 1000, INSET = 200, WALL = 45; // мм

  var ZONE_NAMES = {
    1: ['Парная'],
    2: ['Предбанник', 'Парная'],
    3: ['Предбанник', 'Помывочная', 'Парная']
  };

  function esc(s) { return String(s == null ? '' : s); }

  /* отсеки: либо заданы клиентом, либо делим поровну */
  function sectionsOf(lenM, count, given) {
    var secs = (given || []).filter(function (s) { return s > 0; });
    if (secs.length >= 1 && Math.abs(secs.reduce(function (a, b) { return a + b; }, 0) - lenM) < 0.6) return secs;
    var out = [];
    for (var i = 0; i < count; i++) out.push(Math.round(lenM / count * 100) / 100);
    return out;
  }

  function equipmentList(kit, opts) {
    var k = kit || {};
    var items = [];
    if (k['печь']) items.push('Печь ' + k['печь'].replace(/^«|»$/g, '').slice(0, 40));
    if (k['бак']) items.push('Бак ' + k['бак']);
    if (k['камни']) items.push('Камни ' + k['камни']);
    if (k['лавки']) items.push('Лавки: ' + k['лавки']);
    if (k['полки']) items.push('Полки: ' + k['полки']);
    if (k['рундуки'] && k['рундуки'] !== 'нет') items.push('Рундуки: ' + k['рундуки']);
    if (k['стол'] && k['стол'] !== 'нет') items.push('Стол: ' + k['стол']);
    if (k['трапы']) items.push('Трапы: ' + k['трапы']);
    if (k['окна']) items.push('Окна: ' + k['окна']);
    (opts || []).forEach(function (o) { items.push(o); });
    return items;
  }

  /* ── планировка ───────────────────────────────────────────────────────── */
  function planSvg(o) {
    var lenM = o.len, widM = o.wid;
    var len = Math.round(lenM * 1000), wid = Math.round(widM * 1000);
    var zones = ZONE_NAMES[o.zones] || ZONE_NAMES[2];
    var secs = sectionsOf(lenM, zones.length, o.sections);

    var k = Math.min(760 / len, 250 / wid, 0.2);
    var padL = 86, padT = 74;
    var W = len * k + padL * 2 + 150, H = wid * k + padT * 2 + 130;
    var x0 = padL, y0 = padT, s = [];

    s.push('<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ' + W.toFixed(0) + ' ' + H.toFixed(0) +
           '" font-family="inherit">');
    s.push('<rect width="' + W.toFixed(0) + '" height="' + H.toFixed(0) + '" fill="#fffdf8"/>');
    s.push('<text x="' + padL + '" y="28" font-size="20" font-weight="700" fill="#4a3222">' +
           'Баня-бочка ' + (o.form === 'tank' ? '«Танк»' : o.form === 'oval' ? '«Овал»' : '«Квадро»') + ' ' +
           String(lenM).replace('.', ',') + '×' + String(widM).replace('.', ',') + ' м' +
           (o.kitName ? ', комплектация «' + o.kitName + '»' : '') + '</text>');
    s.push('<text x="' + padL + '" y="50" font-size="15" fill="#7a6a58">Планировка (вид сверху). Габарит бани ' +
           len + ' × ' + wid + ' мм. Основание — ' + (len - 2 * INSET) + ' × ' + (wid - 2 * INSET) + ' мм.</text>');

    /* контур */
    s.push('<rect x="' + x0 + '" y="' + y0 + '" width="' + (len * k).toFixed(1) + '" height="' + (wid * k).toFixed(1) +
           '" fill="#fdf7ec" stroke="#8b6b3e" stroke-width="2"/>');
    /* отсеки */
    var acc = 0;
    for (var i = 0; i < secs.length; i++) {
      var wsec = secs[i] * 1000 * k;
      var cx = x0 + acc + wsec / 2;
      s.push('<text x="' + cx.toFixed(1) + '" y="' + (y0 + wid * k / 2 - 6).toFixed(1) +
             '" font-size="15" font-weight="700" text-anchor="middle" fill="#4a3222">' + esc(zones[i] || '') + '</text>');
      s.push('<text x="' + cx.toFixed(1) + '" y="' + (y0 + wid * k / 2 + 14).toFixed(1) +
             '" font-size="13" text-anchor="middle" fill="#8a7a66">' + secs[i].toFixed(2).replace('.', ',') + ' м</text>');
      acc += wsec;
      if (i < secs.length - 1) {
        s.push('<line x1="' + (x0 + acc).toFixed(1) + '" y1="' + y0 + '" x2="' + (x0 + acc).toFixed(1) + '" y2="' +
               (y0 + wid * k).toFixed(1) + '" stroke="#8b6b3e" stroke-width="2"/>');
      }
    }
    /* печь с топкой — в парной (последний отсек), у стены */
    var px = x0 + len * k - 34, py = y0 + 12;
    s.push('<rect x="' + px.toFixed(1) + '" y="' + py.toFixed(1) + '" width="24" height="24" fill="#c9a227" ' +
           'stroke="#8b6b3e"/>');
    s.push('<text x="' + (px - 6).toFixed(1) + '" y="' + (py + 18).toFixed(1) +
           '" font-size="12" text-anchor="end" fill="#6b5a46">Печь</text>');
    if (o.heaterOutside) {
      s.push('<circle cx="' + (x0 + len * k + 12).toFixed(1) + '" cy="' + (py + 12).toFixed(1) + '" r="7" ' +
             'fill="none" stroke="#8b6b3e" stroke-width="1.4"/>');
      s.push('<text x="' + (x0 + len * k + 24).toFixed(1) + '" y="' + (py + 16).toFixed(1) +
             '" font-size="12" fill="#6b5a46">Топка с улицы</text>');
    }
    /* полки у длинной стены парной */
    if (o.polki) {
      s.push('<rect x="' + (x0 + len * k - 60).toFixed(1) + '" y="' + (y0 + wid * k - 26).toFixed(1) +
             '" width="50" height="18" fill="#e6d3a3" stroke="#8b6b3e"/>');
      s.push('<text x="' + (x0 + len * k - 66).toFixed(1) + '" y="' + (y0 + wid * k - 12).toFixed(1) +
             '" font-size="11" text-anchor="end" fill="#6b5a46">Полки верх/низ липа</text>');
    }
    /* лавка/рундук и шкаф в предбаннике */
    if (o.runbook) {
      s.push('<rect x="' + (x0 + 14).toFixed(1) + '" y="' + (y0 + 12) + '" width="52" height="18" fill="#e6d3a3" ' +
             'stroke="#8b6b3e"/>');
      s.push('<text x="' + (x0 + 14).toFixed(1) + '" y="' + (y0 + 44) + '" font-size="11" fill="#6b5a46">Лавка-рундук</text>');
    }
    if (o.shkaf) {
      s.push('<rect x="' + (x0 + 14).toFixed(1) + '" y="' + (y0 + wid * k - 30).toFixed(1) + '" width="40" height="18" ' +
             'fill="#f0e2c4" stroke="#8b6b3e"/>');
      s.push('<text x="' + (x0 + 58).toFixed(1) + '" y="' + (y0 + wid * k - 16).toFixed(1) +
             '" font-size="11" fill="#6b5a46">Шкаф 50 см</text>');
    }
    if (o.stol) {
      s.push('<circle cx="' + (x0 + 30).toFixed(1) + '" cy="' + (y0 + wid * k / 2).toFixed(1) + '" r="12" ' +
             'fill="none" stroke="#8b6b3e" stroke-width="1.3"/>');
      s.push('<text x="' + (x0 + 46).toFixed(1) + '" y="' + (y0 + wid * k / 2 + 4).toFixed(1) +
             '" font-size="11" fill="#6b5a46">Стол 600×600</text>');
    }
    /* вход и окна */
    s.push('<line x1="' + x0 + '" y1="' + (y0 + wid * k).toFixed(1) + '" x2="' + (x0 + 26).toFixed(1) + '" y2="' +
           (y0 + wid * k).toFixed(1) + '" stroke="#fffdf8" stroke-width="6"/>');
    s.push('<text x="' + x0 + '" y="' + (y0 + wid * k + 20).toFixed(1) +
           '" font-size="12" fill="#6b5a46">Вход + ступени</text>');
    if (o.win600) {
      s.push('<rect x="' + (x0 + 20).toFixed(1) + '" y="' + (y0 - 5).toFixed(1) + '" width="34" height="10" ' +
             'fill="#bfe3f2" stroke="#6b8ea0"/>');
      s.push('<text x="' + (x0 + 60).toFixed(1) + '" y="' + (y0 + 4).toFixed(1) +
             '" font-size="11" fill="#6b8ea0">Окно 600×600</text>');
    }
    if (o.win300) {
      s.push('<rect x="' + (x0 + len * k - 70).toFixed(1) + '" y="' + (y0 - 5).toFixed(1) + '" width="26" height="10" ' +
             'fill="#bfe3f2" stroke="#6b8ea0"/>');
      s.push('<text x="' + (x0 + len * k - 40).toFixed(1) + '" y="' + (y0 + 4).toFixed(1) +
             '" font-size="11" fill="#6b8ea0">Окно 300×300</text>');
    }
    /* размеры */
    var dy = y0 + wid * k + 52;
    s.push('<line x1="' + x0 + '" y1="' + dy + '" x2="' + (x0 + len * k).toFixed(1) + '" y2="' + dy +
           '" stroke="#8a7a66"/>');
    s.push('<text x="' + (x0 + len * k / 2).toFixed(1) + '" y="' + (dy + 18) +
           '" font-size="14" text-anchor="middle" fill="#4a3222">' + len + ' мм</text>');
    var dx = x0 + len * k + 40;
    s.push('<line x1="' + dx + '" y1="' + y0 + '" x2="' + dx + '" y2="' + (y0 + wid * k).toFixed(1) + '" stroke="#8a7a66"/>');
    s.push('<text x="' + (dx + 8) + '" y="' + (y0 + wid * k / 2).toFixed(1) + '" font-size="14" fill="#4a3222">' +
           wid + ' мм</text>');
    s.push('<text x="' + padL + '" y="' + (H - 26) + '" font-size="12" fill="#8a7a66">' +
           (o.equipment || []).slice(0, 4).join(' · ') + '</text>');
    s.push('<text x="' + padL + '" y="' + (H - 8) + '" font-size="12" fill="#8a7a66">' +
           (o.equipment || []).slice(4).join(' · ') + '</text>');
    s.push('</svg>');
    return s.join('');
  }

  /* ── общий лист: план + свайное поле (для договора) ───────────────────── */
  function sheetSvg(o) {
    var plan = planSvg(o);
    var pile = o.pileSvg || '';
    var add = pile ? pile.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '') : '';
    if (!add) return plan;
    var m = plan.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
    var W = m ? parseFloat(m[1]) : 900;
    var m2 = pile.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
    var H2 = m2 ? parseFloat(m2[2]) : 300;
    var H = m ? parseFloat(m[2]) : 400;
    var out = plan.replace('</svg>', '');
    out += '<g transform="translate(0,' + (H + 24) + ')">' + add + '</g>';
    out += '</svg>';
    out = out.replace(/viewBox="0 0 [\d.]+ [\d.]+"/, 'viewBox="0 0 ' + W + ' ' + (H + 24 + H2) + '"');
    return out;
  }

  var lastPlan = '', lastSheet = '';

  function render(host, o) {
    if (!host) return;
    lastPlan = planSvg(o);
    host.innerHTML = lastPlan;
  }

  function renderSheet(sheetHost, o) {
    if (!sheetHost) return;
    lastSheet = sheetSvg(o);
    sheetHost.innerHTML = lastSheet;
  }

  function download(kind, name) {
    var svg = kind === 'sheet' ? lastSheet : lastPlan;
    if (!svg) return;
    downloadSvg(svg, name || 'shema');
  }

  function downloadSvg(svg, name) {
    if (!svg) return;
    var blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = (name || 'shema') + '.svg';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }

  return { render: render, renderSheet: renderSheet, planSvg: planSvg, sheetSvg: sheetSvg,
           download: download, downloadSvg: downloadSvg, sectionsOf: sectionsOf,
           equipmentList: equipmentList };
})();
