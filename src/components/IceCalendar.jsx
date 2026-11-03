import { isoOf, soldOutSet, windowMonths } from "../lib/ice";
import { LOCALE } from "../lib/content";

const WD = { en: ["MO", "TU", "WE", "TH", "FR", "SA", "SU"], fi: ["MA", "TI", "KE", "TO", "PE", "LA", "SU"] };

/* Read-only month grids of the season window (same look as the main site):
   free · sold (sold out) · out (outside the season). */
export default function IceCalendar({ win, lang = "en", t }) {
  const months = windowMonths(win);
  if (!months.length) return null;
  const sold = soldOutSet(win);
  const stateOf = (iso) => (iso < win.date_from || iso > win.date_to ? "out" : sold.has(iso) ? "sold" : "free");
  const TIP = { sold: t("av.sold"), out: t("av.out"), free: t("av.free") };

  return (
    <div className="ri-calwrap is-ro">
      <div className="ri-cal">
        {months.map((m) => {
          const y = m.getFullYear(), mo = m.getMonth();
          const lead = (new Date(y, mo, 1).getDay() + 6) % 7;
          const dim = new Date(y, mo + 1, 0).getDate();
          const cells = [];
          for (let i = 0; i < lead; i++) cells.push(null);
          for (let d = 1; d <= dim; d++) cells.push(new Date(y, mo, d));
          return (
            <div className="ri-cal__month" key={`${y}-${mo}`}>
              <div className="ri-cal__name">
                {m.toLocaleDateString(LOCALE[lang] || "en-GB", { month: "long", year: "numeric" }).toUpperCase()}
              </div>
              <div className="ri-cal__wd">{(WD[lang] || WD.en).map((w) => <span key={w}>{w}</span>)}</div>
              <div className="ri-cal__grid">
                {cells.map((d, i) => {
                  if (!d) return <span key={`e${i}`} className="ri-day ri-day--empty" />;
                  const iso = isoOf(d);
                  const st = stateOf(iso);
                  return (
                    <span key={iso} className={`ri-day is-${st}`} title={TIP[st]}>
                      {d.getDate()}{st === "sold" && <i className="ri-day__x" aria-hidden="true" />}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="ri-legend">
        <span><i className="ri-legend__sw is-free" />{t("av.free")}</span>
        <span><i className="ri-legend__sw is-sold" />{t("av.sold")}</span>
        <span><i className="ri-legend__sw is-out" />{t("av.out")}</span>
      </div>
    </div>
  );
}
