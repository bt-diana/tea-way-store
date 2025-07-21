import type { ProductTag } from './productTag';

export type ProductRaw = {
  id: string;
  name: string;
  typeId: string;
  cover: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  type: string;
  cover: string;
  tags: ProductTag[];
  description: string;
};
