import { useMemo } from 'react'
import './PhaseVisuals.css'

// ── Seed data — deterministic, no random() on each render ──
// 16 weeks × 5 days (Mon–Fri). Values 0–5 = commit intensity.
const SEED = [
  [0,0,1,2,1],[1,2,3,2,1],[2,3,4,3,2],[2,3,3,4,5],
  [1,2,3,2,2],[3,4,4,3,5],[2,3,4,4,3],[3,4,5,4,4],
  [2,3,4,3,3],[4,4,5,3,5],[3,4,3,4,3],[4,5,4,5,4],
  [3,4,4,3,2],[4,5,5,4,5],[3,4,4,5,3],[4,5,5,4,5],
]

// Weeks (0-indexed) that show a deploy marker below their Friday cell
const DEPLOY_WEEKS = new Set([2, 5, 7, 10, 12, 15])

const DAYS = ['Mon', '', 'Wed', '', 'Fri']

// ── PhasePipeline ────────────────────────────────────────────
// Replaces the old horizontal box-and-arrow pipeline diagram
// with a commit activity graph — time on the X-axis shows
// sustained delivery rhythm across the full engagement.

export default function PhasePipeline() {
  const totalCommits = useMemo(
    () => SEED.flat().reduce((s, v) => s + v * 4 + 2, 0),
    []
  )

  return (
    <div className="phase-visual phase-pipeline" aria-hidden="true">
      <div className="phase-visual__inner">
        <span className="phase-visual__eyebrow">Phase 02 — Build &amp; Delivery</span>
        <div className="phase-visual__title">Engineering output · last 16 weeks</div>

        {/* ── Header ── */}
        <div className="phase-activity__header">
          <div>
            <div className="phase-activity__total-label">Total commits</div>
            <div className="phase-activity__total-val">{totalCommits.toLocaleString('en-US')}</div>
            <div className="phase-activity__total-sub">across 4 engineers</div>
          </div>
          <div className="phase-activity__branches">
            <span className="phase-activity__branch phase-activity__branch--green">main</span>
            <span className="phase-activity__branch phase-activity__branch--teal">feature/*</span>
            <span className="phase-activity__branch phase-activity__branch--dim">fix/*</span>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="phase-activity__grid-wrap">
          {/* Month labels */}
          <div className="phase-activity__months">
            {['Feb', 'Mar', 'Apr', 'May'].map(m => (
              <span key={m} className="phase-activity__month">{m}</span>
            ))}
          </div>

          <div className="phase-activity__grid-body">
            {/* Day labels */}
            <div className="phase-activity__day-labels">
              {DAYS.map((d, i) => (
                <span key={i} className="phase-activity__day">{d}</span>
              ))}
            </div>

            {/* Cell grid */}
            <div className="phase-activity__grid">
              {SEED.map((week, w) => (
                <div key={w} className="phase-activity__week">
                  {week.map((intensity, d) => (
                    <div
                      key={d}
                      className={[
                        'phase-activity__cell',
                        `phase-activity__cell--${intensity}`,
                        DEPLOY_WEEKS.has(w) && d === 4 ? 'phase-activity__cell--deploy' : '',
                      ].filter(Boolean).join(' ')}
                      title={`Week ${w + 1}, ${['Mon','Tue','Wed','Thu','Fri'][d]}: ~${intensity * 4 + 2} commits`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="phase-activity__legend">
            <span className="phase-activity__legend-label">Less</span>
            {[0,1,2,3,4,5].map(i => (
              <div key={i} className={`phase-activity__legend-cell phase-activity__cell--${i}`} />
            ))}
            <span className="phase-activity__legend-label">More</span>
          </div>
        </div>

        {/* ── Metrics strip ── */}
        <div className="phase-activity__metrics">
          <div className="phase-pipeline__stat"><span>95%+</span>test coverage</div>
          <div className="phase-pipeline__stat"><span>2 wk</span>sprint cadence</div>
          <div className="phase-pipeline__stat"><span>Daily</span>deploys</div>
          <div className="phase-pipeline__stat"><span>0</span>prod incidents</div>
        </div>
      </div>
    </div>
  )
}
