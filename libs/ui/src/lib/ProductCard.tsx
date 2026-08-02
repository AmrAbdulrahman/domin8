import Link from 'next/link';
import type { Product } from '@domin8/data';
import { Badge } from './Badge';
import { Button } from './Button';

export function ProductCard({ product }: { product: Product }) {
  const isConcept = product.status === 'concept';
  const href = `/products/${product.id}`;

  return (
    <article
      id={product.id}
      className={`d8-product-card ${isConcept ? 'd8-product-card--highlight' : ''}`}
    >
      <Link
        href={href}
        className={`d8-product-card__media ${product.image ? 'd8-product-card__media--image' : ''}`}
        aria-hidden={!product.image}
      >
        {product.image ? (
          <img src={product.image} alt={product.name} className="d8-product-card__media-image" />
        ) : (
          <span className="d8-product-card__media-label">{product.name}</span>
        )}
      </Link>

      <div className="d8-product-card__body">
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
        <h3 className="d8-product-card__name">
          <Link href={href}>{product.name}</Link>
        </h3>
        <p className="d8-product-card__tagline">{product.tagline}</p>
        <p className="d8-product-card__description">{product.description}</p>

        <ul className="d8-product-card__features">
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="d8-product-card__footer">
          {product.price && <span className="d8-product-card__price">{product.price}</span>}
          <Button href={href} variant="primary">
            View details
          </Button>
          {isConcept && (
            <Button href="/contact" variant="secondary">
              Share your feedback
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
