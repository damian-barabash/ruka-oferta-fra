# ruka-oferta-fra

Offer landing **Ice Driving Experience — Ruka, Lapland 2027** for `ruka.icedriving.pl`.
A static copy of the Laponia product page from fastlineracingacademy.pl (React + Vite, no backend):
no site menu, no WhatsApp, no packages/payments — a Ruka film block sits where the packages were.
English by default, Finnish via the switch in the bottom-right corner (or `?lang=fi`).

- Texts, season dates, sold-out days, gallery, YouTube list: `src/lib/content.js`
- Media: `public/assets/` (hero video + logo copied from the main site, gallery photos downloaded from Storage, `ruka/` film), OG card `public/og.jpg`
- `npm run dev` / `npm run build`; deploy = GitHub Actions → Pages (`.github/workflows/deploy.yml`), custom domain from `public/CNAME`
