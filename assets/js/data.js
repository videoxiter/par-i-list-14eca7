// Данные проекта. АВТОГЕНЕРАЦИЯ из kb_source.py — правки вносить там.
window.BANYA_DATA = {
 "meta": {
  "project": "ИИ-агент «Мария» — автоматизация общения с клиентами (Avito)",
  "price_actual_date": "2026-09-30",
  "producer": "Мингазов Артур Ринатович (ИП)",
  "address": "г. Ижевск, ул. Пойма, д. 32",
  "phone": "8-967-472-36-65",
  "taplink": "https://taplink.cc/banyaforyou"
 },
 "models": [
  {
   "id": "k2",
   "form": "Квадро",
   "length": 2.0,
   "width": 2.0,
   "name": "Квадро 2×2 м",
   "sections": "1 отделение (парная)",
   "max_sections": 1,
   "prices": {
    "стандарт": 145000
   },
   "popular": false,
   "note": "Самая компактная баня-бочка. Один отсек."
  },
  {
   "id": "k3",
   "form": "Квадро",
   "length": 3.0,
   "width": 2.0,
   "name": "Квадро 3×2 м",
   "sections": "2 отделения (парная + предбанник)",
   "max_sections": 2,
   "prices": {
    "стандарт": 175000,
    "люкс": 200000,
    "премиум": 210000
   },
   "popular": true,
   "note": "Ходовой размер: парная ~2 м + предбанник ~1 м."
  },
  {
   "id": "k4",
   "form": "Квадро",
   "length": 4.0,
   "width": 2.0,
   "name": "Квадро 4×2 м",
   "sections": "2 отделения",
   "max_sections": 3,
   "prices": {
    "стандарт": 210000,
    "люкс": 230000,
    "премиум": 235000
   },
   "popular": true,
   "note": "Чаще берут люкс/премиум: парная 2.5 м + предбанник 1.5 м."
  },
  {
   "id": "k5",
   "form": "Квадро",
   "length": 5.0,
   "width": 2.0,
   "name": "Квадро 5×2 м",
   "sections": "2 или 3 отделения",
   "max_sections": 3,
   "prices": {
    "стандарт": 235000,
    "люкс": 260000,
    "премиум": 270000
   },
   "popular": true,
   "note": "Популярна планировка «2 отделения по 2.5 м» и «3 отделения»."
  },
  {
   "id": "k6",
   "form": "Квадро",
   "length": 6.0,
   "width": 2.0,
   "name": "Квадро 6×2 м",
   "sections": "стандарт/люкс — 2 отделения, премиум — 3 отделения",
   "max_sections": 3,
   "prices": {
    "стандарт": 260000,
    "люкс": 280000,
    "премиум": 300000
   },
   "popular": true,
   "note": "Самая вместительная бочка. Премиум — три отделения: комната отдыха, помывочная, парная."
  }
 ],
 "tank": {
  "id": "tank",
  "form": "Танк",
  "width": 2.4,
  "name": "Баня-бочка форма «Танк»",
  "price_per_m2": {
   "люкс": 28000,
   "премиум": 29000
  },
  "max_size": "6×6 м (шаг 0,5 м)",
  "cedar_markup": 0.3,
  "sections": "люкс — 2 отделения, премиум — 3 отделения",
  "examples": [
   {
    "size": "4×2.3",
    "люкс": 257600,
    "премиум": 266800
   },
   {
    "size": "4×2.4",
    "люкс": 268800,
    "премиум": 278400
   },
   {
    "size": "4×2.5",
    "люкс": 280000,
    "премиум": 290000
   },
   {
    "size": "4×4",
    "люкс": 448000,
    "premium_note": "",
    "премиум": 464000
   },
   {
    "size": "4×5",
    "люкс": 560000,
    "премиум": 580000
   }
  ],
  "note": "Цена = площадь (длина × 2,4 м) × 28 000 ₽ (люкс) или 29 000 ₽ (премиум). Сборка крупных моделей (шире 2,4 м) — только на участке."
 },
 "veranda": {
  "name": "Терраса (веранда) к бане",
  "price_per_m2": 13500,
  "price_per_m2_roof_to_wall": 13000,
  "tariffs": [
   {
    "key": "terrace",
    "price_per_m2": 13500,
    "name": "Терраса с двускатной крышей",
    "note": "крыша бани продолжается над террасой — «баня под крышей»"
   },
   {
    "key": "wall",
    "price_per_m2": 13000,
    "name": "Терраса с односкатной крышей",
    "note": "навес с одной стороны"
   },
   {
    "key": "open",
    "price_per_m2": 9000,
    "name": "Подиум с ограждением",
    "note": "настил-подиум с ограждением, без крыши"
   },
   {
    "key": "podium",
    "price_per_m2": 7000,
    "name": "Подиум без ограждения",
    "note": "только настил-подиум, без крыши и без ограждения"
   }
  ],
  "note": "Терраса с двускатной крышей (баня под крышей) — 13 500 ₽/м²; с односкатной крышей (навес с одной стороны) — 13 000 ₽/м²; подиум с ограждением — 9 000 ₽/м²; подиум без ограждения — 7 000 ₽/м². Любой размер.",
  "build_on_site": 25000,
  "build_on_site_note": "сборка бани с верандой на участке — 25 000 ₽ (Квадро) / 35 000 ₽ (Танк, Овал)",
  "build_days": 2
 },
 "trailer": {
  "name": "Баня на прицепе",
  "price": 120000,
  "size": "3,5 × 1,5 м",
  "description": "Усиленный двухосный прицеп с опорами и буксировочным колесом (производитель «БАРС»).",
  "site": "https://bars-pricep.tw1.ru/",
  "bank_size": "Баня 3 или 4 м любой комплектации, планировка на выбор",
  "extra": "Три стропы по 2 000 ₽ каждая (6 000 ₽), если баня идёт с прицепом.",
  "weight": {
   "3 м": "800–900 кг",
   "4 м": "1 100–1 200 кг"
  },
  "trailer_params": {
   "Длина": "3 500 мм",
   "Ширина": "1 500 мм",
   "Осей": "две",
   "Рама": "профильная труба 80×40×2 мм с продольным усилением",
   "Подвеска": "рессорная, рессоры типа AL-KO",
   "Дышло": "усиленное трёхлучевое V-образное",
   "Пол": "влагостойкая фанера"
  },
  "legal": [
   "Прицеп — транспортное средство, ставится на учёт в ГИБДД в течение 10 дней.",
   "При постановке на учёт баню снимают манипулятором и ставят обратно.",
   "Категории «B» достаточно, если разрешённая максимальная масса прицепа ≤ 750 кг, либо (масса прицепа > 750 кг, но меньше снаряжённой массы авто) и суммарная масса авто+прицеп ≤ 3 500 кг.",
   "Полная масса двухосного прицепа с платформой 3,5×1,5 м практически всегда ограничена 750 кг — категория «B» без «BE».",
   "Покупка прицепа — 100% предоплата (отдельный договор). Нужны фото паспорта: 2-я стр. (разворот и прописка).",
   "Запись «баня на прицепе» в ПТС стандартно не предусмотрена: требуется техэкспертиза (аккредитованная лаборатория, например НАМИ), заявление в МРЭО ГИБДД (можно через Госуслуги) о внесении изменений в конструкцию, госпошлины 525 ₽ (ПТС) / 1 200 ₽ (новый ПТС) / 1 500 ₽ (СТС). В «Особые отметки» вносят запись о переоборудовании под передвижную баню."
  ]
 },
 "cedar_markup": 0.3,
 "kits": {
  "стандарт": {
   "ключевое": "Базовый вариант: крепкая бочка, чугунная печь, всё для парения — без излишеств.",
   "печь": "«Рада Мини» ПБ10 / ПБТО-10 (чугун СЧ-10, ~10 кВт, парилка 6–14 м³, сталь 4 мм)",
   "бак": "40 л (акция: 60 л)",
   "камни": "20 кг",
   "дверь_парной": "деревянная",
   "трапы": "нет (акция: трап в парной)",
   "рундуки": "нет",
   "окна": "окно 300×300 в парной для проветривания (окно 600×600 в предбаннике — по акции)",
   "стол": "нет (акция: стол 600×600)"
  },
  "люкс": {
   "ключевое": "Оптимум цена/комфорт: стеклянная дверь в парную, трап, рундук, стол и окно в комнате отдыха.",
   "печь": "«Рада 4/14м» (сталь 09Г2С до 4–6 мм, парилка до 15 м³) со стеклянной дверцей",
   "бак": "60 л",
   "камни": "40 кг",
   "дверь_парной": "стеклянная матовая 6 мм",
   "трапы": "трап на полу в парной",
   "рундуки": "1 рундук в предбаннике (ящик в лавке)",
   "стол": "стол 600×600 в предбаннике",
   "окна": "окно 300×300 в парной + окно 600×600 в предбаннике"
  },
  "премиум": {
   "ключевое": "Максимум: мощная печь 6/14, трапы во всех отделениях, два рундука, стеклянная дверь 8 мм.",
   "печь": "«Рада 6/14м» (сталь 09Г2С 6 мм, парилка 12–20 м³, камни до 45 кг, полено до 45 см, дымоход 115 мм)",
   "бак": "60 л",
   "камни": "40 кг",
   "дверь_парной": "стеклянная матовая 8 мм",
   "трапы": "трапы во всех отделениях (при 3 отделениях — в том числе в моечной)",
   "рундуки": "2 рундука в предбаннике",
   "стол": "стол 600×600 в предбаннике",
   "окна": "окно 300×300 в парной + окно 600×600 в предбаннике"
  }
 },
 "options": [
  {
   "nome": "Топка с улицы",
   "price": 5000,
   "group": "печь"
  },
  {
   "nome": "Печь «Рада ПБ 4/14» (4 мм)",
   "price": 10000,
   "group": "печь"
  },
  {
   "nome": "Печь «Рада ПБ 6/14» (6 мм)",
   "price": 15000,
   "group": "печь"
  },
  {
   "nome": "Печь «ПБ-21» (толщина металла 8 мм)",
   "price": 18000,
   "group": "печь"
  },
  {
   "nome": "Печь с закрытой каменкой (объём камней 70 кг)",
   "price": 15000,
   "group": "печь"
  },
  {
   "nome": "Печная труба с каолиновой ватой",
   "price": 5000,
   "group": "печь",
   "hint": "в комплектации — минвата"
  },
  {
   "nome": "Деревянное ограждение печи",
   "price": 2500,
   "group": "печь",
   "hint": "особенно нужно, если есть дети"
  },
  {
   "nome": "Воздушный фильтр",
   "price": 1000,
   "group": "печь"
  },
  {
   "nome": "Дизайн возле топки",
   "price": 1000,
   "group": "печь",
   "hint": "в каталоге (3) не указан — уточнить у заказчика"
  },
  {
   "nome": "Увеличение диаметра (ширины) бани на 10 см",
   "price": 10000,
   "group": "геометрия",
   "hint": "только форма «Квадро», максимум до 3,5 м; считается в калькуляторе",
   "calcOnly": true
  },
  {
   "nome": "Увеличение высоты бани на 10 см",
   "price": 10000,
   "group": "геометрия",
   "hint": "для «Квадро» и «Танка»; стандарт — 2,05 м наружная (1,95 м внутренняя); считается в калькуляторе",
   "calcOnly": true
  },
  {
   "nome": "Дополнительное отделение (от 5 м)",
   "price": 15000,
   "group": "геометрия"
  },
  {
   "nome": "Добавить 0,5 м в длину",
   "price": 13000,
   "group": "геометрия",
   "hint": "только один раз; дальше — следующий размер по прайсу"
  },
  {
   "nome": "Стеклянная дверь в парную",
   "price": 10000,
   "group": "двери"
  },
  {
   "nome": "Деревянная дверь в парную",
   "price": 5000,
   "group": "двери"
  },
  {
   "nome": "Дверь ПВХ",
   "price": 20000,
   "group": "двери"
  },
  {
   "nome": "Дверь ПВХ с ламинацией",
   "price": 25000,
   "group": "двери",
   "hint": "под заказ"
  },
  {
   "nome": "Дверь стекло входная",
   "price": 25000,
   "group": "двери"
  },
  {
   "nome": "Замок на входную дверь",
   "price": 1500,
   "group": "двери"
  },
  {
   "nome": "Боковой вход",
   "price": 12000,
   "group": "двери",
   "hint": "часто идёт в подарок — уточнять при заказе"
  },
  {
   "nome": "Крыльцо",
   "price": 15000,
   "group": "снаружи",
   "hint": "только для бани до 5×2 включительно"
  },
  {
   "nome": "Крыльцо с перегородкой (с торца бани)",
   "price": 25000,
   "group": "снаружи"
  },
  {
   "nome": "Дровеница",
   "price": 6000,
   "group": "снаружи"
  },
  {
   "nome": "Козырёк 50 см (с торца бани)",
   "price": 7000,
   "group": "вход"
  },
  {
   "nome": "Козырёк над боковым входом",
   "price": 5000,
   "group": "вход"
  },
  {
   "nome": "Козырёк над топкой с улицы",
   "price": 5000,
   "group": "вход"
  },
  {
   "nome": "Уличный фонарь над дверью",
   "price": 3000,
   "group": "вход"
  },
  {
   "nome": "Терраса (веранда)",
   "price": null,
   "group": "снаружи",
   "price_note": "двускатная крыша — 13 500 ₽/м², односкатная — 13 000 ₽/м², с ограждением без крыши — 9 000 ₽/м², подиум — 7 000 ₽/м²"
  },
  {
   "nome": "Трап",
   "price": 2500,
   "group": "внутри",
   "hint": "если не входит в комплектацию"
  },
  {
   "nome": "Вывод крана",
   "price": 2000,
   "group": "внутри"
  },
  {
   "nome": "Пологи из термолипы в парной",
   "price": 7000,
   "group": "внутри"
  },
  {
   "nome": "Полка в предбаннике",
   "price": 3000,
   "group": "внутри"
  },
  {
   "nome": "Шкаф 50 см с дверцей",
   "price": 10000,
   "group": "внутри"
  },
  {
   "nome": "Стол на петлях (складывается)",
   "price": 3000,
   "group": "внутри"
  },
  {
   "nome": "Стол в предбаннике 600×600",
   "price": 5000,
   "group": "внутри"
  },
  {
   "nome": "Стол-бабочка",
   "price": 2000,
   "group": "внутри"
  },
  {
   "nome": "Окно в предбаннике 600×600",
   "price": 5000,
   "group": "окна",
   "hint": "дополнительно или если нет в комплектации"
  },
  {
   "nome": "Окно в парной 300×300",
   "price": 3000,
   "group": "окна",
   "hint": "если нет в комплектации"
  },
  {
   "nome": "Окно панорама 900×1200",
   "price": 15000,
   "group": "окна",
   "hint": "с ламинацией — 20 000 ₽"
  },
  {
   "nome": "Окно панорама ПВХ 1500×1500",
   "price": 40000,
   "group": "окна",
   "hint": "под заказ, ожидание около 3 недель"
  },
  {
   "nome": "Поставить окно заказчика",
   "price": 2000,
   "group": "окна"
  },
  {
   "nome": "Розетка",
   "price": 1000,
   "group": "электрика"
  },
  {
   "nome": "Автомат под электрику",
   "price": 3000,
   "group": "электрика"
  },
  {
   "nome": "Усиленная электрика, кабель 2×1,5",
   "price": 5000,
   "group": "электрика",
   "hint": "в комплектации кабель 0,75 — только освещение"
  },
  {
   "nome": "Ретропроводка",
   "price": 7000,
   "group": "электрика"
  },
  {
   "nome": "Баня из кедра (+30% к цене бани из ели)",
   "price": null,
   "group": "материал",
   "price_note": "+30% к прайсу"
  },
  {
   "nome": "Пол из кедра в бане из ели",
   "price": 13000,
   "group": "материал"
  },
  {
   "nome": "Стропы для бани на прицепе (1 шт.)",
   "price": 2000,
   "group": "прицеп"
  },
  {
   "nome": "Откидная лестница для бани на прицепе",
   "price": 5000,
   "group": "прицеп"
  },
  {
   "nome": "Комплект бани 3×2 для самостоятельной сборки",
   "price": 155000,
   "group": "комплект"
  }
 ],
 "gifts": [
  "Боковой вход — вместо 12 000 ₽",
  "Топка с улицы (если нужна) — вместо 5 000 ₽",
  "В стандартной комплектации бак на 60 л (вместо 40 л)",
  "В стандартной комплектации трап в парной (вместо 2 500 ₽)",
  "В стандартной комплектации стол и окно 600×600 (было 2 лавки)",
  "В комплектации премиум — ограждение печи",
  "Банка дорогого воска для сауны (за отзыв)"
 ],
 "colors": {
  "стены": [
   {
    "name": "Имбирь",
    "note": "тёплый медово-рыжий"
   },
   {
    "name": "Лакрица",
    "note": "тёмно-коричневый"
   },
   {
    "name": "Тик",
    "note": "коричнево-золотистый"
   },
   {
    "name": "Топлёное молоко",
    "note": "светлый бежевый"
   },
   {
    "name": "Фьорд (Северное море)",
    "note": "серо-голубой"
   }
  ],
  "кровля": [
   "Красный",
   "Коричневый",
   "Серый",
   "Зелёный"
  ]
 },
 "delivery": {
  "tariffs": [
   {
    "км_от": 0,
    "км_до": 1000,
    "руб_за_км": 65,
    "label": "65 ₽/км — до 1 000 км"
   },
   {
    "км_от": 1000,
    "км_до": null,
    "руб_за_км": 70,
    "label": "70 ₽/км — свыше 1 000 км"
   }
  ],
  "fixed_fee": 2000,
  "origin": {
   "name": "г. Ижевск, ул. Пойма, д. 32",
   "lat": 56.8527,
   "lon": 53.2042
  }
 },
 "site_services": [
  {
   "name": "Сборка бани формы «Квадро» на участке",
   "price": 10000,
   "days": "1 день"
  },
  {
   "name": "Сборка бани «Квадро» с верандой на участке",
   "price": 25000,
   "days": "2 дня"
  },
  {
   "name": "Сборка бани формы «Танк»/«Овал» на участке",
   "price": 25000,
   "days": "2 дня"
  },
  {
   "name": "Сборка бани «Танк»/«Овал» с верандой на участке",
   "price": 35000,
   "days": "2 дня"
  }
 ],
 "objections": [
  {
   "id": "uteplenie",
   "trigger": [
    "можно ли утеплить баню",
    "утепление бочки",
    "хочу утеплить",
    "минвата"
   ],
   "question": "Можно ли утеплить баню-бочку?",
   "short": "Утеплять баню-бочку нельзя — это ломает принцип её работы и приводит к гниению."
  },
  {
   "id": "tros",
   "trigger": [
    "почему трос а не лента",
    "лента или трос",
    "обручи",
    "стяжка бани"
   ],
   "question": "Почему у вас трос, а не широкая лента?",
   "short": "Трос с талрепами тянется равномерно и подтягивается руками, лента — жёсткая и рвётся."
  },
  {
   "id": "zima",
   "trigger": [
    "зимой",
    "можно ли париться зимой",
    "замерзнет",
    "топить зимой"
   ],
   "question": "А зимой в бане-бочке тепло?",
   "short": "Да, зимой в бочке жарко: прогревается быстро, углов нет, ветер обтекает форму."
  },
  {
   "id": "smola",
   "trigger": [
    "сосна",
    "смола",
    "будет ли смола течь",
    "живица",
    "у вас дорого"
   ],
   "question": "Почему не сосна? Она же дешевле.",
   "short": "Сосна смолит, сучки выпадают, синева и щели. Наша ель «А» из Архангельска — ровная и без смолы."
  },
  {
   "id": "panorama",
   "trigger": [
    "панорамное окно",
    "большое окно в парной",
    "хочу окно в парной"
   ],
   "question": "Хочу панорамное окно в парной. Можно?",
   "short": "Панорамное окно в парной — риск: термический шок стекла, теплопотери, конденсат. Есть окно 300×300."
  },
  {
   "id": "germetik",
   "trigger": [
    "подтекает",
    "герметик",
    "щели",
    "дует из щелей",
    "заделать швы"
   ],
   "question": "Баня подтекает по швам. Заделать герметиком?",
   "short": "Герметик нельзя: шов растрескается. Небольшая протечка в первые дни — норма, лечится набуханием дерева и подтяжкой обручей."
  },
  {
   "id": "vikking",
   "trigger": [
    "викинг",
    "кровля гниет",
    "мягкая черепица гниет"
   ],
   "question": "Почему баня «Викинг» с мягкой кровлей часто гниёт?",
   "short": "В 95% случаев причина — плохая вентиляция подкровельного пространства и отсутствие паро- и гидробарьера."
  },
  {
   "id": "provodka",
   "trigger": [
    "проводка",
    "гофра",
    "спрятать провода",
    "электрика в бане"
   ],
   "question": "Можно закрыть проводку пластиковой гофрой?",
   "short": "Нельзя — ПУЭ 7.1.40 запрещает полимерные оболочки в парной. Нужен жаростойкий кабель открыто или в штробе."
  },
  {
   "id": "dver_perekos",
   "trigger": [
    "покосило дверь",
    "дверь не закрывается",
    "щель в двери",
    "дверь трет"
   ],
   "question": "Через месяц покосило дверь — это брак?",
   "short": "Нет. Дерево усыхает неравномерно, бочка меняет геометрию. Технологические зазоры 3–5 мм на это и рассчитаны."
  },
  {
   "id": "korotkaya_dver",
   "trigger": [
    "короткая дверь",
    "щель под дверью",
    "зазор снизу двери"
   ],
   "question": "Почему дверь в парную короткая и снизу зазор?",
   "short": "Зазор 3–5 см снизу — вентиляция, сток воды, защита стекла и аварийный выход. Сверху и с боков щелей быть не должно."
  },
  {
   "id": "srok_sluzhby",
   "trigger": [
    "сколько служит",
    "срок службы",
    "как долго прослужит"
   ],
   "question": "Сколько служит баня-бочка?",
   "short": "Качественная ель при правильной эксплуатации — 25–30 лет и более, кедр — 25–35 лет."
  },
  {
   "id": "kak_zakazat",
   "trigger": [
    "как заказать",
    "что нужно для заказа",
    "как купить"
   ],
   "question": "Как заказать баню?",
   "short": "8 шагов: размер → комплектация → планировка → допы → цвета → ФИО → адрес → телефон. Дальше договор на проверку."
  },
  {
   "id": "oplata",
   "trigger": [
    "предоплата",
    "рассрочка",
    "как оплатить",
    "оплата после установки"
   ],
   "question": "Какая предоплата и есть ли рассрочка?",
   "short": "Предоплата 2 000 ₽, остальное — после установки и подписания акта. Рассрочки нет. Скрытых доплат нет."
  },
  {
   "id": "dostavka_skolko",
   "trigger": [
    "сколько стоит доставка",
    "доставка в мой город",
    "расчет доставки"
   ],
   "question": "Сколько будет стоить доставка?",
   "short": "Километраж до вас × 65 ₽ (до 1 000 км) или 70 ₽ (свыше 1 000 км) + 2 000 ₽. Км считаем по Яндекс Навигатору без платных участков."
  },
  {
   "id": "kak_schitaetsya_dostavka_vnutri",
   "trigger": [
    "как вы считаете доставку",
    "формула доставки"
   ],
   "question": "Как считается стоимость доставки (внутренняя инструкция менеджера)?",
   "short": "км × тариф (65 ₽/км до 1 000 км, 70 ₽/км свыше) + 2 000 ₽. Маршрут — по бесплатным участкам, наименьший километраж."
  },
  {
   "id": "svaynoe_pole",
   "trigger": [
    "свайное поле",
    "сваи",
    "размер основания",
    "под сваи",
    "будем ставить на сваи",
    "свайный фундамент"
   ],
   "question": "Клиент просит свайное поле или размер основания — что отвечать?",
   "short": "Основание короче бани на 20 см с каждой стороны; сваи ø76 мм, шаг не более 1 000 мм; схему присылаем файлом."
  }
 ],
 "media": {
  "veranda": {
   "photos": [
    "assets/img/veranda/01.jpg",
    "assets/img/veranda/02.jpg",
    "assets/img/veranda/03.jpg",
    "assets/img/veranda/04.jpg",
    "assets/img/veranda/05.jpg",
    "assets/img/veranda/06.jpg",
    "assets/img/veranda/07.jpg",
    "assets/img/veranda/08.jpg",
    "assets/img/veranda/09.jpg",
    "assets/img/veranda/10.jpg",
    "assets/img/veranda/11.jpg",
    "assets/img/veranda/12.jpg",
    "assets/img/veranda/13.jpg",
    "assets/img/veranda/14.jpg",
    "assets/img/veranda/15.jpg",
    "assets/img/veranda/16.jpg",
    "assets/img/veranda/17.jpg",
    "assets/img/veranda/18.jpg",
    "assets/img/veranda/19.jpg",
    "assets/img/veranda/20.jpg",
    "assets/img/veranda/21.jpg",
    "assets/img/veranda/22.jpg",
    "assets/img/veranda/23.jpg",
    "assets/img/veranda/24.jpg",
    "assets/img/veranda/25.jpg",
    "assets/img/veranda/26.jpg",
    "assets/img/veranda/27.jpg",
    "assets/img/veranda/28.jpg",
    "assets/img/veranda/29.jpg",
    "assets/img/veranda/30.jpg"
   ],
   "videos": [
    {
     "poster": "assets/img/video/veranda_01.jpg",
     "src": null,
     "date": "2026-01-16",
     "dur": 76,
     "ctx": "",
     "topic": "Банька с верандой!",
     "orig": "chats/chat_562953218342145/topic_227/video_files/video_1@16-01-2026_22-51-15.mp4",
     "size_mb": 17.5
    },
    {
     "poster": "assets/img/video/veranda_02.jpg",
     "src": null,
     "date": "2026-02-24",
     "dur": 103,
     "ctx": "",
     "topic": "Банька с верандой!",
     "orig": "chats/chat_562953218342145/topic_227/video_files/video_2@24-02-2026_08-30-13.mp4",
     "size_mb": 34.1
    }
   ]
  },
  "k6": {
   "photos": [
    "assets/img/k6/01.jpg",
    "assets/img/k6/02.jpg",
    "assets/img/k6/03.jpg",
    "assets/img/k6/04.jpg",
    "assets/img/k6/05.jpg",
    "assets/img/k6/06.jpg",
    "assets/img/k6/07.jpg",
    "assets/img/k6/08.jpg",
    "assets/img/k6/09.jpg",
    "assets/img/k6/10.jpg",
    "assets/img/k6/11.jpg",
    "assets/img/k6/12.jpg",
    "assets/img/k6/13.jpg",
    "assets/img/k6/14.jpg",
    "assets/img/k6/15.jpg",
    "assets/img/k6/16.jpg",
    "assets/img/k6/17.jpg",
    "assets/img/k6/18.jpg",
    "assets/img/k6/19.jpg",
    "assets/img/k6/20.jpg",
    "assets/img/k6/21.jpg",
    "assets/img/k6/22.jpg",
    "assets/img/k6/23.jpg",
    "assets/img/k6/24.jpg",
    "assets/img/k6/25.jpg",
    "assets/img/k6/26.jpg",
    "assets/img/k6/27.jpg",
    "assets/img/k6/28.jpg",
    "assets/img/k6/29.jpg",
    "assets/img/k6/30.jpg"
   ],
   "videos": [
    {
     "poster": "assets/img/video/k6_01.jpg",
     "src": null,
     "date": "2025-12-02",
     "dur": 135,
     "ctx": "6м два отделения по 3м",
     "topic": "Баня Квадро 6 на 2.1",
     "orig": "chats/chat_562953218342145/topic_5/video_files/video_1@02-12-2025_16-27-04.mp4",
     "size_mb": 55.0
    },
    {
     "poster": "assets/img/video/k6_02.jpg",
     "src": null,
     "date": "2025-12-06",
     "dur": 84,
     "ctx": "",
     "topic": "Баня Квадро 6 на 2.1",
     "orig": "chats/chat_562953218342145/topic_5/video_files/video_2@06-12-2025_10-43-48.mp4",
     "size_mb": 22.5
    },
    {
     "poster": "assets/img/video/k6_03.jpg",
     "src": null,
     "date": "2025-12-06",
     "dur": 22,
     "ctx": "",
     "topic": "Баня Квадро 6 на 2.1",
     "orig": "chats/chat_562953218342145/topic_5/video_files/video_3@06-12-2025_10-44-20.mp4",
     "size_mb": 5.3
    },
    {
     "poster": "assets/img/video/k6_04.jpg",
     "src": "assets/video/k6_04.mp4",
     "date": "2025-12-06",
     "dur": 9,
     "ctx": "",
     "topic": "Баня Квадро 6 на 2.1",
     "orig": "chats/chat_562953218342145/topic_5/video_files/video_4@06-12-2025_10-44-32.mp4",
     "size_mb": 2.5
    },
    {
     "poster": "assets/img/video/k6_05.jpg",
     "src": null,
     "date": "2025-12-06",
     "dur": 34,
     "ctx": "",
     "topic": "Баня Квадро 6 на 2.1",
     "orig": "chats/chat_562953218342145/topic_5/video_files/video_5@06-12-2025_10-44-39.mp4",
     "size_mb": 12.0
    },
    {
     "poster": "assets/img/video/k6_06.jpg",
     "src": null,
     "date": "2025-12-15",
     "dur": 107,
     "ctx": "",
     "topic": "Баня Квадро 6 на 2.1",
     "orig": "chats/chat_562953218342145/topic_5/video_files/video_6@15-12-2025_21-52-08.mp4",
     "size_mb": 36.4
    },
    {
     "poster": "assets/img/video/k6_07.jpg",
     "src": null,
     "date": "2026-01-16",
     "dur": 90,
     "ctx": "",
     "topic": "Баня Квадро 6 на 2.1",
     "orig": "chats/chat_562953218342145/topic_5/video_files/video_7@16-01-2026_23-10-41.mp4",
     "size_mb": 14.0
    }
   ]
  },
  "k5": {
   "photos": [
    "assets/img/k5/01.jpg",
    "assets/img/k5/02.jpg",
    "assets/img/k5/03.jpg",
    "assets/img/k5/04.jpg",
    "assets/img/k5/05.jpg",
    "assets/img/k5/06.jpg",
    "assets/img/k5/07.jpg",
    "assets/img/k5/08.jpg",
    "assets/img/k5/09.jpg",
    "assets/img/k5/10.jpg",
    "assets/img/k5/11.jpg",
    "assets/img/k5/12.jpg",
    "assets/img/k5/13.jpg",
    "assets/img/k5/14.jpg",
    "assets/img/k5/15.jpg",
    "assets/img/k5/16.jpg"
   ],
   "videos": [
    {
     "poster": "assets/img/video/k5_01.jpg",
     "src": null,
     "date": "2026-01-17",
     "dur": 34,
     "ctx": "",
     "topic": "Баня Квадро 5 на 2.1",
     "orig": "chats/chat_562953218342145/topic_4/video_files/video_1@17-01-2026_15-03-45.mp4",
     "size_mb": 7.2
    },
    {
     "poster": "assets/img/video/k5_02.jpg",
     "src": "assets/video/k5_02.mp4",
     "date": "2026-01-17",
     "dur": 21,
     "ctx": "",
     "topic": "Баня Квадро 5 на 2.1",
     "orig": "chats/chat_562953218342145/topic_4/video_files/video_2@17-01-2026_15-04-22.mp4",
     "size_mb": 4.5
    },
    {
     "poster": "assets/img/video/k5_03.jpg",
     "src": null,
     "date": "2026-01-29",
     "dur": 64,
     "ctx": "",
     "topic": "Баня Квадро 5 на 2.1",
     "orig": "chats/chat_562953218342145/topic_4/video_files/video_3@29-01-2026_11-41-59.mp4",
     "size_mb": 35.5
    },
    {
     "poster": "assets/img/video/k5_04.jpg",
     "src": null,
     "date": "2026-01-30",
     "dur": 117,
     "ctx": "",
     "topic": "Баня Квадро 5 на 2.1",
     "orig": "chats/chat_562953218342145/topic_4/video_files/video_4@30-01-2026_21-17-01.mp4",
     "size_mb": 20.0
    }
   ]
  },
  "k4": {
   "photos": [
    "assets/img/k4/01.jpg",
    "assets/img/k4/02.jpg",
    "assets/img/k4/03.jpg",
    "assets/img/k4/04.jpg",
    "assets/img/k4/05.jpg",
    "assets/img/k4/06.jpg",
    "assets/img/k4/07.jpg",
    "assets/img/k4/08.jpg",
    "assets/img/k4/09.jpg",
    "assets/img/k4/10.jpg",
    "assets/img/k4/11.jpg",
    "assets/img/k4/12.jpg",
    "assets/img/k4/13.jpg",
    "assets/img/k4/14.jpg",
    "assets/img/k4/15.jpg",
    "assets/img/k4/16.jpg",
    "assets/img/k4/17.jpg",
    "assets/img/k4/18.jpg",
    "assets/img/k4/19.jpg",
    "assets/img/k4/20.jpg",
    "assets/img/k4/21.jpg",
    "assets/img/k4/22.jpg",
    "assets/img/k4/23.jpg",
    "assets/img/k4/24.jpg",
    "assets/img/k4/25.jpg",
    "assets/img/k4/26.jpg",
    "assets/img/k4/27.jpg",
    "assets/img/k4/28.jpg",
    "assets/img/k4/29.jpg",
    "assets/img/k4/30.jpg"
   ],
   "videos": [
    {
     "poster": "assets/img/video/k4_01.jpg",
     "src": "assets/video/k4_01.mp4",
     "date": "2025-11-09",
     "dur": 23,
     "ctx": "4м люкс парная 2.5 предбанник 1.5 м",
     "topic": "Баня Квадро 4 на 2.1",
     "orig": "chats/chat_562953218342145/topic_3/video_files/video_1@09-11-2025_14-57-12.mp4",
     "size_mb": 3.8
    },
    {
     "poster": "assets/img/video/k4_02.jpg",
     "src": "assets/video/k4_02.mp4",
     "date": "2026-01-16",
     "dur": 18,
     "ctx": "",
     "topic": "Баня Квадро 4 на 2.1",
     "orig": "chats/chat_562953218342145/topic_3/video_files/video_2@16-01-2026_23-00-30.mp4",
     "size_mb": 3.6
    },
    {
     "poster": "assets/img/video/k4_03.jpg",
     "src": "assets/video/k4_03.mp4",
     "date": "2026-01-16",
     "dur": 19,
     "ctx": "",
     "topic": "Баня Квадро 4 на 2.1",
     "orig": "chats/chat_562953218342145/topic_3/video_files/video_3@16-01-2026_23-01-23.mp4",
     "size_mb": 3.9
    },
    {
     "poster": "assets/img/video/k4_04.jpg",
     "src": null,
     "date": "2026-02-15",
     "dur": 26,
     "ctx": "",
     "topic": "Баня Квадро 4 на 2.1",
     "orig": "chats/chat_562953218342145/topic_3/video_files/IMG_2072.MOV",
     "size_mb": 5.6
    },
    {
     "poster": "assets/img/video/k4_05.jpg",
     "src": null,
     "date": "2026-02-22",
     "dur": 102,
     "ctx": "",
     "topic": "Баня Квадро 4 на 2.1",
     "orig": "chats/chat_562953218342145/topic_3/video_files/video_4@22-02-2026_11-31-16.mp4",
     "size_mb": 44.8
    },
    {
     "poster": "assets/img/video/k4_06.jpg",
     "src": null,
     "date": "2026-03-08",
     "dur": 27,
     "ctx": "",
     "topic": "Баня Квадро 4 на 2.1",
     "orig": "chats/chat_562953218342145/topic_3/video_files/IMG_0900.MOV",
     "size_mb": 5.9
    }
   ]
  },
  "k3": {
   "photos": [
    "assets/img/k3/01.jpg",
    "assets/img/k3/02.jpg",
    "assets/img/k3/03.jpg",
    "assets/img/k3/04.jpg",
    "assets/img/k3/05.jpg",
    "assets/img/k3/06.jpg",
    "assets/img/k3/07.jpg",
    "assets/img/k3/08.jpg",
    "assets/img/k3/09.jpg",
    "assets/img/k3/10.jpg",
    "assets/img/k3/11.jpg",
    "assets/img/k3/12.jpg",
    "assets/img/k3/13.jpg",
    "assets/img/k3/14.jpg",
    "assets/img/k3/15.jpg",
    "assets/img/k3/16.jpg",
    "assets/img/k3/17.jpg",
    "assets/img/k3/18.jpg",
    "assets/img/k3/19.jpg",
    "assets/img/k3/20.jpg",
    "assets/img/k3/21.jpg",
    "assets/img/k3/22.jpg"
   ],
   "videos": [
    {
     "poster": "assets/img/video/k3_01.jpg",
     "src": "assets/video/k3_01.mp4",
     "date": "2025-11-07",
     "dur": 18,
     "ctx": "",
     "topic": "Баня Квадро 3 на 2.1",
     "orig": "chats/chat_562953218342145/topic_2/video_files/video_1@07-11-2025_23-57-04.mp4",
     "size_mb": 2.4
    },
    {
     "poster": "assets/img/video/k3_02.jpg",
     "src": "assets/video/k3_02.mp4",
     "date": "2026-01-16",
     "dur": 15,
     "ctx": "",
     "topic": "Баня Квадро 3 на 2.1",
     "orig": "chats/chat_562953218342145/topic_2/video_files/video_2@16-01-2026_22-52-09.mp4",
     "size_mb": 3.8
    }
   ]
  },
  "k2": {
   "photos": [],
   "videos": []
  },
  "tank": {
   "photos": [
    "assets/img/tank/01.jpg",
    "assets/img/tank/02.jpg",
    "assets/img/tank/03.jpg",
    "assets/img/tank/04.jpg",
    "assets/img/tank/05.jpg",
    "assets/img/tank/06.jpg",
    "assets/img/tank/07.jpg",
    "assets/img/tank/08.jpg",
    "assets/img/tank/09.jpg",
    "assets/img/tank/10.jpg",
    "assets/img/tank/11.jpg",
    "assets/img/tank/12.jpg",
    "assets/img/tank/13.jpg",
    "assets/img/tank/14.jpg",
    "assets/img/tank/15.jpg",
    "assets/img/tank/16.jpg",
    "assets/img/tank/17.jpg",
    "assets/img/tank/18.jpg",
    "assets/img/tank/19.jpg",
    "assets/img/tank/20.jpg",
    "assets/img/tank/21.jpg",
    "assets/img/tank/22.jpg",
    "assets/img/tank/23.jpg",
    "assets/img/tank/24.jpg",
    "assets/img/tank/25.jpg",
    "assets/img/tank/26.jpg",
    "assets/img/tank/27.jpg",
    "assets/img/tank/28.jpg",
    "assets/img/tank/29.jpg",
    "assets/img/tank/30.jpg"
   ],
   "videos": [
    {
     "poster": "assets/img/video/tank_01.jpg",
     "src": null,
     "date": "2026-01-16",
     "dur": 36,
     "ctx": "",
     "topic": "Баня ТАНКОВАЛ - Две комплектации люкс и премиум",
     "orig": "chats/chat_562953218342145/topic_6/video_files/video_1@16-01-2026_23-14-49.mp4",
     "size_mb": 7.6
    },
    {
     "poster": "assets/img/video/tank_02.jpg",
     "src": null,
     "date": "2026-01-16",
     "dur": 53,
     "ctx": "",
     "topic": "Баня ТАНКОВАЛ - Две комплектации люкс и премиум",
     "orig": "chats/chat_562953218342145/topic_6/video_files/video_2@16-01-2026_23-15-57.mp4",
     "size_mb": 10.1
    },
    {
     "poster": "assets/img/video/tank_03.jpg",
     "src": null,
     "date": "2026-01-16",
     "dur": 50,
     "ctx": "",
     "topic": "Баня ТАНКОВАЛ - Две комплектации люкс и премиум",
     "orig": "chats/chat_562953218342145/topic_6/video_files/video_3@16-01-2026_23-15-57.mp4",
     "size_mb": 11.1
    },
    {
     "poster": "assets/img/video/tank_04.jpg",
     "src": null,
     "date": "2026-04-04",
     "dur": 64,
     "ctx": "",
     "topic": "Баня ТАНКОВАЛ - Две комплектации люкс и премиум",
     "orig": "chats/chat_562953218342145/topic_6/video_files/video_4@04-04-2026_18-20-28.mp4",
     "size_mb": 16.2
    },
    {
     "poster": "assets/img/video/tank_05.jpg",
     "src": null,
     "date": "2026-04-04",
     "dur": 66,
     "ctx": "",
     "topic": "Баня ТАНКОВАЛ - Две комплектации люкс и премиум",
     "orig": "chats/chat_562953218342145/topic_6/video_files/video_5@04-04-2026_18-20-31.mp4",
     "size_mb": 16.0
    }
   ]
  },
  "pricep": {
   "photos": [
    "assets/img/pricep/01.jpg",
    "assets/img/pricep/02.jpg",
    "assets/img/pricep/03.jpg",
    "assets/img/pricep/04.jpg",
    "assets/img/pricep/05.jpg",
    "assets/img/pricep/06.jpg",
    "assets/img/pricep/07.jpg",
    "assets/img/pricep/08.jpg",
    "assets/img/pricep/09.jpg",
    "assets/img/pricep/10.jpg",
    "assets/img/pricep/11.jpg",
    "assets/img/pricep/12.jpg",
    "assets/img/pricep/13.jpg",
    "assets/img/pricep/14.jpg",
    "assets/img/pricep/15.jpg",
    "assets/img/pricep/16.jpg",
    "assets/img/pricep/17.jpg",
    "assets/img/pricep/18.jpg",
    "assets/img/pricep/19.jpg",
    "assets/img/pricep/20.jpg",
    "assets/img/pricep/21.jpg",
    "assets/img/pricep/22.jpg",
    "assets/img/pricep/23.jpg",
    "assets/img/pricep/24.jpg"
   ],
   "videos": [
    {
     "poster": "assets/img/video/pricep_01.jpg",
     "src": null,
     "date": "2026-02-15",
     "dur": 34,
     "ctx": "",
     "topic": "Баня на прицепе",
     "orig": "chats/chat_562953218342145/topic_219/video_files/video_1@15-02-2026_19-51-23.mp4",
     "size_mb": 11.1
    },
    {
     "poster": "assets/img/video/pricep_02.jpg",
     "src": null,
     "date": "2026-02-15",
     "dur": 37,
     "ctx": "",
     "topic": "Баня на прицепе",
     "orig": "chats/chat_562953218342145/topic_219/video_files/video_2@15-02-2026_19-51-23.mp4",
     "size_mb": 11.8
    },
    {
     "poster": "assets/img/video/pricep_03.jpg",
     "src": null,
     "date": "2026-09-24",
     "dur": 59,
     "ctx": "",
     "topic": "Баня на прицепе",
     "orig": "chats/chat_562953218342145/topic_219/video_files/video_3@24-09-2026_23-12-03.mp4",
     "size_mb": 19.1
    }
   ]
  },
  "palitra": {
   "photos": [
    "assets/img/palitra/01.jpg",
    "assets/img/palitra/02.jpg",
    "assets/img/palitra/03.jpg",
    "assets/img/palitra/04.jpg",
    "assets/img/palitra/05.jpg",
    "assets/img/palitra/06.jpg",
    "assets/img/palitra/07.jpg",
    "assets/img/palitra/08.jpg",
    "assets/img/palitra/09.jpg",
    "assets/img/palitra/10.jpg",
    "assets/img/palitra/11.jpg",
    "assets/img/palitra/12.jpg",
    "assets/img/palitra/13.jpg",
    "assets/img/palitra/14.jpg",
    "assets/img/palitra/15.jpg",
    "assets/img/palitra/16.jpg",
    "assets/img/palitra/17.jpg",
    "assets/img/palitra/18.jpg",
    "assets/img/palitra/19.jpg",
    "assets/img/palitra/20.jpg",
    "assets/img/palitra/21.jpg",
    "assets/img/palitra/22.jpg",
    "assets/img/palitra/23.jpg",
    "assets/img/palitra/24.jpg"
   ],
   "videos": []
  },
  "komplekt": {
   "photos": [
    "assets/img/komplekt/01.jpg",
    "assets/img/komplekt/02.jpg",
    "assets/img/komplekt/03.jpg",
    "assets/img/komplekt/04.jpg",
    "assets/img/komplekt/05.jpg",
    "assets/img/komplekt/06.jpg",
    "assets/img/komplekt/07.jpg",
    "assets/img/komplekt/08.jpg",
    "assets/img/komplekt/09.jpg",
    "assets/img/komplekt/10.jpg",
    "assets/img/komplekt/11.jpg",
    "assets/img/komplekt/12.jpg",
    "assets/img/komplekt/13.jpg"
   ],
   "videos": [
    {
     "poster": "assets/img/video/komplekt_01.jpg",
     "src": "assets/video/komplekt_01.mp4",
     "date": "2026-02-25",
     "dur": 16,
     "ctx": "",
     "topic": "Информация о комплектации и в чем отличие - Самая важная информация",
     "orig": "chats/chat_562953218342145/topic_85/video_files/video_1@25-02-2026_21-51-07.mp4",
     "size_mb": 3.5
    }
   ]
  },
  "otzyvy": {
   "photos": [
    "assets/img/otzyvy/01.jpg",
    "assets/img/otzyvy/02.jpg",
    "assets/img/otzyvy/03.jpg",
    "assets/img/otzyvy/04.jpg",
    "assets/img/otzyvy/05.jpg",
    "assets/img/otzyvy/06.jpg",
    "assets/img/otzyvy/07.jpg",
    "assets/img/otzyvy/08.jpg",
    "assets/img/otzyvy/09.jpg",
    "assets/img/otzyvy/10.jpg",
    "assets/img/otzyvy/11.jpg",
    "assets/img/otzyvy/12.jpg",
    "assets/img/otzyvy/13.jpg",
    "assets/img/otzyvy/14.jpg",
    "assets/img/otzyvy/15.jpg",
    "assets/img/otzyvy/16.jpg",
    "assets/img/otzyvy/17.jpg"
   ],
   "videos": [
    {
     "poster": "assets/img/video/otzyvy_01.jpg",
     "src": "assets/video/otzyvy_01.mp4",
     "date": "2026-03-08",
     "dur": 8,
     "ctx": "",
     "topic": "Наши отзывы!",
     "orig": "chats/chat_562953218342145/topic_5083/video_files/IMG_0899.MP4",
     "size_mb": 1.9
    },
    {
     "poster": "assets/img/video/otzyvy_02.jpg",
     "src": "assets/video/otzyvy_02.mp4",
     "date": "2026-07-01",
     "dur": 38,
     "ctx": "",
     "topic": "Наши отзывы!",
     "orig": "chats/chat_562953218342145/topic_5083/video_files/video_1@01-07-2026_20-05-14.mp4",
     "size_mb": 3.2
    }
   ]
  },
  "proizvodstvo": {
   "photos": [
    "assets/img/proizvodstvo/01.jpg",
    "assets/img/proizvodstvo/02.jpg",
    "assets/img/proizvodstvo/03.jpg",
    "assets/img/proizvodstvo/04.jpg",
    "assets/img/proizvodstvo/05.jpg",
    "assets/img/proizvodstvo/06.jpg",
    "assets/img/proizvodstvo/07.jpg",
    "assets/img/proizvodstvo/08.jpg",
    "assets/img/proizvodstvo/09.jpg",
    "assets/img/proizvodstvo/10.jpg"
   ],
   "videos": [
    {
     "poster": "assets/img/video/proizvodstvo_01.jpg",
     "src": "assets/video/proizvodstvo_01.mp4",
     "date": "2025-11-07",
     "dur": 27,
     "ctx": "",
     "topic": "Производство бань Ижевск",
     "orig": "chats/chat_562953218342145/topic_160/video_files/video_1@07-11-2025_23-38-51.mp4",
     "size_mb": 3.8
    },
    {
     "poster": "assets/img/video/proizvodstvo_02.jpg",
     "src": "assets/video/proizvodstvo_02.mp4",
     "date": "2025-11-07",
     "dur": 12,
     "ctx": "",
     "topic": "Производство бань Ижевск",
     "orig": "chats/chat_562953218342145/topic_160/video_files/video_2@07-11-2025_23-38-51.mp4",
     "size_mb": 1.7
    },
    {
     "poster": "assets/img/video/proizvodstvo_03.jpg",
     "src": "assets/video/proizvodstvo_03.mp4",
     "date": "2025-11-09",
     "dur": 9,
     "ctx": "",
     "topic": "Производство бань Ижевск",
     "orig": "chats/chat_562953218342145/topic_160/video_files/video_3@09-11-2025_22-03-59.mp4",
     "size_mb": 2.0
    },
    {
     "poster": "assets/img/video/proizvodstvo_04.jpg",
     "src": null,
     "date": "2025-11-09",
     "dur": 31,
     "ctx": "",
     "topic": "Производство бань Ижевск",
     "orig": "chats/chat_562953218342145/topic_160/video_files/video_4@09-11-2025_22-03-59.mp4",
     "size_mb": 5.7
    },
    {
     "poster": "assets/img/video/proizvodstvo_05.jpg",
     "src": null,
     "date": "2026-02-03",
     "dur": 1839,
     "ctx": "",
     "topic": "Производство бань Ижевск",
     "orig": "chats/chat_562953218342145/topic_160/video_files/copy_6313E104-CADB-410B-A6EE-18B28D388570_compressed.mp4",
     "size_mb": 159.5
    },
    {
     "poster": "assets/img/video/proizvodstvo_06.jpg",
     "src": null,
     "date": "2026-02-18",
     "dur": 16,
     "ctx": "",
     "topic": "Производство бань Ижевск",
     "orig": "chats/chat_562953218342145/topic_160/video_files/Установка в Оренбурге.mp4",
     "size_mb": 6.9
    }
   ]
  },
  "shema_k2_k3": {
   "photos": [
    "assets/img/shema_k2_k3/01.jpg",
    "assets/img/shema_k2_k3/02.jpg",
    "assets/img/shema_k2_k3/03.jpg",
    "assets/img/shema_k2_k3/04.jpg",
    "assets/img/shema_k2_k3/05.jpg",
    "assets/img/shema_k2_k3/06.jpg",
    "assets/img/shema_k2_k3/07.jpg",
    "assets/img/shema_k2_k3/08.jpg",
    "assets/img/shema_k2_k3/09.jpg",
    "assets/img/shema_k2_k3/10.jpg",
    "assets/img/shema_k2_k3/11.jpg",
    "assets/img/shema_k2_k3/12.jpg",
    "assets/img/shema_k2_k3/13.jpg"
   ],
   "videos": []
  },
  "shema_k4": {
   "photos": [
    "assets/img/shema_k4/01.jpg",
    "assets/img/shema_k4/02.jpg",
    "assets/img/shema_k4/03.jpg",
    "assets/img/shema_k4/04.jpg",
    "assets/img/shema_k4/05.jpg",
    "assets/img/shema_k4/06.jpg",
    "assets/img/shema_k4/07.jpg",
    "assets/img/shema_k4/08.jpg",
    "assets/img/shema_k4/09.jpg",
    "assets/img/shema_k4/10.jpg",
    "assets/img/shema_k4/11.jpg",
    "assets/img/shema_k4/12.jpg",
    "assets/img/shema_k4/13.jpg"
   ],
   "videos": []
  },
  "shema_k5": {
   "photos": [
    "assets/img/shema_k5/01.jpg",
    "assets/img/shema_k5/02.jpg",
    "assets/img/shema_k5/03.jpg",
    "assets/img/shema_k5/04.jpg",
    "assets/img/shema_k5/05.jpg",
    "assets/img/shema_k5/06.jpg",
    "assets/img/shema_k5/07.jpg",
    "assets/img/shema_k5/08.jpg",
    "assets/img/shema_k5/09.jpg",
    "assets/img/shema_k5/10.jpg",
    "assets/img/shema_k5/11.jpg"
   ],
   "videos": []
  },
  "shema_k6": {
   "photos": [
    "assets/img/shema_k6/01.jpg",
    "assets/img/shema_k6/02.jpg",
    "assets/img/shema_k6/03.jpg",
    "assets/img/shema_k6/04.jpg",
    "assets/img/shema_k6/05.jpg",
    "assets/img/shema_k6/06.jpg",
    "assets/img/shema_k6/07.jpg",
    "assets/img/shema_k6/08.jpg",
    "assets/img/shema_k6/09.jpg",
    "assets/img/shema_k6/10.jpg",
    "assets/img/shema_k6/11.jpg",
    "assets/img/shema_k6/12.jpg",
    "assets/img/shema_k6/13.jpg",
    "assets/img/shema_k6/14.jpg",
    "assets/img/shema_k6/15.jpg",
    "assets/img/shema_k6/16.jpg",
    "assets/img/shema_k6/17.jpg",
    "assets/img/shema_k6/18.jpg",
    "assets/img/shema_k6/19.jpg",
    "assets/img/shema_k6/20.jpg"
   ],
   "videos": []
  },
  "shema_tank": {
   "photos": [
    "assets/img/shema_tank/01.jpg",
    "assets/img/shema_tank/02.jpg",
    "assets/img/shema_tank/03.jpg",
    "assets/img/shema_tank/04.jpg",
    "assets/img/shema_tank/05.jpg",
    "assets/img/shema_tank/06.jpg",
    "assets/img/shema_tank/07.jpg",
    "assets/img/shema_tank/08.jpg",
    "assets/img/shema_tank/09.jpg"
   ],
   "videos": []
  },
  "shema_veranda": {
   "photos": [
    "assets/img/shema_veranda/01.jpg",
    "assets/img/shema_veranda/02.jpg",
    "assets/img/shema_veranda/03.jpg",
    "assets/img/shema_veranda/04.jpg"
   ],
   "videos": []
  },
  "shema_razrez": {
   "photos": [
    "assets/img/shema_razrez/01.jpg",
    "assets/img/shema_razrez/02.jpg",
    "assets/img/shema_razrez/03.jpg",
    "assets/img/shema_razrez/04.jpg",
    "assets/img/shema_razrez/05.jpg",
    "assets/img/shema_razrez/06.jpg",
    "assets/img/shema_razrez/07.jpg",
    "assets/img/shema_razrez/08.jpg",
    "assets/img/shema_razrez/09.jpg",
    "assets/img/shema_razrez/10.jpg",
    "assets/img/shema_razrez/11.jpg",
    "assets/img/shema_razrez/12.jpg",
    "assets/img/shema_razrez/13.jpg",
    "assets/img/shema_razrez/14.jpg",
    "assets/img/shema_razrez/15.jpg",
    "assets/img/shema_razrez/16.jpg",
    "assets/img/shema_razrez/17.jpg",
    "assets/img/shema_razrez/18.jpg",
    "assets/img/shema_razrez/19.jpg",
    "assets/img/shema_razrez/20.jpg"
   ],
   "videos": []
  },
  "dogovor": {
   "photos": [
    "assets/img/dogovor/01.jpg",
    "assets/img/dogovor/02.jpg",
    "assets/img/dogovor/03.jpg",
    "assets/img/dogovor/04.jpg",
    "assets/img/dogovor/05.jpg"
   ],
   "videos": []
  },
  "vozrazheniya": {
   "photos": [
    "assets/img/vozrazheniya/01.jpg"
   ],
   "videos": [
    {
     "poster": "assets/img/video/vozrazheniya_01.jpg",
     "src": null,
     "date": "2026-03-01",
     "dur": 54,
     "ctx": "Регулировка стеклянной двери",
     "topic": "Работа с возражениями",
     "orig": "chats/chat_562953218342145/topic_573/video_files/video_1@01-03-2026_13-02-17.mp4",
     "size_mb": 19.2
    }
   ]
  }
 },
 "distances": {
  "Ижевск": {
   "км": 1.7,
   "lat": 56.8529729,
   "lon": 53.2103071,
   "region": "Удмуртия",
   "display": "городской округ Ижевск, Удмуртия, Приволжский федеральный округ, Россия"
  },
  "Сарапул": {
   "км": 65.6,
   "lat": 56.4774374,
   "lon": 53.8194777,
   "region": "Удмуртия",
   "display": "городской округ Сарапул, Удмуртия, Приволжский федеральный округ, Россия"
  },
  "Воткинск": {
   "км": 56.3,
   "lat": 57.052505,
   "lon": 53.990612,
   "region": "Удмуртия",
   "display": "городской округ Воткинск, Удмуртия, Приволжский федеральный округ, Россия"
  },
  "Глазов": {
   "км": 172.3,
   "lat": 58.1405719,
   "lon": 52.672695,
   "region": "городской округ Глазов",
   "display": "Глазов, городской округ Глазов, Удмуртия, Приволжский федеральный округ, Россия"
  },
  "Можга": {
   "км": 94.0,
   "lat": 56.4426833,
   "lon": 52.2138722,
   "region": "Удмуртия",
   "display": "Можга, Удмуртия, Приволжский федеральный округ, Россия"
  },
  "Воткинск Удмуртия": {
   "км": 56.3,
   "lat": 57.052505,
   "lon": 53.990612,
   "region": "Удмуртия",
   "display": "городской округ Воткинск, Удмуртия, Приволжский федеральный округ, Россия"
  },
  "Казань": {
   "км": 361.8,
   "lat": 55.7946485,
   "lon": 49.1115022,
   "region": "городской округ Казань",
   "display": "Казань, городской округ Казань, Татарстан, Приволжский федеральный округ, Россия"
  },
  "Набережные Челны": {
   "км": 183.4,
   "lat": 55.7419774,
   "lon": 52.399207,
   "region": "городской округ Набережные Челны",
   "display": "Набережные Челны, городской округ Набережные Челны, Татарстан, Приволжский федеральный округ, Россия"
  },
  "Альметьевск": {
   "км": 273.3,
   "lat": 54.9005008,
   "lon": 52.2963777,
   "region": "Альметьевский район",
   "display": "Альметьевск, Альметьевский район, Татарстан, Приволжский федеральный округ, Россия"
  },
  "Нижнекамск": {
   "км": 208.6,
   "lat": 55.6412879,
   "lon": 51.8160376,
   "region": "городское поселение Нижнекамск",
   "display": "Нижнекамск, городское поселение Нижнекамск, Нижнекамский район, Татарстан, Приволжский федеральный округ, 423570, Россия"
  },
  "Чистополь": {
   "км": 303.1,
   "lat": 55.3714831,
   "lon": 50.6367311,
   "region": "городское поселение Чистополь",
   "display": "Чистополь, городское поселение Чистополь, Чистопольский район, Татарстан, Приволжский федеральный округ, 422980, Россия"
  },
  "Елабуга": {
   "км": 161.1,
   "lat": 55.7577131,
   "lon": 52.0539938,
   "region": "городское поселение Елабуга",
   "display": "Елабуга, городское поселение Елабуга, Елабужский район, Татарстан, Приволжский федеральный округ, 423600, Россия"
  },
  "Самара": {
   "км": 557.4,
   "lat": 53.1956255,
   "lon": 50.1014927,
   "region": "городской округ Самара",
   "display": "Самара, городской округ Самара, Самарская область, Приволжский федеральный округ, 443028, Россия"
  },
  "Тольятти": {
   "км": 589.2,
   "lat": 53.5098845,
   "lon": 49.4189187,
   "region": "Самарская область",
   "display": "городской округ Тольятти, Самарская область, Приволжский федеральный округ, Россия"
  },
  "Сызрань": {
   "км": 671.9,
   "lat": 53.15538,
   "lon": 48.474121,
   "region": "городской округ Сызрань",
   "display": "Сызрань, городской округ Сызрань, Самарская область, Приволжский федеральный округ, Россия"
  },
  "Новокуйбышевск": {
   "км": 577.3,
   "lat": 53.099243,
   "lon": 49.948364,
   "region": "городской округ Новокуйбышевск",
   "display": "Новокуйбышевск, городской округ Новокуйбышевск, Самарская область, Приволжский федеральный округ, Россия"
  },
  "Ульяновск": {
   "км": 553.3,
   "lat": 54.3150278,
   "lon": 48.403373,
   "region": "городской округ Ульяновск",
   "display": "Ульяновск, городской округ Ульяновск, Ульяновская область, Приволжский федеральный округ, Россия"
  },
  "Димитровград": {
   "км": 508.9,
   "lat": 54.2177925,
   "lon": 49.6254435,
   "region": "городской округ Димитровград",
   "display": "Димитровград, городской округ Димитровград, Ульяновская область, Приволжский федеральный округ, 433435, Россия"
  },
  "Нижний Новгород": {
   "км": 762.6,
   "lat": 56.3264816,
   "lon": 44.0051395,
   "region": "городской округ Нижний Новгород",
   "display": "Нижний Новгород, городской округ Нижний Новгород, Нижегородская область, Приволжский федеральный округ, Россия"
  },
  "Дзержинск": {
   "км": 803.9,
   "lat": 56.2382157,
   "lon": 43.4617405,
   "region": "городской округ Дзержинск",
   "display": "Дзержинск, городской округ Дзержинск, Нижегородская область, Приволжский федеральный округ, Россия"
  },
  "Арзамас": {
   "км": 737.6,
   "lat": 55.3857356,
   "lon": 43.8165228,
   "region": "городской округ Арзамас",
   "display": "Арзамас, городской округ Арзамас, Нижегородская область, Приволжский федеральный округ, Россия"
  },
  "Чебоксары": {
   "км": 526.3,
   "lat": 56.1399598,
   "lon": 47.2480999,
   "region": "городской округ Чебоксары",
   "display": "Чебоксары, городской округ Чебоксары, Чувашия, Приволжский федеральный округ, Россия"
  },
  "Новочебоксарск": {
   "км": 520.8,
   "lat": 56.122651,
   "lon": 47.4920123,
   "region": "городской округ Новочебоксарск",
   "display": "Новочебоксарск, городской округ Новочебоксарск, Чувашия, Приволжский федеральный округ, Россия"
  },
  "Йошкар-Ола": {
   "км": 514.7,
   "lat": 56.6315556,
   "lon": 47.8868803,
   "region": "городской округ Йошкар-Ола",
   "display": "Йошкар-Ола, городской округ Йошкар-Ола, Марий Эл, Приволжский федеральный округ, Россия"
  },
  "Волжск": {
   "км": 428.5,
   "lat": 55.8636579,
   "lon": 48.3618598,
   "region": "Марий Эл",
   "display": "Волжск, Марий Эл, Приволжский федеральный округ, 425000, Россия"
  },
  "Саратов": {
   "км": 969.8,
   "lat": 51.530018,
   "lon": 46.034683,
   "region": "городской округ Саратов",
   "display": "Саратов, городской округ Саратов, Саратовская область, Приволжский федеральный округ, 410000, Россия"
  },
  "Энгельс": {
   "км": 960.4,
   "lat": 51.5013775,
   "lon": 46.1233093,
   "region": "городское поселение Энгельс",
   "display": "Энгельс, городское поселение Энгельс, Энгельсский район, Саратовская область, Приволжский федеральный округ, 413100, Россия"
  },
  "Балаково": {
   "км": 818.3,
   "lat": 52.01812,
   "lon": 47.819141,
   "region": "городское поселение Балаково",
   "display": "Балаково, городское поселение Балаково, Балаковский район, Саратовская область, Приволжский федеральный округ, Россия"
  },
  "Пенза": {
   "км": 921.8,
   "lat": 53.1937836,
   "lon": 45.0067413,
   "region": "Пензенская область",
   "display": "Пенза, Пензенская область, Приволжский федеральный округ, Россия"
  },
  "Кузнецк": {
   "км": 805.9,
   "lat": 53.112514,
   "lon": 46.600727,
   "region": "Пензенская область",
   "display": "городской округ Кузнецк, Пензенская область, Приволжский федеральный округ, Россия"
  },
  "Тамбов": {
   "км": 1150.9,
   "lat": 52.7216164,
   "lon": 41.4523988,
   "region": "Тамбовская область",
   "display": "городской округ Тамбов, Тамбовская область, Центральный федеральный округ, Россия"
  },
  "Мичуринск": {
   "км": 1222.5,
   "lat": 52.8946613,
   "lon": 40.5071721,
   "region": "городской округ Мичуринск",
   "display": "Мичуринск, городской округ Мичуринск, Тамбовская область, Центральный федеральный округ, Россия"
  },
  "Волгоград": {
   "км": 1354.5,
   "lat": 48.7081906,
   "lon": 44.5153353,
   "region": "городской округ Волгоград",
   "display": "Волгоград, городской округ Волгоград, Волгоградская область, Южный федеральный округ, Россия"
  },
  "Волжский": {
   "км": 1348.3,
   "lat": 48.829992,
   "lon": 44.7654586,
   "region": "Волгоградская область",
   "display": "Волжский, Волгоградская область, Южный федеральный округ, Россия"
  },
  "Астрахань": {
   "км": 1783.9,
   "lat": 46.3498308,
   "lon": 48.0326203,
   "region": "городской округ Астрахань",
   "display": "Астрахань, городской округ Астрахань, Астраханская область, Южный федеральный округ, 414000, Россия"
  },
  "Оренбург": {
   "км": 716.9,
   "lat": 51.7671248,
   "lon": 55.0978517,
   "region": "городской округ Оренбург",
   "display": "Оренбург, городской округ Оренбург, Оренбургская область, Приволжский федеральный округ, 460000, Россия"
  },
  "Орск": {
   "км": 927.4,
   "lat": 51.2305015,
   "lon": 58.4738015,
   "region": "городской округ Орск",
   "display": "Орск, городской округ Орск, Оренбургская область, Приволжский федеральный округ, Россия"
  },
  "Бузулук": {
   "км": 547.0,
   "lat": 52.7586837,
   "lon": 52.2883167,
   "region": "Оренбургская область",
   "display": "Бузулук, Оренбургская область, Приволжский федеральный округ, Россия"
  },
  "Стерлитамак": {
   "км": 476.9,
   "lat": 53.6194416,
   "lon": 55.9616172,
   "region": "городской округ Стерлитамак",
   "display": "Стерлитамак, городской округ Стерлитамак, Башкортостан, Приволжский федеральный округ, Россия"
  },
  "Салават": {
   "км": 510.9,
   "lat": 53.361687,
   "lon": 55.924641,
   "region": "городской округ Салават",
   "display": "Салават, городской округ Салават, Башкортостан, Приволжский федеральный округ, Россия"
  },
  "Уфа": {
   "км": 344.4,
   "lat": 54.7261409,
   "lon": 55.947499,
   "region": "городской округ Уфа",
   "display": "Уфа, городской округ Уфа, Башкортостан, Приволжский федеральный округ, 450000, Россия"
  },
  "Нефтекамск": {
   "км": 130.7,
   "lat": 56.0884031,
   "lon": 54.2478094,
   "region": "городской округ Нефтекамск",
   "display": "Нефтекамск, городской округ Нефтекамск, Башкортостан, Приволжский федеральный округ, 452680, Россия"
  },
  "Октябрьский": {
   "км": 353.2,
   "lat": 54.4809722,
   "lon": 53.4660062,
   "region": "городской округ Октябрьский",
   "display": "Октябрьский, городской округ Октябрьский, Башкортостан, Приволжский федеральный округ, 452600, Россия"
  },
  "Туймазы": {
   "км": 361.1,
   "lat": 54.6019135,
   "lon": 53.6952117,
   "region": "городское поселение Туймазы",
   "display": "Туймазы, городское поселение Туймазы, Туймазинский район, Башкортостан, Приволжский федеральный округ, 452750, Россия"
  },
  "Ишимбай": {
   "км": 511.8,
   "lat": 53.4546454,
   "lon": 56.0439119,
   "region": "городское поселение Ишимбай",
   "display": "Ишимбай, городское поселение Ишимбай, Ишимбайский район, Башкортостан, Приволжский федеральный округ, Россия"
  },
  "Пермь": {
   "км": 280.3,
   "lat": 58.0108531,
   "lon": 56.2318528,
   "region": "Пермский городской округ",
   "display": "Пермь, Пермский городской округ, Пермский край, Приволжский федеральный округ, Россия"
  },
  "Березники": {
   "км": 457.0,
   "lat": 59.4084171,
   "lon": 56.8036958,
   "region": "муниципальный округ Березники",
   "display": "Березники, муниципальный округ Березники, Пермский край, Приволжский федеральный округ, 618400, Россия"
  },
  "Соликамск": {
   "км": 484.3,
   "lat": 59.6493177,
   "lon": 56.7706247,
   "region": "Соликамский муниципальный округ",
   "display": "Соликамск, Соликамский муниципальный округ, Пермский край, Приволжский федеральный округ, Россия"
  },
  "Чайковский": {
   "км": 90.7,
   "lat": 56.7787468,
   "lon": 54.1500704,
   "region": "Чайковский городской округ",
   "display": "Чайковский, Чайковский городской округ, Пермский край, Приволжский федеральный округ, 617763, Россия"
  },
  "Кунгур": {
   "км": 364.7,
   "lat": 57.4288238,
   "lon": 56.9444202,
   "region": "Кунгурский муниципальный округ",
   "display": "Кунгур, Кунгурский муниципальный округ, Пермский край, Приволжский федеральный округ, Россия"
  },
  "Киров": {
   "км": 412.3,
   "lat": 58.6035661,
   "lon": 49.6666241,
   "region": "городской округ Киров",
   "display": "Киров, городской округ Киров, Кировская область, Приволжский федеральный округ, 610000, Россия"
  },
  "Кирово-Чепецк": {
   "км": 366.4,
   "lat": 58.5555391,
   "lon": 50.0399737,
   "region": "городской округ Кирово-Чепецк",
   "display": "Кирово-Чепецк, городской округ Кирово-Чепецк, Кировская область, Приволжский федеральный округ, Россия"
  },
  "Вятские Поляны": {
   "км": 206.8,
   "lat": 56.2229946,
   "lon": 51.0749038,
   "region": "Кировская область",
   "display": "городской округ Вятские Поляны, Кировская область, Приволжский федеральный округ, Россия"
  },
  "Сыктывкар": {
   "км": 823.6,
   "lat": 61.6685237,
   "lon": 50.8352024,
   "region": "городской округ Сыктывкар",
   "display": "Сыктывкар, городской округ Сыктывкар, Республика Коми, Северо-Западный федеральный округ, 167000, Россия"
  },
  "Ухта": {
   "км": 1140.3,
   "lat": 63.5623797,
   "lon": 53.6842376,
   "region": "муниципальный округ Ухта",
   "display": "Ухта, муниципальный округ Ухта, Республика Коми, Северо-Западный федеральный округ, Россия"
  },
  "Москва": {
   "км": 1175.8,
   "lat": 55.625578,
   "lon": 37.6063916,
   "region": "Центральный федеральный округ",
   "display": "Москва, Центральный федеральный округ, Россия"
  },
  "Химки": {
   "км": 1170.4,
   "lat": 55.8917293,
   "lon": 37.4396994,
   "region": "городской округ Химки",
   "display": "Химки, городской округ Химки, Московская область, Центральный федеральный округ, Россия"
  },
  "Подольск": {
   "км": 1192.2,
   "lat": 55.4308841,
   "lon": 37.5453056,
   "region": "городской округ Подольск",
   "display": "Подольск, городской округ Подольск, Московская область, Центральный федеральный округ, 142100, Россия"
  },
  "Люберцы": {
   "км": 1144.1,
   "lat": 55.6783142,
   "lon": 37.89377,
   "region": "городской округ Люберцы",
   "display": "Люберцы, городской округ Люберцы, Московская область, Центральный федеральный округ, Россия"
  },
  "Мытищи": {
   "км": 1154.5,
   "lat": 55.9094928,
   "lon": 37.7339358,
   "region": "городской округ Мытищи",
   "display": "Мытищи, городской округ Мытищи, Московская область, Центральный федеральный округ, Россия"
  },
  "Балашиха": {
   "км": 1130.3,
   "lat": 55.7997662,
   "lon": 37.9373707,
   "region": "городской округ Балашиха",
   "display": "Балашиха, городской округ Балашиха, Московская область, Центральный федеральный округ, Россия"
  },
  "Одинцово": {
   "км": 1191.4,
   "lat": 55.678223,
   "lon": 37.2668096,
   "region": "Одинцовский городской округ",
   "display": "Одинцово, Одинцовский городской округ, Московская область, Центральный федеральный округ, 143000, Россия"
  },
  "Красногорск": {
   "км": 1181.7,
   "lat": 55.8204707,
   "lon": 37.3196942,
   "region": "городской округ Красногорск",
   "display": "Красногорск, городской округ Красногорск, Московская область, Центральный федеральный округ, 143405, Россия"
  },
  "Домодедово": {
   "км": 1192.7,
   "lat": 55.4087122,
   "lon": 37.9094307,
   "region": "46К-5450",
   "display": "Аэропорт Домодедово, 46К-5450, Сельвачёво, Раменский муниципальный округ, Московская область, Центральный федеральный округ, 142015, Россия"
  },
  "Королёв": {
   "км": 1169.3,
   "lat": 55.9190049,
   "lon": 37.8150443,
   "region": "городской округ Королёв",
   "display": "Королёв, городской округ Королёв, Московская область, Центральный федеральный округ, Россия"
  },
  "Тула": {
   "км": 1335.7,
   "lat": 54.1930321,
   "lon": 37.61754,
   "region": "городской округ Тула",
   "display": "Тула, городской округ Тула, Тульская область, Центральный федеральный округ, Россия"
  },
  "Новомосковск": {
   "км": 1237.8,
   "lat": 54.011013,
   "lon": 38.290943,
   "region": "городской округ Новомосковск",
   "display": "Новомосковск, городской округ Новомосковск, Тульская область, Центральный федеральный округ, 301650, Россия"
  },
  "Калуга": {
   "км": 1348.8,
   "lat": 54.5101087,
   "lon": 36.2598115,
   "region": "городской округ Калуга",
   "display": "Калуга, городской округ Калуга, Калужская область, Центральный федеральный округ, Россия"
  },
  "Обнинск": {
   "км": 1275.2,
   "lat": 55.0951738,
   "lon": 36.611913,
   "region": "городской округ Обнинск",
   "display": "Обнинск, городской округ Обнинск, Калужская область, Центральный федеральный округ, Россия"
  },
  "Рязань": {
   "км": 1103.9,
   "lat": 54.6295687,
   "lon": 39.7425039,
   "region": "Рязанская область",
   "display": "городской округ Рязань, Рязанская область, Центральный федеральный округ, Россия"
  },
  "Владимир": {
   "км": 972.1,
   "lat": 56.1288899,
   "lon": 40.4075203,
   "region": "городской округ Владимир",
   "display": "Владимир, городской округ Владимир, Владимирская область, Центральный федеральный округ, 600000, Россия"
  },
  "Ковров": {
   "км": 965.6,
   "lat": 56.3743713,
   "lon": 41.3116439,
   "region": "городской округ Ковров",
   "display": "Ковров, городской округ Ковров, Владимирская область, Центральный федеральный округ, Россия"
  },
  "Иваново": {
   "км": 1009.6,
   "lat": 56.9956855,
   "lon": 40.9812104,
   "region": "городской округ Иваново",
   "display": "Иваново, городской округ Иваново, Ивановская область, Центральный федеральный округ, 153000, Россия"
  },
  "Ярославль": {
   "км": 1109.4,
   "lat": 57.6263877,
   "lon": 39.8933705,
   "region": "Ярославская область",
   "display": "Ярославль, Ярославская область, Центральный федеральный округ, 150000, Россия"
  },
  "Рыбинск": {
   "км": 1195.2,
   "lat": 58.0489536,
   "lon": 38.8558908,
   "region": "городской округ Рыбинск",
   "display": "Рыбинск, городской округ Рыбинск, Ярославская область, Центральный федеральный округ, 152900, Россия"
  },
  "Кострома": {
   "км": 1028.5,
   "lat": 57.7679158,
   "lon": 40.9269141,
   "region": "городской округ Кострома",
   "display": "Кострома, городской округ Кострома, Костромская область, Центральный федеральный округ, 156000, Россия"
  },
  "Тверь": {
   "км": 1327.9,
   "lat": 56.858675,
   "lon": 35.9208284,
   "region": "Тверская область",
   "display": "городской округ Тверь, Тверская область, Центральный федеральный округ, Россия"
  },
  "Смоленск": {
   "км": 1562.4,
   "lat": 54.7789701,
   "lon": 32.0471812,
   "region": "Смоленская область",
   "display": "Смоленск, Смоленская область, Центральный федеральный округ, Россия"
  },
  "Брянск": {
   "км": 1550.5,
   "lat": 53.2423778,
   "lon": 34.3668288,
   "region": "городской округ Брянск",
   "display": "Брянск, городской округ Брянск, Брянская область, Центральный федеральный округ, Россия"
  },
  "Орёл": {
   "км": 1519.6,
   "lat": 52.9680171,
   "lon": 36.0994994,
   "region": "Орловская область",
   "display": "Орёл, Орловская область, Центральный федеральный округ, Россия"
  },
  "Курск": {
   "км": 1595.7,
   "lat": 51.7270357,
   "lon": 36.192248,
   "region": "Курская область",
   "display": "Курск, Курская область, Центральный федеральный округ, Россия"
  },
  "Белгород": {
   "км": 1625.1,
   "lat": 50.5955595,
   "lon": 36.5873394,
   "region": "Белгородский муниципальный округ",
   "display": "Белгород, Белгородский муниципальный округ, Белгородская область, Центральный федеральный округ, Россия"
  },
  "Старый Оскол": {
   "км": 1493.6,
   "lat": 51.298038,
   "lon": 37.833202,
   "region": "Старооскольский городской округ",
   "display": "Старый Оскол, Старооскольский городской округ, Белгородская область, Центральный федеральный округ, Россия"
  },
  "Липецк": {
   "км": 1285.2,
   "lat": 52.6051488,
   "lon": 39.5963775,
   "region": "городской округ Липецк",
   "display": "Липецк, городской округ Липецк, Липецкая область, Центральный федеральный округ, 398000, Россия"
  },
  "Воронеж": {
   "км": 1372.5,
   "lat": 51.6605982,
   "lon": 39.2005858,
   "region": "городской округ Воронеж",
   "display": "Воронеж, городской округ Воронеж, Воронежская область, Центральный федеральный округ, Россия"
  },
  "Ростов-на-Дону": {
   "км": 1823.2,
   "lat": 47.2222596,
   "lon": 39.7198736,
   "region": "городской округ Ростов-на-Дону",
   "display": "Ростов-на-Дону, городской округ Ростов-на-Дону, Ростовская область, Южный федеральный округ, Россия"
  },
  "Таганрог": {
   "км": 1888.6,
   "lat": 47.2392184,
   "lon": 38.8755031,
   "region": "Ростовская область",
   "display": "Таганрог, Ростовская область, Южный федеральный округ, Россия"
  },
  "Новочеркасск": {
   "км": 1801.9,
   "lat": 47.41066,
   "lon": 40.101986,
   "region": "Ростовская область",
   "display": "городской округ Новочеркасск, Ростовская область, Южный федеральный округ, Россия"
  },
  "Шахты": {
   "км": 1756.5,
   "lat": 47.7094622,
   "lon": 40.2154859,
   "region": "Ростовская область",
   "display": "городской округ Шахты, Ростовская область, Южный федеральный округ, Россия"
  },
  "Волгодонск": {
   "км": 1667.1,
   "lat": 47.5182668,
   "lon": 42.1525935,
   "region": "Ростовская область",
   "display": "городской округ Волгодонск, Ростовская область, Южный федеральный округ, Россия"
  },
  "Краснодар": {
   "км": 2091.2,
   "lat": 45.0351532,
   "lon": 38.9772396,
   "region": "городской округ Краснодар",
   "display": "Краснодар, городской округ Краснодар, Краснодарский край, Южный федеральный округ, 350000, Россия"
  },
  "Сочи": {
   "км": 2369.4,
   "lat": 43.5854823,
   "lon": 39.723109,
   "region": "городской округ Сочи",
   "display": "Сочи, городской округ Сочи, Краснодарский край, Южный федеральный округ, Россия"
  },
  "Новороссийск": {
   "км": 2227.0,
   "lat": 44.7239578,
   "lon": 37.7690711,
   "region": "городской округ Новороссийск",
   "display": "Новороссийск, городской округ Новороссийск, Краснодарский край, Южный федеральный округ, 353900, Россия"
  },
  "Анапа": {
   "км": 2247.5,
   "lat": 44.894272,
   "lon": 37.316887,
   "region": "муниципальный округ Анапа",
   "display": "Анапа, муниципальный округ Анапа, Краснодарский край, Южный федеральный округ, Россия"
  },
  "Армавир": {
   "км": 1964.8,
   "lat": 44.9993585,
   "lon": 41.1294061,
   "region": "городской округ Армавир",
   "display": "Армавир, городской округ Армавир, Краснодарский край, Южный федеральный округ, Россия"
  },
  "Ставрополь": {
   "км": 1938.3,
   "lat": 45.0433245,
   "lon": 41.9690934,
   "region": "городской округ Ставрополь",
   "display": "Ставрополь, городской округ Ставрополь, Ставропольский край, Северо-Кавказский федеральный округ, 355000, Россия"
  },
  "Пятигорск": {
   "км": 1975.3,
   "lat": 44.039775,
   "lon": 43.0706669,
   "region": "городской округ Пятигорск",
   "display": "Пятигорск, городской округ Пятигорск, Ставропольский край, Северо-Кавказский федеральный округ, Россия"
  },
  "Кисловодск": {
   "км": 2005.6,
   "lat": 43.9055311,
   "lon": 42.7157283,
   "region": "городской округ Кисловодск",
   "display": "Кисловодск, городской округ Кисловодск, Ставропольский край, Северо-Кавказский федеральный округ, Россия"
  },
  "Невинномысск": {
   "км": 1968.8,
   "lat": 44.6245814,
   "lon": 41.9475941,
   "region": "городской округ Невинномысск",
   "display": "Невинномысск, городской округ Невинномысск, Ставропольский край, Северо-Кавказский федеральный округ, Россия"
  },
  "Нальчик": {
   "км": 2056.7,
   "lat": 43.4769604,
   "lon": 43.5966578,
   "region": "городской округ Нальчик",
   "display": "Нальчик, городской округ Нальчик, Кабардино-Балкария, Северо-Кавказский федеральный округ, Россия"
  },
  "Владикавказ": {
   "км": 2133.7,
   "lat": 43.024593,
   "lon": 44.68211,
   "region": "городской округ Владикавказ",
   "display": "Владикавказ, городской округ Владикавказ, Северная Осетия — Алания, Северо-Кавказский федеральный округ, Россия"
  },
  "Махачкала": {
   "км": 2183.6,
   "lat": 42.9830241,
   "lon": 47.5048717,
   "region": "городской округ Махачкала",
   "display": "Махачкала, городской округ Махачкала, Дагестан, Северо-Кавказский федеральный округ, 367000, Россия"
  },
  "Дербент": {
   "км": 2317.0,
   "lat": 42.057858,
   "lon": 48.2887648,
   "region": "городской округ Дербент",
   "display": "Дербент, городской округ Дербент, Дагестан, Северо-Кавказский федеральный округ, Россия"
  },
  "Грозный": {
   "км": 2161.6,
   "lat": 43.3197031,
   "lon": 45.6934308,
   "region": "городской округ Грозный",
   "display": "Грозный, городской округ Грозный, Чеченская Республика, Северо-Кавказский федеральный округ, Россия"
  },
  "Майкоп": {
   "км": 2082.7,
   "lat": 44.6062079,
   "lon": 40.104053,
   "region": "городской округ Майкоп",
   "display": "Майкоп, городской округ Майкоп, Адыгея, Южный федеральный округ, Россия"
  },
  "Элиста": {
   "км": 1646.1,
   "lat": 46.3073288,
   "lon": 44.2692214,
   "region": "городской округ Элиста",
   "display": "Элиста, городской округ Элиста, Калмыкия, Южный федеральный округ, Россия"
  },
  "Курган": {
   "км": 940.5,
   "lat": 55.4409357,
   "lon": 65.3421169,
   "region": "городской округ Курган",
   "display": "Курган, городской округ Курган, Курганская область, Уральский федеральный округ, Россия"
  },
  "Челябинск": {
   "км": 756.0,
   "lat": 55.1598408,
   "lon": 61.4025547,
   "region": "Челябинский городской округ",
   "display": "Челябинск, Челябинский городской округ, Челябинская область, Уральский федеральный округ, Россия"
  },
  "Магнитогорск": {
   "км": 686.0,
   "lat": 53.4070173,
   "lon": 58.9811297,
   "region": "Магнитогорский городской округ",
   "display": "Магнитогорск, Магнитогорский городской округ, Челябинская область, Уральский федеральный округ, 455000, Россия"
  },
  "Златоуст": {
   "км": 622.6,
   "lat": 55.1674213,
   "lon": 59.6792625,
   "region": "Златоустовский городской округ",
   "display": "Златоуст, Златоустовский городской округ, Челябинская область, Уральский федеральный округ, 456200, Россия"
  },
  "Миасс": {
   "км": 662.9,
   "lat": 55.0505685,
   "lon": 60.1087125,
   "region": "Миасский городской округ",
   "display": "Миасс, Миасский городской округ, Челябинская область, Уральский федеральный округ, Россия"
  },
  "Копейск": {
   "км": 773.4,
   "lat": 55.1131951,
   "lon": 61.6216332,
   "region": "Копейский городской округ",
   "display": "Копейск, Копейский городской округ, Челябинская область, Уральский федеральный округ, Россия"
  },
  "Екатеринбург": {
   "км": 566.4,
   "lat": 56.8382071,
   "lon": 60.6007886,
   "region": "городской округ Екатеринбург",
   "display": "Екатеринбург, городской округ Екатеринбург, Свердловская область, Уральский федеральный округ, Россия"
  },
  "Нижний Тагил": {
   "км": 619.2,
   "lat": 57.9076001,
   "lon": 59.97077,
   "region": "муниципальный округ Нижний Тагил",
   "display": "Нижний Тагил, муниципальный округ Нижний Тагил, Свердловская область, Уральский федеральный округ, Россия"
  },
  "Каменск-Уральский": {
   "км": 671.1,
   "lat": 56.415451,
   "lon": 61.917797,
   "region": "городской округ Каменск-Уральский",
   "display": "Каменск-Уральский, городской округ Каменск-Уральский, Свердловская область, Уральский федеральный округ, Россия"
  },
  "Первоуральск": {
   "км": 541.3,
   "lat": 56.9051246,
   "lon": 59.9431941,
   "region": "муниципальный округ Первоуральск",
   "display": "Первоуральск, муниципальный округ Первоуральск, Свердловская область, Уральский федеральный округ, Россия"
  },
  "Серов": {
   "км": 704.9,
   "lat": 59.6051267,
   "lon": 60.5733483,
   "region": "Серовский муниципальный округ",
   "display": "Серов, Серовский муниципальный округ, Свердловская область, Уральский федеральный округ, Россия"
  },
  "Тюмень": {
   "км": 899.1,
   "lat": 57.153534,
   "lon": 65.542274,
   "region": "городской округ Тюмень",
   "display": "Тюмень, городской округ Тюмень, Тюменская область, Уральский федеральный округ, 625000, Россия"
  },
  "Тобольск": {
   "км": 1143.9,
   "lat": 58.1998048,
   "lon": 68.2512924,
   "region": "городской округ Тобольск",
   "display": "Тобольск, городской округ Тобольск, Тюменская область, Уральский федеральный округ, Россия"
  },
  "Омск": {
   "км": 1485.4,
   "lat": 54.991375,
   "lon": 73.371529,
   "region": "Омская область",
   "display": "городской округ Омск, Омская область, Сибирский федеральный округ, Россия"
  },
  "Новосибирск": {
   "км": 2135.8,
   "lat": 55.0288307,
   "lon": 82.9226887,
   "region": "Новосибирская область",
   "display": "Новосибирск, Новосибирская область, Сибирский федеральный округ, Россия"
  },
  "Бердск": {
   "км": 2160.5,
   "lat": 54.75795,
   "lon": 83.1068095,
   "region": "Новосибирская область",
   "display": "городской округ Бердск, Новосибирская область, Сибирский федеральный округ, Россия"
  },
  "Томск": {
   "км": 2384.1,
   "lat": 56.4887526,
   "lon": 84.9523434,
   "region": "городской округ Томск",
   "display": "Томск, городской округ Томск, Томская область, Сибирский федеральный округ, 634000, Россия"
  },
  "Кемерово": {
   "км": 2393.4,
   "lat": 55.3550907,
   "lon": 86.0871213,
   "region": "Кемеровский городской округ",
   "display": "Кемерово, Кемеровский городской округ, Кемеровская область, Сибирский федеральный округ, Россия"
  },
  "Новокузнецк": {
   "км": 2500.2,
   "lat": 53.7582436,
   "lon": 87.14653,
   "region": "Новокузнецкий городской округ",
   "display": "Новокузнецк, Новокузнецкий городской округ, Кемеровская область, Сибирский федеральный округ, Россия"
  },
  "Прокопьевск": {
   "км": 2473.2,
   "lat": 53.8879117,
   "lon": 86.7492072,
   "region": "Прокопьевский городской округ",
   "display": "Прокопьевск, Прокопьевский городской округ, Кемеровская область, Сибирский федеральный округ, Россия"
  },
  "Междуреченск": {
   "км": 2577.6,
   "lat": 53.6863763,
   "lon": 88.0703443,
   "region": "Междуреченский муниципальный округ",
   "display": "Междуреченск, Междуреченский муниципальный округ, Кемеровская область, Сибирский федеральный округ, 652870, Россия"
  },
  "Барнаул": {
   "км": 2419.3,
   "lat": 53.3475493,
   "lon": 83.7788448,
   "region": "городской округ Барнаул",
   "display": "Барнаул, городской округ Барнаул, Алтайский край, Сибирский федеральный округ, 656000, Россия"
  },
  "Бийск": {
   "км": 2475.1,
   "lat": 52.5394905,
   "lon": 85.2148673,
   "region": "Алтайский край",
   "display": "Бийск, Алтайский край, Сибирский федеральный округ, Россия"
  },
  "Рубцовск": {
   "км": 2286.2,
   "lat": 51.5276264,
   "lon": 81.2176174,
   "region": "городской округ Рубцовск",
   "display": "Рубцовск, городской округ Рубцовск, Алтайский край, Сибирский федеральный округ, 658200, Россия"
  },
  "Красноярск": {
   "км": 2905.2,
   "lat": 56.0091173,
   "lon": 92.872586,
   "region": "городской округ Красноярск",
   "display": "Красноярск, городской округ Красноярск, Красноярский край, Сибирский федеральный округ, 660000, Россия"
  },
  "Ачинск": {
   "км": 2732.4,
   "lat": 56.2694846,
   "lon": 90.4953964,
   "region": "Ачинский муниципальный округ",
   "display": "Ачинск, Ачинский муниципальный округ, Красноярский край, Сибирский федеральный округ, Россия"
  },
  "Канск": {
   "км": 3128.5,
   "lat": 56.205997,
   "lon": 95.706787,
   "region": "Канский муниципальный округ",
   "display": "Канск, Канский муниципальный округ, Красноярский край, Сибирский федеральный округ, Россия"
  },
  "Абакан": {
   "км": 3017.0,
   "lat": 53.72068,
   "lon": 91.4406019,
   "region": "городской округ Абакан",
   "display": "Абакан, городской округ Абакан, Хакасия, Сибирский федеральный округ, Россия"
  },
  "Кызыл": {
   "км": 3403.0,
   "lat": 51.719079,
   "lon": 94.4300679,
   "region": "городской округ Кызыл",
   "display": "Кызыл, городской округ Кызыл, Тыва, Сибирский федеральный округ, Россия"
  },
  "Иркутск": {
   "км": 3958.8,
   "lat": 52.2891225,
   "lon": 104.279829,
   "region": "городской округ Иркутск",
   "display": "Иркутск, городской округ Иркутск, Иркутская область, Сибирский федеральный округ, Россия"
  },
  "Ангарск": {
   "км": 3914.4,
   "lat": 52.5443167,
   "lon": 103.8882138,
   "region": "Ангарский городской округ",
   "display": "Ангарск, Ангарский городской округ, Иркутская область, Сибирский федеральный округ, Россия"
  },
  "Братск": {
   "км": 3576.8,
   "lat": 56.1517085,
   "lon": 101.6334907,
   "region": "городской округ Братск",
   "display": "Братск, городской округ Братск, Иркутская область, Сибирский федеральный округ, Россия"
  },
  "Улан-Удэ": {
   "км": 4385.0,
   "lat": 51.8357841,
   "lon": 107.5839105,
   "region": "городской округ Улан-Удэ",
   "display": "Улан-Удэ, городской округ Улан-Удэ, Бурятия, Дальневосточный федеральный округ, Россия"
  },
  "Чита": {
   "км": 5032.5,
   "lat": 52.033409,
   "lon": 113.500893,
   "region": "городской округ Чита",
   "display": "Чита, городской округ Чита, Забайкальский край, Дальневосточный федеральный округ, 672000, Россия"
  },
  "Якутск": {
   "км": 6176.1,
   "lat": 62.0274078,
   "lon": 129.7319787,
   "region": "городской округ Якутск",
   "display": "Якутск, городской округ Якутск, Республика Саха (Якутия), Дальневосточный федеральный округ, Россия"
  },
  "Благовещенск": {
   "км": 6463.9,
   "lat": 50.2600417,
   "lon": 127.5337378,
   "region": "городской округ Благовещенск",
   "display": "Благовещенск, городской округ Благовещенск, Амурская область, Дальневосточный федеральный округ, Россия"
  },
  "Хабаровск": {
   "км": 7148.4,
   "lat": 48.4812568,
   "lon": 135.0762968,
   "region": "городской округ Хабаровск",
   "display": "Хабаровск, городской округ Хабаровск, Хабаровский край, Дальневосточный федеральный округ, Россия"
  },
  "Комсомольск-на-Амуре": {
   "км": 7540.8,
   "lat": 50.542818,
   "lon": 137.0225414,
   "region": "городской округ Комсомольск-на-Амуре",
   "display": "Комсомольск-на-Амуре, городской округ Комсомольск-на-Амуре, Хабаровский край, Дальневосточный федеральный округ, Россия"
  },
  "Владивосток": {
   "км": 7718.0,
   "lat": 43.1150678,
   "lon": 131.8855768,
   "region": "Владивостокский городской округ",
   "display": "Владивосток, Владивостокский городской округ, Приморский край, Дальневосточный федеральный округ, 690000, Россия"
  },
  "Артём": {
   "км": 7697.5,
   "lat": 43.3529909,
   "lon": 132.1800977,
   "region": "Артёмовский городской округ",
   "display": "Артём, Артёмовский городской округ, Приморский край, Дальневосточный федеральный округ, 692700, Россия"
  },
  "Находка": {
   "км": 7831.5,
   "lat": 42.8246489,
   "lon": 132.8926,
   "region": "Находкинский городской округ",
   "display": "Находка, Находкинский городской округ, Приморский край, Дальневосточный федеральный округ, Россия"
  },
  "Южно-Сахалинск": {
   "км": 8044.7,
   "lat": 46.9574273,
   "lon": 142.727438,
   "region": "городской округ Южно-Сахалинск",
   "display": "Южно-Сахалинск, городской округ Южно-Сахалинск, Сахалинская область, Дальневосточный федеральный округ, Россия"
  },
  "Магадан": {
   "км": 8048.9,
   "lat": 59.5645655,
   "lon": 150.8078832,
   "region": "городской округ Магадан",
   "display": "Магадан, городской округ Магадан, Магаданская область, Дальневосточный федеральный округ, Россия"
  },
  "Сургут": {
   "км": 1688.4,
   "lat": 61.2419217,
   "lon": 73.3952717,
   "region": "Ханты-Мансийский автономный округ — Югра",
   "display": "городской округ Сургут, Ханты-Мансийский автономный округ — Югра, Уральский федеральный округ, Россия"
  },
  "Нижневартовск": {
   "км": 1907.3,
   "lat": 60.9384134,
   "lon": 76.5590829,
   "region": "Ханты-Мансийский автономный округ — Югра",
   "display": "городской округ Нижневартовск, Ханты-Мансийский автономный округ — Югра, Уральский федеральный округ, Россия"
  },
  "Новый Уренгой": {
   "км": 2110.8,
   "lat": 66.085196,
   "lon": 76.6799167,
   "region": "городской округ Новый Уренгой",
   "display": "Новый Уренгой, городской округ Новый Уренгой, Ямало-Ненецкий автономный округ, Уральский федеральный округ, Россия"
  },
  "Ноябрьск": {
   "км": 1993.8,
   "lat": 63.2002917,
   "lon": 75.4475807,
   "region": "городской округ Ноябрьск",
   "display": "Ноябрьск, городской округ Ноябрьск, Ямало-Ненецкий автономный округ, Уральский федеральный округ, Россия"
  },
  "Ханты-Мансийск": {
   "км": 1441.8,
   "lat": 61.0035254,
   "lon": 69.0189684,
   "region": "городской округ Ханты-Мансийск",
   "display": "Ханты-Мансийск, городской округ Ханты-Мансийск, Ханты-Мансийский автономный округ — Югра, Уральский федеральный округ, 628000, Россия"
  },
  "Салехард": {
   "км": 1819.0,
   "lat": 66.5298656,
   "lon": 66.6146311,
   "region": "городской округ Салехард",
   "display": "Салехард, городской округ Салехард, Ямало-Ненецкий автономный округ, Уральский федеральный округ, 629000, Россия"
  },
  "Санкт-Петербург": {
   "км": 1854.6,
   "lat": 59.9606739,
   "lon": 30.1586551,
   "region": "Северо-Западный федеральный округ",
   "display": "Санкт-Петербург, Северо-Западный федеральный округ, Россия"
  },
  "Великий Новгород": {
   "км": 1725.6,
   "lat": 58.5609587,
   "lon": 31.2809006,
   "region": "Новгородский район",
   "display": "Великий Новгород, Новгородский район, Новгородская область, Северо-Западный федеральный округ, Россия"
  },
  "Псков": {
   "км": 1959.4,
   "lat": 57.8173923,
   "lon": 28.3343465,
   "region": "Псковская область",
   "display": "городской округ Псков, Псковская область, Северо-Западный федеральный округ, Россия"
  },
  "Вологда": {
   "км": 1149.7,
   "lat": 59.2189391,
   "lon": 39.8933913,
   "region": "городской округ Вологда",
   "display": "Вологда, городской округ Вологда, Вологодская область, Северо-Западный федеральный округ, Россия"
  },
  "Череповец": {
   "км": 1250.5,
   "lat": 59.1221553,
   "lon": 37.9025005,
   "region": "городской округ Череповец",
   "display": "Череповец, городской округ Череповец, Вологодская область, Северо-Западный федеральный округ, 162600, Россия"
  },
  "Архангельск": {
   "км": 1457.4,
   "lat": 64.5410251,
   "lon": 40.5286774,
   "region": "городской округ Архангельск",
   "display": "Архангельск, городской округ Архангельск, Архангельская область, Северо-Западный федеральный округ, Россия"
  },
  "Северодвинск": {
   "км": 1491.4,
   "lat": 64.563385,
   "lon": 39.823769,
   "region": "муниципальный округ Северодвинск",
   "display": "Северодвинск, муниципальный округ Северодвинск, Архангельская область, Северо-Западный федеральный округ, Россия"
  },
  "Мурманск": {
   "км": 2553.9,
   "lat": 68.970665,
   "lon": 33.07497,
   "region": "городской округ Мурманск",
   "display": "Мурманск, городской округ Мурманск, Мурманская область, Северо-Западный федеральный округ, Россия"
  },
  "Петрозаводск": {
   "км": 1696.3,
   "lat": 61.789221,
   "lon": 34.3688041,
   "region": "Петрозаводский городской округ",
   "display": "Петрозаводск, Петрозаводский городской округ, Карелия, Северо-Западный федеральный округ, 185000, Россия"
  },
  "Калининград": {
   "км": 2410.9,
   "lat": 54.710128,
   "lon": 20.5105838,
   "region": "городской округ Калининград",
   "display": "Калининград, городской округ Калининград, Калининградская область, Северо-Западный федеральный округ, Россия"
  },
  "Астана": {
   "км": 1698.5,
   "lat": 51.1282804,
   "lon": 71.4304708,
   "region": "010000",
   "display": "Астана, 010000, Казахстан"
  },
  "Алматы": {
   "км": 2918.1,
   "lat": 43.2363924,
   "lon": 76.9457275,
   "region": "Казахстан",
   "display": "Алматы, Казахстан"
  },
  "Шымкент": {
   "км": 2513.8,
   "lat": 42.3146962,
   "lon": 69.5883282,
   "region": "Казахстан",
   "display": "Шымкент, Казахстан"
  },
  "Караганда": {
   "км": 1905.5,
   "lat": 49.8421549,
   "lon": 73.1063206,
   "region": "Карагандинская область",
   "display": "Караганда, Карагандинская область, Казахстан"
  },
  "Актобе": {
   "км": 989.9,
   "lat": 50.2836938,
   "lon": 57.2298129,
   "region": "Район Алматы",
   "display": "Актобе Г.А., Район Алматы, Актюбинская область, Казахстан"
  },
  "Уральск": {
   "км": 749.2,
   "lat": 51.2040697,
   "lon": 51.3707863,
   "region": "городская администрация Уральск",
   "display": "Уральск, городская администрация Уральск, Западно-Казахстанская область, Казахстан"
  },
  "Костанай": {
   "км": 1007.5,
   "lat": 53.2146604,
   "lon": 63.632607,
   "region": "Костанайская Г.А.",
   "display": "Костанай, Костанайская Г.А., Костанайская область, 110000, Казахстан"
  },
  "Петропавловск": {
   "км": 1201.9,
   "lat": 54.8668104,
   "lon": 69.1334984,
   "region": "Петропавловская городская администрация",
   "display": "Петропавловск, Петропавловская городская администрация, Северо-Казахстанская область, 150000, Казахстан"
  },
  "Павлодар": {
   "км": 1893.3,
   "lat": 52.2857573,
   "lon": 76.9455035,
   "region": "Павлодар Г.А.",
   "display": "Павлодар, Павлодар Г.А., Павлодарская область, Казахстан"
  },
  "Семей": {
   "км": 2228.2,
   "lat": 50.4067378,
   "lon": 80.2502824,
   "region": "Абайская область",
   "display": "Семей, Абайская область, Казахстан"
  },
  "Атырау": {
   "км": 1253.8,
   "lat": 47.1067183,
   "lon": 51.9138976,
   "region": "городская администрация Атырау",
   "display": "Атырау, городская администрация Атырау, Атырауская область, 060000, Казахстан"
  }
 },
 "reviews": {
  "listings": [
   {
    "id": 7976872932,
    "title": "Модульная баня под ключ с террасой",
    "price": 180000,
    "address": "Республика Татарстан (Татарстан), Казань, Приволжский район",
    "status": "active",
    "url": "https://www.avito.ru/kazan/predlozheniya_uslug/modulnaya_banya_pod_klyuch_s_terrasoy_7976872932",
    "description": ""
   },
   {
    "id": 7976338896,
    "title": "Бани из Кедра и Сибирской ели",
    "price": 180000,
    "address": "Республика Башкортостан, г.о. Нефтекамск",
    "status": "active",
    "url": "https://www.avito.ru/neftekamsk/predlozheniya_uslug/bani_iz_kedra_i_sibirskoy_eli_7976338896",
    "description": ""
   },
   {
    "id": 7912025996,
    "title": "Бани из кедра и ели без предоплаты",
    "price": 190000,
    "address": "Пермский край, Краснокамский муниципальный округ, СНТ Сюзьва, Полевая ул.",
    "status": "active",
    "url": "https://www.avito.ru/ust-kachka/remont_i_stroitelstvo/bani_iz_kedra_i_eli_bez_predoplaty_7912025996",
    "description": ""
   },
   {
    "id": 7560699346,
    "title": "Готовые бани под ключ",
    "price": 180000,
    "address": "Ульяновская обл., Ульяновск, Ульяновский пр-т, 2",
    "status": "active",
    "url": "https://www.avito.ru/ulyanovsk/predlozheniya_uslug/gotovye_bani_pod_klyuch_7560699346",
    "description": ""
   },
   {
    "id": 4552976935,
    "title": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "price": 180000,
    "address": "Республика Татарстан (Татарстан), Лаишевский р-н, Песчано-Ковалинское сельское поселение, с. Песчаные Ковали, коттеджный комплекс Ковалинская усадьба, Фабричная ул.",
    "status": "active",
    "url": "https://www.avito.ru/kazan/remont_i_stroitelstvo/banya_kvadroovalbez_predoplaty_kedr_el_4552976935",
    "description": ""
   }
  ],
  "reviews": [
   {
    "score": 5,
    "date": "1786259276",
    "date_fmt": "2026-08-09",
    "text": "Заказывал баню у менеджера  Марии, приятная девушка в общении ,хорошо разбирается в банях, может посоветовать , порекомендовать, всегда на связи , предоплата маленькая, время ожидания 1 мес , сборка в течении дня , ребята молодцы знают свое дело, цена бани приемлемая, качество хорошее, рекомендую тем кто ищет цена , качество.",
    "answer": "Спасибо вам большое, за высокую оценку ⚘️🤝 Парьтесь на здоровье!!!",
    "id": 450952555,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "Альберт"
   },
   {
    "score": 5,
    "date": "1777565624",
    "date_fmt": "2026-04-30",
    "text": "Всем доброго дня,оставлю 5копеек.Баню заказал пришла в срок даже чуть раньше.С Марией был постоянно на связи !!! Ребята которые собирали молодцы !!! Всем вам хороших клиентов.Ps заказывал без предоплаты что очень хорошо в наше время !!! ( г.Нижнекамск)",
    "answer": "",
    "id": 419909963,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "По обьявлению"
   },
   {
    "score": 5,
    "date": "1776686704",
    "date_fmt": "2026-04-20",
    "text": "Благодарю компанию за хорошую и красивую баню бочку. Заказывали 5 метров в максимальной комплектации. Привезли в обозначенный срок, в обозначенное время. Сборщики Никита и Кирилл знают свое дело, качественно выполняют свою работу. Однозначно рекомендую!",
    "answer": "Спасибо за отзыв и доверие! Пусть банька вам прослужит долгие годы!⚘️⚘️⚘️",
    "id": 416512443,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "Ильшат"
   },
   {
    "score": 5,
    "date": "1774971858",
    "date_fmt": "2026-03-31",
    "text": "Работа выполнена качественно",
    "answer": "Спасибо большое ❤️  Парьтесь на здоровье!",
    "id": 410243787,
    "item": "Готовые бани под ключ",
    "sender": "ЛЮБОВЬ  ЕРАСТОВА"
   },
   {
    "score": 5,
    "date": "1772905634",
    "date_fmt": "2026-03-07",
    "text": "Можете спокойно заказывать, менеджер Мария всё объяснила ребята приехали раньше указанного срока установили на все 100%. Марие огромное спасибо! Самое главное без всяких предоплат. Всем рекомендую 👍",
    "answer": "Спасибо за доверие!⚘️❤️ Поздравляю с покупкой баньки! Пусть служит долго и принесёт море здоровья и удовольствия!",
    "id": 402700379,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "Пользователь"
   },
   {
    "score": 5,
    "date": "1762440213",
    "date_fmt": "2025-11-06",
    "text": "Мария, очень нам понравилась, на все наши вопросы получили развёрнутые ответы, после которых сомнений не осталось в выборе бани. Благодарим и желаем успехов!",
    "answer": "Благодарю за доверие ⚘️⚘️⚘️",
    "id": 367201579,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "Луара"
   },
   {
    "score": 5,
    "date": "1761819315",
    "date_fmt": "2025-10-30",
    "text": "Очень отзывчивая, вежливая и быстро отвечает Мария. Ответила на все вопросы , буду советовать ее и их компанию всем своим знакомым .",
    "answer": "Большое спасибо за тёплые слова! Рада была помочь. ⚘️⚘️⚘️",
    "id": 365111147,
    "item": "Готовые бани под ключ",
    "sender": "Римма"
   },
   {
    "score": 5,
    "date": "1761487416",
    "date_fmt": "2025-10-26",
    "text": "Можете смело обращаться. Всё оперативно, менеджер все подробно объяснила, все плюсы и минусы. Составили договор, привезли,собрали. Ребята собрали все быстро, чисто и аккуратно.",
    "answer": "Спасибо большое за доверие❤️\nПоздравляю вас с покупкой!",
    "id": 364017275,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "Диана"
   },
   {
    "score": 5,
    "date": "1760430653",
    "date_fmt": "2025-10-14",
    "text": "Покупкой доволен.\nЗаказывайте смело!\nВсё просто и прозрачно.\nПривезли, установили за 1 день.\nМария Большая Молодец!) \nУстановщики (Владислав и Александр) - Красавцы!",
    "answer": "Спасибо за доверие!!!",
    "id": 360371387,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "Александр"
   },
   {
    "score": 5,
    "date": "1760279941",
    "date_fmt": "2025-10-12",
    "text": "Спасибо большое, с вами сбываются мечты ) Мария, вам огромная благодарность 🙏",
    "answer": "Спасибо за доверие ⚘️",
    "id": 359899339,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "Студия ЭЛЕКТРОЭПИЛЯЦИИ"
   },
   {
    "score": 5,
    "date": "1760277780",
    "date_fmt": "2025-10-12",
    "text": "Все отлично, баня 10/10, привезли и установили в указанные сроки, девушка менеджер Мария все подробно рассказала, рекомендую к приобретению!",
    "answer": "Спасибо за выбор нашей компании ⚘️⚘️⚘️",
    "id": 359886699,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "Бани-бочки | Сибирская ель и кедр"
   },
   {
    "score": 5,
    "date": "1760219324",
    "date_fmt": "2025-10-12",
    "text": "Спасибо,все шикарно и качество материала и сборка,хочу ещё такую же на дачный участок,договоримся?",
    "answer": "Спасибо вам  большое ⚘️ Обращайтесь) конечно. ",
    "id": 359724459,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "\"Живой пар\" бани бочки всех конструкций."
   },
   {
    "score": 5,
    "date": "1760179790",
    "date_fmt": "2025-10-11",
    "text": "Приятная в общении девушка, все доступно и понятно объяснила по схеме, сразу вышли на договор. Заказали баню родителям, специально выбрали время в осень когда нет загруженности. Пытались заказать у другого продавца летом, но там была большая предоплата, и долгое ожидание. Очень рады что вышли на Марию. Слаженная команда парней которые собирали баньку, быстро и качественно сделали свою работу.",
    "answer": "Спасибо что выбрали нашу компанию !⚘️⚘️⚘️ Очень рада что вам всё понравилось ☺️❤️",
    "id": 359542763,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "Елена GOLDEN ELITA"
   },
   {
    "score": 5,
    "date": "1749577832",
    "date_fmt": "2025-06-10",
    "text": "Долго думали , и решились на покупку бани бочки . Обзвонив кучу компаний ( благо их на рынке сейчас много) остановили свой выбор именно на этих производителей. \nГлавным критерием было , то что предоплата мизерная , при любых обстоятельствах мы практически ничего не теряли . Менеджер милейшая девушка , грамотно и доступно объяснила все на пальцах , при этом не проводя анти рекламу конкурентов , это тоже было в плюс им . Подсказала как что и зачем . При выборе комплектации что то рекомендовала , а что то наоборот ( согласно нашим запросам и пожеланиям) . На следующей день прислали на Эл  почту договор , подписали и сканы отправили им . \nВ самый приятный день икс , баню привезли . Привезли в разобранном виде, т к у нас нет подъезда к месту установки . Разгрузка и сборка заняла полдня ( с 12 до 19)  Ребята сборщики , работали ловко , слаженно , а главное профессионально . По окончании работ, дали рекомендации и советы  по эксплуатации. \nМы очень довольны покупкой и рекомендуем данную компанию . \nНе могу не сказать о минусах , хотя это и не совсем минус , но все же . Доставку задержали по разным обоснованным причинам , менеджер всендв была на связи , находила нужные  слова, \nМы пока не топили баню , В дальнейшем дополню отзыв .",
    "answer": "Благодарим вас, за выбор нашей компании!⚘️Пусть ваша банька дарит вам радость, здоровье и удовольствие долгие годы! Лучшие покупатели ❤️лучших бань))",
    "id": 326691019,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "юлия"
   },
   {
    "score": 5,
    "date": "1748422904",
    "date_fmt": "2025-05-28",
    "text": "Заказал баню Кватро. Привезли и довольно таки быстро собрали. Ребята молодцы с руками и головой. Аккуратные. Работу сделали быстро и качественно. Советую",
    "answer": "Спасибо вам большое! Рады были сотрудничать с вами. Пусть банька дарит вам радость и здоровье на долгие годы.⚘️🤝",
    "id": 323459531,
    "item": "Баня квадро,овал,без предоплаты Кедр, Ель",
    "sender": "Сергей"
   },
   {
    "score": 5,
    "date": "1746475296",
    "date_fmt": "2025-05-05",
    "text": "Менеджер просто чудо,объяснила все внятно и с проектом помогла",
    "answer": "Очень, очень, приятно! Спасибо вам огромное!😍 Вы первый кто оставил отзыв )) Я не прошу никого ,веду так сказать честную статистику 🤗",
    "id": 317231403,
    "item": "Баня квадро,овал,без предоплаты",
    "sender": "Константин Чистяков"
   }
  ],
  "reviews_summary": {
   "count": 16,
   "avg_score": 5.0
  }
 },
 "phone": "8-967-472-36-65",
 "taplink": "https://taplink.cc/banyaforyou",
 "guarantee": "12 месяцев с момента отгрузки товара"
};
