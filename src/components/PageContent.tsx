import Footer from './Footer';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const PageContent = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <div className="content">
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <Navigation bottom={true} />
    </>
  );
};

export default PageContent;
