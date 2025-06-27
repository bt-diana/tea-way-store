import { TabBar } from 'antd-mobile-v2';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import PopUpMenu from './PopUpMenu';
import { useState } from 'react';
import {
  CloseOutlined,
  GlobalOutlined,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import type { NavItem } from '../types/navItems';

const { Item } = TabBar;

type NavigationProps = {
  bottom?: boolean;
};

const Navigation = ({ bottom }: NavigationProps) => {
  const navigate = useNavigate();
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const NavItems: NavItem[] = [
    {
      url: '/articles/about',
      key: 'about',
      title: 'О нас',
      onPress() {
        navigate(this.url!);
      },
    },
    {
      url: '/articles/ceremony',
      key: 'ceremony',
      title: 'Церемония',
      onPress() {
        navigate(this.url!);
      },
    },
    {
      url: '/',
      key: 'main',
      title: 'Главная',
      icon: <HomeOutlined />,
      menu: true,
      onPress() {
        navigate(this.url!);
        if (menuIsVisible) {
          setMenuIsVisible(false);
        }
      },
    },
    {
      key: 'search',
      title: 'Поиск',
      icon: <SearchOutlined />,
      menu: true,
      onPress() {
        setMenuIsVisible((isVisible) => !isVisible);
      },
    },
    {
      key: 'catalog',
      title: 'Каталог',
      icon: <MenuOutlined />,
      activeIcon: <CloseOutlined />,
      menu: true,
      onPress() {
        setMenuIsVisible((isVisible) => !isVisible);
      },
    },
    {
      url: '/cart',
      key: 'cart',
      icon: <ShoppingCartOutlined />,
      title: 'Корзина',
      menu: true,
      onPress() {
        navigate(this.url!);
        if (menuIsVisible) {
          setMenuIsVisible(false);
        }
      },
    },
    {
      key: 'lang',
      title: 'Язык',
      icon: <GlobalOutlined />,
      menu: true,
      onPress() {},
    },
  ];

  return (
    <nav className={bottom ? 'bottom-navigation' : 'navigation'}>
      {!bottom ? <Logo /> : null}
      <TabBar>
        {NavItems.filter(({ menu }) => menu == bottom).map((item) => (
          <Item
            key={item.key}
            title={item.title}
            icon={
              item.activeIcon
                ? menuIsVisible
                  ? item.activeIcon
                  : item.icon
                : item.icon
            }
            onPress={item.onPress.bind(item)}
          />
        ))}
      </TabBar>
      <PopUpMenu
        visible={menuIsVisible}
        close={() => setMenuIsVisible(false)}
      />
    </nav>
  );
};

export default Navigation;
