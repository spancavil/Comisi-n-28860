import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import CartContainer from './container/CartContainer';
import ShopProvider from './context/Shop';

function App() {

  const temp = 20;
  // const opcion = "Hogar"
  const opcion = "Decoracion"

  return (
    // <DarkModeProvider>
      <ShopProvider>
        <BrowserRouter>
          <NavBar temperatura={temp} opcionAdicional={opcion}/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </ShopProvider>
    // </DarkModeProvider> 
  );
}

export default App;