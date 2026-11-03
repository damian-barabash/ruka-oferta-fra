import { useI18n } from "../lib/i18n";
import { LANGS } from "../lib/content";

/* Language switch, fixed bottom-right: EN (default) / FI. */
export default function LangSwitch() {
  const { lang, setLang, t } = useI18n();
  return (
    <div className="lsw" role="group" aria-label={t("lang.label")}>
      <span className="lsw__glow" style={{ ["--x"]: LANGS.indexOf(lang) }} aria-hidden="true" />
      {LANGS.map((l) => (
        <button key={l} type="button" className={`lsw__b${l === lang ? " is-on" : ""}`} aria-pressed={l === lang} onClick={() => setLang(l)} lang={l}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
