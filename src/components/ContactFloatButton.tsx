import { MessageOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const CONTACTS_WHATSAPP = process.env.VITE_CONTACTS_WHATSAPP;

const ContactFloatButton = () => {
  return (
    <a
      href={CONTACTS_WHATSAPP}
      target="_blank"
      className="contact-float-button"
    >
      <FloatButton icon={<MessageOutlined />} />
    </a>
  );
};

export default ContactFloatButton;
