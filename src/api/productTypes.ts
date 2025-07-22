import type { ProductType } from '../types/productType';

const API_URL = process.env.VITE_API_URL!;
const PRODUCT_TYPES_PATH = process.env.VITE_API_TYPE_PATH!;

export const getChildrenTypesByParentId = (parentId: string) => {
  return fetch(API_URL + PRODUCT_TYPES_PATH)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((types: ProductType[]) => {
      const parentType = types.find(({ id }) => id === parentId);
      if (!parentType) {
        throw Error(`Parent type id=${parentId}`);
      }

      const result: ProductType[] = [parentType];

      const collectChildren = (currentParentId: string) => {
        const children = types.filter(
          ({ parentTypeId }) => parentTypeId === currentParentId
        );
        for (const child of children) {
          result.push(child);
          collectChildren(child.id);
        }
      };

      collectChildren(parentId);
      return result;
    });
};

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
