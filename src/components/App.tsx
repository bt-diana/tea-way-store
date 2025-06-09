import Navigation from './Navigation';
import Content from './Content';

const App = () => {
  return (
    <>
      <Navigation mobile={true} />
      <Content />
      <Navigation mobile={true} bottom={true} />
    </>
  );
};

export default App;
