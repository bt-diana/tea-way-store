import type { ProductSize } from './productSize';

export type ProductSizePriceRaw = {
  productId: string;
  sizeId: string;
  price: number;
};

export type ProductSizePrice = ProductSize & {
  price: number;
};
