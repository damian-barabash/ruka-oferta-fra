import { useI18n } from "../lib/i18n";
import { CONTACT, HERO } from "../lib/content";

/* Small standalone footer: brand, contact, socials, link to the main site. */
export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="rft">
      <div className="container rft__grid">
        <div className="rft__brand">
          <a href={CONTACT.site} target="_blank" rel="noopener noreferrer" aria-label="Fastline Racing Academy">
            <img src={HERO.fra} alt="Fastline Racing Academy" className="rft__logo" width="180" height="97" loading="lazy" />
          </a>
          <p>{t("ft.about")}</p>
        </div>
        <div className="rft__col">
          <span className="rft__h">{t("ft.contact")}</span>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <a href={CONTACT.site} target="_blank" rel="noopener noreferrer">{t("ft.site")} ↗</a>
        </div>
        <div className="rft__col">
          <span className="rft__h">{t("ft.follow")}</span>
          <div className="rft__soc">
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z" /></svg></a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.9 7c-.1-1.6-.4-3-1.6-4.2S17.6 1.2 16 1.1C14.4 1 9.6 1 8 1.1 6.4 1.2 5 1.5 3.8 2.7S2.2 5.4 2.1 7C2 8.6 2 13.4 2.1 15c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6.4 0-8zm-2.1 9.8a3.3 3.3 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4a3.3 3.3 0 0 1-1.8-1.8c-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7a3.3 3.3 0 0 1 1.8-1.8c1.3-.5 4.3-.4 5.7-.4s4.4-.1 5.7.4a3.3 3.3 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z" /></svg></a>
            <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.1V8.9l5.8 3.1-5.8 3.1Z" /></svg></a>
          </div>
        </div>
      </div>
      <div className="container rft__bottom">
        <span>© {new Date().getFullYear()} {t("ft.rights")}</span>
        <span className="rft__check" aria-hidden="true" />
      </div>
    </footer>
  );
}
