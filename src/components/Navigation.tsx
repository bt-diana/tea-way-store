import { TabBar } from 'antd-mobile-v2';
import { navItems } from '../assets/data';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const { Item } = TabBar;

type NavigationProps = {
  bottom?: boolean;
};

const Navigation = ({ bottom }: NavigationProps) => {
  const navigate = useNavigate();
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <nav className={bottom ? 'bottom-navigation' : 'navigation'}>
      {!bottom ? <Logo /> : null}
      <TabBar>
        {navItems
          .filter(({ menu }) => menu == bottom)
          .map(({ key, title, icon, url, alterIcon }) => (
            <Item
              key={key}
              title={title}
              icon={alterIcon && menuIsVisible ? alterIcon : icon}
              onPress={() =>
                url ? navigate(url) : setMenuIsVisible((value) => !value)
              }
            />
          ))}
      </TabBar>
    </nav>
  );
};

export default Navigation;
