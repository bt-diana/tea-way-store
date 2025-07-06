import AntdConfigProvider from './components/AntdConfigProvider';
import Router from './components/Router';

const App = () => {
  return (
    <AntdConfigProvider>
      <Router />
    </AntdConfigProvider>
  );
};

export default App;
