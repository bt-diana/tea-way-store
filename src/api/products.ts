import type { Product, ProductRaw } from '../types/product';
import { getProductDataById, getProductDataByIds } from './productData';
import { getSizesPricesByProductId } from './productSizesPrices';
import { getTypeById } from './productTypes';

const API_URL = process.env.VITE_API_URL!;
const PRODUCTS_PATH = process.env.VITE_API_PRODUCT_PATH!;
const REGION_PATH = process.env.VITE_API_REGION_PATH!;
const EFFECT_PATH = process.env.VITE_API_EFFECT_PATH!;
const TASTE_PATH = process.env.VITE_API_TASTE_PATH!;
const MATERIAL_PATH = process.env.VITE_API_MATERIAL_PATH!;

const getMappedProduct = async (product: ProductRaw): Promise<Product> => {
  const [type, sizesPrices, region, effects, tastes, materials] =
    await Promise.all([
      getTypeById(product.typeId),
      getSizesPricesByProductId(product.id),
      product.regionId &&
        getProductDataById(product.regionId, API_URL + REGION_PATH),
      product.effectsId &&
        getProductDataByIds(product.effectsId, API_URL + EFFECT_PATH),
      product.tastesId &&
        getProductDataByIds(product.tastesId, API_URL + TASTE_PATH),
      product.materialsId &&
        getProductDataByIds(product.materialsId, API_URL + MATERIAL_PATH),
    ]);

  if (!type) {
    throw Error(`Product (id=${product.id}) type not found`);
  }

  if (!sizesPrices) {
    throw Error(`Product (id=${product.id}) sizes and prices not found`);
  }

  return {
    ...product,
    type: type.name,
    sizesPrices: sizesPrices,
    region,
    effects: effects?.length ? effects : undefined,
    tastes: tastes?.length ? tastes : undefined,
    materials: materials?.length ? materials : undefined,
  };
};

export const getProductById = (idToFind: string) => {
  return fetch(API_URL + PRODUCTS_PATH, {
    method: 'GET',
  })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((products) => products.find(({ id }: ProductRaw) => id === idToFind))
    .then(async (product: ProductRaw) => getMappedProduct(product));
};

export const getProducts = async (
  params?: Partial<Record<keyof ProductRaw, unknown>>
): Promise<Product[]> => {
  return fetch(API_URL + PRODUCTS_PATH, {
    method: 'GET',
  })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((products: ProductRaw[]) => {
      return products.filter((product: ProductRaw) => {
        if (!params) return true;
        for (const param in params) {
          if (
            product[param as keyof ProductRaw] !==
            params[param as keyof ProductRaw]
          )
            return false;
        }
        return true;
      });
    })
    .then(async (products: ProductRaw[]) => {
      return Promise.all(
        products.map(async (product: ProductRaw) => getMappedProduct(product))
      );
    });
};
