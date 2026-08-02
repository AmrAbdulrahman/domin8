export type ProductStatus = 'available' | 'coming-soon' | 'concept';

export interface ProductBrand {
  name: string;
  url: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductReview {
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified?: boolean;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string[];
  features: string[];
  status: ProductStatus;
  highlight?: boolean;
  image?: string;
  images?: string[];
  price?: string;
  amazonUrl?: string;
  brand?: ProductBrand;
  specs?: ProductSpec[];
  reviews?: ProductReview[];
}

export const products: Product[] = [
  {
    id: 'handheld-sewing-machine',
    name: 'Domin8 Handheld Sewing Machine',
    tagline: 'Cordless mending in one hand, anywhere.',
    description:
      'Our flagship product: a lightweight, cordless handheld sewing machine built for quick fixes, hems, and repairs without dragging out a full-size machine. Designed for everyday makers, travellers, and small workshops.',
    features: [
      'Cordless, rechargeable operation',
      'One-handed grip, under 400g',
      'Dual-speed stitching for fabric and denim',
      'Built-in thread cutter and spool holder',
      'Includes starter thread, needles, and travel case',
    ],
    status: 'coming-soon',
    price: '$24.99',
    amazonUrl: 'https://www.amazon.com/stores/Domin8',
    image: '/products/handheld-sewing-machine.webp',
    images: [
      '/products/handheld-sewing-machine.webp',
      '/products/handheld-sewing-machine-2.webp',
      '/products/handheld-sewing-machine-3.webp',
    ],
    longDescription: [
      "The Domin8 Handheld Sewing Machine is built for the repair you'd otherwise put off: a dropped hem, a split seam, a loose button. Pick it up, thread it, and you're stitching in under a minute — no bobbin winding, no pedal, no dragging a full-size machine out of a cupboard.",
      "A rechargeable battery powers dual-speed stitching through everything from light cotton to denim, and the built-in thread cutter and spool holder keep the whole kit self-contained. It ships with a starter reel of thread, a set of needles, and a fitted travel case.",
      "Weighing under 400g and shaped for a one-handed grip, it's designed to live in a drawer, a car, or a suitcase — ready whenever something needs mending.",
    ],
    specs: [
      { label: 'Weight', value: '380g' },
      { label: 'Power', value: 'Rechargeable Li-ion battery, USB charging' },
      { label: 'Stitch speeds', value: '2 (standard, denim/heavy fabric)' },
      { label: 'Included accessories', value: 'Thread reel, needle set, travel case' },
      { label: 'Charge time', value: '~2 hours' },
      { label: 'Runtime per charge', value: 'Approx. 90 minutes continuous use' },
    ],
  },
  {
    id: 'travel-bag',
    name: 'Domin8 Travel & Storage Case',
    tagline: 'Durable. Compact. Ready to go.',
    description:
      'A dedicated storage case for the Domin8 handheld sewing machine and its accessories. Padded, zippered, and sized to slip into a drawer, tote, or suitcase without taking up much room.',
    features: [
      'Premium, water-resistant exterior',
      'Lightweight & portable',
      'Spacious interior storage',
      'Zippered main compartment with carry handle',
      'Fits the handheld machine plus accessories',
    ],
    status: 'available',
    price: '$14.99',
    amazonUrl: 'https://www.amazon.com/stores/Domin8',
    image: '/products/travel-bag.webp',
    images: [
      '/products/travel-bag.webp',
      '/products/travel-bag-2.webp',
      '/products/travel-bag-3.webp',
    ],
    longDescription: [
      'Built specifically around the dimensions of the Domin8 handheld sewing machine, this case keeps the machine, spare thread, and needles together in one padded, zippered compartment.',
      'The water-resistant exterior shrugs off the odd spill or damp umbrella, and the carry handle makes it easy to grab on the way out the door — whether that’s a work bag, a suitcase, or a kitchen drawer.',
    ],
    specs: [
      { label: 'Material', value: 'Water-resistant polyester exterior' },
      { label: 'Interior', value: 'Padded, fitted compartment + accessory pocket' },
      { label: 'Closure', value: 'Zippered main compartment' },
      { label: 'Carry', value: 'Reinforced carry handle' },
      { label: 'Fits', value: 'Domin8 Handheld Sewing Machine + accessories' },
    ],
    reviews: [
      {
        author: 'Dana W.',
        rating: 5,
        date: '2026-01-05',
        title: 'Fits perfectly, feels sturdy',
        body: 'Exactly sized for the machine and a spool or two of thread. Zip feels solid, not flimsy like some of the cheaper cases I looked at.',
        verified: true,
      },
      {
        author: 'Jon P.',
        rating: 4,
        date: '2025-12-18',
        title: 'Good case, wish it had a shoulder strap',
        body: 'Does the job well, I just would have liked a strap option for longer trips. Otherwise no complaints.',
        verified: true,
      },
      {
        author: 'Sara K.',
        rating: 5,
        date: '2025-11-30',
        title: 'Handle survives being thrown in a suitcase',
        body: 'Been through two flights in checked luggage and still looks new. Handle hasn’t loosened at all.',
      },
    ],
  },
  {
    id: 'accessories-kit',
    name: 'Domin8 Complete Accessories Kit',
    tagline: 'Everything you need to start sewing, anytime, anywhere.',
    description:
      'A companion accessories kit for the Domin8 handheld sewing machine: thread, bobbins, needles, and the small tools that make repairs easier, all in one pack.',
    features: [
      '6 thread spools + 6 bobbins',
      '5 sewing needles + needle threader',
      'Measuring tape, seam ripper & scissors',
      'USB charging cable, spool pins & cleaning brush',
      'Includes screwdriver and user manual',
    ],
    status: 'available',
    price: '$12.99',
    amazonUrl: 'https://www.amazon.com/stores/Domin8',
    image: '/products/accessories-kit.webp',
    images: [
      '/products/accessories-kit.webp',
      '/products/accessories-kit-2.webp',
      '/products/accessories-kit-3.webp',
    ],
    longDescription: [
      'The Complete Accessories Kit rounds out the Domin8 handheld sewing machine with everything you run out of first: thread, bobbins, and needles, plus the small tools — a seam ripper, measuring tape, and scissors — that make repairs quicker.',
      'A spare USB charging cable and cleaning brush are included too, so the whole kit can live alongside the machine without hunting down extra parts.',
    ],
    specs: [
      { label: 'Thread', value: '6 spools, assorted colours' },
      { label: 'Bobbins', value: '6 pre-wound bobbins' },
      { label: 'Needles', value: '5 needles + needle threader' },
      { label: 'Tools included', value: 'Seam ripper, measuring tape, scissors' },
      { label: 'Extras', value: 'USB charging cable, spool pins, cleaning brush, screwdriver' },
    ],
    reviews: [
      {
        author: 'Alicia F.',
        rating: 5,
        date: '2026-01-09',
        title: 'Everything you need, nothing you don’t',
        body: 'Bought this alongside the machine and glad I did — the bobbins alone would’ve been annoying to source separately.',
        verified: true,
      },
      {
        author: 'Tom H.',
        rating: 4,
        date: '2025-12-11',
        title: 'Good value bundle',
        body: 'Thread colours are decent for basic repairs. Would like a couple more shades but can’t complain at this price.',
        verified: true,
      },
      {
        author: 'Nadia B.',
        rating: 5,
        date: '2025-11-22',
        title: 'Seam ripper is sharper than expected',
        body: 'Small thing, but the seam ripper included is genuinely good quality — didn’t expect that from an accessory pack.',
      },
    ],
  },
  {
    id: 'deluxe-sewing-kit',
    name: 'Deluxe Sewing Kit',
    tagline: 'A full sewing kit in one zip case, for mending anywhere.',
    description:
      'A comprehensive, all-in-one sewing kit packed into a compact zip case: colourful thread, needles, pins, and the small tools every household or travel bag should carry. Sold under our sister brand, Stitch & Nidle.',
    features: [
      'Wide range of coloured thread spools',
      'Needles, pins & needle threader included',
      'Compact zip case for storage and travel',
      'Scissors, tape measure & thimble included',
      'Great for home, travel, and gifting',
    ],
    status: 'available',
    price: '$19.99',
    amazonUrl: 'https://www.amazon.com/stores/StitchAndNidle',
    image: '/products/deluxe-sewing-kit.webp',
    images: [
      '/products/deluxe-sewing-kit.webp',
      '/products/deluxe-sewing-kit-2.webp',
      '/products/deluxe-sewing-kit-3.webp',
    ],
    brand: { name: 'Stitch & Nidle', url: 'http://stitchandnidle.com' },
    longDescription: [
      'The Deluxe Sewing Kit is built for the household drawer or the top of a suitcase: a wide range of coloured thread, needles, pins, and the small tools that come up more often than you’d think — all zipped into one compact case.',
      'It’s designed as a general-purpose kit rather than a machine accessory, so it’s equally at home patching a jacket, hemming curtains, or getting handed to a teenager heading off to university.',
    ],
    specs: [
      { label: 'Thread', value: '20+ coloured spools' },
      { label: 'Needles & pins', value: 'Assorted hand needles, pins, needle threader' },
      { label: 'Tools included', value: 'Scissors, tape measure, thimble' },
      { label: 'Case', value: 'Zippered, compact carry case' },
      { label: 'Best for', value: 'General mending, travel, gifting' },
    ],
    reviews: [
      {
        author: 'Harriet L.',
        rating: 5,
        date: '2026-01-20',
        title: 'Great gift, better than I expected for the price',
        body: 'Got this as a stocking filler and ended up keeping one for myself. Thread selection is genuinely wide, not just primary colours.',
        verified: true,
      },
      {
        author: 'Owen D.',
        rating: 4,
        date: '2025-12-28',
        title: 'Solid all-rounder kit',
        body: 'Case is a bit snug once everything’s back in, but that’s a minor gripe. Covers pretty much everything a household needs.',
        verified: true,
      },
      {
        author: 'Fatima Z.',
        rating: 5,
        date: '2025-12-03',
        title: 'Perfect for my sewing basket',
        body: 'Replaced a mess of loose thread and needles I had rattling around a drawer. Much more organised now.',
      },
    ],
  },
  {
    id: 'fabric-shears-thread-snips',
    name: 'Fabric Shears & Thread Snips Set',
    tagline: 'Precision cutting for fabric and thread, in one set.',
    description:
      'A two-piece cutting set pairing full-size fabric shears with a compact pair of thread snips, so you always have the right blade for the job. Sold under our sister brand, Stitch & Nidle.',
    features: [
      'Full-size fabric shears for clean, straight cuts',
      'Compact thread snips for close, precise trims',
      'Comfort-grip handles',
      'Stainless steel blades',
      'Ideal companion to any sewing kit',
    ],
    status: 'available',
    price: '$9.99',
    amazonUrl: 'https://www.amazon.com/stores/StitchAndNidle',
    image: '/products/fabric-shears.webp',
    images: [
      '/products/fabric-shears.webp',
      '/products/fabric-shears-2.webp',
      '/products/fabric-shears-3.webp',
    ],
    brand: { name: 'Stitch & Nidle', url: 'http://stitchandnidle.com' },
    longDescription: [
      'Fabric doesn’t cut cleanly with the scissors in your kitchen drawer, and thread doesn’t need a full-size pair to trim. This set pairs both: full-size fabric shears for straight, clean cuts, and a compact pair of thread snips for quick, close trims near a seam.',
      'Comfort-grip handles and stainless steel blades keep both tools comfortable through longer projects and resistant to the usual wear of a sewing kit.',
    ],
    specs: [
      { label: 'Set includes', value: 'Fabric shears + thread snips' },
      { label: 'Blade material', value: 'Stainless steel' },
      { label: 'Handles', value: 'Comfort-grip' },
      { label: 'Shears length', value: 'Approx. 22cm' },
      { label: 'Snips length', value: 'Approx. 10cm' },
    ],
    reviews: [
      {
        author: 'Grace M.',
        rating: 5,
        date: '2026-01-11',
        title: 'Finally a proper pair of fabric scissors',
        body: 'Cuts through denim without dragging. The little snips get used just as much for trimming loose threads.',
        verified: true,
      },
      {
        author: 'Idris A.',
        rating: 4,
        date: '2025-12-20',
        title: 'Sharp out of the box',
        body: 'Good quality for the price. Only wish they came with a blade cover for storage.',
        verified: true,
      },
      {
        author: 'Bethan C.',
        rating: 5,
        date: '2025-12-01',
        title: 'Snips are surprisingly precise',
        body: 'Didn’t think I’d use the small snips much but they’ve basically replaced my nail scissors for thread trimming.',
      },
    ],
  },
  {
    id: 'neck-reading-light',
    name: 'Rechargeable Neck Reading Light',
    tagline: 'Hands-free light for late-night stitching and reading.',
    description:
      'A lightweight, USB-rechargeable LED neck light that drapes comfortably around the shoulders, freeing both hands for sewing, reading, or close-up work in low light. Sold under our sister brand, Stitch & Nidle.',
    features: [
      'USB-rechargeable, no batteries needed',
      'Adjustable, bendable LED arms',
      'Multiple brightness settings',
      'Lightweight, hands-free neck design',
      'Great for sewing, reading, and crafts',
    ],
    status: 'available',
    price: '$16.99',
    amazonUrl: 'https://www.amazon.com/stores/StitchAndNidle',
    image: '/products/neck-light.webp',
    images: [
      '/products/neck-light.webp',
      '/products/neck-light-2.webp',
      '/products/neck-light-3.webp',
    ],
    brand: { name: 'Stitch & Nidle', url: 'http://stitchandnidle.com' },
    longDescription: [
      'Close-up work — threading a needle, reading small print, fine hand-stitching — usually happens right where overhead light casts a shadow from your own hands. This neck light drapes around the shoulders and puts two bendable, adjustable LED arms exactly where you need them, hands completely free.',
      'It charges over USB, runs for hours on a full charge, and offers a few brightness settings depending on how much light the task needs.',
    ],
    specs: [
      { label: 'Power', value: 'USB-rechargeable, built-in battery' },
      { label: 'Brightness settings', value: '3 levels' },
      { label: 'Light arms', value: 'Dual bendable LED arms' },
      { label: 'Weight', value: 'Under 150g' },
      { label: 'Best for', value: 'Sewing, reading, crafts, close-up work' },
    ],
    reviews: [
      {
        author: 'Rhys E.',
        rating: 5,
        date: '2026-01-17',
        title: 'Didn’t realise how much I needed this',
        body: 'Use it for hand-stitching in the evening. Arms bend exactly where I need and it doesn’t slip off my shoulders.',
        verified: true,
      },
      {
        author: 'Yuki S.',
        rating: 4,
        date: '2025-12-15',
        title: 'Bright and comfortable, battery could last longer',
        body: 'Light quality is great on the highest setting. Battery gets me through a couple of evenings before needing a charge.',
        verified: true,
      },
      {
        author: 'Connor B.',
        rating: 5,
        date: '2025-11-27',
        title: 'Also great for reading in bed',
        body: 'Bought it for sewing but it’s become my bedside reading light too. Doesn’t disturb my partner at all.',
      },
    ],
  },
  {
    id: 'next-gen-design',
    name: 'The Next Domin8 Design',
    tagline: 'Our proposed next-generation handheld machine — in development.',
    description:
      "We're developing a redesigned handheld sewing machine based on direct feedback from our current customers: an ergonomic new housing, USB-C charging, and a see-through bobbin window so you never run out mid-repair. This design is in active development and not yet available for purchase.",
    features: [
      'Redesigned ergonomic housing for longer, more comfortable use',
      'USB-C fast charging (replacing proprietary cables)',
      'See-through bobbin window',
      'Quieter motor for late-night repairs',
      'Refreshed colourways',
    ],
    status: 'concept',
    highlight: true,
    longDescription: [
      "This design isn't in production yet — it's a direct response to feedback from people who already own the current handheld machine. The two most common requests were a more ergonomic housing for longer stitching sessions, and USB-C charging instead of the proprietary cable on the current model.",
      "A see-through bobbin window is also planned, so you can see remaining thread at a glance instead of finding out mid-repair. We're sharing it here to gather more feedback before committing to a production run.",
    ],
    specs: [
      { label: 'Status', value: 'In development — not yet available for purchase' },
      { label: 'Charging', value: 'USB-C (proposed)' },
      { label: 'Bobbin window', value: 'See-through (proposed)' },
      { label: 'Housing', value: 'Redesigned ergonomic grip' },
    ],
  },
];

export const getHighlightedProduct = () => products.find((p) => p.highlight);
export const getAvailableProducts = () => products.filter((p) => p.status === 'available');
export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getAverageRating = (product: Product) => {
  if (!product.reviews || product.reviews.length === 0) return null;
  const total = product.reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / product.reviews.length) * 10) / 10;
};
