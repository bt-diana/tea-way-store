import './Navigation.css';
import { TabBar } from 'antd-mobile-v2';
import { navItems } from '../../assets/data';
import { NavBar } from 'antd-mobile-v2';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <NavBar
      className="navigation"
      leftContent={<Logo />}
      rightContent={
        <TabBar>
          {navItems
            .filter(({ menu }) => !menu)
            .map(({ key, title }) => (
              <TabBar.Item key={key} title={title} />
            ))}
        </TabBar>
      }
    />
  );
};

export default Navigation;
