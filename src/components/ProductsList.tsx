import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import type { Product } from '../types/product';
import ProductCard from './ProductCard';

type ProductsListProps = {
  mainPage?: boolean;
};

const ProductsList = ({ mainPage }: ProductsListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const params = mainPage
      ? { ['showOnMainPage' as keyof Product]: true }
      : undefined;
    getProducts(params).then((res) => {
      setProducts(res);
    });
  }, [mainPage]);

  return (
    <div className="products-list">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
