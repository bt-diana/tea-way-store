import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { getAllArticles } from '../api/articles';
import type { Article } from '../types/article';

type ArticlesListProps = {
  forMainPage?: boolean;
};

const ArticlesList = ({ forMainPage }: ArticlesListProps) => {
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
    const params = { forMainPage };
    getAllArticles(params).then((res) => {
      console.log(res);
      setArticles(res);
    });
  }, [forMainPage]);

  return (
    <div className="articles-list">
      {articles?.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
