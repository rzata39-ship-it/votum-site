import { Link } from 'react-router-dom'
import LegalPage, { LegalContact } from './LegalPage'

// Keep this page in sync with the code. Verified at the time of writing:
//   - no document.cookie usage, no analytics / marketing / social scripts
//   - one localStorage entry: "votum-lang" (context/LanguageContext.jsx)
//   - fonts are self-hosted; forms POST to their endpoint without cookies
// Because nothing non-essential is stored, there is deliberately NO consent
// banner. Adding analytics or any other non-essential storage later requires
// (1) a consent mechanism with equal Accept / Reject, (2) loading those
// scripts only after consent, and (3) updating the inventory below.
const STORAGE_INVENTORY = [
  {
    name: 'votum-lang',
    type: 'Local storage (not a cookie)',
    purpose: 'Remembers the language you selected so the site opens in it on your next visit.',
    duration: 'Until you clear your browser data',
    category: 'Strictly necessary / functional — set only by your own choice of language',
  },
]

export default function Cookies() {
  return (
    <LegalPage pageKey="cookies" title="Cookie Policy">
      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files that a website stores on your device. Websites can also use similar
        technologies, such as the browser&apos;s local storage, to remember information between visits.
      </p>

      <h2>2. What this website uses</h2>
      <p>
        <strong>This website does not set any cookies.</strong> We do not use analytics cookies, marketing or
        advertising cookies, social-media plugins, or any other tracking technology, and we do not load
        third-party scripts that would set them.
      </p>
      <p>The only information stored in your browser is the following:</p>
      <div className="legal-page__table-wrap" tabIndex={0} role="region" aria-label="Browser storage used by this website">
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Purpose</th>
              <th scope="col">Duration</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {STORAGE_INVENTORY.map((item) => (
              <tr key={item.name}>
                <td><code>{item.name}</code></td>
                <td>{item.type}</td>
                <td>{item.purpose}</td>
                <td>{item.duration}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>This entry stays on your device and is never sent to us or to anyone else.</p>

      <h2>3. Why there is no cookie banner</h2>
      <p>
        Consent is required for cookies and similar technologies that are not strictly necessary. Because this
        website does not use any, there is nothing to accept or reject, and we do not show a consent banner.
        If that ever changes, we will ask for your consent first and update this policy.
      </p>

      <h2>4. Forms</h2>
      <p>
        When you send the contact form, the information you enter is transmitted to our form-handling provider.
        No cookies are set in your browser as part of this. See our <Link to="/privacy.html">Privacy Policy</Link> for details.
      </p>

      <h2>5. How to remove stored data</h2>
      <p>
        You can delete the stored language preference at any time by clearing the site data for this website in
        your browser settings. The website keeps working; it simply opens in its default language again.
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer">Firefox</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a></li>
      </ul>

      <h2>6. Changes to this policy</h2>
      <p>
        We will update this Cookie Policy whenever the technologies used on this website change. The current
        version is always available on this page.
      </p>

      <h2>7. Questions?</h2>
      <p>If you have questions about this Cookie Policy, contact us at:</p>
      <LegalContact privacy />
    </LegalPage>
  )
}
