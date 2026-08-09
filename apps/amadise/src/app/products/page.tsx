import { Container, SectionHeading, ProductCard } from '@domin8/ui';
import { products } from '@domin8/data';

export const metadata = {
  title: 'Products — Amadise',
  description:
    'Shop the Amadise range: the Domin8 handheld sewing machine and its companion home & comfort accessories.',
};

export default function ProductsPage() {
  const available = products.filter((p) => p.status !== 'concept');

  return (
    <Container>
      <section className="d8-page-section">
        <SectionHeading
          eyebrow="Products"
          title="Home comfort, one small fix at a time."
          description="Amadise shares the Domin8 product range — the same handheld sewing machine and accessories, designed for quick repairs around the home."
        />

        <div className="d8-product-grid">
          {available.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Container>
  );
}
