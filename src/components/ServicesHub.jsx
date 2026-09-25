import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import useSeo from '../hooks/useSeo'
import { SERVICES, servicePath } from '../config/services'
import Breadcrumbs from './Breadcrumbs'
import './ContentPage.css'
import './ServicesHub.css'

// /services — short overview; the cards follow config/services.js, the
// details live on the service pages themselves.
export default function ServicesHub() {
  const { locale } = useLanguage()
  useSeo('services')
  const t = locale.servicesHub

  return (
    <main id="main" tabIndex={-1} className="services-hub">
      <header className="page-hero">
        <div className="page-hero__inner">
          <Breadcrumbs routeKey="services" />
          <span className="page-eyebrow">{t.eyebrow}</span>
          <h1 className="page-hero__title">{t.h1}</h1>
          <p className="page-hero__lead">{t.intro}</p>
        </div>
      </header>

      <div className="page-body">
        <section className="page-section">
          <h2>{t.cardsTitle}</h2>
          <ul className="services-hub__cards">
            {SERVICES.map((s, i) => (
              <li key={s.slug}>
                <Link to={servicePath(s.slug)} className="services-hub__card">
                  <h3>{locale.seo[s.key].name}</h3>
                  <p>{locale.services.cards[i].body}</p>
                  <span className="services-hub__more" aria-hidden="true">{t.cardLink}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="page-section">
          <h2>{t.togetherTitle}</h2>
          {t.together.map((para) => <p key={para} className="services-hub__text">{para}</p>)}
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
