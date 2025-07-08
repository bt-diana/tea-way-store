import { useEffect, useState } from 'react';
import { getProducts } from '../api/product';
import type { Product } from '../types/product';
import ProductCard from './ProductCard';

type ProductsListProps = {
  popular: boolean;
};

const ProductsList = ({ popular }: ProductsListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const params = popular ? { ['popular' as keyof Product]: true } : undefined;
    getProducts(params).then((res) => {
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
