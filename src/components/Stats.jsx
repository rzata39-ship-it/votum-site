import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/useLanguage'
import { SERVICES } from '../config/services'
import { fmt } from '../utils/format'
import './Stats.css'

// Counts that must follow the configuration, e.g. '{serviceCount}' → SERVICES.length
export const statValue = (num) => fmt(num, { serviceCount: SERVICES.length })

// Word values ("End-to-end") get a smaller, non-wrapping style so all tiles stay aligned
export const isTextStat = (value) => /[a-z]/i.test(value)

export default function Stats() {
  const ref = useReveal()
  const { locale } = useLanguage()
  const stats = locale.stats

  return (
    <div className="stats-section" ref={ref}>
      <div className="stats-grid reveal">
        {stats.map(({ num, label, color }) => {
          const value = statValue(num)
          return (
            <div className={`stat${color ? ` stat--${color}` : ''}`} key={label}>
              <div className={`stat__num${isTextStat(value) ? ' stat__num--text' : ''}`}>{value}</div>
              <div className="stat__label">{label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
