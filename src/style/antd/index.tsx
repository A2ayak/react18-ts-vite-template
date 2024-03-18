import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';

type Props = {
  children: React.ReactNode;
};
export default function AntdConfig({ children }: Props) {
  return (
    <ConfigProvider>
      {/* https://ant.design/docs/react/compatible-style-cn#styleprovider */}
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  );
}
