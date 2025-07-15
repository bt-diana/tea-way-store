type ProductPriceProps = {
  price: number;
  productPageView?: boolean;
};

const ProductPrice = ({ price, productPageView }: ProductPriceProps) => {
  const text = `${price} сом`;

  if (productPageView) {
    return <h3 className="product-card-price">{text}</h3>;
  }

  return <h5 className="product-card-price">{text}</h5>;
};

export default ProductPrice;
