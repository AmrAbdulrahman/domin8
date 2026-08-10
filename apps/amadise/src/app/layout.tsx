import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import './global.css';
import { Header, Footer } from '@domin8/ui';
import { amadiseCompany, amadiseTrademark } from '../lib/brand';

export const metadata = {
  title: 'Amadise — Home. Comfort. Amadise.',
  description:
    'Amadise is a home & comfort brand by Domin8, bringing the Domin8 handheld sewing machine and companion products into a warmer, everyday-home story.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    images: ['/logo-full.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header shopHref="/products" brandName="amadise" combinedSrc="/logo-banner.svg" />
        <main>{children}</main>
        <Footer
          company={amadiseCompany}
          brandName="amadise"
          combinedSrc="/logo-banner.svg"
          showUpcomingLink={false}
          tagline={
            <>
              Amadise is a home &amp; comfort brand under the Domin8 umbrella, sharing Domin8’s
              handheld sewing machine and accessories.
            </>
          }
          legalNote={
            <>
              Amadise is part of and belongs to {amadiseCompany.legalName} (trading as Domin8).
              Amadise® is a registered trademark, {amadiseTrademark.jurisdiction} no.{' '}
              {amadiseTrademark.number}.
            </>
          }
        />
      </body>
    </html>
  );
}
