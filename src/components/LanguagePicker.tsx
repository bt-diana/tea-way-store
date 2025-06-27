import { Dropdown, type MenuProps } from 'antd';
import { useState, type ReactNode } from 'react';
const languages: string[] = ['ENG', 'РУС', 'КЫР'];

type LanguagePickerProps = {
  children?: ReactNode;
};

const LanguagePicker = ({ children }: LanguagePickerProps) => {
  const [selected, setSelected] = useState('РУС');

  const onClick: MenuProps['onClick'] = (e) => {
    setSelected(e.key);
  };
  return (
    <Dropdown
      menu={{
        items: languages.map((lang) => ({ key: lang, label: lang })),
        selectedKeys: [selected],
        onClick: onClick,
      }}
      arrow={true}
      placement="bottom"
      overlayStyle={{ zIndex: 10000 }}
    >
      {children}
    </Dropdown>
  );
};

export default LanguagePicker;
