import { Link } from 'react-router-dom';
import { Image } from 'antd';
import { Empty } from "antd";

type ProductCoverProps = {
  id: string;
  name: string;
  cover: string;
  productPageView?: boolean;
};

const ProductCover = ({
  id,
  name,
  cover,
  productPageView,
}: ProductCoverProps) => {
  if (!cover) {
    return <Empty style={{
      marginInline: 'unset'
    }} />;
  }

  const coverSrc = `https://drive.google.com/thumbnail?id=${cover}`;

  if (productPageView) {
    return <Image alt={name} src={coverSrc} />;
  }

  return (
    <Link to={`/products/${id}`}>
      <img alt={name} src={coverSrc} />
    </Link>
  );
};

export default ProductCover;
