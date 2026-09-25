import { useState } from 'react'
import { useLanguage } from '../context/useLanguage'
import Modal from './Modal'
import { CASES } from '../config/cases'
import './Cases.css'

const CASE_VISUALS = {
  feature:     'operations',
  hero:        'platform',
  supporting0: 'product',
  supporting1: 'platform',
  final:       'testing',
}

function CaseVisual({ type, featured = false }) {
  return (
    <div className={`case-visual case-visual--${type}${featured ? ' case-visual--featured' : ''}`} aria-hidden="true">
      {type === 'transformation' && (
        <div className="viz viz--transformation">
          <div className="viz-node viz-node--left viz-node--1" />
          <div className="viz-node viz-node--left viz-node--2" />
          <div className="viz-node viz-node--left viz-node--3" />
          <div className="viz-node viz-node--center" />
          <div className="viz-node viz-node--right viz-node--4" />
          <div className="viz-node viz-node--right viz-node--5" />
          <div className="viz-line viz-line--1" />
          <div className="viz-line viz-line--2" />
          <div className="viz-line viz-line--3" />
          <div className="viz-line viz-line--4" />
          <div className="viz-line viz-line--5" />
        </div>
      )}
      {type === 'product' && (
        <div className="viz viz--product">
          <div className="viz-panel viz-panel--main">
            <div className="viz-dots"><span /><span /><span /></div>
            <div className="viz-bar viz-bar--accent" />
            <div className="viz-bar viz-bar--w80" />
            <div className="viz-bar viz-bar--w65" />
            <div className="viz-bar viz-bar--w48" />
          </div>
          <div className="viz-card viz-card--floating viz-card--a" />
          <div className="viz-card viz-card--floating viz-card--b" />
        </div>
      )}
      {type === 'platform' && (
        <div className="viz viz--platform">
          <div className="viz-cluster">
            <div className="viz-box viz-box--lg" />
            <div className="viz-box viz-box--sm" />
            <div className="viz-box viz-box--sm" />
            <div className="viz-box viz-box--lg" />
          </div>
          <div className="viz-pipeline">
            <span /><span /><span /><span />
          </div>
        </div>
      )}
      {type === 'operations' && (
        <div className="viz viz--operations">
          <div className="viz-monitor">
            <div className="viz-monitor__label">uptime</div>
            <div className="viz-monitor__chart">
              <div className="viz-monitor__line" />
            </div>
          </div>
          <div className="viz-status-row">
            <div className="viz-status" />
            <div className="viz-status" />
            <div className="viz-status" />
          </div>
        </div>
      )}
      {type === 'testing' && (
        <div className="viz viz--testing">
          <div className="viz-step viz-step--done" />
          <div className="viz-step viz-step--done" />
          <div className="viz-step viz-step--active" />
          <div className="viz-step" />
        </div>
      )}
    </div>
  )
}

// id = stable anchor (config/cases.js) so service pages can link to /#<id>
function CaseCard({ id, item, variant = 'supporting', layout = 'visual', visualType, onClick }) {
  const featured = variant === 'hero' || variant === 'feature'

  return (
    <article
      id={id}
      className={`case-card case-card--${variant} case-card--${layout} case-card--clickable`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
    >
      {layout === 'visual' && (
        <div className="case-card__media">
          {item.image ? (
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <CaseVisual type={visualType} featured={featured} />
          )}
        </div>
      )}
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
    </article>
  )
}

function CaseModal({ item, labels, onClose }) {
  return (
    <Modal open={Boolean(item)} onClose={onClose} labelledBy="case-modal-title">
      {item && (
        <>
          <div className="case-modal__header">
            <span className="case-modal__eyebrow">{item.category}</span>
            <h2 id="case-modal-title" className="case-modal__title">{item.title}</h2>
            <p className="case-modal__summary">{item.summary}</p>
          </div>

          <div className="case-modal__content">
            <section className="case-modal__section case-modal__section--challenge">
              <h3>{labels.challenge}</h3>
              <p>{item.challenge}</p>
            </section>

            <section className="case-modal__section case-modal__section--solution">
              <h3>{labels.solution}</h3>
              <p>{item.solution}</p>
            </section>

            <section className="case-modal__section case-modal__section--outcome">
              <h3>{labels.outcome}</h3>
              <p>{item.outcome}</p>
            </section>

            {item.tags && (
              <div className="case-modal__tags">
                {item.tags.map((tag) => (
                  <span className="tag tag--teal" key={tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </Modal>
  )
}

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState(null)
  const { locale } = useLanguage()
  const t = locale.cases

  return (
    <>
      <section id="work" className="cases-section">
        <div className="section-header">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lead}</p>
        </div>

        <div className="cases-layout">
          <div className="cases-row cases-row--feature-first">
            <CaseCard
              id={CASES.feature.anchor}
              item={t.feature}
              variant="feature"
              layout="clean"
              visualType={CASE_VISUALS.feature}
              onClick={() => setSelectedCase(t.feature)}
            />
          </div>

          <div className="cases-row cases-row--hero-first">
            <CaseCard
              id={CASES.hero.anchor}
              item={t.hero}
              variant="hero"
              layout="clean"
              visualType={CASE_VISUALS.hero}
              onClick={() => setSelectedCase(t.hero)}
            />
            <CaseCard
              id={CASES.supporting0.anchor}
              item={t.supporting[0]}
              variant="supporting"
              layout="clean"
              visualType={CASE_VISUALS.supporting0}
              onClick={() => setSelectedCase(t.supporting[0])}
            />
          </div>

          <div className="cases-row cases-row--equal">
            <CaseCard
              id={CASES.supporting1.anchor}
              item={t.supporting[1]}
              variant="supporting"
              layout="clean"
              visualType={CASE_VISUALS.supporting1}
              onClick={() => setSelectedCase(t.supporting[1])}
            />
            <CaseCard
              id={CASES.final.anchor}
              item={t.final}
              variant="supporting"
              layout="clean"
              visualType={CASE_VISUALS.final}
              onClick={() => setSelectedCase(t.final)}
            />
          </div>
        </div>
      </section>

      <CaseModal item={selectedCase} labels={t.labels} onClose={() => setSelectedCase(null)} />
    </>
  )
}
