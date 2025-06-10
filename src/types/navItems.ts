import type { TabIcon } from 'antd-mobile-v2/lib/tab-bar/PropsType';

export type navItem = {
  key: string;
  title: string;
  icon?: TabIcon;
  alterIcon?: TabIcon;
  menu?: boolean;
  url?: string;
};
