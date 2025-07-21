import type { ProductType } from '../types/productType';

const API_URL = process.env.VITE_API_URL!;
const PRODUCT_TYPES_PATH = process.env.VITE_API_TYPE_PATH!;

export const getTypeById = (idToFind: string) => {
  return fetch(API_URL + PRODUCT_TYPES_PATH)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((types: ProductType[]) => types.find(({ id }) => id === idToFind));
};

export const getProductTypes = () => {
  return fetch(API_URL + PRODUCT_TYPES_PATH).then((res) => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  });
};
