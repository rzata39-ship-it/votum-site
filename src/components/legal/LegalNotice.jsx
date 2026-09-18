import { Link } from 'react-router-dom'
import { company } from '../../config/company'
import LegalPage from './LegalPage'

// Provider identification required by the Bulgarian Electronic Commerce Act
// (Закон за електронната търговия, чл. 4) — also for a purely informational
// company website. All values come from config/company.js.
export default function LegalNotice() {
  const { address } = company

  return (
    <LegalPage pageKey="legal" title="Legal Notice">
      <p>Information about the provider of this website:</p>

      <h2>Company</h2>
      <dl className="legal-page__dl">
        <dt>Company name</dt>
        <dd>{company.legalName}{company.legalNameLocal && <> (<span lang="bg">{company.legalNameLocal}</span>)</>}</dd>
        <dt>Legal form</dt>
        <dd>Limited partnership (<span lang="bg">командитно дружество</span>), registered in Bulgaria</dd>
        {address && (
          <>
            <dt>Registered office</dt>
            <dd>{address.street}, {address.postalCode} {address.city}{address.district && ` (${address.district})`}, {address.country}</dd>
          </>
        )}
        {company.registrationNumber && (
          <>
            <dt>Company registration number (UIC / ЕИК)</dt>
            <dd>{company.registrationNumber} — Commercial Register of the Bulgarian Registry Agency</dd>
          </>
        )}
        {company.vatNumber && (
          <>
            <dt>VAT number</dt>
            <dd>{company.vatNumber}</dd>
          </>
        )}
        {company.representative && (
          <>
            <dt>Represented by</dt>
            <dd>{company.representative}{company.representativeLocal && <> (<span lang="bg">{company.representativeLocal}</span>)</>}</dd>
          </>
        )}
      </dl>

      <h2>Contact</h2>
      <dl className="legal-page__dl">
        <dt>Email</dt>
        <dd><a href={`mailto:${company.email}`}>{company.email}</a></dd>
        <dt>Phone</dt>
        <dd><a href={company.phone.href}>{company.phone.display}</a></dd>
      </dl>

      <h2>Data protection</h2>
      <p>
        How we handle personal data is described in our <Link to="/privacy.html">Privacy Policy</Link>;
        what is stored in your browser in our <Link to="/cookies.html">Cookie Policy</Link>.
      </p>
    </LegalPage>
  )
}
