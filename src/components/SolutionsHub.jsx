import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import useSeo from '../hooks/useSeo'
import { company } from '../config/company'
import { SERVICES, findService, servicePath } from '../config/services'
import { solutionPath } from '../config/solutions'
import { casePath } from '../config/cases'
import { fmt } from '../utils/format'
import Breadcrumbs from './Breadcrumbs'
import './ContentPage.css'
import './SolutionsHub.css'

// Card targets for the six solution areas (translations solutionsHub.cards,
// matched by `key`). Two areas have dedicated solution pages; the other four
// deliberately link to the existing service pages — no new detail routes.
const SOLUTION_AREAS = {
  modernization: solutionPath('application-modernization'),
  software:      servicePath('software-development'),
  devops:        servicePath('devops-cloud'),
  quality:       servicePath('test-automation'),
  operations:    servicePath('managed-services'),
  opentext:      solutionPath('opentext-adm'),
}

// Cases shown in "Solutions in practice": modernization + platform
// engineering + quality engineering (breadth beyond any single vendor).
const PROOF_CASES = [
  'insurance-data-archival-migration',
  'on-premise-kubernetes-platform',
  'automotive-test-automation-framework',
]

// /solutions — the hub: what problems VOTUM takes ownership of. The
// engineering disciplines themselves live on /services.
export default function SolutionsHub() {
  const { locale } = useLanguage()
  useSeo('solutions')
  const t = locale.solutionsHub

  return (
    <main id="main" tabIndex={-1} className="solutions-hub">
      <header className="page-hero">
        <div className="page-hero__inner">
          <Breadcrumbs routeKey="solutions" />
          <span className="page-eyebrow">{t.eyebrow}</span>
          <h1 className="page-hero__title">{t.h1}</h1>
          <p className="page-hero__lead">{t.lead}</p>
          <div className="solutions-hub__hero-ctas">
            <Link to="/contact" className="btn btn-primary btn-lg">{t.heroCta}</Link>
            <Link to="/case-studies" className="btn btn-secondary-teal btn-lg">{t.heroSecondary}</Link>
          </div>
        </div>
      </header>

      <div className="page-body">
        {/* Services = disciplines, solutions = problems */}
        <section className="page-section">
          <h2>{t.introTitle}</h2>
          {t.intro.map((p) => <p key={p} className="solutions-hub__text">{p}</p>)}
        </section>

        {/* Six equal solution areas — same card weight for all six */}
        <section className="page-section">
          <h2>{t.cardsTitle}</h2>
          <ul className="solutions-hub__cards">
            {t.cards.map((card, i) => (
              <li key={card.key}>
                <Link to={SOLUTION_AREAS[card.key]} className="solutions-hub__card">
                  <span className="solutions-hub__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <span className="solutions-hub__more" aria-hidden="true">{card.link} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Visually secondary to the cards above */}
        <section className="page-section">
          <h2>{t.capabilities.title}</h2>
          <p className="solutions-hub__text">{t.capabilities.intro}</p>
          <ul className="page-links">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={servicePath(s.slug)}>{locale.services.cards[SERVICES.indexOf(findService(s.slug))].title} →</Link>
              </li>
            ))}
          </ul>
          <p className="solutions-hub__text solutions-hub__text--muted">
            {t.capabilities.servicesCta.before} <Link to="/services">{t.capabilities.servicesCta.link} →</Link>
          </p>
        </section>

        <section className="page-section">
          <h2>{t.lifecycle.title}</h2>
          <ol className="solutions-hub__flow">
            {t.lifecycle.stages.map((stage, i) => (
              <li key={stage}>
                {i > 0 && <span className="solutions-hub__flow-arrow" aria-hidden="true">→</span>}
                <span className="solutions-hub__flow-stage">{stage}</span>
              </li>
            ))}
          </ol>
          <p className="solutions-hub__text">{t.lifecycle.body}</p>
        </section>

        <section className="page-section">
          <h2>{t.casesTitle}</h2>
          <p className="solutions-hub__text solutions-hub__text--muted">
            {fmt(t.casesNote, { legalName: company.legalName, year: company.foundingYear })}
          </p>
          <div className="teaser-grid">
            {PROOF_CASES.map((slug) => {
              const item = locale.cases.items[slug]
              return (
                <article key={slug} className="teaser">
                  <span className="teaser__category">{item.category}</span>
                  <h3><Link to={casePath(slug)}>{item.title}</Link></h3>
                  <p>{item.cardBody}</p>
                  <span className="teaser__more" aria-hidden="true">{locale.cases.readLink}</span>
                </article>
              )
            })}
          </div>
          {t.proofMore.map((proof) => (
            <p key={proof.slug} className="solutions-hub__text solutions-hub__text--muted">
              {proof.before} <Link to={casePath(proof.slug)}>{proof.link} →</Link>
            </p>
          ))}
        </section>

        <section className="page-cta">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.body}</p>
          <Link to="/contact" className="btn btn-primary btn-lg">{t.cta.button}</Link>
        </section>
      </div>
    </main>
  )
}
