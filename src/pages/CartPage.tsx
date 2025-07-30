import { useEffect, useState } from 'react';
import Section from '../components/Section';
import { Title } from '../types/titile';
import type { Product } from '../types/product';
import { Button, Empty } from 'antd';
import { getProducts } from '../api/products';
import type { CartData } from '../types/cartData';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const getTotalPrice = (products: Product[], cartData: CartData) => {
  return products.reduce((totalPrice, product) => {
    const productPrice =
      (product.sizesPrices.find(({ id }) => id === cartData[product.id].size)
        ?.price ?? 0) * cartData[product.id].amount;
    return totalPrice + productPrice;
  }, 0);
};

const CartPage = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState<number>();
  const [products, setProducts] = useState<Product[] | null>();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')!);
    if (cart) {
      const params = { id: Object.keys(cart) };
      getProducts(params).then((res) => {
        if (res?.length) {
          setProducts(res);
          setPrice(getTotalPrice(res, cart));
        } else {
          setProducts(null);
        }
      });
    } else {
      setProducts(null);
    }
  });

  if (!products) {
    return (
      <main>
        <Section title="Корзина" TitleLevel={Title.h1}>
          <Empty
            description="Корзина пуста"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        </Section>
      </main>
    );
  }

  return (
    <main>
      <Section title="Корзина" TitleLevel={Title.h1} className="cart">
        <div className="cart-prodcuts">
          {products.map((product) => (
            <ProductCard key={product.id} cartView product={product} />
          ))}
        </div>
        <div className="total-price">
          <h2>Общая стоимость:</h2>
          <h2>{price} сом</h2>
        </div>
        <Button
          type="primary"
          onClick={() => {
            navigate('order');
          }}
        >
          Перейти к оформлению
        </Button>
      </Section>
    </main>
  );
};

export default CartPage;
