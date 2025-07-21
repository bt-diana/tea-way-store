import type { ProductRegion } from '../types/productRegion';

const API_URL = process.env.VITE_API_URL!;
const REGION_PATH = process.env.VITE_API_REGION_PATH!;

console.log(API_URL + REGION_PATH)

export const getRegionById = async (regionId: string) => {
  return fetch(API_URL + REGION_PATH)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((regions: ProductRegion[]) => {
      console.log(regions);
      return regions.find(({ id }) => regionId === id);
    });
};
