import { useEffect, useRef } from "react";
import { useI18n, lines } from "./lib/i18n";
import { useRevealOnScroll, narrow } from "./lib/hooks";
import { useLightbox } from "./components/Lightbox";
import { iceDateRange } from "./lib/ice";
import { SEASON, HERO, GALLERY, YT, CONTACT } from "./lib/content";
import ScrollProgress from "./components/ScrollProgress";
import IceCalendar from "./components/IceCalendar";
import VideoBlock from "./components/YouTube";
import RukaFilm from "./components/RukaFilm";
import LangSwitch from "./components/LangSwitch";
import Footer from "./components/Footer";

/* Ice Driving Experience — Laponia, the offer landing for ruka.icedriving.pl.
   A copy of the product page from fastlineracingacademy.pl without the site menu, the WhatsApp
   button and the packages/payments: the packages block is replaced by the Ruka film. */
export default function App() {
  const { t, lang } = useI18n();
  const openLightbox = useLightbox();

  useRevealOnScroll([]);

  const intro = lines(t("p.intro"));
  const learn = lines(t("p.learn"));
  const includes = lines(t("p.includes"));
  const places = lines(t("p.places"));
  const chips = lines(t("rv.chips"));
  const full = GALLERY.map((g) => g.full);
  const range = iceDateRange(SEASON, lang);

  return (
    <div className="lp">
      <ScrollProgress />
      <Snow />
      <main>
        {/* ---------------- HERO ---------------- */}
        <section className="lp-hero">
          <video className="lp-hero__vid" src={narrow() ? HERO.videoMobile : HERO.video} autoPlay loop muted playsInline poster={HERO.poster} />
          <div className="lp-hero__frost" />
          <div className="lp-hero__scrim" />
          <div className="container lp-hero__inner">
            <div className="lp-hero__brand">
              <img className="lp-hero__logo" src={HERO.logo} alt={t("p.title")} width="1000" height="648" fetchpriority="high" />
              <span className="lp-hero__x" aria-hidden="true" />
              <a className="lp-hero__fra" href={CONTACT.site} target="_blank" rel="noopener noreferrer" aria-label="Fastline Racing Academy">
                <img src={HERO.fra} alt="Fastline Racing Academy" width="2001" height="1082" />
              </a>
            </div>
            <h1 className="sr-only">{t("p.title")}</h1>
            <span className="lp-hero__tag">{t("p.tag")}</span>
            <div className="lp-hero__dates">
              <span className="lp-frost-chip">{range}</span>
            </div>
            <p className="lp-hero__exc">{t("p.excerpt")}</p>
            <div className="lp-hero__btns">
              <a href="#lp-ruka" className="btn lp-btn">{t("ui.watch")} <span className="btn__arrow">›</span></a>
              <a href="#lp-o" className="btn lp-btn--ghost">{t("ui.more")}</a>
            </div>
          </div>
          <div className="lp-hero__icicles">{Array.from({ length: 26 }, (_, i) => <i key={i} style={{ ["--i"]: i }} />)}</div>
        </section>

        {/* ---------------- INTRO ---------------- */}
        <section className="lp-sec lp-ice-tex lp-intro" id="lp-o">
          <DriftTracks />
          <div className="container lp-intro__grid">
            <div className="lp-intro__side reveal-left">
              <span className="lp-kicker">{t("ui.about")}</span>
              <span className="lp-bar" />
              <div className="lp-dates">
                <span className="lp-dates__l">{t("ui.season")}</span>
                <span className="lp-dates__v">{range}</span>
              </div>
              {!!places.length && (
                <ul className="lp-place">
                  {places.map((x, i) => <li key={i}>{x}</li>)}
                </ul>
              )}
            </div>
            <div className="lp-slab">
              {intro.map((par, i) => (
                <p key={i} className={`lp-p reveal-up rv-d${(i % 3) + 1}`}>{par}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- THEORY / PRACTICE ---------------- */}
        <section className="lp-sec lp-sec--deep lp-parts">
          <DriftTracks />
          <div className="container lp-parts__grid">
            {[
              { n: "01", label: t("ui.theory"), body: t("p.theory") },
              { n: "02", label: t("ui.practice"), body: t("p.practice") },
            ].map((x, i) => (
              <article key={x.n} className={`lp-glass reveal-up rv-d${i + 1}`}>
                <span className="lp-glass__n">{x.n}</span>
                <h3 className="lp-glass__h">{x.label}</h3>
                <p className="lp-glass__b">{x.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------- LEARN + INCLUDES ---------------- */}
        <section className="lp-sec lp-ice-tex lp-lists">
          <div className="container lp-lists__grid">
            <div className="lp-slab">
              <h3 className="lp-h reveal-up">{t("ui.learn")}</h3>
              <ul className="lp-ul">
                {learn.map((l, i) => (
                  <li key={i} className={`lp-li reveal-up rv-d${(i % 5) + 1}`}><span className="lp-flake">❄</span>{l}</li>
                ))}
              </ul>
            </div>
            <div className="lp-box">
              <h3 className="lp-h lp-h--light reveal-up">{t("ui.includes")}</h3>
              <ul className="lp-ul">
                {includes.map((l, i) => (
                  <li key={i} className={`lp-li lp-li--light reveal-up rv-d${(i % 5) + 1}`}><span className="lp-tick">✓</span>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------- RUKA FILM (in place of the packages) ---------------- */}
        <section className="lp-sec lp-ice-tex rv" id="lp-ruka">
          <DriftTracks flip />
          <div className="container rv__in">
            <div className="rv__head">
              <div>
                <span className="lp-kicker reveal-up">{t("rv.kicker")}</span>
                <h2 className="lp-h2 reveal-up rv-d1">{t("rv.title")}</h2>
              </div>
              <p className="rv__sub reveal-up rv-d2">{t("rv.sub")}</p>
            </div>
            <RukaFilm />
            <ul className="rv__chips">
              {chips.map((c, i) => (
                <li key={i} className={`rv__chip reveal-up rv-d${(i % 5) + 1}`}><span className="lp-flake">❄</span>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- AVAILABILITY (read-only season calendar) ---------------- */}
        <section className="lp-sec lp-avail" id="lp-terminy">
          <div className="container">
            <span className="lp-kicker reveal-up">{range}</span>
            <h2 className="lp-h2 reveal-up rv-d1">{t("av.title")}</h2>
            <p className="lp-pkgs__sub reveal-up rv-d2">{t("av.sub")}</p>
            <div className="lp-avail__board reveal-up rv-d3">
              <IceCalendar win={SEASON} lang={lang} t={t} />
            </div>
          </div>
        </section>

        {/* ---------------- GALLERY ---------------- */}
        <section className="lp-gallery">
          {GALLERY.map((g, i) => (
            <figure key={g.full} className={`lp-gal zoomable reveal-scale rv-d${(i % 3) + 1}`} onClick={() => openLightbox(full, i)}>
              <img src={g.thumb} alt="" loading="lazy" decoding="async" />
              <span className="lp-gal__zoom">⤢</span>
            </figure>
          ))}
        </section>

        <VideoBlock videos={YT} className="yts--ice" />

        {/* ---------------- CTA ---------------- */}
        <section className="lp-sec lp-sec--deep lp-cta">
          <div className="container lp-cta__inner">
            <div>
              <span className="lp-kicker reveal-up">{t("p.tag")}</span>
              <h2 className="lp-h2 lp-h2--light reveal-up rv-d1">{t("cta.title")}</h2>
              <p className="lp-cta__sub reveal-up rv-d2">{t("cta.sub")}</p>
            </div>
            <div className="lp-cta__btns reveal-up rv-d3">
              <a href={`mailto:${CONTACT.email}?subject=Ice%20Driving%20Experience%20%E2%80%94%20Ruka%202027`} className="btn lp-btn">{t("cta.mail")} <span className="btn__arrow">›</span></a>
              <a href={CONTACT.phoneHref} className="btn lp-btn--ghost">{t("cta.call")} · {CONTACT.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LangSwitch />
    </div>
  );
}

/* Tyre tracks drifting across the frozen lake, "driven" in as you scroll (same as the main site). */
function DriftTracks({ flip = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        el.style.setProperty("--tp", Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.85))).toFixed(3));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const fl = "M-40,236 C 200,246 300,120 520,108 C 750,96 830,236 1060,226 C 1245,218 1330,138 1480,104";
  const fr = "M-40,262 C 200,272 300,146 520,134 C 750,122 830,262 1060,252 C 1245,244 1330,164 1480,130";
  const rl = "M-40,300 C 200,312 300,180 520,166 C 750,152 830,300 1060,290 C 1245,282 1330,204 1480,170";
  const rr = "M-40,330 C 200,342 300,210 520,196 C 750,182 830,330 1060,320 C 1245,312 1330,234 1480,200";
  return (
    <svg className={`lp-drift ${flip ? "lp-drift--flip" : ""}`} ref={ref} viewBox="0 0 1440 360" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <filter id="lpRough" x="-2%" y="-20%" width="104%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9 0.05" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter="url(#lpRough)">
        {[fl, fr, rl, rr].map((d, i) => (
          <g key={i} className={`lp-tread ${i > 1 ? "lp-tread--rear" : ""}`}>
            <path className="lp-tread__press" d={d} pathLength="1" />
            <path className="lp-tread__blocks" d={d} pathLength="1" />
            <path className="lp-tread__groove" d={d} pathLength="1" />
            <path className="lp-tread__edge" d={d} pathLength="1" />
          </g>
        ))}
      </g>
      <path className="lp-drift__chips" d={rr} pathLength="1" />
      <path className="lp-drift__chips lp-drift__chips--2" d={rl} pathLength="1" />
    </svg>
  );
}

/* drifting snow — pure CSS particles */
function Snow() {
  return (
    <div className="lp-snow" aria-hidden="true">
      {Array.from({ length: 40 }, (_, i) => (
        <span key={i} style={{
          ["--x"]: `${(i * 37) % 100}%`,
          ["--d"]: `${9 + ((i * 7) % 11)}s`,
          ["--delay"]: `${-((i * 3) % 12)}s`,
          ["--s"]: `${2 + ((i * 5) % 4)}px`,
          ["--o"]: 0.25 + ((i % 5) * 0.13),
        }} />
      ))}
    </div>
  );
}
