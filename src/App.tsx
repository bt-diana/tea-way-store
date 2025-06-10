import Navigation from './components/Navigation';
import Content from './components/Content';

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
