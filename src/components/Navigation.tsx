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
      title: <LanguagePicker>Язык</LanguagePicker>,
      icon: <GlobalOutlined />,
      menu: true,
    },
  ];

  return (
    <nav className={bottom ? 'bottom-navigation' : 'navigation'}>
      {!bottom && <Logo />}

      <Menu mode="horizontal" selectable={false} className="navigation-menu">
        {NavItems.filter(({ menu }) => menu === bottom).map((item) => (
          <Menu.Item
            key={item.key}
            icon={
              item.activeIcon
                ? menuIsVisible
                  ? item.activeIcon
                  : item.icon
                : item.icon
            }
            onClick={() => {
              if (item.onPress) {
                item.onPress.call(item);
              }
            }}
          >
            {item.title}
          </Menu.Item>
        ))}
      </Menu>

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
