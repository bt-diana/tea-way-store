import { Modal, Button, Divider, Flex } from 'antd';
import Catalog from './Catalog';
import SearchForm from './SearchForm';
import { CloseOutlined } from '@ant-design/icons';

type PopUpMenuProps = {
  visible: boolean;
  close: () => void;
};

const PopUpMenu = ({ visible, close }: PopUpMenuProps) => {
  return (
    <Modal
      open={visible}
      onCancel={close}
      footer={null}
      closeIcon={false}
      transitionName="ant-move-down"
      className="popup-menu"
    >
      <Flex align="center" justify="space-between" className="menu-options">
        <SearchForm />
        <Button type="text" icon={<CloseOutlined />} onClick={close} />
      </Flex>
      <Divider style={{ margin: 'unset' }} />
      <Catalog onNavigate={close} />
    </Modal>
  );
};

export default PopUpMenu;
