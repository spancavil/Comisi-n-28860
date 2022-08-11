import './App.css';
import ShopProvider from './context/Shop';
import MainNavigator from './Navigation';

function App() {

  return (
    <ShopProvider>
      <MainNavigator/>
    </ShopProvider>
  );
}

export default App;