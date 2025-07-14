import { Card, Select, Descriptions, Image } from 'antd';
import type { Product } from '../types/product';
import { useState } from 'react';
import AddToCartButton from './AddToCartButton';
import { Link } from 'react-router-dom';

const { Option } = Select;

type ProductCardProps = {
  product: Product;
  cartView?: boolean;
  productPageView: boolean;
};

const ProductDescription: Record<string, string> = {
  region: 'Регион сбора',
  year: 'Год производства',
  type: 'Тип',
};

const ProductCard = ({ product, productPageView }: ProductCardProps) => {
  const { id, name, cover, type, region, year, sizesPrices } = product;

  const Cover = () =>
    productPageView ? (
      <Image src={`https://drive.google.com/thumbnail?id=${product.cover}`} />
    ) : (
      <Link to={`/products/${id}`}>
        <img
          alt={name}
          src={`https://drive.google.com/thumbnail?id=${cover}`}
        />
      </Link>
    );

  const Description = () =>
    productPageView ? (
      <Descriptions title="Характеристики">
        {Object.entries(ProductDescription).map(([key, value]) => (
          <Descriptions.Item key={key} label={value}>
            {String(product[key as keyof Product])}
          </Descriptions.Item>
        ))}
      </Descriptions>
    ) : (
      <div className="product-card-description">
        <div className="caption">{`Тип: ${type}`}</div>
        <div className="caption">{`Сбор: ${region}, ${year} г.`}</div>
      </div>
    );

  const Cardname = () => (
    <Link className="product-card-title" to={`/products/${id}`}>
      <div>{name}</div>
    </Link>
  );

  const getSizePriceById = (idToFind: string) =>
    sizesPrices.find(({ id }) => id === idToFind);

  const [selectedSize, setSelectedSize] = useState(() => {
    const sizeId = JSON.parse(localStorage.getItem(id)!)?.size;
    return sizeId ? getSizePriceById(sizeId) : sizesPrices[0];
  });

  const [amount, setAmount] = useState<number>(
    JSON.parse(localStorage.getItem(id)!)?.amount ?? 0
  );

  const [resultPrice, setResultPrice] = useState(
    selectedSize.price * (amount || 1)
  );

  const onSizeChange = (selectedId: string) => {
    setSelectedSize(() => {
      const size = getSizePriceById(selectedId)!;
      setResultPrice(size.price * (amount || 1));
      return size;
    });
  };

  const Price = () => (
    <div className="product-card-price">{resultPrice} сом</div>
  );

  const add = () => {
    setAmount((value: number) => {
      const newAmount = value + 1;
      setResultPrice(selectedSize.price * (newAmount || 1));
      return newAmount;
    });
  };

  const remove = () => {
    setAmount((value: number) => {
      const newAmount = value - 1;
      setResultPrice(selectedSize.price * (newAmount || 1));
      return newAmount;
    });
  };

  return (
    <Card
      cover={<Cover />}
      title={productPageView && <Cardname />}
      className={productPageView ? 'product' : 'product-card'}
    >
      {productPageView || <Cardname />}
      <Description />
      <Select
        value={selectedSize.id}
        onChange={onSizeChange}
        aria-label="объем"
      >
        {sizesPrices.map(({ id, name, weight, unit }) => (
          <Option key={id} value={id}>
            {name ? `${name}, ${weight} ${unit}` : `${weight} ${unit}`}
          </Option>
        ))}
      </Select>
      <div className="product-card-amount-price">
        <Price />
        <AddToCartButton
          id={id}
          sizeId={selectedSize.id}
          amount={amount}
          add={add}
          remove={remove}
        />
      </div>
    </Card>
  );
};

export default ProductCard;
