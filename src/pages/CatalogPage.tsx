import { useParams } from 'react-router-dom';
import Section from '../components/Section';
import { useEffect, useState } from 'react';
import ProductsList from '../components/ProductsList';
import { getTypeById } from '../api/productTypes';
import { Title } from '../types/titile';
import type { ProductType } from '../types/productType';
import ResourseNotFoundPage from './ResourseNotFoundPage';

const CatalogPage = () => {
  const { id } = useParams();
  const [type, setType] = useState<ProductType | undefined>();

  useEffect(() => {
    if (id) {
      getTypeById(id).then((type) => {
        setType(type);
      });
    }
  }, [id, setType]);

  if (!type) {
    return <ResourseNotFoundPage />;
  }

  return (
    <main>
      <Section title={type.name} TitleLevel={Title.h1}>
        <ProductsList typeId={type.id} />
      </Section>
    </main>
  );
};

export default CatalogPage;
