import './Navigation.css';
import { TabBar } from 'antd-mobile-v2';
import { navItems } from '../../assets/data';
import Logo from '../Logo/Logo';

type NavigationProps = {
  mobile?: boolean;
  bottom?: boolean;
};

const Navigation = ({ mobile, bottom }: NavigationProps) => {
  if (mobile) {
    return (
      <nav className={bottom ? "bottom-navigation" : "navigation"}>
        {!bottom ? <Logo /> : null}
        <TabBar>
          {navItems
            .filter(({ menu }) => menu == bottom)
            .map(({ key, title, icon }) => (
              <TabBar.Item key={key} title={title} icon={icon} />
            ))}
        </TabBar>
      </nav>
    );
  }

  if (bottom) {
    return null;
  }

  return (
    <nav className="navigation">
      <Logo />
      <TabBar>
        {navItems.map(({ key, title }) => (
          <TabBar.Item key={key} title={title} />
        ))}
      </TabBar>
    </nav>
  );
};

export default Navigation;
