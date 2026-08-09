import { Container, SectionHeading, ProductCard, Button } from '@domin8/ui';
import { products } from '@domin8/data';
import { amadiseTrademark, amadiseCompany } from '../lib/brand';

export default function HomePage() {
  const featured = products.filter((p) => p.status !== 'concept');

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
            <p className="d8-hero__eyebrow">Home. Comfort. Amadise.</p>
            <h1 className="d8-hero__title">
              Everyday comfort for the home, <span>one small fix at a time.</span>
            </h1>
            <p className="d8-hero__lede">
              Amadise brings the Domin8 handheld sewing machine and its companion accessories
              into your home — practical, portable tools designed for quick repairs and a more
              comfortable everyday life.
            </p>
            <div className="d8-hero__actions">
              <Button href="/products" variant="primary">
                Shop now
              </Button>
              <Button href="/legal" variant="secondary">
                About Amadise
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="d8-stats-strip">
        <Container>
          <div className="d8-hero__stat-grid">
            <div>
              <p className="d8-hero__stat-value">Domin8</p>
              <p className="d8-hero__stat-label">Parent brand</p>
            </div>
            <div>
              <p className="d8-hero__stat-value">{amadiseTrademark.number}</p>
              <p className="d8-hero__stat-label">Registered trademark (UK)</p>
            </div>
            <div>
              <p className="d8-hero__stat-value">{amadiseCompany.foundedYear}</p>
              <p className="d8-hero__stat-label">Founded</p>
            </div>
            <div>
              <p className="d8-hero__stat-value">{amadiseCompany.teamSize}-person</p>
              <p className="d8-hero__stat-label">Team</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="d8-page-section">
        <Container>
          <SectionHeading
            eyebrow="Shop Amadise"
            title="Home comfort, made simple"
            description="The same Domin8 products, presented for the home: quick repairs, tidy storage, and the small tools that make everyday comfort easier."
          />
          <div className="d8-product-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="d8-page-section d8-page-section--alt">
        <Container>
          <SectionHeading
            eyebrow="Part of Domin8"
            title="Amadise is a Domin8 brand"
            description="Amadise is part of and belongs to Domin8 — the same team, the same products, presented as a dedicated home & comfort brand."
          />
          <div className="a8-brand-strip">
            <span>
              <strong>Amadise</strong> is a brand under the Domin8 umbrella.
            </span>
            <span>
              Owned by <strong>{amadiseCompany.legalName}</strong>.
            </span>
            <span>
              Trademarked in the <strong>{amadiseTrademark.jurisdiction}</strong>, no.{' '}
              <strong>{amadiseTrademark.number}</strong>.
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
