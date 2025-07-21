import type { Product, ProductRaw } from '../types/product';
import { getSizesPricesByProductId } from './productSizesPrices';
import { getTypeById } from './productTypes';

const API_URL = process.env.VITE_API_URL!;
const PRODUCTS_PATH = process.env.VITE_API_PRODUCT_PATH!;

export const getProductById = (idToFind: string) => {
  return fetch(API_URL + PRODUCTS_PATH, {
    method: 'GET',
  })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((products) => products.find(({ id }: ProductRaw) => id === idToFind))
    .then(async (product: ProductRaw) => {
      const type = await getTypeById(product.typeId);
      const sizesPrices = await getSizesPricesByProductId(product.id);
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
      };
    });
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
        products.map(async (product: ProductRaw) => {
          const type = await getTypeById(product.typeId);
          const sizesPrices = await getSizesPricesByProductId(product.id);
          if (!type) {
            throw Error(`Product (id=${product.id}) type not found`);
          }
          if (!sizesPrices) {
            throw Error(
              `Product (id=${product.id}) sizes and prices not found`
            );
          }
          return {
            ...product,
            type: type.name,
            sizesPrices: sizesPrices,
          };
        })
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
