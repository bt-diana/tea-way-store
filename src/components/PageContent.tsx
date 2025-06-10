import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const PageContent = () => {
  return (
    <>
      <Navigation mobile={true} />
      <main className="content">
        <Outlet />
      </main>
      <Navigation mobile={true} bottom={true} />
    </>
  );
};

export default PageContent;
