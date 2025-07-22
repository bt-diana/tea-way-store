import { Menu } from 'antd';
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
import type { NavItem } from '../types/navItem';
import LanguagePicker from './LanguagePicker';

const NavItems: NavItem[] = [
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
    closeMenu: true,
  },
  {
    key: 'search',
    title: 'Поиск',
    icon: <SearchOutlined />,
    menu: true,
    openCloseMenu: true,
  },
  {
    key: 'catalog',
    title: 'Каталог',
    icon: <MenuOutlined />,
    activeIcon: <CloseOutlined />,
    menu: true,
    openCloseMenu: true,
  },
  {
    url: '/cart',
    key: 'cart',
    icon: <ShoppingCartOutlined />,
    title: 'Корзина',
    menu: true,
    closeMenu: true,
  },
  {
    key: 'lang',
    title: <LanguagePicker>Язык</LanguagePicker>,
    icon: <GlobalOutlined />,
    menu: true,
  },
];

type NavigationProps = {
  bottom?: boolean;
};

const Navigation = ({ bottom }: NavigationProps) => {
  const navigate = useNavigate();
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <nav className={bottom ? 'bottom-navigation' : 'navigation'}>
      {!bottom && <Logo />}

      <Menu
        mode="horizontal"
        selectable={false}
        className="navigation-menu"
        items={NavItems.filter(({ menu }) => menu === bottom).map(
          ({
            key,
            url,
            title,
            activeIcon,
            icon,
            closeMenu,
            openCloseMenu,
          }) => ({
            key,
            icon: activeIcon && menuIsVisible ? activeIcon : icon,
            label: title,
            onClick: () => {
              if (url) {
                navigate(url);
              }
              if (openCloseMenu) {
                setMenuIsVisible((value) => !value);
              }
              if (closeMenu && menuIsVisible) {
                setMenuIsVisible(false);
              }
            },
          })
        )}
      />

      {bottom && (
        <PopUpMenu
          visible={menuIsVisible}
          close={() => setMenuIsVisible(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
