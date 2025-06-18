import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const PageContent = () => {
  return (
    <>
      <Navigation />
      <main className="content">
        <Outlet />
      </main>
      <Navigation bottom={true} />
    </>
  );
};

export default PageContent;
