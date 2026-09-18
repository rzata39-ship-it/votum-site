import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../context/useLanguage'
import useOverlay from '../hooks/useOverlay'
import './Modal.css'

/**
 * Accessible modal dialog shared by the contact, service and case-study modals.
 * Rendered in a portal next to #root so the whole app can be made inert.
 *
 * Props
 *   open        – boolean
 *   onClose     – called on Escape, overlay click and the close button
 *   labelledBy  – id of the heading inside `children` (preferred), or
 *   label       – plain accessible name
 *   size        – 'md' (560px) | 'lg' (740px, default)
 *   sheet       – bottom-sheet presentation on small screens
 *   bodyClassName – extra class for the scrollable body
 */
export default function Modal({
  open, onClose, labelledBy, label, size = 'lg', sheet = false, bodyClassName = '', children,
}) {
  const panelRef = useRef(null)
  const { locale } = useLanguage()

  useOverlay(open, {
    onClose,
    getContainers:   () => [panelRef.current],
    getInert:        () => [document.getElementById('root')],
    // Focus the dialog itself: the title is announced and mobile keyboards stay closed
    getInitialFocus: () => panelRef.current,
  })

  if (!open) return null

  return createPortal(
    <div
      className={`modal-overlay${sheet ? ' modal-overlay--sheet' : ''}`}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        ref={panelRef}
        className={`modal modal--${size}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-label={labelledBy ? undefined : label}
        tabIndex={-1}
      >
        <div className="modal__close-bar">
          <button type="button" className="modal__close" onClick={onClose} aria-label={locale.nav.close}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className={`modal__body ${bodyClassName}`.trim()}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
