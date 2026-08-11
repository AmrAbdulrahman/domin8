import { company as domin8Company } from '@domin8/data';
import type { CompanyInfo } from '@domin8/data';

// Amadise is not a separate legal entity — it's a trademarked brand
// owned and operated by Domin8 (see company.legalName below), so it
// inherits Domin8's verified corporate facts and only overrides the
// brand-facing name.
export const amadiseCompany: CompanyInfo = {
  ...domin8Company,
  brandName: 'Amadise',
  contact: {
    generalEmail: 'contact@amadise.com',
    supportEmail: 'contact@amadise.com',
    pressEmail: 'contact@amadise.com',
  },
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/amadiseofficial/' },
    { label: 'Facebook', href: 'https://www.facebook.com/amadiseofficial' },
  ],
};

export const amadiseTrademark = {
  number: 'UK00004427949',
  jurisdiction: 'United Kingdom',
};
