import { Container, SectionHeading, ProductCard, Button } from '@domin8/ui';
import { sellableProducts } from '../lib/products';

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

      <section className="d8-page-section">
        <Container>
          <SectionHeading
            eyebrow="Shop Amadise"
            title="Home comfort, made simple"
            description="The same Domin8 products, presented for the home: quick repairs, tidy storage, and the small tools that make everyday comfort easier."
          />
          <div className="d8-product-grid">
            {sellableProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
