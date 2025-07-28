import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect } from 'react';
import { cartKey } from '../constants/localStorageItemsKeys';

type AddToCartButtonProps = {
  id: string;
  sizeId: string;
  amount: number;
  add: () => void;
  remove: () => void;
  cartView?: boolean;
};

const AddToCartButton = ({
  id,
  sizeId,
  amount,
  add,
  remove,
  cartView,
}: AddToCartButtonProps) => {
  useEffect(() => {
    if (amount >= 1) {
      const cart = JSON.parse(localStorage.getItem(cartKey)!) ?? {};
      cart[id] = {
        size: sizeId,
        amount: amount,
      };
      localStorage.setItem(cartKey, JSON.stringify(cart));
    } else {
      const cart = JSON.parse(localStorage.getItem(cartKey)!);
      if (cart) {
        delete cart[id];
        localStorage.setItem(cartKey, JSON.stringify(cart));
      }
    }
  }, [id, amount, sizeId]);

  if (amount) {
    return (
      <div className="product-card-amount">
        <Button icon={<PlusOutlined />} onClick={add} />
        {amount}
        <Button
          icon={<MinusOutlined />}
          onClick={remove}
          disabled={cartView && amount === 1}
        />
      </div>
    );
  }

  return (
    <Button type="primary" className="product-card-add" onClick={add}>
      В корзину
    </Button>
  );
};

export default AddToCartButton;
