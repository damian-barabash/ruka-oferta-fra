/* Everything the landing shows, in English (default) and Finnish.
   Product texts are a snapshot of the "ice-driving-laponia" product from fastlineracingacademy.pl
   (CMS, November 2026) — there is no backend here, so a change on the main site does not reach this page. */

export const LANGS = ["en", "fi"];

/* season window + sold-out days (snapshot of `ice_windows`) */
export const SEASON = {
  date_from: "2027-02-20",
  date_to: "2027-03-10",
  sold_out: ["2027-02-25", "2027-02-26"],
};

export const CONTACT = {
  name: "Renne Kuusisto",
  company: "Rukakeskus Oy / Pyhätunturi Oy",
  email: "renne.kuusisto@ruka.fi",
  phone: "+358 50 4718631",
  phoneHref: "tel:+358504718631",
  site: "https://fastlineracingacademy.pl/",
  facebook: "https://www.facebook.com/fastlineracingacademy/",
  instagram: "https://www.instagram.com/fastline_racing_academy/",
  youtube: "https://www.youtube.com/@fastlineracingacademy",
};

export const HERO = {
  video: "/assets/laponia/hero.webm",
  videoMobile: "/assets/laponia/hero-m.webm",
  poster: "/assets/laponia/hero.webp",
  logo: "/assets/laponia/logo.webp",
  fra: "/assets/ui/logo_dark.webp",
};

export const RUKA_VIDEO = {
  webm: "/assets/ruka/ruka.webm",
  webmMobile: "/assets/ruka/ruka-m.webm",
  mp4: "/assets/ruka/ruka.mp4",
  poster: "/assets/ruka/poster.webp",
};

const g = (n) => `/assets/gallery/g${String(n).padStart(2, "0")}`;
/* gallery: { thumb, full } — thumbs are 960 px copies, the lightbox opens the full photo */
export const GALLERY = [
  ...[1, 2, 3, 4, 5, 6].map((n) => ({ thumb: `/assets/laponia/ice${n}@960.webp`, full: `/assets/laponia/ice${n}.webp` })),
  ...Array.from({ length: 25 }, (_, i) => ({ thumb: `${g(i + 1)}@960.webp`, full: `${g(i + 1)}.webp` })),
];

/* YouTube list (id + title per language) */
export const YT = [
  { id: "q8catbZk13Y", en: "Lapland 2023 — aftermovie", fi: "Lappi 2023 — aftermovie" },
  { id: "wVny1QyvU1U", en: "Ice Driving Experience 2024 — Finland, Kuusamo", fi: "Ice Driving Experience 2024 — Suomi, Kuusamo" },
  { id: "bfuOWL87ODA", en: "Ice Driving Experience 2024", fi: "Ice Driving Experience 2024" },
  { id: "BKvHi-yKbrk", en: "Ice driving technique — Mariusz Miękoś", fi: "Jääajotekniikka — Mariusz Miękoś" },
  { id: "lqOHYkyJFV0", en: "Alpine Ice Driving — Lapland 2022", fi: "Alpine Ice Driving — Lappi 2022" },
  { id: "87JbOrWDh0w", en: "Ice Driving Lapland 2022", fi: "Ice Driving Lappi 2022" },
  { id: "0nVH_TzHL3U", en: "Heels on Ice — Lapland 2022", fi: "Heels on Ice — Lappi 2022" },
];

