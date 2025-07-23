export type ProductType = {
  id: string;
  name: string;
  description?: string;
  parentTypeId?: string;
};

export type ProductTypewithChildren = ProductType & {
  children?: ProductType[];
};
