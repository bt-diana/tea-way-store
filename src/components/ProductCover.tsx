import { Link } from 'react-router-dom';
import { Image, Empty } from 'antd';

type ProductCoverProps = {
  id: string;
  name: string;
  cover?: string;
  productPageView?: boolean;
};

const ProductCover = ({
  id,
  name,
  cover,
  productPageView,
}: ProductCoverProps) => {
  if (!cover) {
    return <Empty />;
  }

  if (productPageView) {
    return <Image alt={name} src={cover} />;
  }

  return (
    <Link to={`/products/${id}`}>
      <img alt={name} src={cover} />
    </Link>
  );
};

export default ProductCover;
