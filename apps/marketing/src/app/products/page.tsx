import { Container, SectionHeading, ProductCard } from '@domin8/ui';
import { products } from '@domin8/data';

export const metadata = {
  title: 'Products — Domin8',
  description:
    'The Domin8 product range: our handheld sewing machine, refill kit, and our proposed next-generation design.',
};

export default function ProductsPage() {
  const available = products.filter((p) => p.status !== 'concept');
  const concept = products.filter((p) => p.status === 'concept');

  return (
    <Container>
      <section className="d8-page-section">
        <SectionHeading
          eyebrow="Products"
          title="Built for one job: fast, reliable mending."
          description="Every Domin8 product is designed around the same idea — sewing tools that are small enough to keep on hand and sturdy enough to trust."
        />

        <div className="d8-product-grid">
          {available.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {concept.length > 0 && (
        <section className="d8-page-section d8-page-section--tight">
          <SectionHeading
            eyebrow="In development"
            title="Our proposed next design"
            description="This is not yet available to buy — we're sharing it because we want feedback before it goes into production."
          />
          <div className="d8-product-grid">
            {concept.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
