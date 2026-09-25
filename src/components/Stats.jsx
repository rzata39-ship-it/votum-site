import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/useLanguage'
import './Stats.css'

// Word values ("End-to-end") get a smaller, non-wrapping style so all tiles stay aligned
const isText = (value) => /[a-z]/i.test(value)

export default function Stats() {
  const ref = useReveal()
  const { locale } = useLanguage()
  const stats = locale.stats

  return (
    <div className="stats-section" ref={ref}>
      <div className="stats-grid reveal">
        {stats.map(({ num, label, color }) => (
          <div className={`stat${color ? ` stat--${color}` : ''}`} key={label}>
            <div className={`stat__num${isText(num) ? ' stat__num--text' : ''}`}>{num}</div>
            <div className="stat__label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
