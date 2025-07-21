import type {
  ProductTags,
  ProductTagRaw,
  Tag,
  TagType,
} from '../types/productTags';

const API_URL = process.env.VITE_API_URL!;
const TAG_TYPE_PATH = process.env.VITE_API_TAG_TYPE_PATH!;
const TAG_PATH = process.env.VITE_API_TAG_PATH!;
const PRODUCT_TAG_PATH = process.env.VITE_API_PRODUCT_TAG_PATH!;

const getAllTagTypes = (): Promise<TagType[]> => {
  return fetch(API_URL + TAG_TYPE_PATH).then((res) => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  });
};

const getAllTags = (): Promise<Tag[]> => {
  return fetch(API_URL + TAG_PATH).then((res) => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  });
};

export const getTagsByProductId = async (
  productId: string
): Promise<ProductTags> => {
  const [tagTypes, tags, productTagArr] = await Promise.all([
    getAllTagTypes(),
    getAllTags(),
    fetch(API_URL + PRODUCT_TAG_PATH)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((productTagArr: ProductTagRaw[]) => {
        return productTagArr.filter(
          (productTagRaw: ProductTagRaw) =>
            productTagRaw.productId === productId
        );
      }),
  ]);

  const productTagsRaw: Tag[] = tags.filter(({ id }) =>
    productTagArr.find(({ tagId }) => tagId === id)
  );

  return tagTypes.reduce((productTags: ProductTags, tagType: TagType) => {
    const values = productTagsRaw
      .filter(({ tagTypeId }) => tagTypeId === tagType.id)
      .map((tag) => tag.value);

    if (values.length) {
      return {
        ...productTags,
        [tagType.id]: {
          name: tagType.name,
          values,
        },
      };
    }
    return productTags;
  }, {});
};
