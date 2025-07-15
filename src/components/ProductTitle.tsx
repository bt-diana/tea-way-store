import { Link } from 'react-router-dom';

type ProductTitleProps = {
  id: string;
  name: string;
  productPageView?: boolean;
};

const ProductTitle = ({ id, name, productPageView }: ProductTitleProps) => {
  if (productPageView) {
    return <h2>{name}</h2>;
  }

  return (
    <Link className="product-card-title" to={`/products/${id}`}>
      <h5>{name}</h5>
    </Link>
  );
};

export default ProductTitle;
