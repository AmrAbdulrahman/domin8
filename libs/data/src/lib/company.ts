// Core company facts used across the marketing site.
//
// Wyoming entity details (legal name, filing number, registered agent,
// principal office address) are verified against the Wyoming Secretary
// of State Certificate of Organization filed 2025-10-08.
//
// NOTE: the UK correspondence address below is still a placeholder —
// add the real UK address before this site goes live.

export interface Address {
  label: string;
  lines: string[];
}

export interface CompanyInfo {
  legalName: string;
  brandName: string;
  entityType: string;
  formationState: string;
  formationCountry: string;
  registrationNumber: string;
  formationDate: string;
  operatesFrom: string;
  foundedYear: number;
  teamSize: number;
  addresses: Address[];
  contact: {
    generalEmail: string;
    supportEmail: string;
    pressEmail: string;
  };
  socials: {
    label: string;
    href: string;
  }[];
  marketplaces: {
    label: string;
    href: string;
    description: string;
  }[];
}

export const company: CompanyInfo = {
  legalName: 'Domin8 Holdings LLC',
  brandName: 'Domin8',
  entityType: 'Limited Liability Company (LLC)',
  formationState: 'Wyoming',
  formationCountry: 'United States',
  registrationNumber: '2025-001786051',
  formationDate: 'October 8, 2025',
  operatesFrom: 'United Kingdom',
  foundedYear: 2025,
  teamSize: 3,
  addresses: [
    {
      label: 'Registered agent (Wyoming, USA)',
      lines: ['Registered Agents Inc', '30 N Gould St Ste R', 'Sheridan, WY 82801', 'United States'],
    },
    {
      label: 'Principal office address',
      lines: ['30 N Gould St Ste R', 'Sheridan, WY 82801', 'United States'],
    },
    {
      label: 'UK correspondence address',
      lines: ['[Street address]', '[City, postcode]', 'United Kingdom'],
    },
  ],
  contact: {
    generalEmail: 'hello@domin8supply.com',
    supportEmail: 'support@domin8supply.com',
    pressEmail: 'press@domin8supply.com',
  },
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/domin8supply' },
    { label: 'TikTok', href: 'https://tiktok.com/@domin8supply' },
    { label: 'Facebook', href: 'https://facebook.com/domin8supply' },
  ],
  marketplaces: [
    {
      label: 'Amazon (US)',
      href: 'https://www.amazon.com/stores/Domin8',
      description: 'Our primary storefront — fulfilled by Amazon.',
    },
    {
      label: 'Amazon (UK)',
      href: 'https://www.amazon.co.uk/stores/Domin8',
      description: 'UK fulfilment, same product range.',
    },
  ],
};
