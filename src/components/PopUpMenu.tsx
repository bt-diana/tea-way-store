import { Popup, Space } from 'antd-mobile';

type PopUpMenuProps = {
  visible: boolean;
};

const PopUpMenu = ({ visible }: PopUpMenuProps) => {
  return (
    <Popup visible={visible} bodyStyle={{ height: '90%' }}>
      <div style={{ padding: '24px' }}>
        <Space direction="vertical">
          <div>Menu</div>
        </Space>
      </div>
    </Popup>
  );
};

export default PopUpMenu;
