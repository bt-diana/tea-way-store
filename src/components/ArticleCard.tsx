import { Card } from 'antd';
import { Link } from 'react-router-dom';
import type { Article } from '../types/article';

type ArticleCardProps = {
  article: Article;
  showDescription?: boolean;
};

const ArticleCard = ({
  article: { id, title, description, cover },
  showDescription,
}: ArticleCardProps) => {
  return (
    <Link to={`/articles/${id}`}>
      <Card cover={<img alt={title} src={cover} />} className="article-card">
        <Card.Meta title={title} description={showDescription && description} />
      </Card>
    </Link>
  );
};

export default ArticleCard;
