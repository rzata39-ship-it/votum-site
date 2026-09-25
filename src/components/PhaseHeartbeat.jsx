import { useEffect, useRef } from 'react'
import './PhaseVisuals.css'

// ── Sparkline bars per service ─────────────────────────────
// Each array = 7 bars, values 0–20 (height in px, capped at 20).
// 0 = incident/degraded, anything else = healthy.
const SPARKLINES = {
  api:      [14, 18, 12, 16,  0, 14, 18],
  pipeline: [16, 14, 18, 12, 16, 14, 18],
  auth:     [18, 14, 18, 14, 18, 14, 18],
}

// ── PhaseHeartbeat ──────────────────────────────────────────
// Replaces the old single-chart + generic status items with:
//   1. Uptime as a hero metric (was buried as 8px SVG text)
//   2. Per-service cards each with a mini sparkline
//   3. SLA + deploy frequency bottom strip

export default function PhaseHeartbeat() {
  const svgRef  = useRef(null)
  const areaRef = useRef(null)

  // Fade in area fill after mount
  useEffect(() => {
    const area = areaRef.current
    if (!area) return
    const id = setTimeout(() => {
      area.style.transition = 'opacity 1s ease 1.3s'
      area.style.opacity = '1'
    }, 100)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="phase-visual phase-heartbeat" aria-hidden="true">
      <div className="phase-visual__inner">
        <span className="phase-visual__example">Example</span>
        <span className="phase-visual__eyebrow">Phase 03 — Launch &amp; Beyond</span>
        <div className="phase-visual__title">Production health</div>

        <div className="phase-heartbeat__wrap">

          {/* ── Header: uptime hero + live indicator ── */}
          <div className="phase-hb__header">
            <div>
              <div className="phase-hb__uptime-label">Platform uptime · 30 days</div>
              <div className="phase-hb__uptime-val">99.98%</div>
            </div>
            <div className="phase-heartbeat__live">
              <div className="phase-heartbeat__live-dot" />
              All systems operational
            </div>
          </div>

          {/* ── Latency chart ── */}
          <div className="phase-heartbeat__chart">
            <div className="phase-hb__chart-header">
              <span>API latency · p95 · last 30d</span>
              <span className="phase-hb__deploy-tag">↑ deploy v3.1</span>
            </div>

            <svg
              className="phase-heartbeat__svg phase-hb__svg-override"
              ref={svgRef}
              viewBox="0 0 500 70"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="hb-area-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="var(--green-400)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="var(--green-400)" stopOpacity="0"    />
                </linearGradient>
              </defs>

              <line x1="0" y1="23" x2="500" y2="23" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
              <line x1="0" y1="46" x2="500" y2="46" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
              <line x1="340" y1="0" x2="340" y2="70" stroke="rgba(106,214,161,0.28)" strokeWidth="1" strokeDasharray="3 2" />

              <path
                ref={areaRef}
                opacity="0"
                fill="url(#hb-area-grad)"
                d="M0,36 C60,36 120,34 180,36 C230,38 280,40 335,36 C338,28 340,18 343,30 C346,36 360,34 430,32 C460,31 480,32 500,32 L500,70 L0,70 Z"
              />
              <path
                className="phase-heartbeat__line"
                d="M0,36 C60,36 120,34 180,36 C230,38 280,40 335,36 C338,28 340,18 343,30 C346,36 360,34 430,32 C460,31 480,32 500,32"
                fill="none"
                stroke="var(--green-400)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <text x="5" y="18" fontSize="7" fill="var(--navy-400)" fontFamily="var(--font-mono)">120ms</text>
              <text x="5" y="66" fontSize="7" fill="var(--navy-400)" fontFamily="var(--font-mono)">0ms</text>
            </svg>
          </div>

          {/* ── Per-service cards ── */}
          <div className="phase-hb__services">
            {[
              { name: 'API gateway',   val: '99.99%', bars: SPARKLINES.api      },
              { name: 'Data pipeline', val: '99.96%', bars: SPARKLINES.pipeline },
              { name: 'Auth service',  val: '100%',   bars: SPARKLINES.auth     },
            ].map(({ name, val, bars }) => (
              <div key={name} className="phase-hb__svc">
                <div className="phase-hb__svc-name">{name}</div>
                <div className="phase-hb__svc-row">
                  <span className="phase-hb__svc-val">{val}</span>
                  <div className="phase-hb__sparkline" aria-hidden="true">
                    {bars.map((h, i) => (
                      <div
                        key={i}
                        className={`phase-hb__bar${h === 0 ? ' phase-hb__bar--off' : ' phase-hb__bar--on'}`}
                        style={{ height: `${h || 8}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom strip ── */}
          <div className="phase-hb__bottom">
            <div className="phase-hb__stat">
              <div className="phase-hb__stat-dot phase-hb__stat-dot--green" />
              <div className="phase-hb__stat-text">SLA retainer<br/>L1–L3 support</div>
              <span className="phase-hb__stat-val phase-hb__stat-val--green">Active</span>
            </div>
            <div className="phase-hb__stat">
              <div className="phase-hb__stat-dot phase-hb__stat-dot--teal" />
              <div className="phase-hb__stat-text">Deploy<br/>frequency</div>
              <span className="phase-hb__stat-val phase-hb__stat-val--teal">Daily</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
