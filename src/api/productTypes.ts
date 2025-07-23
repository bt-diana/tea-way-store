import type {
  ProductType,
  ProductTypewithChildren,
} from '../types/productType';

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

      const children = types.filter(
        ({ parentTypeId }) => parentTypeId === parentType.id
      );
      return children;
    });
};

export const getAllChildrenTypesByParentId = (parentId: string) => {
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

      const result: ProductType[] = [];
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

export const getAllTypesWithChildren = () => {
  return fetch(API_URL + PRODUCT_TYPES_PATH)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((types: ProductType[]) => {
      const result: ProductType[] = types.filter(
        ({ parentTypeId }) => parentTypeId == null
      );

      const collectChildren = (type: ProductTypewithChildren) => {
        const children = types.filter(
          ({ parentTypeId }) => parentTypeId === type.id
        );

        if (children) {
          type.children = [];
          for (const child of children) {
            type.children.push(child);
            collectChildren(child);
          }
        }
      };

      for (const type of result) {
        collectChildren(type);
      }

      return result;
    });
};
