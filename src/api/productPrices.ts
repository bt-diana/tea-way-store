import type { ProductPrice } from '../types/productPrice';

const API_URL = process.env.VITE_API_URL!;
const PRODUCT_SIZES_PATH = process.env.VITE_API_PRODUCT_PRICES_PATH!;

export const getPricesByProductId = async (productIdToFind: string) => {
  return fetch(API_URL + PRODUCT_SIZES_PATH)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((prices: ProductPrice[]) =>
      prices.filter(({ productId }) => productId === productIdToFind)
    );
};
