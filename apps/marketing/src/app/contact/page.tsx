import { Container, SectionHeading } from '@domin8/ui';
import { company } from '@domin8/data';

export const metadata = {
  title: 'Contact — Domin8',
  description: 'Get in touch with Domin8: email, marketplaces, and social channels.',
};

export default function ContactPage() {
  return (
    <>
      <section className="d8-page-section">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to us"
            description="We're a small team, so a real person reads every message. Reach us through any of the channels below."
          />

          <div className="d8-contact-grid">
            <div className="d8-contact-card">
              <p className="d8-contact-card__title">General enquiries</p>
              <p className="d8-contact-card__body">
                Questions about Domin8, our products, or partnerships.
              </p>
              <a className="d8-contact-card__link" href={`mailto:${company.contact.generalEmail}`}>
                {company.contact.generalEmail}
              </a>
            </div>

            <div className="d8-contact-card">
              <p className="d8-contact-card__title">Order support</p>
              <p className="d8-contact-card__body">
                For order issues, returns, or product questions, contact us directly or via your
                Amazon order page.
              </p>
              <a className="d8-contact-card__link" href={`mailto:${company.contact.supportEmail}`}>
                {company.contact.supportEmail}
              </a>
            </div>

            <div className="d8-contact-card">
              <p className="d8-contact-card__title">Press &amp; partnerships</p>
              <p className="d8-contact-card__body">Media enquiries and collaboration proposals.</p>
              <a className="d8-contact-card__link" href={`mailto:${company.contact.pressEmail}`}>
                {company.contact.pressEmail}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="d8-page-section d8-page-section--tight d8-page-section--alt">
        <Container>
          <SectionHeading eyebrow="Shop" title="Find us on Amazon" />
          <div className="d8-contact-grid">
            {company.marketplaces.map((m) => (
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

      <section className="d8-page-section d8-page-section--tight">
        <Container>
          <SectionHeading eyebrow="Follow" title="Social channels" />
          <div className="d8-contact-grid">
            {company.socials.map((s) => (
              <div className="d8-contact-card" key={s.href}>
                <p className="d8-contact-card__title">{s.label}</p>
                <a className="d8-contact-card__link" href={s.href} target="_blank" rel="noreferrer">
                  {s.href.replace('https://', '')}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
