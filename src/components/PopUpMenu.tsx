import { Popup, Space } from 'antd-mobile';
import Catalog from './Catalog';
import SearchForm from './SearchForm';
import { Button, Divider } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

type PopUpMenuProps = {
  visible: boolean;
  close: () => void;
};

const PopUpMenu = ({ visible, close }: PopUpMenuProps) => {
  return (
    <Popup visible={visible} bodyStyle={{ height: '80%' }} onMaskClick={close}>
      <Space align="center" style={{ width: '100%' }} className="menu-options">
        <SearchForm />
        <Button type="text" icon={<CloseOutlined />} onClick={close} />
      </Space>
      <Divider style={{ margin: 'unset' }} />
      <Catalog />
    </Popup>
  );
};

export default PopUpMenu;
