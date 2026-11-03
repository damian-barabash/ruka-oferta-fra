import { useEffect, useRef, useState } from "react";
import { useI18n } from "../lib/i18n";
import { RUKA_VIDEO } from "../lib/content";
import { narrow } from "../lib/hooks";

/* The Ruka film (sits where the packages block is on the main site).
   Muted autoplay loop while on screen, paused off screen; nothing is downloaded until the block
   comes near the viewport. The visitor can turn the sound on and pause. */
export default function RukaFilm() {
  const { t } = useI18n();
  const wrap = useRef(null);
  const vid = useRef(null);
  const bar = useRef(null);
  const [near, setNear] = useState(false);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const userPaused = useRef(false);

  // start loading ~1 screen before the block
  useEffect(() => {
    const el = wrap.current;
    if (!el || typeof IntersectionObserver === "undefined") { setNear(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect(); } }, { rootMargin: "100% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // play while visible
  useEffect(() => {
    const el = wrap.current, v = vid.current;
    if (!near || !el || !v || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !userPaused.current) v.play().catch(() => {});
      else if (!e.isIntersecting) v.pause();
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, [near]);

  // thin progress line, written straight to the DOM
  useEffect(() => {
    const v = vid.current;
    if (!v) return;
    const onTime = () => { if (bar.current && v.duration) bar.current.style.transform = `scaleX(${v.currentTime / v.duration})`; };
    const onPlay = () => setPaused(false);
    const onPause = () => setPaused(true);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => { v.removeEventListener("timeupdate", onTime); v.removeEventListener("play", onPlay); v.removeEventListener("pause", onPause); };
  }, [near]);

  const toggleSound = () => {
    const v = vid.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) { userPaused.current = false; v.play().catch(() => {}); }
  };
  const togglePlay = () => {
    const v = vid.current;
    if (!v) return;
    if (v.paused) { userPaused.current = false; v.play().catch(() => {}); }
    else { userPaused.current = true; v.pause(); }
  };

  return (
    <div className="rf reveal-scale rv-d2" ref={wrap}>
      <div className="rf__frame">
        <video
          ref={vid}
          className="rf__vid"
          poster={RUKA_VIDEO.poster}
          muted
          loop
          playsInline
          preload="none"
          onClick={togglePlay}
        >
          {near && <source src={narrow() ? RUKA_VIDEO.webmMobile : RUKA_VIDEO.webm} type="video/webm" />}
          {near && <source src={RUKA_VIDEO.mp4} type="video/mp4" />}
        </video>
        <span className="rf__frost" aria-hidden="true" />
        <span className="rf__corner rf__corner--tl" aria-hidden="true" />
        <span className="rf__corner rf__corner--tr" aria-hidden="true" />
        <span className="rf__corner rf__corner--bl" aria-hidden="true" />
        <span className="rf__corner rf__corner--br" aria-hidden="true" />
        <span className="rf__geo" aria-hidden="true">RUKA · 66°10′N 29°09′E</span>

        <div className="rf__ctrls">
          <button type="button" className="rf__btn" onClick={togglePlay} aria-label={paused ? t("rv.play") : t("rv.pause")}>
            {paused
              ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>}
          </button>
          <button type="button" className={`rf__btn rf__btn--sound${muted ? "" : " is-on"}`} onClick={toggleSound}>
            {muted
              ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm12.6 3 2.7-2.7-1.1-1.1-2.7 2.7-2.7-2.7-1.1 1.1 2.7 2.7-2.7 2.7 1.1 1.1 2.7-2.7 2.7 2.7 1.1-1.1z" /></svg>
              : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm11.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM13 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z" /></svg>}
            <span>{muted ? t("rv.soundOn") : t("rv.soundOff")}</span>
          </button>
        </div>
        <span className="rf__prog" aria-hidden="true"><i ref={bar} /></span>
      </div>
    </div>
  );
}
