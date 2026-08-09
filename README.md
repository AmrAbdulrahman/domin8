# Domin8 Marketing Site

Nx workspace for the Domin8 marketing website and its sister brand sites.

## Structure

- `apps/marketing` — Next.js (App Router) marketing site for Domin8.
- `apps/amadise` — Next.js (App Router) site for Amadise, a home & comfort brand that is part of
  and belongs to Domin8 (UK trademark UK00004427949). Reuses the Domin8 product catalogue with its
  own theme and logo (`apps/amadise/src/lib/brand.ts`).
- `libs/ui` — shared React components (Header, Footer, Button, ProductCard, etc.). `Header` /
  `Footer` / `Wordmark` accept `brandName` / `logoSrc` props so each app can theme them without
  forking the components.
- `libs/data` — shared content: company/legal info (`libs/data/src/lib/company.ts`) and product
  catalogue (`libs/data/src/lib/products.ts`).

## Before you publish

`libs/data/src/lib/company.ts` contains **placeholder** values that need to be replaced with the real, verified details:

- Wyoming registration/filing number
- Registered agent address (Wyoming)
- UK correspondence address
- Contact emails (currently `@domin8supply.com` placeholders)
- Amazon storefront URLs and social handles

Search that file for the word "placeholder" to find every spot that needs a real value.

## Getting started

```bash
npm install
npx nx dev marketing      # local dev server (Domin8)
npx nx dev amadise        # local dev server (Amadise)
npx nx build marketing    # production build (Domin8)
npx nx build amadise      # production build (Amadise)
```

## Adding to the site

- New shared component → `libs/ui/src/lib/`, export it from `libs/ui/src/index.ts`.
- New shared data (e.g. more products) → `libs/data/src/lib/`.
- New page → `apps/marketing/src/app/<route>/page.tsx`.
