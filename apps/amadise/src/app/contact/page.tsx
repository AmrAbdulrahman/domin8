import { Container, SectionHeading } from '@domin8/ui';
import { amadiseCompany } from '../../lib/brand';

export const metadata = {
  title: 'Contact — Amadise',
  description: 'Get in touch with Amadise, a Domin8 brand: email, marketplaces, and social channels.',
};

export default function ContactPage() {
  return (
    <>
      <section className="d8-page-section">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to us"
            description="Amadise is supported by the Domin8 team, so a real person reads every message. Reach us through any of the channels below."
          />

          <div className="d8-contact-grid">
            <div className="d8-contact-card">
              <p className="d8-contact-card__title">General enquiries</p>
              <p className="d8-contact-card__body">
                Questions about Amadise, our products, or the Domin8 brand family.
              </p>
              <a
                className="d8-contact-card__link"
                href={`mailto:${amadiseCompany.contact.generalEmail}`}
              >
                {amadiseCompany.contact.generalEmail}
              </a>
            </div>

            <div className="d8-contact-card">
              <p className="d8-contact-card__title">Order support</p>
              <p className="d8-contact-card__body">
                For order issues, returns, or product questions, contact us directly or via your
                Amazon order page.
              </p>
              <a
                className="d8-contact-card__link"
                href={`mailto:${amadiseCompany.contact.supportEmail}`}
              >
                {amadiseCompany.contact.supportEmail}
              </a>
            </div>

            <div className="d8-contact-card">
              <p className="d8-contact-card__title">Press &amp; partnerships</p>
              <p className="d8-contact-card__body">Media enquiries and collaboration proposals.</p>
              <a
                className="d8-contact-card__link"
                href={`mailto:${amadiseCompany.contact.pressEmail}`}
              >
                {amadiseCompany.contact.pressEmail}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="d8-page-section d8-page-section--tight d8-page-section--alt">
        <Container>
          <SectionHeading eyebrow="Shop" title="Find us on Amazon" />
          <div className="d8-contact-grid">
            {amadiseCompany.marketplaces.map((m) => (
              <div className="d8-contact-card" key={m.href}>
                <p className="d8-contact-card__title">{m.label}</p>
                <p className="d8-contact-card__body">{m.description}</p>
                <a className="d8-contact-card__link" href={m.href} target="_blank" rel="noreferrer">
                  Visit storefront →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
