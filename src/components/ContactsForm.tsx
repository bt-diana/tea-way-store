import { PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, type FormProps } from 'antd';
import type { FormField } from '../types/formField';

type FieldType = {
  addresser: string;
  phone: string;
  comment?: string;
};

const fields: FormField<FieldType>[] = [
  {
    label: 'Получатель',
    name: 'addresser',
    icon: <UserOutlined />,
    required: true,
    message: 'Укажите имя получателя',
  },
  {
    label: 'Телефон',
    name: 'phone',
    icon: <PhoneOutlined />,
    required: true,
    message: 'Укажите номер телефона получателя',
  },
  {
    label: 'Комментарий к заказу',
    name: 'comment',
    input: (props: React.ComponentProps<typeof Input.TextArea>) => (
      <Input.TextArea {...props} rows={4} />
    ),
  },
];

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const ContactsForm = () => {
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      name="contacts"
    >
      {fields.map(({ label, name, icon, required, message, input }) => (
        <Form.Item<FieldType>
          key={name}
          name={name}
          rules={[{ required, message }]}
        >
          {input ? (
            input({ placeholder: label })
          ) : (
            <Input placeholder={label} prefix={icon} />
          )}
        </Form.Item>
      ))}
    </Form>
  );
};

export default ContactsForm;
