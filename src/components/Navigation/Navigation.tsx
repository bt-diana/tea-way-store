import './Navigation.css';
import { TabBar } from 'antd-mobile-v2';
import { navItems } from '../../assets/data';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <TabBar>
        {navItems
          .filter(({ menu }) => !menu)
          .map(({ key, title }) => (
            <TabBar.Item key={key} title={title} />
          ))}
      </TabBar>
    </nav>
  );
};

export default Navigation;
