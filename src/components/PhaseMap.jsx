import './PhaseVisuals.css'

// ── PhaseMap ────────────────────────────────────────────────
// Pure SVG — no DOM measurement, no resize listener, no refs.
// Bezier curves connect input nodes → STRATEGY center → output nodes.
// Replaces the old DOM-measured line approach.

export default function PhaseMap() {
  return (
    <div className="phase-visual phase-map" aria-hidden="true">
      <div className="phase-visual__inner">
        <span className="phase-visual__example">Example</span>
        <span className="phase-visual__eyebrow">Phase 01 — Discovery &amp; Strategy</span>
        <div className="phase-visual__title">The Map</div>

        <div className="phase-map__svg-wrap">
          <svg
            className="phase-map__svg"
            viewBox="0 0 640 220"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker id="pm-arr-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="rgba(255,255,255,0.18)" />
              </marker>
              <marker id="pm-arr-green" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="rgba(120,214,75,0.85)" />
              </marker>
              <marker id="pm-arr-teal" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="rgba(106,214,161,0.75)" />
              </marker>
            </defs>

            {/* Input → Strategy curves */}
            <path d="M 132,40  C 240,40  240,108 318,108" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" markerEnd="url(#pm-arr-dim)"   strokeDasharray="5 4" />
            <path d="M 148,90  C 240,90  240,108 318,108" fill="none" stroke="rgba(120,214,75,0.7)"   strokeWidth="1.4" markerEnd="url(#pm-arr-green)"          />
            <path d="M 136,140 C 240,140 240,110 318,112" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" markerEnd="url(#pm-arr-dim)"   strokeDasharray="5 4" />
            <path d="M 148,185 C 240,185 240,116 318,116" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" markerEnd="url(#pm-arr-dim)"   strokeDasharray="5 4" />

            {/* Strategy → Output curves */}
            <path d="M 422,100 C 500,100 500,48  508,48"  fill="none" stroke="rgba(106,214,161,0.6)" strokeWidth="1.4" markerEnd="url(#pm-arr-teal)" />
            <path d="M 422,110 C 500,110 500,112 508,112" fill="none" stroke="rgba(106,214,161,0.5)" strokeWidth="1.4" markerEnd="url(#pm-arr-teal)" />
            <path d="M 422,118 C 500,118 500,174 508,174" fill="none" stroke="rgba(106,214,161,0.4)" strokeWidth="1.2" markerEnd="url(#pm-arr-teal)" strokeDasharray="5 4" />

            {/* ── Input nodes ── */}
            <rect x="4"  y="20"  width="128" height="36" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
            <circle cx="18" cy="38" r="4" fill="rgba(172,172,209,0.35)" />
            <text x="28" y="34" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--navy-400)" letterSpacing="1">BUSINESS GOALS</text>
            <text x="28" y="46" fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--navy-200)" fontWeight="700" letterSpacing="0.5">12 objectives</text>

            <rect x="4"  y="70"  width="144" height="36" rx="7" fill="rgba(120,214,75,0.05)" stroke="rgba(120,214,75,0.25)" strokeWidth="1" />
            <circle cx="18" cy="88" r="4" fill="rgba(120,214,75,0.6)" />
            <text x="28" y="84" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--navy-400)" letterSpacing="1">TECH AUDIT</text>
            <text x="28" y="96" fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--green-400)" fontWeight="700" letterSpacing="0.5">14 findings</text>

            <rect x="4"  y="120" width="132" height="36" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
            <circle cx="18" cy="138" r="4" fill="rgba(172,172,209,0.35)" />
            <text x="28" y="134" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--navy-400)" letterSpacing="1">RISK INVENTORY</text>
            <text x="28" y="146" fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--navy-200)" fontWeight="700" letterSpacing="0.5">8 identified</text>

            <rect x="4"  y="170" width="144" height="36" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
            <circle cx="18" cy="188" r="4" fill="rgba(172,172,209,0.35)" />
            <text x="28" y="184" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--navy-400)" letterSpacing="1">STAKEHOLDERS</text>
            <text x="28" y="196" fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--navy-200)" fontWeight="700" letterSpacing="0.5">6 mapped</text>

            {/* ── STRATEGY center node ── */}
            <rect x="314" y="78"  width="112" height="60" rx="12" fill="none" stroke="rgba(120,214,75,0.12)" strokeWidth="1" />
            <rect x="318" y="82"  width="104" height="52" rx="9"  fill="rgba(120,214,75,0.1)" stroke="rgba(120,214,75,0.75)" strokeWidth="1.5" />
            <circle cx="333" cy="108" r="5" fill="rgba(120,214,75,0.85)" className="phase-map__pulse-dot" />
            <text x="345" y="105" fontFamily="var(--font-mono)" fontSize="9"  fill="var(--green-400)" fontWeight="700" letterSpacing="2">STRATEGY</text>
            <text x="345" y="119" fontFamily="var(--font-mono)" fontSize="8"  fill="rgba(120,214,75,0.6)"  letterSpacing="1">SYNTHESIS</text>

            {/* ── Output nodes ── */}
            <rect x="508" y="24"  width="128" height="48" rx="7" fill="rgba(106,214,161,0.06)" stroke="rgba(106,214,161,0.28)" strokeWidth="1" />
            <text x="522" y="42"  fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--navy-400)"  letterSpacing="1">ARCHITECTURE</text>
            <text x="522" y="54"  fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--teal-400)"  fontWeight="700" letterSpacing="0.5">ADR-001 draft</text>
            <text x="522" y="64"  fontFamily="var(--font-mono)" fontSize="7.5" fill="rgba(106,214,161,0.5)">→ in review</text>

            <rect x="508" y="88"  width="128" height="48" rx="7" fill="rgba(106,214,161,0.06)" stroke="rgba(106,214,161,0.28)" strokeWidth="1" />
            <text x="522" y="106" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--navy-400)"  letterSpacing="1">ROADMAP</text>
            <text x="522" y="118" fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--teal-400)"  fontWeight="700" letterSpacing="0.5">6-month plan</text>
            <text x="522" y="128" fontFamily="var(--font-mono)" fontSize="7.5" fill="rgba(106,214,161,0.5)">→ pending sign-off</text>

            <rect x="508" y="152" width="128" height="48" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="5 4" />
            <text x="522" y="170" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--navy-400)"  letterSpacing="1">RISK REGISTER</text>
            <text x="522" y="182" fontFamily="var(--font-mono)" fontSize="9.5" fill="rgba(172,172,209,0.55)" fontWeight="700" letterSpacing="0.5">8 mitigations</text>
            <text x="522" y="192" fontFamily="var(--font-mono)" fontSize="7.5" fill="rgba(172,172,209,0.3)">→ not started</text>
          </svg>
        </div>

        <div className="phase-map__footer">
          Architecture document &amp; delivery roadmap produced
        </div>
      </div>
    </div>
  )
}
