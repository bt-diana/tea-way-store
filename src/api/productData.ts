import type { ProductData } from '../types/productData';

export const getProductDataByIds = async (
  productDataIds: string[],
  path: string
) => {
  return fetch(path)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((productDatas: ProductData[]) => {
      return productDatas
        .filter(({ id }) => productDataIds.includes(id))
        .map(({ name }) => name);
    });
};

export const getProductDataById = async (
  productDataId: string,
  path: string
) => {
  return fetch(path)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((productDatas: ProductData[]) => {
      return productDatas.find(({ id }) => id === productDataId)?.name;
    });
};
