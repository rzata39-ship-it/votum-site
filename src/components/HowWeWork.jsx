import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/useLanguage'
import PhaseMap from './PhaseMap'
import PhasePipeline from './PhasePipeline'
import PhaseHeartbeat from './PhaseHeartbeat'
import './HowWeWork.css'

const PHASE_VISUALS = [PhaseMap, PhasePipeline, PhaseHeartbeat]
const PHASE_REVERSES = [false, true, false]

export default function HowWeWork() {
  const ref = useReveal()
  const { locale } = useLanguage()
  const t = locale.howWeWork

  return (
    <section id="how" className="how-section" ref={ref}>
      <div className="section-header reveal">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p>{t.lead}</p>
      </div>

      {t.phases.map((phase, i) => {
        const Visual = PHASE_VISUALS[i]
        return (
          <div
            key={i}
            className={`feature-strip reveal${PHASE_REVERSES[i] ? ' feature-strip--reverse' : ''}`}
          >
            {/* The dashboards are mock-ups, not client data: labelled "Example",
                captioned, and excluded from search snippets (data-nosnippet) */}
            <div className="feature-strip__visual" data-nosnippet="">
              <Visual />
              <p className="feature-strip__visual-note">{t.visualNote}</p>
            </div>
            <div className="feature-strip__content">
              <span className="feature-strip__eyebrow">{phase.eyebrow}</span>
              <h3 className="feature-strip__title">{phase.title}</h3>
              <p className="feature-strip__body">{phase.body}</p>
              <ul className="feature-strip__checks">
                {phase.checks.map((c) => (
                  <li key={c}>
                    <span className="check-icon" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              {phase.cta && (
                <a href={phase.cta.href} className={`btn ${phase.cta.variant}`}>
                  {phase.cta.label}
                </a>
              )}
            </div>
          </div>
        )
      })}
    </section>
  )
}
