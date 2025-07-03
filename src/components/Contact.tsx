import type { ContactsItem } from '../types/contactsItem';

type ContactProps = ContactsItem;

const Contact = ({ icon, text, link }: ContactProps) => {
  return (
    <div className="contact">
      <a className="contact" href={link}>
        <div className="contact-icon icon">{icon}</div>
        <div className="contact-text paragrapth">{text}</div>
      </a>
    </div>
  );
};

export default Contact;
