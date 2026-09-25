import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import useSeo from '../hooks/useSeo'
import { company } from '../config/company'
import { CASES, casePath } from '../config/cases'
import { fmt } from '../utils/format'
import Breadcrumbs from './Breadcrumbs'
import './ContentPage.css'
import './CaseStudies.css'

// /case-studies — one card per entry in config/cases.js
export default function CaseStudiesHub() {
  const { locale } = useLanguage()
  useSeo('caseStudies')
  const t = locale.caseStudiesHub

  return (
    <main id="main" tabIndex={-1} className="case-studies-hub">
      <header className="page-hero">
        <div className="page-hero__inner">
          <Breadcrumbs routeKey="caseStudies" />
          <span className="page-eyebrow">{t.eyebrow}</span>
          <h1 className="page-hero__title">{t.h1}</h1>
          <p className="page-hero__lead">{t.intro}</p>
        </div>
      </header>

      <div className="page-body">
        <section className="page-section">
          <h2>{t.cardsTitle}</h2>
          <div className="teaser-grid">
            {CASES.map((c) => {
              const item = locale.cases.items[c.slug]
              return (
                <article key={c.slug} className="teaser">
                  <span className="teaser__category">{item.category}</span>
                  <h3><Link to={casePath(c.slug)}>{item.title}</Link></h3>
                  <p>{item.cardBody}</p>
                  <span className="teaser__more" aria-hidden="true">{locale.cases.readLink}</span>
                </article>
              )
            })}
          </div>
        </section>

        <section className="page-section">
          <h2>{t.portfolioTitle}</h2>
          <p className="case-studies-hub__text">
            {fmt(t.portfolio, { year: company.foundingYear, teamSince: company.teamSince })}
          </p>
        </section>

        <section className="page-cta">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.body}</p>
          <Link to="/contact" className="btn btn-primary btn-lg">{locale.servicePage.cta}</Link>
        </section>
      </div>
    </main>
  )
}
