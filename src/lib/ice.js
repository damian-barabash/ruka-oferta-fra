// Season-window helpers (copied from the main site, plus Finnish dates).
import { LOCALE } from "./content";

export const parseISO = (iso) => {
  const [y, m, d] = String(iso || "").split("-").map(Number);
  return y && m && d ? new Date(y, m - 1, d) : null;
};
export const isoOf = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export const addDays = (iso, n) => {
  const d = parseISO(iso);
  if (!d) return iso;
  d.setDate(d.getDate() + n);
  return isoOf(d);
};

export const iceDateRange = (w, lang = "en") => {
  if (!w) return "";
  const a = parseISO(w.date_from), b = parseISO(w.date_to);
  if (!a || !b) return "";
  if (lang === "fi") return `${a.getDate()}.${a.getMonth() + 1}. – ${b.getDate()}.${b.getMonth() + 1}.${b.getFullYear()}`;
  const short = (d) => d.toLocaleDateString(LOCALE[lang] || "en-GB", { day: "numeric", month: "long" });
  return `${short(a)} – ${short(b)} ${b.getFullYear()}`;
};

export const soldOutSet = (w) => new Set((Array.isArray(w?.sold_out) ? w.sold_out : []).map((d) => String(d).slice(0, 10)));

export const windowMonths = (w) => {
  const from = parseISO(w?.date_from), to = parseISO(w?.date_to);
  if (!from || !to) return [];
  const out = [];
  const cur = new Date(from.getFullYear(), from.getMonth(), 1);
  while (cur <= to) { out.push(new Date(cur)); cur.setMonth(cur.getMonth() + 1); }
  return out;
};
