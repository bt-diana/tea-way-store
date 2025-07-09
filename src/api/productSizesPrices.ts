import type { ProductSize } from '../types/productSize';
import type { ProductPrice } from '../types/productPrice';
import { getPricesByProductId } from './productPrices';
import { getProductSizes } from './productSizes';

export const getSizesPricesByProductId = async (productId: string) => {
  return getPricesByProductId(productId).then(
    async (prices: ProductPrice[]) => {
      const sizes: ProductSize[] = await getProductSizes();
      return prices.map(({ sizeId, price }: ProductPrice) => {
        const size = sizes.find(({ id }) => id === sizeId);
        if (!size) {
          throw Error(`Size (id=${sizeId}) not found`);
        }
        return {
          ...size,
          price,
        };
      });
    }
  );
};
