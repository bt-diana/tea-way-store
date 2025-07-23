import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import type { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { getAllTypesWithChildren } from '../api/productTypes';
import { useEffect, useState } from 'react';
import type { ProductTypewithChildren } from '../types/productType';

type CatalogProps = {
  onNavigate: () => void;
};

const convertToMenuItems = (
  items: ProductTypewithChildren[],
  onNavigate: () => void
): ItemType<MenuItemType>[] =>
  items.map(({ id, name, children }) => {
    const src = `/catalog/${id}`;

    if (children?.length) {
      return {
        key: id,
        label: (
          <Link to={src} onClick={onNavigate}>
            {name}
          </Link>
        ),
        children: convertToMenuItems(children, onNavigate),
      };
    }

    return {
      key: id,
      label: (
        <Link to={src} onClick={onNavigate}>
          {name}
        </Link>
      ),
    };
  });

const Catalog = ({ onNavigate }: CatalogProps) => {
  const [types, setTypes] = useState<ProductTypewithChildren[]>();

  useEffect(() => {
    getAllTypesWithChildren().then((res) => {
      setTypes(res);
    });
  }, []);

  if (types) {
    return (
      <Menu
        className="catalog"
        mode="inline"
        selectable={false}
        items={convertToMenuItems(types, onNavigate)}
      />
    );
  }
};

export default Catalog;
