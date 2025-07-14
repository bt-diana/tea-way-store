import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect } from 'react';

type AddToCartButtonProps = {
  id: string;
  sizeId: string;
  amount: number;
  add: () => void;
  remove: () => void;
};

const AddToCartButton = ({
  id,
  sizeId,
  amount,
  add,
  remove,
}: AddToCartButtonProps) => {
  useEffect(() => {
    if (amount >= 1) {
      localStorage.setItem(
        id,
        JSON.stringify({
          size: sizeId,
          amount: amount,
        })
      );
    } else {
      localStorage.removeItem(id);
    }
  }, [id, amount, sizeId]);

  if (amount) {
    return (
      <div className="product-card-amount">
        <Button icon={<PlusOutlined />} onClick={add} />
        {amount}
        <Button icon={<MinusOutlined />} onClick={remove} />
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
