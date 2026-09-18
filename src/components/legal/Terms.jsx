import { company } from '../../config/company'
import LegalPage, { LegalContact } from './LegalPage'

// NOTE: the clauses below originate from a generic template and have not been
// reviewed by a lawyer (see LEGAL_AND_COMPANY_DATA_REQUIRED.md). Only the
// template placeholders were removed; "Governing Law" is rendered once
// company.legal.governingLaw / courts are set.
export default function Terms() {
  const { legal } = company
  const name = company.tradingName
  let n = 10 // sections after the optional "Governing Law" are numbered dynamically
  const next = () => ++n

  return (
    <LegalPage pageKey="terms" title="Terms and Conditions">
      <p>
        These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of {name}&apos;s website,
        services, and products. By accessing or using our website or engaging with our services, you agree to be
        bound by these Terms. If you do not agree, do not use our services.
      </p>

      <h2>1. Services Provided</h2>
      <p>{name} provides end-to-end engineering services including:</p>
      <ul>
        <li>Technology strategy and consulting</li>
        <li>Software engineering and development</li>
        <li>DevOps and cloud infrastructure</li>
        <li>Managed services and operations</li>
        <li>Quality engineering and test automation</li>
      </ul>
      <p>All services are provided on an engagement basis as outlined in individual project agreements or statements of work.</p>

      <h2>2. Scope and Limitations</h2>
      <h3>What we do</h3>
      <ul>
        <li>Provide professional engineering advice and services</li>
        <li>Deliver custom software solutions and infrastructure</li>
        <li>Offer strategic guidance on technology decisions</li>
      </ul>
      <h3>What we don&apos;t do</h3>
      <ul>
        <li>Provide legal, financial, or accounting advice</li>
        <li>Guarantee specific business outcomes or results</li>
        <li>Assume responsibility for pre-existing systems or code (unless explicitly stated)</li>
        <li>Provide 24/7 emergency support (unless contracted separately)</li>
      </ul>

      <h2>3. Client Responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate information and project requirements</li>
        <li>Make timely decisions and approvals on project matters</li>
        <li>Provide necessary access to systems, environments, and team members</li>
        <li>Maintain confidentiality of shared information</li>
        <li>Pay invoices according to agreed-upon terms</li>
        <li>Comply with all applicable laws and regulations</li>
      </ul>

      <h2>4. Payment Terms</h2>
      <ul>
        <li>Invoices are due within 30 days of invoice date (unless otherwise agreed)</li>
        <li>Late payments may incur interest charges of 1.5% per month</li>
        <li>Services may be suspended for non-payment</li>
        <li>All fees are exclusive of taxes unless stated otherwise</li>
        <li>Expenses and third-party costs will be billed separately</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <h3>Our work product</h3>
      <ul>
        <li>Custom code, documents, and deliverables created specifically for you are owned by you upon full payment</li>
        <li>You may use deliverables for your internal business purposes</li>
      </ul>
      <h3>Our IP</h3>
      <ul>
        <li>Pre-existing tools, methodologies, frameworks, and processes created by {name} remain our property</li>
        <li>You may not reproduce, reverse-engineer, or commercialize our proprietary tools</li>
        <li>You may use general knowledge and best practices gained through our engagement</li>
      </ul>
      <h3>Existing client IP</h3>
      <ul>
        <li>Any intellectual property, code, or materials you provide remain your property</li>
        <li>You grant us a license to use such materials only for the purposes of delivering services</li>
      </ul>

      <h2>6. Confidentiality</h2>
      <p>Both parties agree to:</p>
      <ul>
        <li>Keep confidential information strictly confidential</li>
        <li>Use confidential information only for the purpose of the engagement</li>
        <li>Not disclose to third parties without written consent</li>
        <li>Return or destroy confidential information upon engagement termination</li>
      </ul>
      <p><strong>Exceptions:</strong> Information that is publicly available, already known, or legally required to be disclosed.</p>
      <p>We may reference you as a client in case studies or marketing materials (with your consent).</p>

      <h2>7. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law:</p>
      <ul>
        <li>{name} is not liable for indirect, incidental, special, or consequential damages (lost profits, data loss, etc.)</li>
        <li>Our total liability for any claim shall not exceed the amount paid for services in the 12 months preceding the claim</li>
        <li>These limitations apply regardless of the cause (negligence, contract breach, etc.)</li>
      </ul>

      <h2>8. Disclaimer of Warranties</h2>
      <p>We provide services on an &quot;as-is&quot; basis. We do not warrant:</p>
      <ul>
        <li>That services will meet all your requirements</li>
        <li>That services will be error-free or uninterrupted</li>
        <li>That third-party systems, platforms, or tools will work as expected</li>
        <li>Results or outcomes of our advice or deliverables</li>
      </ul>

      <h2>9. Termination</h2>
      <ul>
        <li>Either party may terminate the engagement with written notice (terms depend on individual contracts)</li>
        <li>Upon termination, you remain responsible for all fees incurred</li>
        <li>All sections regarding IP, confidentiality, and liability survive termination</li>
      </ul>

      <h2>10. Modifications to Terms</h2>
      <p>
        We may update these Terms at any time. Continued use of our website or services constitutes acceptance
        of updated Terms. For material changes, we will provide notice.
      </p>

      {legal.governingLaw && legal.courts && (
        <>
          <h2>{next()}. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of {legal.governingLaw}, without
            regard to conflict of law principles. Any legal action or proceeding shall be conducted before {legal.courts}.
          </p>
        </>
      )}

      <h2>{next()}. Dispute Resolution</h2>
      <p>Before pursuing legal action:</p>
      <ol>
        <li>Parties agree to attempt to resolve disputes through good-faith negotiation</li>
        <li>If unresolved, disputes may be submitted to mediation</li>
        <li>If mediation fails, disputes may proceed to arbitration or litigation</li>
      </ol>

      <h2>{next()}. Entire Agreement</h2>
      <p>
        These Terms, along with any statement of work or project agreement, constitute the entire agreement
        between you and {name} regarding your use of services. Any prior agreements are superseded.
      </p>

      <h2>{next()}. Severability</h2>
      <p>If any provision is found unenforceable, the remaining provisions remain in full effect.</p>

      <h2>{next()}. Contact Us</h2>
      <p>For questions about these Terms, contact:</p>
      <LegalContact />
    </LegalPage>
  )
}
