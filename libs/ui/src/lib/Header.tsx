import Link from 'next/link';
import { Wordmark } from './Wordmark';
import { Button } from './Button';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
  { href: '/legal', label: 'Legal' },
];

export function Header({
  shopHref = '/products',
  ctaLabel = 'Shop now',
  ctaExternal = false,
  brandName,
  logoSrc,
  combinedSrc,
  navLinks = NAV_LINKS,
}: {
  shopHref?: string;
  ctaLabel?: string;
  ctaExternal?: boolean;
  brandName?: string;
  logoSrc?: string;
  combinedSrc?: string;
  navLinks?: { href: string; label: string }[];
}) {
  return (
    <header className="d8-header">
      <div className="d8-container d8-header__inner">
        <Wordmark brandName={brandName} logoSrc={logoSrc} combinedSrc={combinedSrc} />

        <nav className="d8-header__nav d8-header__nav--desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="d8-header__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="d8-header__cta">
          <Button href={shopHref} variant="primary" external={ctaExternal}>
            {ctaLabel}
          </Button>
        </div>

        <details className="d8-header__mobile">
          <summary aria-label="Open menu">Menu</summary>
          <nav className="d8-header__nav d8-header__nav--mobile" aria-label="Primary mobile">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="d8-header__link">
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
