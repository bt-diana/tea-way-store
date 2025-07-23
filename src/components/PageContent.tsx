import { useLayoutEffect } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { Outlet, useLocation } from 'react-router-dom';

const PageContent = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <div className="content">
        <Outlet />
        <Footer />
      </div>
      <Navigation bottom={true} />
    </>
  );
};

export default PageContent;
