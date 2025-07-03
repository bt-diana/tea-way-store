import type { ContactsItem } from '../types/contactsItem';

type ContactProps = ContactsItem;

const Contact = ({ icon, text, link }: ContactProps) => {
  return (
    <a className="contact paragrapth" href={link}>
      {icon && <div className="contact-icon icon">{icon}</div>}
      {text && <div className="contact-text">{text}</div>}
    </a>
  );
};

export default Contact;
