// Build-time prerender entry (used only by vite.config.js, never shipped to the
// browser). Renders the same tree as main.jsx, with StaticRouter instead of
// BrowserRouter, so the client can hydrate the markup without a mismatch.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
}
