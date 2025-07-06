import { ConfigProvider } from 'antd';
import type { ReactNode } from 'react';

type AntdConfigProvider = {
  children: ReactNode;
};

const AntdConfigProvider = ({ children }: AntdConfigProvider) => (
  <ConfigProvider theme={{}}>{children}</ConfigProvider>
);

export default AntdConfigProvider;
