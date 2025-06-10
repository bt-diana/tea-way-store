import { TabBar } from 'antd-mobile-v2';
import { navItems } from '../assets/data';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const { Item } = TabBar;

type NavigationProps = {
  mobile?: boolean;
  bottom?: boolean;
};

const Navigation = ({ mobile, bottom }: NavigationProps) => {
  const navigate = useNavigate();

  if (mobile) {
    return (
      <nav className={bottom ? 'bottom-navigation' : 'navigation'}>
        {!bottom ? <Logo /> : null}
        <TabBar>
          {navItems
            .filter(({ menu }) => menu == bottom)
            .map(({ key, title, icon, url }) => (
              <Item
                key={key}
                title={title}
                icon={icon}
                onPress={() => (url ? navigate(url) : null)}
              />
            ))}
        </TabBar>
      </nav>
    );
  }

  if (!bottom) {
    return (
      <nav className="navigation">
        <Logo />
        <TabBar>
          {navItems.map(({ key, title, url }) => (
            <Item
              key={key}
              title={title}
              onPress={() => (url ? navigate(url) : null)}
            />
          ))}
        </TabBar>
      </nav>
    );
  }
};

export default Navigation;
