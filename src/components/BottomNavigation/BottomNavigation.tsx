import './BottomNavigation.css';
import { TabBar } from 'antd-mobile-v2';
import { navItems } from '../../assets/data';

const BottomNavigation = () => {
  return (
    <nav className="bottom-navigation">
      <TabBar>
        {navItems
          .filter(({ menu }) => menu)
          .map(({ key, title, icon }) => (
            <TabBar.Item key={key} title={title} icon={icon} />
          ))}
      </TabBar>
    </nav>
  );
};

export default BottomNavigation;
