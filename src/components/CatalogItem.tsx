import type { catalogItem } from '../types/catalogItem';
import { List, Typography } from 'antd';

type CatalogItemProps = catalogItem;

const CatalogItem = ({ url, title, subitems }: CatalogItemProps) => {
  return (
    <>
      <List.Item key={url} className="list-item">
        <Typography.Text className="list-item-title">{title}</Typography.Text>
      </List.Item>
      {subitems && (
        <List.Item
          key={url + 'subitems'}
          style={{ padding: 'unset' }}
          className="list-item-subitems"
        >
          <List
            dataSource={subitems}
            renderItem={({ url, title, subitems }) => (
              <CatalogItem url={url} title={title} subitems={subitems} />
            )}
            className="subitems-list"
          />
        </List.Item>
      )}
    </>
  );
};

export default CatalogItem;
