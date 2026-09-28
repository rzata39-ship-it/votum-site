import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/useLanguage'
import './CtaBanner.css'

export default function CtaBanner({ onContact }) {
  const ref = useReveal()
  const { locale } = useLanguage()
  const t = locale.cta

  return (
    <section id="contact" className="cta-outer" ref={ref}>
      <div className="cta-banner reveal">
        <div>
          <span className="cta-banner__eyebrow">{t.eyebrow}</span>
          <h2 className="cta-banner__title">{t.title}</h2>
          <p className="cta-banner__sub">{t.sub}</p>
        </div>

        <div className="cta-banner__actions">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={onContact}
          >
            {t.button}
          </button>
          <span className="cta-small">{t.small}</span>
        </div>
      </div>
    </section>
  )
}
