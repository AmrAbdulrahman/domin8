import { company as domin8Company } from '@domin8/data';
import type { CompanyInfo } from '@domin8/data';

// Amadise is not a separate legal entity — it's a trademarked brand
// owned and operated by Domin8 (see company.legalName below), so it
// inherits Domin8's verified corporate facts and only overrides the
// brand-facing name.
export const amadiseCompany: CompanyInfo = {
  ...domin8Company,
  brandName: 'Amadise',
};

export const amadiseTrademark = {
  number: 'UK00004427949',
  jurisdiction: 'United Kingdom',
};
