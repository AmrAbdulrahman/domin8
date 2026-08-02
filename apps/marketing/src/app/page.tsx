import { Container, SectionHeading, ProductCard, Button, Badge } from '@domin8/ui';
import { products, getHighlightedProduct } from '@domin8/data';

export default function HomePage() {
  const featured = products.filter((p) => p.status === 'available');
  const highlighted = getHighlightedProduct();

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
              <Button href="/products" variant="primary">
                Shop now
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="d8-page-section">
        <Container>
          <SectionHeading
            eyebrow="Shop Domin8"
            title="Available now"
            description="Our current range, fulfilled through Amazon."
          />
          <div className="d8-product-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Button href="/products" variant="ghost">
              View all products →
            </Button>
          </div>
        </Container>
      </section>

      {highlighted && (
        <section className="d8-page-section d8-page-section--alt">
          <Container>
            <div className="d8-product-card d8-product-card--highlight" style={{ maxWidth: 780, margin: '0 auto' }}>
              <div className="d8-product-card__body">
                <Badge tone="concept">Proposed design</Badge>
                <h3 className="d8-product-card__name" style={{ marginTop: '0.75rem' }}>
                  {highlighted.name}
                </h3>
                <p className="d8-product-card__tagline">{highlighted.tagline}</p>
                <p className="d8-product-card__description">{highlighted.description}</p>
                <div className="d8-product-card__footer">
                  <Button href={`/products/${highlighted.id}`} variant="primary">
                    Explore the design
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Tell us what you think
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
