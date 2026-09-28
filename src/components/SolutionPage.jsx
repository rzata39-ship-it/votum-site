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
  const evidence = (slug) => slug && (
    <p className="solution-page__evidence">
      {t.evidenceLabel} <Link to={casePath(slug)}>{caseTitle(slug)} →</Link>
    </p>
  )

  return (
    <main id="main" tabIndex={-1} className="solution-page">
      <header className="page-hero">
        <div className="page-hero__inner">
          <Breadcrumbs routeKey={solution.key} />
          <span className="page-eyebrow">{t.eyebrow}</span>
          <h1 className="page-hero__title">{t.h1}</h1>
          <p className="page-hero__lead">{t.lead}</p>
          {t.intro.map((p) => <p key={p} className="solution-page__intro">{p}</p>)}
          <Link to="/contact" className="btn btn-primary btn-lg">{locale.servicePage.cta}</Link>
        </div>
      </header>

      <div className="page-body">
        {/* Product overview: core products first and emphasized */}
        <Section title={t.productsTitle}>
          <ul className="solution-products">
            {t.products.map((p) => (
              <li key={p.name} className={`solution-product${p.core ? ' solution-product--core' : ''}`}>
                <span className="solution-page__label">{p.core ? t.coreLabel : t.broaderLabel}</span>
                <h3>{p.name}</h3>
                <p>{p.role}</p>
              </li>
            ))}
          </ul>
          {/* Entity clarity: OpenText makes the products; VOTUM is a separate company */}
          <p className="solution-page__note">{t.productNote}</p>
        </Section>

        {t.core.map((s) => (
          <Section key={s.title} title={s.title} label={t.coreLabel} className="solution-core">
            <p className="solution-page__text">{s.body}</p>
            <CheckList items={s.points} columns />
            {s.sub && (
              <div className="solution-sub">
                <h3>{s.sub.title}</h3>
                <p className="solution-page__text">{s.sub.body}</p>
                {s.sub.points && <DotList items={s.sub.points} />}
                {s.sub.after && <p className="solution-page__text">{s.sub.after}</p>}
              </div>
            )}
            {evidence(s.evidence)}
          </Section>
        ))}

        <Section title={t.modernization.title}>
          <p className="solution-page__text">{t.modernization.body}</p>
          <DotList items={t.modernization.contents} columns />
          <p className="solution-page__text">{t.modernization.after}</p>
          <h3 className="solution-page__subhead">{t.modernization.pathsTitle}</h3>
          <CheckList items={t.modernization.paths} columns />
          <p className="solution-page__text solution-page__text--muted">{t.modernization.note}</p>
        </Section>

        <Section title={t.migration.title}>
          <p className="solution-page__text">{t.migration.body}</p>
          <Steps items={t.migration.steps} />
        </Section>

        {/* LoadRunner and PPM: shorter, side by side */}
        <div className="solution-broader">
          {t.broader.map((s) => (
            <Section key={s.title} title={s.title} label={t.broaderLabel}>
              <p className="solution-page__text">{s.body}</p>
              <CheckList items={s.points} />
              {evidence(s.evidence)}
            </Section>
          ))}
        </div>

        <Section title={t.ecosystem.title}>
          <p className="solution-page__text">{t.ecosystem.body}</p>
          <dl className="solution-map">
            {t.ecosystem.map.map((m) => (
              <div key={m.name}>
                <dt>{m.name}</dt>
                <dd>{m.role}</dd>
              </div>
            ))}
          </dl>
          <p className="solution-page__text">{t.ecosystem.surroundingText}</p>
          <Tags items={t.ecosystem.surrounding} />
          <p className="solution-page__text">{t.ecosystem.after}</p>
        </Section>

        <Section title={t.operations.title}>
          <p className="solution-page__text">{t.operations.body}</p>
          <dl className="solution-page__tiers">
            {t.operations.tiers.map((tier) => (
              <div key={tier.level}>
                <dt>{tier.level}</dt>
                <dd>{tier.text}</dd>
              </div>
            ))}
          </dl>
          <p className="solution-page__text">{t.operations.layersText}</p>
          <Tags items={t.operations.layers} />
          <p className="solution-page__text solution-page__text--muted">{t.operations.note}</p>
          {evidence(t.operations.evidence)}
        </Section>

        <Section title={t.casesTitle}>
          <p className="solution-page__text solution-page__text--muted">
            {fmt(t.casesNote, { legalName: company.legalName, year: company.foundingYear })}
          </p>
          <div className="teaser-grid">
            {solution.cases.map((slug) => {
              const item = locale.cases.items[slug]
              const teaser = t.caseTeasers?.[slug] ?? { title: item.title, body: item.cardBody }
              return (
                <article key={slug} className="teaser">
                  <span className="teaser__category">{item.category}</span>
                  <h3><Link to={casePath(slug)}>{teaser.title}</Link></h3>
                  <p>{teaser.body}</p>
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
          <Steps items={t.approach} />
        </Section>

        <section className="page-cta">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.body}</p>
          <Link to="/contact" className="btn btn-primary btn-lg">{t.cta.button}</Link>
        </section>
      </div>
    </main>
  )
}

function Section({ title, label, className, children }) {
  return (
    <section className={`page-section${className ? ` ${className}` : ''}`}>
      {label && <span className="solution-page__label">{label}</span>}
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function CheckList({ items, columns }) {
  return (
    <ul className={`page-list page-list--check${columns ? ' solution-page__columns' : ''}`}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}

function DotList({ items, columns }) {
  return (
    <ul className={`page-list${columns ? ' solution-page__columns' : ''}`}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}

function Tags({ items }) {
  return (
    <ul className="tag-list solution-page__tags">
      {items.map((item) => <li key={item} className="tag tag--teal">{item}</li>)}
    </ul>
  )
}

function Steps({ items }) {
  return (
    <ol className="service-steps">
      {items.map((step, i) => (
        <li key={step.title}>
          <span className="service-steps__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
