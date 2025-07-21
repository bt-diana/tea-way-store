import { Card } from 'antd';
import type { Product } from '../types/product';
import { useState } from 'react';
import AddToCartButton from './AddToCartButton';
import type { ProductSizePrice } from '../types/productSizePrice';
import ProductCover from './ProductCover';
import ProductTitle from './ProductTitle';
import ProductDescription from './ProductDescription';
import ProductSizes from './ProductSizes';
import ProductPrice from './ProductPrice';

type ProductCardProps = {
  product: Product;
  cartView?: boolean;
  productPageView?: boolean;
};

const ProductCard = ({ product, productPageView }: ProductCardProps) => {
  const getSizePriceById = (idToFind: string) =>
    product.sizesPrices.find(({ id }) => id === idToFind);

  const [size, setSize] = useState<ProductSizePrice>(() => {
    const sizeId = JSON.parse(localStorage.getItem(product.id)!)?.size;
    return (sizeId && getSizePriceById(sizeId)) || product.sizesPrices[0];
  });

  const [amount, setAmount] = useState<number>(
    JSON.parse(localStorage.getItem(product.id)!)?.amount ?? 0
  );

  const [resultPrice, setResultPrice] = useState(size.price * (amount || 1));

  const onSizeChange = (selectedId: string) => {
    setSize(() => {
      const size = getSizePriceById(selectedId)!;
      setResultPrice(size.price * (amount || 1));
      return size;
    });
  };

  const add = () => {
    setAmount((value: number) => {
      const newAmount = value + 1;
      setResultPrice(size.price * (newAmount || 1));
      return newAmount;
    });
  };

  const remove = () => {
    setAmount((value: number) => {
      const newAmount = value - 1;
      setResultPrice(size.price * (newAmount || 1));
      return newAmount;
    });
  };

  return (
    <Card
      cover={
        <ProductCover
          id={product.id}
          name={product.name}
          cover={product.cover}
          productPageView={productPageView}
        />
      }
      title={
        productPageView && (
          <ProductTitle
            id={product.id}
            name={product.name}
            productPageView={productPageView}
          />
        )
      }
      className={productPageView ? 'product' : 'product-card'}
    >
      {productPageView || (
        <ProductTitle
          id={product.id}
          name={product.name}
          productPageView={productPageView}
        />
      )}
      <ProductDescription product={product} productPageView={productPageView} />
      <ProductSizes
        size={size}
        sizes={product.sizesPrices}
        onSizeChange={onSizeChange}
      />
      <div className="product-card-amount-price">
        <ProductPrice price={resultPrice} productPageView={productPageView} />
        <AddToCartButton
          id={product.id}
          sizeId={size.id}
          amount={amount}
          add={add}
          remove={remove}
        />
      </div>
    </Card>
  );
};

export default ProductCard;
