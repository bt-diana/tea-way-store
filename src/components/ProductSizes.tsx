import { Select } from 'antd';
import type { ProductSizePrice } from '../types/productSizePrice';

type ProductCoverProps = {
  size: ProductSizePrice;
  sizes: ProductSizePrice[];
  onSizeChange?: () => void;
};

const ProductSizes = ({ size, sizes, onSizeChange }: ProductCoverProps) => {
  return (
    <Select value={size.id} onChange={onSizeChange} aria-label="объем">
      {sizes.map(({ id, name, weight, unit }) => (
        <Select.Option key={id} value={id}>
          {name ? `${name}, ${weight} ${unit}` : `${weight} ${unit}`}
        </Select.Option>
      ))}
    </Select>
  );
};

export default ProductSizes;
