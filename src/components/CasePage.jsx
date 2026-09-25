import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import useSeo from '../hooks/useSeo'
import { company } from '../config/company'
import { findCase, casePath } from '../config/cases'
import { SERVICES, findService, servicePath } from '../config/services'
import { fmt } from '../utils/format'
import Breadcrumbs from './Breadcrumbs'
import NotFound from './NotFound'
import './ContentPage.css'
import './CaseStudies.css'

// /case-studies/:slug — one page per entry in config/cases.js,
// copy from translations: casePage (labels) + cases.items[slug]
export default function CasePage() {
  const study = findCase(useParams().slug)
  return study ? <CaseContent study={study} /> : <NotFound />
}

function CaseContent({ study }) {
  const { locale } = useLanguage()
  useSeo(study.key)
  const t = locale.casePage
  const item = locale.cases.items[study.slug]

  return (
    <main id="main" tabIndex={-1} className="case-page">
      <header className="page-hero">
        <div className="page-hero__inner">
          <Breadcrumbs routeKey={study.key} />
          <span className="page-eyebrow">{t.eyebrow} · {item.category}</span>
          <h1 className="page-hero__title">{item.title}</h1>
          {/* Visible attribution: the project predates the company (config/cases.js) */}
          <p className="case-page__note">
            {fmt(t.note, { legalName: company.legalName, year: company.foundingYear })}
          </p>
        </div>
      </header>

      <div className="page-body">
        <Section title={t.client}><p className="case-page__text">{item.client}</p></Section>
        <Section title={t.challenge}><p className="case-page__text">{item.challenge}</p></Section>
        <Section title={t.solution}><p className="case-page__text">{item.solution}</p></Section>
        <Section title={t.outcome}><p className="case-page__text">{item.outcome}</p></Section>

        {study.technologies.length > 0 && (
          <Section title={t.technologies}>
            <ul className="tag-list">
              {study.technologies.map((tech) => <li key={tech} className="tag tag--teal">{tech}</li>)}
            </ul>
          </Section>
        )}

        <Section title={t.services}>
          <ul className="page-links">
            {/* Short service names (homepage card titles): the full page names can
                carry company-wide capabilities (e.g. "L1–L3") that this project's
                own scope does not include */}
            {study.services.map((slug) => (
              <li key={slug}>
                <Link to={servicePath(slug)}>{locale.services.cards[SERVICES.indexOf(findService(slug))].title} →</Link>
              </li>
            ))}
          </ul>
        </Section>

        {study.related.length > 0 && (
          <Section title={t.related}>
            <div className="teaser-grid">
              {study.related.map((slug) => {
                const related = locale.cases.items[slug]
                return (
                  <article key={slug} className="teaser">
                    <span className="teaser__category">{related.category}</span>
                    <h3><Link to={casePath(slug)}>{related.title}</Link></h3>
                    <p>{related.cardBody}</p>
                    <span className="teaser__more" aria-hidden="true">{locale.cases.readLink}</span>
                  </article>
                )
              })}
            </div>
          </Section>
        )}

        <section className="page-cta">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.body}</p>
          <Link to="/contact" className="btn btn-primary btn-lg">{locale.servicePage.cta}</Link>
        </section>
      </div>
    </main>
  )
}

function Section({ title, children }) {
  return (
    <section className="page-section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}