export const TEXT = {
  en: {
    "meta.title": "Ice Driving Experience — Ruka, Lapland 2027 | Fastline Racing Academy",
    "meta.desc": "Drive on the frozen lakes of Lapland on studded tyres. 1:1 training with a racing instructor, unlimited fuel and tyres. Ruka · Kuusamo · Finland, 20 February – 10 March 2027.",

    "p.title": "ICE DRIVING EXPERIENCE",
    "p.tag": "LAPLAND · KUUSAMO · FINLAND",
    "p.excerpt": "Driving on the frozen lakes of Lapland on studded tyres. 1:1 training with an instructor, unlimited fuel and tyres, 20 February – 10 March 2027.",
    "p.intro": "Imagine a place full of snow-covered pine forests and, among them, countless frozen lakes — so vast that five Formula 1 circuits would fit on them.\nThe driving program is run by professional motorsport competitors and was built on the long experience of Finland's legendary world rally champions. It is a perfect opportunity not only to learn to control a car safely, but also to train competitive rally driving techniques.\nLapland is famous for its superb conditions for racing and rally training on ice. Snowmobile off-road safaris and the region's famous husky-sled trips are great fun too.",
    "p.theory": "The theory takes about an hour and happens before the driving. It gives you the knowledge and awareness of what a car does on ice, and helps the instructors explain what happens on track.",
    "p.practice": "Training 1:1: you take the wheel and the instructor — a licensed, decorated racing or rally driver — sits beside you. The driving takes place on ice tracks on frozen lakes, on studded tyres, with no speed limits.",
    "p.learn": "advanced ice driving in sports and rally cars\ndriving on studded tyres\ncontrolling the car at high speed on ice\nthe correct drifting technique\nmanaging the balance of the car\nthe Scandinavian flick\ndriving the correct rally line\nkeeping control of the car in a slide",
    "p.includes": "Ice Driving training on ice tracks, 1:1 with an instructor, including infrastructure and technical support\nfull care of the Fastline Racing Academy instructors and competitors\nunlimited fuel and tyres\nhelmets and gloves\na hot lunch and drinks during the training\nIce Driving Experience completion certificates\nfull event coordination",
    "p.places": "Kuusamo — Finland — Lapland",

    "ui.watch": "WATCH THE FILM",
    "ui.more": "MORE",
    "ui.about": "ABOUT THE PROGRAM",
    "ui.season": "ICE SEASON",
    "ui.theory": "THE THEORY",
    "ui.practice": "THE PRACTICE",
    "ui.learn": "WHAT YOU WILL LEARN",
    "ui.includes": "WHAT'S INCLUDED",

    "rv.kicker": "RUKA · KUUSAMO · FINLAND",
    "rv.title": "LAPLAND BEYOND THE TRACK",
    "rv.sub": "Ruka fell, forests bowed under crown snow, husky trails, the northern lights and a sauna after a day on the ice — this is where you spend your ice driving days.",
    "rv.chips": "Crown-snow forests\nHusky trails\nNorthern lights\nSauna evenings\nRuka slopes",
    "rv.soundOn": "SOUND ON",
    "rv.soundOff": "SOUND OFF",
    "rv.play": "PLAY",
    "rv.pause": "PAUSE",

    "av.title": "AVAILABILITY",
    "av.sub": "Red days are already sold out. Write or call us to book your dates.",
    "av.free": "AVAILABLE",
    "av.sold": "SOLD OUT",
    "av.out": "OUT OF SEASON",

    "yt.eyebrow": "VIDEO",
    "yt.title": "SEE WHAT IT LOOKS LIKE",
    "yt.channel": "YouTube channel",
    "yt.play": "Play",

    "cta.title": "SEE MOTORSPORT FROM A NEW ANGLE",
    "cta.sub": "Frozen lakes, studded tyres and full control of the car in a slide. Get in touch and we will prepare your Ice Driving Experience in Lapland.",
    "cta.mail": "WRITE TO US",
    "cta.call": "CALL US",

    "ft.about": "Racing and rally driving school led by nine-time Polish champion Mariusz Miękoś. Track training in Poland, Ice Driving in Lapland, trips and corporate events.",
    "ft.contact": "CONTACT",
    "ft.role": "Sales Negotiator",
    "ft.follow": "FOLLOW US",
    "ft.site": "fastlineracingacademy.pl",
    "ft.rights": "Fastline Events Sp. z o.o. All rights reserved.",

    "lang.label": "Language",
    "lb.close": "Close",
  },

  fi: {
    "meta.title": "Ice Driving Experience — Ruka, Lappi 2027 | Fastline Racing Academy",
    "meta.desc": "Aja Lapin jäätyneillä järvillä nastarenkailla. Valmennus 1:1 kilpakouluttajan kanssa, rajattomasti polttoainetta ja renkaita. Ruka · Kuusamo · Suomi, 20.2.–10.3.2027.",

    "p.title": "ICE DRIVING EXPERIENCE",
    "p.tag": "LAPPI · KUUSAMO · SUOMI",
    "p.excerpt": "Ajoa Lapin jäätyneillä järvillä nastarenkailla. Valmennus 1:1 kouluttajan kanssa, rajattomasti polttoainetta ja renkaita, 20.2.–10.3.2027.",
    "p.intro": "Kuvittele paikka, jossa on lumen peittämiä mäntymetsiä ja niiden keskellä lukemattomia jäätyneitä järviä — niin laajoja, että niille mahtuisi viisi Formula 1 -rataa.\nAjo-ohjelmaa vetävät ammattimaiset moottoriurheilijat, ja se perustuu Suomen legendaaristen rallin maailmanmestareiden pitkään kokemukseen. Se on erinomainen tilaisuus oppia hallitsemaan autoa turvallisesti, mutta myös harjoitella kilpatason rallitekniikoita.\nLappi tunnetaan erinomaisista olosuhteistaan kilpa- ja ralliharjoitteluun jäällä. Hauskaa ovat myös moottorikelkkasafarit maastossa sekä alueen kuuluisat huskyretket.",
    "p.theory": "Teoriaosuus kestää noin tunnin, ja se pidetään ennen ajoja. Se antaa tiedot ja ymmärryksen siitä, mitä autolle tapahtuu jäällä, ja helpottaa kouluttajia selittämään radalla syntyviä tilanteita.",
    "p.practice": "Valmennus 1:1: sinä istut ratissa ja kouluttaja — lisensoitu ja menestynyt kilpa- tai rallikuljettaja — istuu vieressäsi. Ajot tapahtuvat jäätyneiden järvien jääradoilla nastarenkailla, ilman nopeusrajoituksia.",
    "p.learn": "edistynyt jäällä ajo urheilu- ja ralliautoilla\najaminen nastarenkailla\nauton hallinta suurella nopeudella jäällä\noikea sladitekniikka\nauton tasapainon hallinta\nskandinaavinen heilautus (Scandinavian flick)\noikean rallilinjan ajaminen\nauton hallinta luisussa",
    "p.includes": "Ice Driving -valmennus jääradoilla 1:1 kouluttajan kanssa, infrastruktuuri ja tekninen tuki mukaan lukien\nFastline Racing Academyn kouluttajien ja kilpailijoiden täysi tuki\nrajattomasti polttoainetta ja renkaita\nkypärät ja ajohanskat\nlämmin lounas ja juomat harjoitusten aikana\nIce Driving Experience -todistus\ntapahtuman kokonaisvaltainen koordinointi",
    "p.places": "Kuusamo — Suomi — Lappi",

    "ui.watch": "KATSO VIDEO",
    "ui.more": "LISÄÄ",
    "ui.about": "OHJELMASTA",
    "ui.season": "AJOKAUSI",
    "ui.theory": "TEORIA",
    "ui.practice": "KÄYTÄNTÖ",
    "ui.learn": "MITÄ OPIT",
    "ui.includes": "HINTAAN SISÄLTYY",

    "rv.kicker": "RUKA · KUUSAMO · SUOMI",
    "rv.title": "LAPPI RADAN ULKOPUOLELLA",
    "rv.sub": "Rukatunturi, tykkylumen taivuttamat metsät, huskypolut, revontulet ja sauna jääpäivän päätteeksi — täällä vietät ajopäiväsi.",
    "rv.chips": "Tykkylumimetsät\nHuskypolut\nRevontulet\nSaunaillat\nRukan rinteet",
    "rv.soundOn": "ÄÄNI PÄÄLLE",
    "rv.soundOff": "ÄÄNI POIS",
    "rv.play": "TOISTA",
    "rv.pause": "TAUKO",

    "av.title": "SAATAVUUS",
    "av.sub": "Punaiset päivät on jo myyty loppuun. Varaa omat päiväsi kirjoittamalla tai soittamalla meille.",
    "av.free": "VAPAA",
    "av.sold": "LOPPUUNMYYTY",
    "av.out": "KAUDEN ULKOPUOLELLA",

    "yt.eyebrow": "VIDEO",
    "yt.title": "KATSO, MILTÄ SE NÄYTTÄÄ",
    "yt.channel": "YouTube-kanava",
    "yt.play": "Toista",

    "cta.title": "KOE MOOTTORIURHEILU UUDESTA NÄKÖKULMASTA",
    "cta.sub": "Jäätyneet järvet, nastarenkaat ja auton täysi hallinta luisussa. Ota yhteyttä, niin valmistelemme Ice Driving Experiencesi Lapissa.",
    "cta.mail": "KIRJOITA MEILLE",
    "cta.call": "SOITA MEILLE",

    "ft.about": "Kilpa- ja ralliajokoulu, jota johtaa yhdeksänkertainen Puolan mestari Mariusz Miękoś. Rataharjoittelua Puolassa, Ice Driving Lapissa, matkoja ja yritystapahtumia.",
    "ft.contact": "YHTEYSTIEDOT",
    "ft.role": "Myyntineuvottelija",
    "ft.follow": "SEURAA MEITÄ",
    "ft.site": "fastlineracingacademy.pl",
    "ft.rights": "Fastline Events Sp. z o.o. Kaikki oikeudet pidätetään.",

    "lang.label": "Kieli",
    "lb.close": "Sulje",
  },
};

export const LOCALE = { en: "en-GB", fi: "fi-FI" };
