import { Menu } from 'antd';
import type { CatalogItem } from '../types/catalogItem';
import { Link } from 'react-router-dom';
import type { ItemType, MenuItemType } from 'antd/es/menu/interface';

const { SubMenu, Item } = Menu;

const catalogItems: CatalogItem[] = [
  {
    title: 'Чай',
    url: '/catalog/tea',
    items: [
      {
        title: 'Зеленый чай',
        url: '/catalog/tea/green',
      },
      {
        title: 'Пуэр',
        url: '/catalog/tea/pu-erh',
        items: [
          { title: 'Шу', url: '/catalog/tea/pu-erh/shu' },
          { title: 'Шэн', url: '/catalog/tea/pu-erh/sheng' },
        ],
      },
      {
        title: 'Красный чай',
        url: '/catalog/tea/red',
      },
      {
        title: 'Черный чай',
        url: '/catalog/tea/black',
      },
    ],
  },
  {
    title: 'Посуда',
    url: '/catalog/teaware',
    items: [
      { title: 'Пиалы', url: '/catalog/teaware/bowls' },
      {
        title: 'Чайники',
        url: '/catalog/teaware/teapots',
        items: [
          { title: 'Исинская глина', url: '/catalog/teaware/teapots/yixing' },
          { title: 'Керамика', url: '/catalog/teaware/teapots/ceramic' },
          { title: 'Стекло', url: '/catalog/teaware/teapots/glass' },
        ],
      },
    ],
  },
  {
    title: 'Приборы',
    url: '/catalog/tools',
    items: [
      { title: 'Ножи для пуэра', url: '/catalog/tools/pu-erh-knives' },
      {
        title: 'Инструменты для чайной церемонии',
        url: '/catalog/tools/ceremony',
      },
      { title: 'Чабани', url: '/catalog/tools/chabans' },
    ],
  },
];

type CatalogProps = {
  onNavigate: () => void;
};

const convertToMenuItems = (
  items: CatalogItem[],
  onNavigate: () => void
): ItemType<MenuItemType>[] =>
  items.map(({ url, title, items }) =>
    items
      ? {
          key: url,
          label: (
            <Link to={url} onClick={onNavigate}>
              {title}
            </Link>
          ),
          children: convertToMenuItems(items, onNavigate),
        }
      : {
          key: url,
          label: (
            <Link to={url} onClick={onNavigate}>
              {title}
            </Link>
          ),
        }
  );

const Catalog = ({ onNavigate }: CatalogProps) => {
  return (
    <Menu
      className="catalog"
      mode="inline"
      selectable={false}
      items={convertToMenuItems(catalogItems, onNavigate)}
    />
  );
};

export default Catalog;
