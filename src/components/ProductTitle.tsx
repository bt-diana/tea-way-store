import { Link } from 'react-router-dom';
import RemoveFromCartButton from './RemoveFromCartButton';

type ProductTitleProps = {
  id: string;
  name: string;
  productPageView?: boolean;
  cartView?: boolean;
};

const ProductTitle = ({
  id,
  name,
  productPageView,
  cartView,
}: ProductTitleProps) => {
  if (productPageView) {
    return <h2>{name}</h2>;
  }

  return (
    <div className="product-card-title">
      <Link to={`/products/${id}`}>
        <h5>{name}</h5>
      </Link>
      {cartView && <RemoveFromCartButton productId={id} />}
    </div>
  );
};

export default ProductTitle;
