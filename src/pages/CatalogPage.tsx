import { useParams } from 'react-router-dom';
import Section from '../components/Section';
import { useEffect, useState } from 'react';
import ProductsList from '../components/ProductsList';
import { getTypeById } from '../api/productTypes';
import { Title } from '../types/titile';

const CatalogPage = () => {
  const { id } = useParams();
  const [typeName, setTypeName] = useState<string>();

  useEffect(() => {
    if (id) {
      getTypeById(id).then((type) => {
        if (type?.name) {
          setTypeName(type.name);
        }
      });
    }
  }, [id, setTypeName]);

  return (
    <main>
      <Section title={typeName} TitleLevel={Title.h1}>
        <ProductsList typeId={id} />
      </Section>
    </main>
  );
};

export default CatalogPage;
