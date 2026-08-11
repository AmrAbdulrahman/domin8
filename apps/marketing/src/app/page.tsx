import { Container, SectionHeading, Button } from '@domin8/ui';

export default function HomePage() {
  return (
    <>
      <section className="d8-hero-video">
        <video
          className="d8-hero-video__media"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.webp"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="d8-hero-video__scrim" />

        <Container>
          <div className="d8-hero-video__panel">
            <p className="d8-hero__eyebrow">Amazon ecommerce brand</p>
            <h1 className="d8-hero__title">
              Cordless sewing power, <span>in the palm of your hand.</span>
            </h1>
            <p className="d8-hero__lede">
              Domin8 designs and sells practical, portable sewing tools — starting with a
              handheld sewing machine built for quick repairs, hems, and fixes without hauling
              out a full-size machine.
            </p>
            <div className="d8-hero__actions">
              <Button href="#brands" variant="primary">
                Our brands
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="brands" className="d8-page-section">
        <Container>
          <SectionHeading
            eyebrow="Our brands"
            title="Domin8 products, under dedicated brands"
            description="We design and build the products. Each one is brought to market through a brand built around how it's actually used — starting with Amadise."
          />
          <div className="d8-value-card" style={{ maxWidth: 480 }}>
            <img
              src="/brands/amadise-icon.png"
              alt="Amadise"
              style={{ width: '3rem', height: '3rem', marginBottom: '1rem' }}
            />
            <p className="d8-value-card__title">Amadise — Home. Comfort. Amadise.</p>
            <p className="d8-value-card__body">
              Our handheld sewing machine and accessories, presented as a dedicated home &amp;
              comfort brand.
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              <Button href="https://amadise.com" variant="primary" external>
                Visit Amadise →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
