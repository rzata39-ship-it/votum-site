import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { CASES, CASES_HUB_PATH, casePath } from '../config/cases'
import './Cases.css'

// Homepage rows (indexes into config/cases.js): one wide card, then two rows of two
const ROWS = [
  { className: 'cases-row--feature-first', variants: ['feature'],                 from: 0 },
  { className: 'cases-row--hero-first',    variants: ['hero', 'supporting'],      from: 1 },
  { className: 'cases-row--equal',         variants: ['supporting', 'supporting'], from: 3 },
]

// Each card is a real link to its case page (/case-studies/<slug>); the full
// case text lives there, not on the homepage.
function CaseCard({ slug, item, variant }) {
  return (
    <Link to={casePath(slug)} className={`case-card case-card--${variant} case-card--clean case-card--clickable`}>
      <div className="case-card__content">
        <span className="case-card__eyebrow">{item.category}</span>
        <h3 className="case-card__title">{item.title}</h3>
        <p className="case-card__body">{item.cardBody}</p>
        <div className="case-card__stats">
          {item.stats.map((stat) => (
            <div className="case-stat" key={`${stat.value}-${stat.label}`}>
              <span>{stat.value}</span>
              {stat.label}
            </div>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default function Cases() {
  const { locale } = useLanguage()
  const t = locale.cases

  return (
    <section id="work" className="cases-section">
      <div className="section-header">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p>{t.lead}</p>
      </div>

      <div className="cases-layout">
        {ROWS.map((row) => (
          <div key={row.className} className={`cases-row ${row.className}`}>
            {row.variants.map((variant, i) => {
              const c = CASES[row.from + i]
              return c && <CaseCard key={c.slug} slug={c.slug} item={t.items[c.slug]} variant={variant} />
            })}
          </div>
        ))}
      </div>

      <p className="cases-section__all">
        <Link to={CASES_HUB_PATH}>{t.allLink}</Link>
      </p>
    </section>
  )
}
