import { Card } from 'antd';
import { Link } from 'react-router-dom';
import type { Article } from '../types/article';

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({
  article: { id, title, description, cover },
}: ArticleCardProps) => {
  return (
    <Link to={`/articles/${id}`} className="article-card">
      <Card cover={<img alt={title} src={cover} />}>
        <Card.Meta title={title} description={description} />
      </Card>
    </Link>
  );
};

export default ArticleCard;
