import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageContent from './PageContent';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import CatalogPage from '../pages/CatalogPage';
import PlacingOrederPage from '../pages/PlacingOrederPage';
import ArticlePage from '../pages/ArticlePage';
import ArticlesListPage from '../pages/ArticlesListPage';
import CartPage from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContent />}>
          <Route index element={<MainPage />} />
          <Route path="catalog">
            <Route index element={<SearchPage />} />
            <Route path=":id" element={<CatalogPage />}>
              <Route path=":id" element={<CatalogPage />}>
                <Route path=":id" element={<CatalogPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="products">
            <Route path=":id" element={<ProductPage />} />
          </Route>
          <Route path="cart">
            <Route index element={<CartPage />} />
            <Route path="placing-order" element={<PlacingOrederPage />} />
          </Route>
          <Route path="articles">
            <Route index element={<ArticlesListPage />} />
            <Route path=":id" element={<ArticlePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
