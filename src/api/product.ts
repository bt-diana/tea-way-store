import type { Product } from '../types/product';

const API_URL = process.env.VITE_API_URL!;

export const getProducts = (
  params?: Partial<Record<keyof Product, unknown>>
) => {
  const url = params
    ? `${API_URL}?${Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')}`
    : API_URL;
  console.log(url);
  return fetch(url, {
    method: 'GET',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => res.products);
};
