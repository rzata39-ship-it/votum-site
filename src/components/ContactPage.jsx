import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import useSeo from '../hooks/useSeo'
import { company } from '../config/company'
import { SERVICES, servicePath } from '../config/services'
import { fmt } from '../utils/format'
import Breadcrumbs from './Breadcrumbs'
import './ContentPage.css'
import './ContactPage.css'

// /contact — every company fact comes from config/company.js. The form is the
// existing contact modal (same Formspree endpoint); no opening hours or
// walk-in claims: the address is the registered office.
export default function ContactPage({ onContact }) {
  const { locale } = useLanguage()
  useSeo('contact')
  const t = locale.contactPage
  const { address } = company

  return (
    <main id="main" tabIndex={-1} className="contact-page">
      <header className="page-hero">
        <div className="page-hero__inner">
          <Breadcrumbs routeKey="contact" />
          <span className="page-eyebrow">{t.eyebrow}</span>
          <h1 className="page-hero__title">{t.h1}</h1>
          <p className="page-hero__lead">{t.intro}</p>
          <div className="contact-page__actions">
            <button type="button" className="btn btn-primary btn-lg" onClick={onContact}>{t.send}</button>
            <a className="btn btn-secondary-teal btn-lg" href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </header>

      <div className="page-body">
        <div className="contact-page__grid">
          <section className="page-section">
            <h2>{t.detailsTitle}</h2>
            <dl className="contact-page__dl">
              <dt>{t.email}</dt>
              <dd><a href={`mailto:${company.email}`}>{company.email}</a></dd>
              <dt>{t.phone}</dt>
              <dd><a href={company.phone.href}>{company.phone.display}</a></dd>
            </dl>
          </section>

          <section className="page-section">
            <h2>{t.companyTitle}</h2>
            <p className="contact-page__entity">
              {fmt(t.operatedBy, { brand: company.tradingName, legalName: company.legalName })}
            </p>
            <dl className="contact-page__dl">
              {address && (
                <>
                  <dt>{t.registeredOffice}</dt>
                  <dd>{`${address.street}, ${address.postalCode} ${address.city}, ${address.country}`}</dd>
                </>
              )}
              {company.registrationNumber && (
                <>
                  <dt>{t.registration}</dt>
                  <dd>{company.registrationNumber}</dd>
                </>
              )}
              {company.vatNumber && (
                <>
                  <dt>{t.vat}</dt>
                  <dd>{company.vatNumber}</dd>
                </>
              )}
            </dl>
            <Link to="/legal.html" className="contact-page__legal">{t.legalLink}</Link>
          </section>
        </div>

        <section className="page-section">
          <h2>{t.servicesTitle}</h2>
          <ul className="page-links">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={servicePath(s.slug)}>{locale.seo[s.key].name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
