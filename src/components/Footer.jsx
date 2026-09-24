import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { company, socialLinks } from '../config/company'
import { features } from '../config/features'
import './Footer.css'

const YEAR = new Date().getFullYear()

const SOCIAL_ICONS = {
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  x: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  ),
}

export default function Footer() {
  const { locale } = useLanguage()
  const t = locale.footer

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/logo_word.svg" alt={company.tradingName} height="36" />
          </div>

          <p className="footer__tagline">
            {t.tagline.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </p>

          {/* Provider identification (Bulgarian E-Commerce Act) — always visible */}
          <address className="footer__legal">
            <span>{company.legalName}</span>
            {company.address && (
              <span>{company.address.street}, {company.address.postalCode} {company.address.city}, {company.address.country}</span>
            )}
            {company.registrationNumber && <span>UIC {company.registrationNumber}{company.vatNumber && ` · VAT ${company.vatNumber}`}</span>}
            {company.representative && <span>{company.representative}</span>}
          </address>

          {/* Only profiles with a real URL in config/company.js are rendered */}
          {socialLinks.length > 0 && (
            <div className="footer__socials">
              {socialLinks.map(({ key, label, url }) => (
                <a key={key} href={url} className="social-btn" aria-label={label}
                   target="_blank" rel="noopener noreferrer">
                  {SOCIAL_ICONS[key]}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="footer__right">
          <nav className="footer__col" aria-label={t.company.title}>
            <div className="footer__col-title">{t.company.title}</div>
            <ul className="footer__links">
              {t.company.links.filter((link) => features.blog || link.href !== '/blog').map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <div className="footer__col-title">{t.contactTitle}</div>
            <ul className="footer__links">
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><a href={company.phone.href}>{company.phone.display}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        {/* The year is baked in at build time; a client in a later year is not an error */}
        <span suppressHydrationWarning>© {YEAR} {company.legalName} | {t.copyright}</span>
        <div className="footer__bottom-right">
          <Link to="/legal.html">{t.legalNotice}</Link>
          <Link to="/privacy.html">{t.privacy}</Link>
          <Link to="/terms.html">{t.terms}</Link>
          <Link to="/cookies.html">{t.cookies}</Link>
        </div>
      </div>
    </footer>
  )
}
