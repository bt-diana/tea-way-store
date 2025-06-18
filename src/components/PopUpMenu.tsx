import { Popup, Space } from 'antd-mobile';

type PopUpMenuProps = {
  visible: boolean;
  close: () => void;
};

const PopUpMenu = ({ visible, close }: PopUpMenuProps) => {
  return (
    <Popup visible={visible} bodyStyle={{ height: '90%' }} onMaskClick={close}>
      <div style={{ padding: '24px' }}>
        <Space direction="vertical">
          <div>Menu</div>
        </Space>
      </div>
    </Popup>
  );
};

export default PopUpMenu;
