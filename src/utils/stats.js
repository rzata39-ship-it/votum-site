import { SERVICES } from '../config/services'
import { CASES } from '../config/cases'
import { fmt } from './format'

// Stat-tile helpers (used by the About stats section; the homepage stats
// banner was removed in Sprint 6.2).
// Counts that must follow the configuration: '{serviceCount}' → SERVICES.length,
// '{caseCount}' → CASES.length (config/cases.js is the public case list)
export const statValue = (num) => fmt(num, { serviceCount: SERVICES.length, caseCount: CASES.length })

// Word values ("End-to-end") get a smaller, non-wrapping style so all tiles stay aligned
export const isTextStat = (value) => /[a-z]/i.test(value)
