import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/useLanguage'
import { SERVICES, servicePath } from '../config/services'
import './Services.css'

const VARIANTS = ['green', 'teal', 'green', 'teal', 'green']

const ICONS = [
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#78d64b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6ad6a1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" y1="19" x2="20" y2="19"/>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#78d64b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z"/>
    <path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z"/>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6ad6a1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <polyline points="6 9 9 12 12 9 15 12 18 9"/>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#78d64b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <polyline points="8.5 11 10.5 13 14 9"/>
  </svg>,
]

const DELAY = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', 'reveal-delay-5']

export default function Services() {
  const ref = useReveal()
  const { locale } = useLanguage()
  const t = locale.services

  const services = t.cards.map((card, i) => ({
    ...card,
    icon: ICONS[i],
    variant: VARIANTS[i],
    path: servicePath(SERVICES[i].slug),
  }))

  return (
    <>
      <section id="services" className="section" ref={ref}>
        <div className="section-header reveal">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lead}</p>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            // A real, crawlable link to the service page (config/services.js)
            <Link
              key={svc.path}
              to={svc.path}
              className={`service-card service-card--${svc.variant} service-card--clickable reveal ${DELAY[i]}`}
            >
              <div className="service-card__heading">
                <div className="service-card__icon">{svc.icon}</div>
                <div className="service-card__title">{svc.title}</div>
              </div>
              <div className="service-card__body">{svc.body}</div>
              <div className="service-card__tags">
                {svc.tags.map((tag) => (
                  <span key={tag.label} className={`tag tag--${tag.variant}`}>{tag.label}</span>
                ))}
              </div>
              <span className="service-card__link" aria-hidden="true">
                {t.learnMore}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
