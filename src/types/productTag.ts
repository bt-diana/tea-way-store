export type TagType = {
  id: string;
  name: string;
};

export type Tag = {
  id: string;
  tagTypeId: string;
  value: string;
};

export type ProductTagRaw = {
  productId: string;
  tagId: string;
};

export type ProductTag = TagType & {
  value: string;
};
