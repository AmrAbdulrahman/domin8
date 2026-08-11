import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import './global.css';
import { Header, Footer } from '@domin8/ui';
import { company } from '@domin8/data';

export const metadata = {
  title: 'Domin8 — Handheld Sewing Machines & Sewing Innovation',
  description:
    'Domin8 is an Amazon ecommerce brand designing practical, portable sewing tools — starting with our cordless handheld sewing machine.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header
          shopHref="https://amadise.com"
          ctaLabel="Visit Amadise"
          ctaExternal
          navLinks={[
            { href: '/', label: 'Home' },
            { href: '/#brands', label: 'Brands' },
            { href: '/contact', label: 'Contact' },
            { href: '/legal', label: 'Legal' },
          ]}
        />
        <main>{children}</main>
        <Footer
          company={company}
          shopHeading="Brands"
          shopLinks={[{ label: 'Amadise', href: 'https://amadise.com' }]}
        />
      </body>
    </html>
  );
}
