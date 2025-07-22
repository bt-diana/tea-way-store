import type { ProductSizePrice } from './productSizePrice';

export type ProductRaw = {
  id: string;
  name: string;
  typeId: string;
  cover: string;
  description: string;
  year?: number;
  regionId?: string;
  tastesId?: string[];
  effectsId?: string[];
  materialsId?: string[];
  fillingsId?: string[];
  popular?: boolean;
  amateur?: boolean;
};

export type Product = {
  id: string;
  name: string;
  type: string;
  cover: string;
  description: string;
  sizesPrices: ProductSizePrice[];
  year?: number;
  region?: string;
  tastes?: string[];
  effects?: string[];
  materials?: string[];
  fillings?: string[];
  popular?: boolean;
  amateur?: boolean;
};
