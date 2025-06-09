import './App.css';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';

const App = () => {
  return (
    <>
      <Navigation />
      <Content />
      <BottomNavigation />
    </>
  );
};

export default App;
