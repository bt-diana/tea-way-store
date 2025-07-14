import type { ProductSize } from '../types/productSize';

const API_URL = process.env.VITE_API_URL!;
const PRODUCT_SIZES_PATH = process.env.VITE_API_PRODUCT_SIZES_PATH!;

export const getSizeById = (idToFind: string) => {
  return fetch(API_URL + PRODUCT_SIZES_PATH)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((sizes: ProductSize[]) => sizes.find(({ id }) => id === idToFind));
};

export const getProductSizes = () => {
  return fetch(API_URL + PRODUCT_SIZES_PATH).then((res) => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  });
};
