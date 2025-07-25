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
  const [type, setType] = useState<ProductType | null>();
  const [childrenTypes, setChildrenTypes] = useState<ProductType[] | null>();

  useEffect(() => {
    if (id) {
      getTypeById(id).then((type) => {
        setType(type ?? null);
        if (type) {
          getChildrenTypesByParentId(type.id).then((types) => {
            setChildrenTypes(types?.length ? types : null);
          });
        }
      });
    }
  }, [id, setType]);

  if (type === null) {
    return <ResourceNotFoundPage />;
  }

  if (type) {
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
  }
};

export default CatalogPage;
