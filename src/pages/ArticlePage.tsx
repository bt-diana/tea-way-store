import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { id } = useParams();
  return <h1>ArticlePage: {id}</h1>;
};

export default ArticlePage;
