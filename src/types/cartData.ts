export type CartDataItem = {
  size: string;
  amount: number;
};

export type CartData = Record<string, CartDataItem>;
