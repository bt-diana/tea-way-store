import { Button } from 'antd';
import Section from '../components/Section';
import ContactsForm from '../components/ContactsForm';
import DeliveryForm from '../components/DeliveryForm';

const CONTACTS_WHATSAPP = process.env.VITE_CONTACTS_WHATSAPP;

const PlacingOrederPage = () => {
  const text = 'test';

  return (
    <main>
      <h1>Оформление заказа</h1>
      <Section title="Контакты">
        <ContactsForm />
      </Section>
      <Section title="Доставка">
        <DeliveryForm />
      </Section>
      <a href={`${CONTACTS_WHATSAPP}?text=${text}`} target="_blank">
        <Button style={{ width: '100%' }} type="primary">
          Оформить заказ
        </Button>
      </a>
    </main>
  );
};

export default PlacingOrederPage;
