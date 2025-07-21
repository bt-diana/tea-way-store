import type { Product, ProductRaw } from '../types/product';
import { getRegionById } from './productRegion';
import { getSizesPricesByProductId } from './productSizesPrices';
import { getTagsByProductId } from './productTags';
import { getTypeById } from './productTypes';

const API_URL = process.env.VITE_API_URL!;
const PRODUCTS_PATH = process.env.VITE_API_PRODUCT_PATH!;

const getMappedProduct = async (product: ProductRaw) => {
  const [type, sizesPrices, tags, region] = await Promise.all([
    getTypeById(product.typeId),
    getSizesPricesByProductId(product.id),
    getTagsByProductId(product.id),
    getRegionById(product.regionId),
  ]);

  if (!type) {
    throw Error(`Product (id=${product.id}) type not found`);
  }

  if (!sizesPrices) {
    throw Error(`Product (id=${product.id}) sizes and prices not found`);
  }

  if (!region) {
    throw Error(`Region (id=${product.regionId}) not found`);
  }

  return {
    ...product,
    region: region.name,
    type: type.name,
    sizesPrices: sizesPrices,
    tags: tags,
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
  params?: Partial<Record<keyof Product, unknown>>
) => {
  return fetch(API_URL + PRODUCTS_PATH, {
    method: 'GET',
  })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then(async (products: ProductRaw[]) => {
      return Promise.all(
        products.map(async (product: ProductRaw) => getMappedProduct(product))
      );
    })
    .then((mappedProducts: Product[]) => {
      return mappedProducts.filter((product: Product) => {
        if (!params) return true;
        for (const param in params) {
          if (
            product[param as keyof Product] !== params[param as keyof Product]
          )
            return false;
        }
        return true;
      });
    });
};
