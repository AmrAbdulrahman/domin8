# Domin8 Marketing Site

Nx workspace for the Domin8 marketing website.

## Structure

- `apps/marketing` — Next.js (App Router) marketing site.
- `libs/ui` — shared React components (Header, Footer, Button, ProductCard, etc.).
- `libs/data` — shared content: company/legal info (`libs/data/src/lib/company.ts`) and product catalogue (`libs/data/src/lib/products.ts`).

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
npx nx dev marketing      # local dev server
npx nx build marketing    # production build
```

## Adding to the site

- New shared component → `libs/ui/src/lib/`, export it from `libs/ui/src/index.ts`.
- New shared data (e.g. more products) → `libs/data/src/lib/`.
- New page → `apps/marketing/src/app/<route>/page.tsx`.
