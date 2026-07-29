import Link from 'next/link';

export function Wordmark({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <Link href="/" className={`d8-wordmark d8-wordmark--${size}`} aria-label="Domin8 home">
      <img src="/logo.png" alt="Domin8" className="d8-wordmark__mark" />
      <span className="d8-wordmark__text">DOMIN8</span>
    </Link>
  );
}
