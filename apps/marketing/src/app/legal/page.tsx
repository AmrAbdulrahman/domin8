import { Container, SectionHeading } from '@domin8/ui';
import { company } from '@domin8/data';

export const metadata = {
  title: 'Legal & Company Information — Domin8',
  description: 'Company registration, registered addresses, and legal information for Domin8.',
};

export default function LegalPage() {
  return (
    <Container>
      <section className="d8-page-section">
        <SectionHeading
          eyebrow="Legal"
          title="Company information"
          description="Domin8 is a privately held ecommerce company. Details of our corporate structure are below."
        />

        <div className="d8-legal-block">
          <p className="d8-legal-block__title">Corporate details</p>
          <table className="d8-legal-table">
            <tbody>
              <tr>
                <td>Legal name</td>
                <td>{company.legalName}</td>
              </tr>
              <tr>
                <td>Trading as</td>
                <td>{company.brandName}</td>
              </tr>
              <tr>
                <td>Entity type</td>
                <td>{company.entityType}</td>
              </tr>
              <tr>
                <td>State of formation</td>
                <td>
                  {company.formationState}, {company.formationCountry}
                </td>
              </tr>
              <tr>
                <td>Registration / filing number</td>
                <td>{company.registrationNumber}</td>
              </tr>
              <tr>
                <td>Date of formation</td>
                <td>{company.formationDate}</td>
              </tr>
              <tr>
                <td>Operating from</td>
                <td>{company.operatesFrom}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="d8-legal-block">
          <p className="d8-legal-block__title">Registered addresses</p>
          {company.addresses.map((address) => (
            <div key={address.label} style={{ marginBottom: '1.25rem' }}>
              <p style={{ color: 'var(--d8-fg-muted)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                {address.label}
              </p>
              <address className="d8-address">
                {address.lines.map((line) => (
                  <span key={line} style={{ display: 'block' }}>
                    {line}
                  </span>
                ))}
              </address>
            </div>
          ))}
          <p className="d8-legal-note">
            The UK correspondence address above is a placeholder — add the confirmed address
            before publishing.
          </p>
        </div>

        <div className="d8-legal-block">
          <p className="d8-legal-block__title">Terms, shipping &amp; returns</p>
          <p style={{ color: 'var(--d8-fg-muted)', fontSize: '0.92rem', marginBottom: '0.75rem' }}>
            Domin8 products sold through Amazon are fulfilled and shipped under Amazon&apos;s
            standard fulfilment and returns policies for the marketplace you purchased from. For
            order-specific issues, use the return options on your Amazon order page, or contact us
            at{' '}
            <a href={`mailto:${company.contact.supportEmail}`} style={{ color: 'var(--d8-blue-light)' }}>
              {company.contact.supportEmail}
            </a>
            .
          </p>
          <p style={{ color: 'var(--d8-fg-muted)', fontSize: '0.92rem' }}>
            This page is provided for general information and does not constitute legal advice.
            Full terms of sale, a privacy policy, and cookie policy should be published here prior
            to launch.
          </p>
        </div>
      </section>
    </Container>
  );
}
