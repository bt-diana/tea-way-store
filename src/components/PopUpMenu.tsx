import { Popup } from 'antd-mobile';
import Catalog from './Catalog';

type PopUpMenuProps = {
  visible: boolean;
  close: () => void;
};

const PopUpMenu = ({ visible, close }: PopUpMenuProps) => {
  return (
    <Popup visible={visible} bodyStyle={{ height: '80%' }} onMaskClick={close}>
      <Catalog />
    </Popup>
  );
};

export default PopUpMenu;
