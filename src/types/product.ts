import type { ProductSizePrice } from './productSizePrice';
import type { ProductTags } from './productTags';

export type ProductRaw = {
  id: string;
  name: string;
  typeId: string;
  cover: string;
  year?: number;
  regionId: string;
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
  region: string;
  tags?: ProductTags;
  description: string;
  sizesPrices: ProductSizePrice[];
};
