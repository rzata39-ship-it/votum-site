import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/useLanguage'
import { SERVICES, SERVICES_HUB_PATH, servicePath } from '../config/services'
import './Capabilities.css'

// Compact homepage capabilities strip — the five services as wrapping link
// chips (canonical card titles from translations, routes from
// config/services.js). Deliberately lighter than the Solutions Preview
// above it; the full service cards live on /services.
export default function Capabilities() {
  const ref = useReveal()
  const { locale } = useLanguage()
  const t = locale.services

  return (
    <section id="services" className="capabilities" ref={ref}>
      <div className="section-header reveal">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p>{t.lead}</p>
      </div>

      <ul className="capabilities__list reveal">
        {SERVICES.map((s) => (
          <li key={s.slug}>
            <Link to={servicePath(s.slug)} className="capabilities__item">
              {t.cards[s.slug].title}
              <span className="capabilities__arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="capabilities__all">
        <Link to={SERVICES_HUB_PATH}>{t.allLink}</Link>
      </p>
    </section>
  )
}
