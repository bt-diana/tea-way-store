import type { navItem } from '../../types';
import {
  GlobalOutlined,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

const navItems: navItem[] = [
  {
    url: '/articles/about',
    key: 'about',
    title: 'О нас',
  },
  {
    url: '/articles/ceremony',
    key: 'ceremony',
    title: 'Церемония',
  },
  {
    url: '/',
    key: 'main',
    title: 'Главная',
    icon: <HomeOutlined />,
    menu: true,
  },
  {
    key: 'search',
    title: 'Поиск',
    icon: <SearchOutlined />,
    menu: true,
  },
  {
    key: 'catalog',
    title: 'Каталог',
    icon: <MenuOutlined />,
    menu: true,
  },
  {
    url: '/cart',
    key: 'cart',
    icon: <ShoppingCartOutlined />,
    title: 'Корзина',
    menu: true,
  },
  {
    key: 'lang',
    title: 'Язык',
    icon: <GlobalOutlined />,
    menu: true,
  },
];

export default navItems;
