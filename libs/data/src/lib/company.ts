// Core company facts used across the marketing site.
//
// NOTE: registrationNumber, registeredAgent, and the two operating
// addresses below are placeholders. We could not locate a verified
// Wyoming filing number or confirmed correspondence addresses in
// the connected Notion workspace, so replace these with the real,
// verified details before this site goes live.

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
  legalName: 'Domin8 LLC',
  brandName: 'Domin8',
  entityType: 'Limited Liability Company (LLC)',
  formationState: 'Wyoming',
  formationCountry: 'United States',
  // Placeholder — confirm against the Wyoming Secretary of State filing.
  registrationNumber: '[Wyoming SOS filing number — add here]',
  operatesFrom: 'United Kingdom',
  foundedYear: 2025,
  teamSize: 3,
  addresses: [
    {
      label: 'Registered agent (Wyoming, USA)',
      lines: ['[Registered agent name]', '[Street address]', '[City, WY ZIP]', 'United States'],
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
