import { notFound } from 'next/navigation';
import {
  Container,
  Badge,
  Button,
  ProductGallery,
  RatingStars,
} from '@domin8/ui';
import { products, getProductById, getAverageRating } from '@domin8/data';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: 'Product not found — Domin8' };
  }

  return {
    title: `${product.name} — Domin8`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const images = product.images ?? (product.image ? [product.image] : []);
  const isConcept = product.status === 'concept';
  const showReviews = product.status !== 'coming-soon';
  const averageRating = showReviews ? getAverageRating(product) : null;

  return (
    <Container>
      <div className="d8-product-detail">
        <nav className="d8-breadcrumb" aria-label="Breadcrumb">
          <a href="/products">Products</a>
          <span aria-hidden="true">/</span>
          <span>{product.name}</span>
        </nav>

        <div className="d8-product-detail__layout">
          <ProductGallery images={images} name={product.name} />

          <div className="d8-product-detail__info">
            <div className="d8-product-card__status">
              {product.status === 'available' && <Badge tone="accent">Available now</Badge>}
              {product.status === 'coming-soon' && <Badge tone="muted">Coming soon</Badge>}
              {product.status === 'concept' && <Badge tone="concept">Proposed design</Badge>}
            </div>

            {product.brand && (
              <a
                href={product.brand.url}
                target="_blank"
                rel="noreferrer"
                className="d8-product-card__brand"
              >
                {product.brand.name}
              </a>
            )}

            <h1 className="d8-product-detail__name">{product.name}</h1>
            <p className="d8-product-card__tagline">{product.tagline}</p>

            {showReviews && averageRating !== null && product.reviews && (
              <div className="d8-product-detail__rating">
                <RatingStars rating={averageRating} />
                <span className="d8-product-detail__rating-value">{averageRating}</span>
                <a href="#reviews" className="d8-product-detail__rating-count">
                  {product.reviews.length} review{product.reviews.length === 1 ? '' : 's'}
                </a>
              </div>
            )}

            {product.price && <p className="d8-product-detail__price">{product.price}</p>}

            <ul className="d8-product-card__features">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="d8-product-card__footer">
              {isConcept && (
                <Button href="/contact" variant="primary">
                  Share your feedback
                </Button>
              )}
              <Button href="/contact" variant={isConcept ? 'secondary' : 'primary'}>
                Have a question? Contact us
              </Button>
            </div>
          </div>
        </div>

        {product.longDescription && (
          <section className="d8-page-section--tight">
            <h2 className="d8-product-detail__heading">About this product</h2>
            {product.longDescription.map((paragraph, index) => (
              <p key={index} className="d8-product-detail__paragraph">
                {paragraph}
              </p>
            ))}
          </section>
        )}

        {product.specs && product.specs.length > 0 && (
          <section className="d8-page-section--tight">
            <h2 className="d8-product-detail__heading">Specifications</h2>
            <table className="d8-spec-table">
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.label}>
                    <th scope="row">{spec.label}</th>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {showReviews && product.reviews && product.reviews.length > 0 && (
          <section id="reviews" className="d8-page-section--tight">
            <h2 className="d8-product-detail__heading">Customer reviews</h2>

            {averageRating !== null && (
              <div className="d8-reviews-summary">
                <span className="d8-reviews-summary__value">{averageRating}</span>
                <div>
                  <RatingStars rating={averageRating} />
                  <p className="d8-reviews-summary__count">
                    Based on {product.reviews.length} review
                    {product.reviews.length === 1 ? '' : 's'}
                  </p>
                </div>
              </div>
            )}

            <div className="d8-review-list">
              {product.reviews.map((review) => (
                <article key={`${review.author}-${review.date}`} className="d8-review">
                  <div className="d8-review__header">
                    <RatingStars rating={review.rating} size="sm" />
                    {review.verified && (
                      <span className="d8-review__verified">Verified purchase</span>
                    )}
                  </div>
                  <h3 className="d8-review__title">{review.title}</h3>
                  <p className="d8-review__body">{review.body}</p>
                  <p className="d8-review__meta">
                    {review.author} ·{' '}
                    {new Date(review.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </Container>
  );
}
