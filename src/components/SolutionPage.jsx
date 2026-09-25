import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import useSeo from '../hooks/useSeo'
import { company } from '../config/company'
import { findSolution } from '../config/solutions'
import { casePath } from '../config/cases'
import { SERVICES, findService, servicePath } from '../config/services'
import { fmt } from '../utils/format'
import Breadcrumbs from './Breadcrumbs'
import NotFound from './NotFound'
import './ContentPage.css'
import './ServicePage.css'
import './SolutionPage.css'

// /solutions/:slug — one page per entry in config/solutions.js,
// copy from translations: solutionPages[slug]
export default function SolutionPage() {
  const solution = findSolution(useParams().slug)
  return solution ? <SolutionContent solution={solution} /> : <NotFound />
}

function SolutionContent({ solution }) {
  const { locale } = useLanguage()
  useSeo(solution.key)
  const t = locale.solutionPages[solution.slug]
  const caseTitle = (slug) => locale.cases.items[slug].title

  return (
    <main id="main" tabIndex={-1} className="solution-page">
      <header className="page-hero">
        <div className="page-hero__inner">
          <Breadcrumbs routeKey={solution.key} />
          <span className="page-eyebrow">{t.eyebrow}</span>
          <h1 className="page-hero__title">{t.h1}</h1>
          <p className="page-hero__lead">{t.intro}</p>
          <Link to="/contact" className="btn btn-primary btn-lg">{locale.servicePage.cta}</Link>
          {/* Entity clarity: OpenText makes the products; VOTUM is a separate company */}
          <p className="solution-page__note">{t.productNote}</p>
        </div>
      </header>

      <div className="page-body">
        <Section title={t.challengesTitle}>
          <ul className="page-list">
            {t.challenges.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Section>

        <Section title={t.capabilitiesTitle}>
          <div className="service-grid">
            {t.capabilities.map((c) => (
              <div key={c.title} className="service-item">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {t.sections.map((section) => (
          <Section key={section.title} title={section.title}>
            <p className="solution-page__text">{section.body}</p>
            {section.points && (
              <ul className="page-list page-list--check">
                {section.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
            {section.tiers && (
              <dl className="solution-page__tiers">
                {section.tiers.map((tier) => (
                  <div key={tier.level}>
                    <dt>{tier.level}</dt>
                    <dd>{tier.text}</dd>
                  </div>
                ))}
              </dl>
            )}
            {section.note && <p className="solution-page__text solution-page__text--muted">{section.note}</p>}
            {section.evidence && (
              <p className="solution-page__evidence">
                {t.evidenceLabel} <Link to={casePath(section.evidence)}>{caseTitle(section.evidence)} →</Link>
              </p>
            )}
          </Section>
        ))}

        <Section title={t.technologiesTitle}>
          <ul className="tag-list">
            {solution.technologies.map((tech) => <li key={tech} className="tag tag--teal">{tech}</li>)}
          </ul>
        </Section>

        <Section title={t.casesTitle}>
          <p className="solution-page__text solution-page__text--muted">
            {fmt(t.casesNote, { legalName: company.legalName, year: company.foundingYear })}
          </p>
          <div className="teaser-grid">
            {solution.cases.map((slug) => {
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
        </Section>

        <Section title={t.servicesTitle}>
          <ul className="page-links">
            {solution.services.map((slug) => (
              <li key={slug}>
                <Link to={servicePath(slug)}>{locale.services.cards[SERVICES.indexOf(findService(slug))].title} →</Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t.approachTitle}>
          <ol className="service-steps">
            {t.approach.map((step, i) => (
              <li key={step.title}>
                <span className="service-steps__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

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
