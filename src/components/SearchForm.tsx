import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, type FormProps } from 'antd';

type FieldType = {
  searchText?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const SearchForm = () => {
  return (
    <Form
      name="catalog-search-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="search-form"
    >
      <Form.Item<FieldType>
        name="searchText"
        rules={[{ required: true, message: 'Please input your username!' }]}
        style={{ margin: 'unset' }}
      >
        <Space.Compact style={{ width: '100%' }}>
          <Input placeholder="Введите текст для поиска..." allowClear />
          <Button icon={<SearchOutlined />} />
        </Space.Compact>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
