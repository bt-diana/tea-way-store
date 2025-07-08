import { Card, Select } from 'antd';
import type { Product } from '../types/product';
import { useState } from 'react';
import AddToCartButton from './AddToCartButton';

const { Option } = Select;

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({
  product: { id, name, year, production, type, cover, sizesPrices },
}: ProductCardProps) => {
  const Cover = cover && (
    <img alt={name} src={`https://drive.google.com/thumbnail?id=${cover}`} />
  );

  const Description = () => (
    <div className="product-card-description">
      <div className="caption">{`Тип: ${type.name}`}</div>
      <div className="caption">{`Сбор: ${production}, ${year} г.`}</div>
    </div>
  );

  const Cardname = () => <h5 className="product-card-title">{name}</h5>;

  const [selectedSize, setSelectedSize] = useState(sizesPrices[0]);

  const getSizePriceById = (idToFind: string) =>
    sizesPrices.find(({ id }) => id === idToFind);

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

  const Price = () => <h5>{resultPrice} сом</h5>;

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
    <Card cover={Cover} className="product-card">
      <Cardname />
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
      <Price />
      <AddToCartButton
        id={id}
        sizeId={selectedSize.id}
        amount={amount}
        add={add}
        remove={remove}
      />
    </Card>
  );
};

export default ProductCard;
