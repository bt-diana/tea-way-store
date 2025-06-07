import './BottomNavigation.css';
import { TabBar } from 'antd-mobile-v2';
import { navItems } from '../../assets/data';
import { NavBar } from 'antd-mobile-v2';

const BottomNavigation = () => {
  return (
    <NavBar className="bottom-navigation">
      <TabBar>
        {navItems
          .filter(({ menu }) => menu)
          .map(({ key, title, icon }) => (
            <TabBar.Item key={key} title={title} icon={icon} />
          ))}
      </TabBar>
    </NavBar>
  );
};

export default BottomNavigation;
