import { List } from 'antd';
import type { catalogItem } from '../types/catalogItem';
import CatalogItem from './CatalogItem';

const catalogItems: catalogItem[] = [
  {
    title: 'Чай',
    url: '/catalog/tea',
    subitems: [
      {
        title: 'Зеленый чай',
        url: '/catalog/tea/green',
      },
      {
        title: 'Пуэр',
        url: '/catalog/tea/pu-erh',
        subitems: [
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
    subitems: [
      { title: 'Пиалы', url: '/catalog/teaware/bowls' },
      {
        title: 'Чайники',
        url: '/catalog/teaware/teapots',
        subitems: [
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
    subitems: [
      { title: 'Ножи для пуэра', url: '/catalog/tools/pu-erh-knives' },
      {
        title: 'Инструменты для чайной церемонии',
        url: '/catalog/tools/ceremony',
      },
      { title: 'Чабани', url: '/catalog/tools/chabans' },
    ],
  },
];

const Catalog = () => {
  return (
    <List
      dataSource={catalogItems}
      renderItem={({ url, title, subitems }) => (
        <CatalogItem url={url} title={title} subitems={subitems} />
      )}
      className="list"
    />
  );
};

export default Catalog;
