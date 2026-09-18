import { Link } from 'react-router-dom'
import { company, privacyContactEmail } from '../../config/company'
import useSeo from '../../hooks/useSeo'
import './Legal.css'

const PAGES = [
  { key: 'legal',   to: '/legal.html',   label: 'Legal Notice' },
  { key: 'privacy', to: '/privacy.html', label: 'Privacy Policy' },
  { key: 'terms',   to: '/terms.html',   label: 'Terms and Conditions' },
  { key: 'cookies', to: '/cookies.html', label: 'Cookie Policy' },
]

/**
 * Shared shell for the legal pages. The legal texts are English only and
 * are deliberately NOT part of translations.js — they must not be translated
 * without legal review.
 *
 * All company facts come from config/company.js. Sections that depend on
 * data which is still `null` there are omitted rather than shown with
 * placeholders (see LEGAL_AND_COMPANY_DATA_REQUIRED.md).
 */
export default function LegalPage({ pageKey, title, children }) {
  useSeo(pageKey)
  const lastUpdated = company.legal.lastUpdated[pageKey]

  return (
    <main id="main" tabIndex={-1} className="legal-page">
      <div className="legal-page__inner">
        <header className="legal-page__header">
          <span className="eyebrow">Legal</span>
          <h1 className="legal-page__title">{title}</h1>
          {lastUpdated && <p className="legal-page__updated">Last updated: {lastUpdated}</p>}
        </header>

        <div className="legal-page__content">{children}</div>

        <nav className="legal-page__nav" aria-label="Legal documents">
          {PAGES.map((p) => (
            <Link key={p.key} to={p.to} aria-current={p.key === pageKey ? 'page' : undefined}>
              {p.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  )
}

// Contact block used at the end of every legal page — confirmed fields only
export function LegalContact({ privacy = false }) {
  const email = privacy ? privacyContactEmail : company.email
  const { address } = company

  return (
    <address className="legal-page__contact">
      <strong>{company.legalName}</strong>
      {company.legalNameLocal && <span lang="bg">{company.legalNameLocal}</span>}
      {company.representative && <span>Represented by: {company.representative}</span>}
      {address && (
        <span>{[address.street, [address.postalCode, address.city].filter(Boolean).join(' '), address.country].filter(Boolean).join(', ')}</span>
      )}
      {company.registrationNumber && <span>Company registration number (UIC): {company.registrationNumber}</span>}
      {company.vatNumber && <span>VAT number: {company.vatNumber}</span>}
      <span>Email: <a href={`mailto:${email}`}>{email}</a></span>
      <span>Phone: <a href={company.phone.href}>{company.phone.display}</a></span>
    </address>
  )
}
