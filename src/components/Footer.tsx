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
import Contact from './Contact';

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
    icon: <FacebookOutlined />,
  },
  {
    icon: <InstagramOutlined />,
  },
  {
    icon: <YoutubeOutlined />,
  },
  {
    icon: <WhatsAppOutlined />,
  },
];

const Footer = () => {
  return (
    <footer>
      <Section title={data.title} className="contacts-section">
        <div className="contacts">
          {contacts.map(({ icon, text, link }) => (
            <Contact icon={icon} text={text} link={link} />
          ))}
        </div>
      </Section>
      <Section className="socials-section">
        <div className="socials">
          {socials.map(({ icon, text, link }) => (
            <Contact icon={icon} text={text} link={link} />
          ))}
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
