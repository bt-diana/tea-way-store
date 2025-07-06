import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import type { ContactsItem } from '../types/contactsItem';
import type { SectionData } from '../types/sectionData';
import { Title } from '../types/titile';
import Section from './Section';
import { Button } from 'antd';

const data: SectionData = {
  title: 'Свяжитесь с нами',
};

const contacts: ContactsItem[] = [
  {
    icon: <PhoneOutlined />,
    text: '+996-000-000-000',
    link: 'tel:+996-000-000-000',
  },
  {
    icon: <MailOutlined />,
    text: 'teaway@email.com',
  },
  {
    icon: <EnvironmentOutlined />,
    text: 'Бишкек, микрорайон Асанбай, 78/1',
  },
  {
    icon: <ClockCircleOutlined />,
    text: 'Ежедневно 09:00–21:00',
  },
];

const socials: ContactsItem[] = [
  {
    icon: <FacebookOutlined style={{ fontSize: '36px' }} />,
  },
  {
    icon: <InstagramOutlined style={{ fontSize: '36px' }} />,
  },
  {
    icon: <YoutubeOutlined style={{ fontSize: '36px' }} />,
  },
  {
    icon: <WhatsAppOutlined style={{ fontSize: '36px' }} />,
  },
];

const Footer = () => {
  return (
    <footer>
      <Section
        title={data.title}
        TitleLevel={Title.h1}
        className="contacts-section"
      >
        <div className="contacts">
          {contacts.map(({ icon, text, link }) => (
            <Button type="link" icon={icon} href={link}>
              {text}
            </Button>
          ))}
        </div>
      </Section>
      <Section className="socials-section">
        <div className="socials">
          {socials.map(({ icon, link }) => (
            <Button variant="link" color="primary" icon={icon} href={link} />
          ))}
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
