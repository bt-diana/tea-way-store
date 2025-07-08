import type { Product } from './product';

export type CartDataItem = {
  product: Product;
  sizeOptionId: string;
  amount: number;
};
