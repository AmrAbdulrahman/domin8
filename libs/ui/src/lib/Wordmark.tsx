import Link from 'next/link';

export function Wordmark({
  size = 'md',
  brandName = 'DOMIN8',
  logoSrc = '/logo.png',
  combinedSrc,
}: {
  size?: 'md' | 'lg';
  brandName?: string;
  logoSrc?: string;
  combinedSrc?: string;
}) {
  return (
    <Link href="/" className={`d8-wordmark d8-wordmark--${size}`} aria-label={`${brandName} home`}>
      {combinedSrc ? (
        <img src={combinedSrc} alt={brandName} className="d8-wordmark__combined" />
      ) : (
        <>
          <img src={logoSrc} alt={brandName} className="d8-wordmark__mark" />
          <span className="d8-wordmark__text">{brandName}</span>
        </>
      )}
    </Link>
  );
}
