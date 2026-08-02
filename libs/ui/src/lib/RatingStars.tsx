export function RatingStars({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' }) {
  const rounded = Math.round(rating);

  return (
    <span className={`d8-rating d8-rating--${size}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`d8-rating__star ${index < rounded ? 'd8-rating__star--filled' : ''}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </span>
  );
}
