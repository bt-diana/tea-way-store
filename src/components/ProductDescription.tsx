import { Descriptions } from 'antd';
import type { Product } from '../types/product';

type ProductDescriptionProps = {
  product: Product;
  productPageView?: boolean;
};

const ProductDescription = ({
  product,
  productPageView,
}: ProductDescriptionProps) => {
  if (productPageView) {
    const ProductDescription: Record<string, string> = {
      region: 'Регион сбора',
      year: 'Год производства',
      type: 'Тип',
    };

    return (
      <Descriptions title="Характеристики">
        {Object.entries(ProductDescription).map(([key, value]) => (
          <Descriptions.Item key={key} label={value}>
            {String(product[key as keyof Product])}
          </Descriptions.Item>
        ))}
      </Descriptions>
    );
  }

  return (
    <div className="product-card-description">
      <div className="caption">{`Тип: ${product.type}`}</div>
      <div className="caption">{`Сбор: ${product.region}, ${product.year} г.`}</div>
    </div>
  );
};

export default ProductDescription;
