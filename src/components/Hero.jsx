import { useLanguage } from '../context/useLanguage'
import './Hero.css'

export default function Hero({ onContact }) {
  const { locale } = useLanguage()
  const t = locale.hero

  return (
    <section className="hero">

      {/* Logo watermark */}
      <div className="hero__v-mark" aria-hidden="true">
        <img src="/logo_icon.svg" alt="" />
      </div>

      <div className="hero__inner">
        {/* Above the fold: no .reveal, so it is visible before any JS runs */}
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-text">{t.eyebrow}</span>
        </div>

        <h1 className="hero__title">
          {t.title.line1}{' '}
          <span className="line2">
            {t.title.line2} <span className="accent">{t.title.accent}</span>
          </span>
        </h1>

        <p className="hero__lead">
          {t.lead}
        </p>

        <div className="hero__cta">
          <button type="button" className="btn btn-primary btn-lg" onClick={onContact}>
            {t.ctaPrimary}
          </button>
          <a href="#work" className="btn btn-secondary-teal btn-lg">
            {t.ctaSecondary}
          </a>
        </div>

      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  )
}
