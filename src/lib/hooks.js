import { useEffect } from "react";

// Scan the page for any .reveal* element and add `.in` when it scrolls into view (same as the main site).
export function useRevealOnScroll(deps = []) {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sel = ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale";
    const els = Array.from(document.querySelectorAll(sel)).filter((el) => !el.classList.contains("in"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const t = setTimeout(() => els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
    }), 900);
    return () => { io.disconnect(); clearTimeout(t); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export const narrow = () => typeof window !== "undefined" && window.matchMedia("(max-width: 900px)").matches;
