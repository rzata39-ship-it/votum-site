import { useEffect, useRef } from 'react'

const FOCUSABLE = [
  'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])', 'textarea:not([disabled])', '[tabindex]:not([tabindex="-1"])',
].join(',')

function getFocusable(containers) {
  return containers
    .flatMap((el) => Array.from(el.querySelectorAll(FOCUSABLE)))
    .filter((el) => el.getClientRects().length > 0)
}

// Several overlays may lock scrolling / inert the page at once (e.g. a modal
// opened from the drawer) — only release when the last one closes.
let scrollLocks = 0
const inertCounts = new WeakMap()

function lockScroll() {
  if (scrollLocks++ === 0) document.body.style.overflow = 'hidden'
  return () => { if (--scrollLocks === 0) document.body.style.overflow = '' }
}

function setInert(elements) {
  elements.forEach((el) => {
    inertCounts.set(el, (inertCounts.get(el) || 0) + 1)
    el.inert = true
  })
  return () => elements.forEach((el) => {
    const count = (inertCounts.get(el) || 1) - 1
    inertCounts.set(el, count)
    if (count === 0) el.inert = false
  })
}

/**
 * Shared behaviour for modal dialogs and the mobile drawer:
 * scroll lock, inert background, Escape, Tab focus trap and focus restore.
 *
 * @param {boolean}  active
 * @param {object}   opts
 * @param {Function} opts.onClose
 * @param {Function} opts.getContainers  elements the focus is trapped in
 * @param {Function} opts.getInert       elements hidden from AT while active
 * @param {Function} [opts.getInitialFocus]
 * @param {Function} [opts.getReturnFocus] defaults to the element focused on open
 */
export default function useOverlay(active, opts) {
  const optsRef = useRef(opts)
  optsRef.current = opts

  useEffect(() => {
    if (!active) return undefined

    const { getContainers, getInert, getInitialFocus, getReturnFocus } = optsRef.current
    const trigger = document.activeElement
    const unlock = lockScroll()
    const releaseInert = setInert(getInert().filter(Boolean))

    const initial = getInitialFocus?.() || getFocusable(getContainers())[0]
    initial?.focus({ preventScroll: true })

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        optsRef.current.onClose()
        return
      }
      if (e.key !== 'Tab') return

      const items = getFocusable(optsRef.current.getContainers())
      if (items.length === 0) { e.preventDefault(); return }
      const first = items[0]
      const last = items[items.length - 1]
      const current = document.activeElement

      if (!items.includes(current)) { e.preventDefault(); first.focus() }
      else if (e.shiftKey && current === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && current === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKeyDown, true)

    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      releaseInert()
      unlock()
      const target = getReturnFocus?.() || trigger
      if (target && document.contains(target)) target.focus({ preventScroll: true })
    }
  }, [active])
}
