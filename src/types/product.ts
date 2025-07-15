import type { ProductSizePrice } from './productSizePrice';

export type ProductRaw = {
  id: string;
  name: string;
  year: number;
  region: string;
  cover: string;
  typeId: string;
  showOnMainPage?: boolean;
};

export type Product = {
  id: string;
  name: string;
  year: number;
  region: string;
  cover: string;
  type: string;
  sizesPrices: ProductSizePrice[];
};
