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
import type { Contact } from '../types/contact';
import type { SectionData } from '../types/sectionData';
import { Title } from '../types/titile';
import Section from './Section';
import { Button } from 'antd';

const CONTACTS_PHONE = process.env.VITE_CONTACTS_PHONE;
const CONTACTS_EMAIL = process.env.VITE_CONTACTS_EMAIL;
const CONTACTS_INST = process.env.VITE_CONTACTS_INST;
const CONTACTS_WHATSAPP = process.env.VITE_CONTACTS_WHATSAPP;
const CONTACTS_FACEBOOK = process.env.VITE_CONTACTS_FACEBOOK;
const CONTACTS_YOUTUBE = process.env.VITE_CONTACTS_YOUTUBE;
const CONTACTS_ADDRESS = process.env.VITE_CONTACTS_ADDRESS;
const CONTACTS_BUSINESS_HOURS = process.env.VITE_CONTACTS_BUSINESS_HOURS;

const data: SectionData = {
  title: 'Свяжитесь с нами',
};

const contacts: Contact[] = [
  {
    icon: <PhoneOutlined />,
    text: CONTACTS_PHONE,
    link: `tel:${CONTACTS_PHONE}`,
  },
  {
    icon: <MailOutlined />,
    text: CONTACTS_EMAIL,
    link: `mailto:${CONTACTS_EMAIL}`,
  },
  {
    icon: <EnvironmentOutlined />,
    text: CONTACTS_ADDRESS,
  },
  {
    icon: <ClockCircleOutlined />,
    text: CONTACTS_BUSINESS_HOURS,
  },
];

const socials: Contact[] = [
  {
    icon: <WhatsAppOutlined style={{ fontSize: '36px' }} />,
    link: CONTACTS_WHATSAPP,
  },
  {
    icon: <InstagramOutlined style={{ fontSize: '36px' }} />,
    link: CONTACTS_INST,
  },
  {
    icon: <YoutubeOutlined style={{ fontSize: '36px' }} />,
    link: CONTACTS_YOUTUBE,
  },
  {
    icon: <FacebookOutlined style={{ fontSize: '36px' }} />,
    link: CONTACTS_FACEBOOK,
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
          {contacts.map(({ icon, text, link }, index) => {
            if (text) {
              return (
                <Button key={index} type="link" icon={icon} href={link}>
                  {text}
                </Button>
              );
            }
          })}
        </div>
      </Section>
      <Section className="socials-section">
        <div className="socials">
          {socials.map(({ icon, link }, index) => {
            if (link) {
              return (
                <Button
                  key={index}
                  variant="link"
                  color="primary"
                  icon={icon}
                  href={link}
                />
              );
            }
          })}
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
