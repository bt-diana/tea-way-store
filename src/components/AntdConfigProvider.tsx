import { ConfigProvider } from 'antd';
import type { ReactNode } from 'react';

type AntdConfigProvider = {
  children: ReactNode;
};

const theme = {
  token: {
    colorBgLayout: 'rgba(255, 251, 244, 1)',
    colorPrimary: 'rgba(65, 117, 86, 1)',
    colorInfo: 'rgba(65, 117, 86, 1)',
    colorLink: 'rgba(108, 108, 108, 1)',
    colorTextBase: 'rgba(34, 34, 34, 1)',
    fontFamily: 'Roboto',
  },
  components: {
    Button: {
      defaultBg: 'rgba(208, 221, 213, 1)',
      defaultColor: 'rgba(65, 117, 86, 1)',
    },
  },
};

const AntdConfigProvider = ({ children }: AntdConfigProvider) => (
  <ConfigProvider theme={theme}>{children}</ConfigProvider>
);

export default AntdConfigProvider;
