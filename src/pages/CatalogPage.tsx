import { useParams } from 'react-router-dom';

const CatalogPage = () => {
  const { id } = useParams();
  return <h1>CatalogPage: {id}</h1>;
};

export default CatalogPage;
