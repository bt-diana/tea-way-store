import { Link, useLocation, useParams } from 'react-router-dom';
import Section from '../components/Section';
import { useEffect, useState } from 'react';
import ProductsList from '../components/ProductsList';
import { getChildrenTypesByParentId, getTypeById } from '../api/productTypes';
import { Title } from '../types/titile';
import type { ProductType } from '../types/productType';
import ResourceNotFoundPage from './ResourceNotFoundPage';
import { Tag } from 'antd';

const CatalogPage = () => {
  const { id } = useParams();
  const [type, setType] = useState<ProductType | undefined>();
  const [childrenTypes, setChildrenTypes] = useState<
    ProductType[] | undefined
  >();

  useEffect(() => {
    if (id) {
      getTypeById(id).then((type) => {
        setType(type);
        if (type) {
          getChildrenTypesByParentId(type.id).then((types) => {
            setChildrenTypes(types);
          });
        }
      });
    }
  }, [id, setType]);

  if (!type) {
    return <ResourceNotFoundPage />;
  }

  return (
    <main>
      <Section
        title={type.name}
        TitleLevel={Title.h1}
        paragraph={type.description}
      >
        <div className="catalog-tags">
          {childrenTypes?.map(({ id, name }) => (
            <Link key={id} to={`/catalog/${id}`}>
              <Tag className="catalog-tag">{name}</Tag>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <ProductsList typeId={type.id} />
      </Section>
    </main>
  );
};

export default CatalogPage;
