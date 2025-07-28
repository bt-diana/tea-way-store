import { DeleteFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { cartKey } from '../constants/localStorageItemsKeys';

const onClick = (id: string) => {
  const cart = JSON.parse(localStorage.getItem(cartKey)!);
  if (cart) {
    delete cart[id];
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }
};

type RemoveFromCartButtonProps = {
  productId: string;
};

const RemoveFromCartButton = ({ productId }: RemoveFromCartButtonProps) => {
  return (
    <Button
      type="text"
      onClick={() => onClick(productId)}
      className="remove-product-button"
    >
      <DeleteFilled />
    </Button>
  );
};

export default RemoveFromCartButton;
