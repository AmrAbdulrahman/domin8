import Link from 'next/link';
import { Wordmark } from './Wordmark';
import { Button } from './Button';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
  { href: '/legal', label: 'Legal' },
];

export function Header({ shopHref = '/products' }: { shopHref?: string }) {
  return (
    <header className="d8-header">
      <div className="d8-container d8-header__inner">
        <Wordmark />

        <nav className="d8-header__nav d8-header__nav--desktop" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="d8-header__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="d8-header__cta">
          <Button href={shopHref} variant="primary">
            Shop now
          </Button>
        </div>

        <details className="d8-header__mobile">
          <summary aria-label="Open menu">Menu</summary>
          <nav className="d8-header__nav d8-header__nav--mobile" aria-label="Primary mobile">
            {NAV_LINKS.map((link) => (
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
