import './Navigation.css';
import { TabBar } from 'antd-mobile-v2';
import { navItems } from '../../assets/data';
import { NavBar } from 'antd-mobile-v2';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <NavBar
      leftContent={<Logo />}
      rightContent={
        <TabBar>
          {navItems.map(({ key, title }) => (
            <TabBar.Item key={key} title={title} />
          ))}
        </TabBar>
      }
    />
  );
};

export default Navigation;
