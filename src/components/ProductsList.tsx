import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import type { Product } from '../types/product';
import ProductCard from './ProductCard';

type ProductsListProps = {
  typeId?: string;
  popular?: boolean;
};

const ProductsList = ({ typeId, popular }: ProductsListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const params = { typeId, popular };
    getProducts(params).then((res) => {
      setProducts(res);
    });
  }, [typeId, popular]);

  return (
    <div className="products-list">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
