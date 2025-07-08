import { useEffect, useState } from 'react';
import { getProducts } from '../api/product';
import type { Product } from '../types/product';
import ProductCard from './ProductCard';

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((res) => {
      console.log(res);
      setProducts(res);
    });
  }, []);

  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
