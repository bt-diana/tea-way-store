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
      tastes: 'Вкус',
      effectes: 'Эффект',
      materials: 'Материал',
    };

    return (
      <Descriptions title="Характеристики">
        {Object.entries(titles).map(([key, label]) => {
          const valueRaw = product[key as keyof Product];

          if (valueRaw == null) {
            return;
          }

          let value;

          if (Array.isArray(valueRaw)) {
            value = valueRaw.join(',');
          } else {
            value = String(valueRaw);
          }

          return (
            <Descriptions.Item key={key} label={label}>
              {value}
            </Descriptions.Item>
          );
        })}
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
