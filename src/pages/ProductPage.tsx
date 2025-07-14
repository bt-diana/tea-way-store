import { Descriptions, Image } from 'antd';
import type { Product } from '../types/product';
import { getProductById } from '../api/products';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';

const ProductDescription: Record<keyof Product, string> = {
  region: 'Регион сбора',
  year: 'Год производства',
  type: 'Тип',
};

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
