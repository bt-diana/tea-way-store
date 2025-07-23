import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import type { Product } from '../types/product';
import ProductCard from './ProductCard';

type ProductsListProps = {
  typeId?: string;
  popular?: boolean;
  amateur?: boolean;
  sets?: boolean;
};

const ProductsList = ({
  typeId,
  popular,
  amateur,
  sets,
}: ProductsListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const params = { typeId, popular, amateur, sets };
    getProducts(params).then((res) => {
      setProducts(res);
    });
  }, [typeId, popular, amateur, sets]);

  return (
    <div className="products-list">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
