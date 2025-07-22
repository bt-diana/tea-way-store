export type ProductSize = {
  id: string;
  name?: string;
  value: number | string;
  unit: string;
};

export type ProductSizePriceRaw = {
  productId: string;
  sizeId: string;
  price: number;
};

export type ProductSizePrice = ProductSize & {
  price: number;
};
