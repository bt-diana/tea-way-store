import type { ProductSize } from './productSize';

export type ProductSizePrice = ProductSize & {
  price: number;
};
