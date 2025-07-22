import type { ReactNode } from 'react';

export type NavItem = {
  key: string;
  title: string | ReactNode;
  icon?: ReactNode;
  activeIcon?: ReactNode;
  menu?: boolean;
  url?: string;
  closeMenu?: boolean;
  openCloseMenu?: boolean;
};
