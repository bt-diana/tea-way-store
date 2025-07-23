import { useParams } from 'react-router-dom';
import Section from '../components/Section';
import type { Article } from '../types/article';
import ResourceNotFoundPage from './ResourceNotFoundPage';
import { Carousel, Image } from 'antd';
import { useEffect, useState } from 'react';
import { getArticleById } from '../api/articles';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    if (id) {
      getArticleById(id).then((res) => {
        setArticle(res);
      });
    }
  });

  if (!article?.sections?.length) {
    return <ResourceNotFoundPage />;
  }

  return (
    <main>
      {article.sections.map(({ title, text, images }, index) => (
        <Section key={index} title={title} paragraph={text}>
          <Carousel arrows infinite={false} className="article-images-carousel">
            {images?.map(({ name, src }, index) => (
              <Image key={index} alt={name} src={src} />
            ))}
          </Carousel>
        </Section>
      ))}
    </main>
  );
};

export default ArticlePage;
