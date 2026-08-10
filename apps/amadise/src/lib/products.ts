import { products } from '@domin8/data';

// Amadise sells the shared Domin8 catalogue, minus in-development concepts.
export const sellableProducts = products.filter((p) => p.status !== 'concept');
export const getSellableProduct = (id: string) => sellableProducts.find((p) => p.id === id);
