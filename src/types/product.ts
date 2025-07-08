import type { ProductSizePrice } from './productSizePrice';
import type { ProductType } from './productType';

export type Product = {
  id: string;
  name: string;
  year: number;
  production: string;
  cover: string;
  type: ProductType;
  sizesPrices: ProductSizePrice[];
};
