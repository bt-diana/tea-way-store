import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Form, Input, type FormProps } from 'antd';
import type { FormField } from '../types/formField';

type FieldType = {
  dateTime: string;
  address: string;
  comment?: string;
};

const fields: FormField<FieldType>[] = [
  {
    label: 'Дата и время доставки',
    name: 'dateTime',
    icon: <CalendarOutlined />,
    required: true,
    message: 'Укажите дату и время доставки',
  },
  {
    label: 'Адрес',
    name: 'address',
    icon: <EnvironmentOutlined />,
    required: true,
    message: 'Укажите адрес доставки',
  },
  {
    label: 'Комметнарий для сервиса доставки',
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

const DeliveryForm = () => {
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      name="delivery"
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

export default DeliveryForm;
