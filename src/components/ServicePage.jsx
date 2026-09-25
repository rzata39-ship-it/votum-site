import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import useSeo from '../hooks/useSeo'
import { findService, servicePath } from '../config/services'
import { casePath, casesForService } from '../config/cases'
import { solutionsForService } from '../config/solutions'
import Breadcrumbs from './Breadcrumbs'
import RelatedSolutions from './RelatedSolutions'
import NotFound from './NotFound'
import './ContentPage.css'
import './ServicePage.css'

// /services/:slug — one page per entry in config/services.js,
// copy from translations: servicePage (labels) + servicePages[slug]
export default function ServicePage() {
  const service = findService(useParams().slug)
  return service ? <ServiceContent service={service} /> : <NotFound />
}

function ServiceContent({ service }) {
  const { locale } = useLanguage()
  useSeo(service.key)
  const t = locale.servicePage
  const p = locale.servicePages[service.slug]

  return (
    <main id="main" tabIndex={-1} className="service-page">
      <header className="page-hero">
        <div className="page-hero__inner">
          <Breadcrumbs routeKey={service.key} />
          <span className="page-eyebrow">{t.eyebrow}</span>
          <h1 className="page-hero__title">{p.h1}</h1>
          {p.intro.map((para) => <p key={para} className="page-hero__lead">{para}</p>)}
          <Link to="/contact" className="btn btn-primary btn-lg">{t.cta}</Link>
        </div>
      </header>

      <div className="page-body">
        <Section title={t.problems}>
          <ul className="page-list">
            {p.problems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Section>

        <Section title={t.capabilities}>
          <div className="service-grid">
            {p.capabilities.map((c) => (
              <div key={c.title} className="service-item">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {p.tiers && (
          <Section title={p.tiersTitle} lead={p.tiersLead}>
            <div className="service-tiers">
              {p.tiers.map((tier) => (
                <div key={tier.level} className="service-tier">
                  <span className="service-tier__level">{tier.level}</span>
                  <h3>{tier.title}</h3>
                  <ul className="page-list">
                    {tier.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section title={t.deliverables}>
          <ul className="page-list page-list--check">
            {p.deliverables.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Section>

        {p.technologies.length > 0 && (
          <Section title={t.technologies}>
            <ul className="tag-list">
              {p.technologies.map((tech) => <li key={tech} className="tag tag--teal">{tech}</li>)}
            </ul>
          </Section>
        )}

        <Section title={t.cases}>
          <div className="teaser-grid">
            {/* Cases that list this service in config/cases.js → their case pages
                (which carry the attribution note) */}
            {casesForService(service.slug).map((c) => {
              const item = locale.cases.items[c.slug]
              return (
                <article key={c.slug} className="teaser">
                  <span className="teaser__category">{item.category}</span>
                  <h3><Link to={casePath(c.slug)}>{item.title}</Link></h3>
                  <p>{item.cardBody}</p>
                  <span className="teaser__more" aria-hidden="true">{t.caseLink}</span>
                </article>
              )
            })}
          </div>
        </Section>

        <Section title={t.approach}>
          <ol className="service-steps">
            {p.approach.map((step, i) => (
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

        <Section title={t.related}>
          <ul className="page-links">
            {service.related.map((slug) => (
              <li key={slug}>
                <Link to={servicePath(slug)}>{locale.seo[findService(slug).key].name} →</Link>
              </li>
            ))}
          </ul>
        </Section>

        <RelatedSolutions solutions={solutionsForService(service.slug)} pageSlug={service.slug} />

        <section className="page-cta">
          <h2>{p.cta.title}</h2>
          <p>{p.cta.body}</p>
          <Link to="/contact" className="btn btn-primary btn-lg">{t.cta}</Link>
        </section>
      </div>
    </main>
  )
}

function Section({ title, lead, children }) {
  return (
    <section className="page-section">
      <h2>{title}</h2>
      {lead && <p className="page-section__lead">{lead}</p>}
      {children}
    </section>
  )
}
