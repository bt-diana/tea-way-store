import type { ProductSizePriceRaw } from '../types/productSizePrice';

const API_URL = process.env.VITE_API_URL!;
const PRODUCT_SIZES_PATH = process.env.VITE_API_PRODUCT_SIZE_PRICE_PATH!;

export const getPricesByProductId = async (productIdToFind: string) => {
  return fetch(API_URL + PRODUCT_SIZES_PATH)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((prices: ProductSizePriceRaw[]) =>
      prices.filter(({ productId }) => productId === productIdToFind)
    );
};
