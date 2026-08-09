import { Container, SectionHeading } from '@domin8/ui';
import { amadiseCompany, amadiseTrademark } from '../../lib/brand';

export const metadata = {
  title: 'Legal & Brand Information — Amadise',
  description:
    'Amadise is a trademarked brand that is part of and belongs to Domin8. Company registration, trademark, and legal information.',
};

export default function LegalPage() {
  return (
    <Container>
      <section className="d8-page-section">
        <img src="/logo-full.png" alt="Amadise — Home. Comfort. Amadise." className="a8-legal-logo" />

        <SectionHeading
          eyebrow="Legal"
          title="Amadise & Domin8"
          description="Amadise is a trademarked brand name — it is part of and belongs to Domin8, and is not a separate legal entity. Details of the corporate structure behind it are below."
        />

        <div className="d8-legal-block">
          <p className="d8-legal-block__title">Brand ownership</p>
          <table className="d8-legal-table">
            <tbody>
              <tr>
                <td>Brand name</td>
                <td>Amadise</td>
              </tr>
              <tr>
                <td>Brand tagline</td>
                <td>Home. Comfort. Amadise.</td>
              </tr>
              <tr>
                <td>Owned by</td>
                <td>{amadiseCompany.legalName}, trading as Domin8</td>
              </tr>
              <tr>
                <td>Registered trademark</td>
                <td>
                  {amadiseTrademark.number} ({amadiseTrademark.jurisdiction})
                </td>
              </tr>
            </tbody>
          </table>
          <p className="d8-legal-note">
            Amadise is part of and belongs to {amadiseCompany.legalName}. It shares the same
            company, team, and product range as Domin8, presented as a dedicated home &amp;
            comfort brand.
          </p>
        </div>

        <div className="d8-legal-block">
          <p className="d8-legal-block__title">Corporate details</p>
          <table className="d8-legal-table">
            <tbody>
              <tr>
                <td>Legal name</td>
                <td>{amadiseCompany.legalName}</td>
              </tr>
              <tr>
                <td>Entity type</td>
                <td>{amadiseCompany.entityType}</td>
              </tr>
              <tr>
                <td>State of formation</td>
                <td>
                  {amadiseCompany.formationState}, {amadiseCompany.formationCountry}
                </td>
              </tr>
              <tr>
                <td>Registration / filing number</td>
                <td>{amadiseCompany.registrationNumber}</td>
              </tr>
              <tr>
                <td>Date of formation</td>
                <td>{amadiseCompany.formationDate}</td>
              </tr>
              <tr>
                <td>Operating from</td>
                <td>{amadiseCompany.operatesFrom}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="d8-legal-block">
          <p className="d8-legal-block__title">Registered addresses</p>
          {amadiseCompany.addresses.map((address) => (
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
            Amadise products sold through Amazon are fulfilled and shipped under Amazon&apos;s
            standard fulfilment and returns policies for the marketplace you purchased from. For
            order-specific issues, use the return options on your Amazon order page, or contact us
            at{' '}
            <a
              href={`mailto:${amadiseCompany.contact.supportEmail}`}
              style={{ color: 'var(--d8-blue-light)' }}
            >
              {amadiseCompany.contact.supportEmail}
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
