export type ProductStatus = 'available' | 'coming-soon' | 'concept';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  status: ProductStatus;
  highlight?: boolean;
  image?: string;
  price?: string;
  amazonUrl?: string;
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
    status: 'available',
    price: '$24.99',
    amazonUrl: 'https://www.amazon.com/stores/Domin8',
    image: '/products/handheld-sewing-machine.webp',
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
  },
];

export const getHighlightedProduct = () => products.find((p) => p.highlight);
export const getAvailableProducts = () => products.filter((p) => p.status === 'available');
