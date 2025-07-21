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
    const titles: Record<string, string> = {
      region: 'Регион сбора',
      year: 'Год производства',
      type: 'Тип',
    };

    return (
      <Descriptions title="Характеристики">
        {Object.entries(titles).map(([key, value]) => (
          <Descriptions.Item key={key} label={value}>
            {String(product[key as keyof Product])}
          </Descriptions.Item>
        ))}
        {product.tags &&
          Object.entries(product.tags).map(([key, { name, values }]) => (
            <Descriptions.Item key={key} label={name}>
              {values.join(',')}
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
