import type { Product } from '../types/product';
import { getProductById } from '../api/products';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    getProductById(id!).then((res) => {
      setProduct(res);
    });
  }, [id]);

  return (
    <main>{product && <ProductCard product={product} productPageView />}</main>
  );
};

export default ProductPage;
