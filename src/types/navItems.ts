import type { ReactNode } from 'react';

export type NavItem = {
  key: string;
  title: string;
  icon?: ReactNode;
  activeIcon?: ReactNode;
  menu?: boolean;
  url?: string;
  onPress?: () => void;
};
