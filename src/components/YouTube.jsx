import { useEffect, useRef, useState } from "react";
import { useI18n } from "../lib/i18n";
import { CONTACT } from "../lib/content";
import "../styles/youtube.css";

const thumb = (id, size = "mqdefault") => `https://i.ytimg.com/vi_webp/${id}/${size}.webp`;
const embed = (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;

/* Same block as on the main site: big player + playlist. Nothing from YouTube loads before
   the visitor presses play — only the cover images. */
export default function VideoBlock({ videos, className = "" }) {
  const { t, lang } = useI18n();
  const [cur, setCur] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!videos.length) return null;
  const v = videos[cur];
  const name = (x) => x[lang] || x.en;
  const pick = (i) => { setCur(i); setPlaying(true); };
  const on = inView ? " in" : "";

  return (
    <section ref={ref} className={`yts yts--list ${className}`}>
      <div className="container yts__in">
        <div className={`yts__head reveal-up${on}`}>
          <div>
            <span className="eyebrow yts__eyebrow">{t("yt.eyebrow")}</span>
            <h2 className="h-section yts__title">{t("yt.title")}</h2>
          </div>
          <a className="yts__channel" href={CONTACT.youtube} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.1V8.9l5.8 3.1-5.8 3.1Z" /></svg>{t("yt.channel")} ›</a>
        </div>
        <div className="yts__grid">
          <div className={`yts__stage reveal-scale rv-d1${on}`}>
            {playing
              ? <iframe key={v.id} src={embed(v.id)} title={name(v)} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              : (
                <button type="button" className="yts__poster" onClick={() => setPlaying(true)} aria-label={`${t("yt.play")}: ${name(v)}`}>
                  <img key={v.id} src={thumb(v.id, "sddefault")} alt="" loading="lazy" />
                  <span className="yts__play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span>
                  <span className="yts__cap">{name(v)}</span>
                </button>
              )}
          </div>
          <div className={`yts__side reveal-up rv-d2${on}`}><ol className="yts__list">
            {videos.map((x, i) => (
              <li key={x.id}>
                <button type="button" className={`yts__item${i === cur ? " is-on" : ""}`} onClick={() => pick(i)} aria-current={i === cur ? "true" : undefined}>
                  <span className="yts__thumb"><img src={thumb(x.id)} alt="" loading="lazy" /><span className="yts__n">{String(i + 1).padStart(2, "0")}</span></span>
                  <span className="yts__name">{name(x)}</span>
                </button>
              </li>
            ))}
          </ol></div>
        </div>
      </div>
    </section>
  );
}
