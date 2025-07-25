export type ProductType = {
  id: string;
  name: string;
  description?: string;
  imageSrc?: string;
  parentTypeId?: string;
};

export type ProductTypewithChildren = ProductType & {
  children?: ProductType[];
};
