import { Link } from 'react-router-dom'
import { company } from '../../config/company'
import LegalPage, { LegalContact } from './LegalPage'

// Describes only what this website really does (checked against the code):
//   - contact form → POST to Formspree (VITE_FORMSPREE_ENDPOINT)
//   - language choice → localStorage key "votum-lang"
//   - no cookies, no analytics, no advertising or social-media scripts
//   - fonts are self-hosted (no requests to Google Fonts)
// Anything that needs a legal or business decision is omitted while the
// corresponding value in config/company.js is null.
export default function Privacy() {
  const { legal, address, registrationNumber } = company
  const controllerKnown = Boolean(address && registrationNumber)

  return (
    <LegalPage pageKey="privacy" title="Privacy Policy">
      <p>
        {company.tradingName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when
        you visit this website and interact with our services.
      </p>

      {controllerKnown && (
        <>
          <h2 id="controller">Who is responsible for your data</h2>
          <p>The controller responsible for the processing of personal data on this website is:</p>
          <LegalContact privacy />
        </>
      )}

      <h2 id="information-we-collect">1. Information We Collect</h2>
      <h3>Information you provide directly</h3>
      <p>When you contact us through the contact form, by email, or by phone, we collect the information you choose to give us, such as:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Company name</li>
        <li>Phone number, if you provide it</li>
        <li>Project details or inquiry information</li>
      </ul>

      <h3>Information collected automatically</h3>
      <p>
        When you visit this website, our web server processes the technical data your browser sends with every
        request: IP address, date and time of the request, the page requested, the referring page, and the
        browser and operating system identification (user agent). This data is needed to deliver the website
        and to keep it secure.
      </p>
      <p>
        <strong>We do not use analytics, advertising, or social-media tracking tools on this website</strong>, and
        we do not build visitor profiles.
      </p>

      <h3>Cookies and browser storage</h3>
      <p>
        This website does not set cookies. It stores a single entry in your browser&apos;s local storage to
        remember your language choice. Details are described in our <Link to="/cookies.html">Cookie Policy</Link>.
      </p>

      <h2 id="how-we-use">2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to inquiries and schedule consultations</li>
        <li>Provide information about our services</li>
        <li>Operate, secure, and improve our website</li>
        <li>Send you our newsletter — only if you have subscribed to it</li>
        <li>Comply with legal obligations</li>
        <li>Prevent fraud and protect security</li>
      </ul>
      <p>We do <strong>not</strong> sell your personal information to third parties.</p>

      <h2 id="sharing">3. Information Sharing</h2>
      <p>We only share your information with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> who process data on our behalf. Messages sent through the contact
          form are transmitted to and processed by <strong>Formspree</strong> (Formspree, Inc.), our form-handling
          provider. We also rely on providers for email and website hosting.
        </li>
        <li><strong>Legal authorities</strong> if required by law or to protect our rights</li>
        <li><strong>Business transfers</strong> if we are acquired or merge with another company</li>
      </ul>

      <h2 id="retention">4. Data Retention</h2>
      <p>We retain your information for as long as:</p>
      <ul>
        <li>Necessary to fulfill the purposes outlined in this policy</li>
        <li>Required by law</li>
        <li>You remain a client or prospect</li>
      </ul>
      <p>You can request deletion of your data at any time by contacting us (see the Contact section below).</p>

      <h2 id="your-rights">5. Your Rights</h2>
      <p>Depending on your location — and in particular under the EU General Data Protection Regulation (GDPR) — you may have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Restrict or object to certain processing</li>
        <li>Opt out of marketing communications</li>
        <li>Data portability (receive your data in a portable format)</li>
      </ul>
      <p>To exercise these rights, contact us using the information below.</p>
      {legal.supervisoryAuthority && (
        <p>
          You also have the right to lodge a complaint with the competent data protection supervisory authority:{' '}
          <a href={legal.supervisoryAuthority.url} target="_blank" rel="noopener noreferrer">
            {legal.supervisoryAuthority.name}
          </a>.
        </p>
      )}

      <h2 id="security">6. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your information, including
        encrypted data transmission (HTTPS) and limited access to personal information.
      </p>
      <p>However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.</p>

      <h2 id="third-party-links">7. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for their privacy
        practices. We encourage you to review their privacy policies before providing any information.
      </p>

      <h2 id="children">8. Children&apos;s Privacy</h2>
      <p>
        Our website is not directed to individuals under 18 years old. We do not knowingly collect information
        from children. If we become aware that a child has provided us with information, we will delete it promptly.
      </p>

      <h2 id="international-transfers">9. International Data Transfers</h2>
      <p>
        Our form-handling provider Formspree is based in the United States. Information you submit through the
        contact form is therefore transferred to and processed in a country outside the European Economic Area.
      </p>
      {legal.transferSafeguards && <p>{legal.transferSafeguards}</p>}

      <h2 id="policy-updates">10. Policy Updates</h2>
      <p>
        We may update this Privacy Policy from time to time. The current version is always available on this
        page. We encourage you to review this policy periodically.
      </p>

      <h2 id="contact">11. Contact Us</h2>
      <p>If you have questions about this Privacy Policy or wish to exercise your privacy rights, contact us at:</p>
      <LegalContact privacy />
    </LegalPage>
  )
}
