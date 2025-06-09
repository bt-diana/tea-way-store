import './App.css';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';

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
