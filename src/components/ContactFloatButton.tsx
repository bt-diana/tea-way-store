import { MessageOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const ContactFloatButton = () => {
  const link = '';
  return (
    <a href={link} target="_blank" className="contact-float-button">
      <FloatButton icon={<MessageOutlined />} />
    </a>
  );
};

export default ContactFloatButton;
