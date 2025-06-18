import type { TabIcon } from 'antd-mobile-v2/lib/tab-bar/PropsType';

export type navItem = {
  key: string;
  title: string;
  icon?: TabIcon;
  activeIcon?: TabIcon;
  menu?: boolean;
  url?: string;
  onPress(): void;
};
