import type { ProductSizePrice } from './productSizePrice';
import type { ProductTag } from './productTag';

export type ProductRaw = {
  id: string;
  name: string;
  typeId: string;
  cover: string;
  year?: number;
  description: string;
  popular?: boolean;
  amateur?: boolean;
};

export type Product = {
  id: string;
  name: string;
  type: string;
  cover: string;
  year?: number;
  tags: ProductTag[];
  description: string;
  sizesPrices: ProductSizePrice[];
};
