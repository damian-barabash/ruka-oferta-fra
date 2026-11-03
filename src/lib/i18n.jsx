import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LANGS, TEXT } from "./content";

/* English by default; Finnish through the switch in the bottom-right corner (or ?lang=fi).
   The choice is remembered per browser; storage can be blocked, so every access is guarded. */
const KEY = "ruka_lang";
const Ctx = createContext(null);

function initialLang() {
  try {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (LANGS.includes(q)) return q;
    const s = localStorage.getItem(KEY);
    if (LANGS.includes(s)) return s;
  } catch { /* private mode */ }
  return "en";
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  const setLang = useCallback((l) => {
    if (!LANGS.includes(l)) return;
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    const T = TEXT[lang];
    document.documentElement.lang = lang;
    document.title = T["meta.title"];
    document.querySelector('meta[name="description"]')?.setAttribute("content", T["meta.desc"]);
  }, [lang]);

  const t = useCallback((k) => TEXT[lang][k] ?? TEXT.en[k] ?? k, [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
export const lines = (s) => String(s || "").split("\n").map((x) => x.trim()).filter(Boolean);
