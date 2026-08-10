import { ReactNode } from 'react';
import Link from 'next/link';
import type { CompanyInfo } from '@domin8/data';
import { Wordmark } from './Wordmark';

export function Footer({
  company,
  brandName,
  logoSrc,
  combinedSrc,
  tagline,
  legalNote,
  showUpcomingLink = true,
}: {
  company: CompanyInfo;
  brandName?: string;
  logoSrc?: string;
  combinedSrc?: string;
  tagline?: ReactNode;
  legalNote?: ReactNode;
  showUpcomingLink?: boolean;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="d8-footer">
      <div className="d8-container d8-footer__inner">
        <div className="d8-footer__brand">
          <Wordmark brandName={brandName} logoSrc={logoSrc} combinedSrc={combinedSrc} />
          <p className="d8-footer__tagline">
            {tagline ?? (
              <>
                {company.brandName} is an independent ecommerce brand designing practical,
                portable sewing tools.
              </>
            )}
          </p>
        </div>

        <div className="d8-footer__col">
          <p className="d8-footer__heading">Shop</p>
          <Link href="/products" className="d8-footer__link">
            Products
          </Link>
          {showUpcomingLink && (
            <Link href="/products#next-gen-design" className="d8-footer__link">
              Upcoming design
            </Link>
          )}
        </div>

        <div className="d8-footer__col">
          <p className="d8-footer__heading">Company</p>
          <Link href="/team" className="d8-footer__link">
            Team
          </Link>
          <Link href="/contact" className="d8-footer__link">
            Contact
          </Link>
          <Link href="/legal" className="d8-footer__link">
            Legal &amp; company info
          </Link>
        </div>

        <div className="d8-footer__col">
          <p className="d8-footer__heading">Connect</p>
          <a href={`mailto:${company.contact.generalEmail}`} className="d8-footer__link">
            {company.contact.generalEmail}
          </a>
          {company.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="d8-footer__link"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="d8-container">
        <p className="d8-footer__facts">
          Incorporated in {company.formationState}, {company.formationCountry} &nbsp;&middot;&nbsp;
          Operating from {company.operatesFrom} &nbsp;&middot;&nbsp; Est. {company.foundedYear}
        </p>
        <p className="d8-footer__legal">
          &copy; {year} {company.legalName}. All rights reserved.
        </p>
        {legalNote && <p className="d8-footer__legal">{legalNote}</p>}
      </div>
    </footer>
  );
}
