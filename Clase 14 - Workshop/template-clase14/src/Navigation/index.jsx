import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../container/ItemDetailContainer';
import ItemListContainer from '../container/ItemListContainer';
import NotFound from '../components/NotFound';
import CartContainer from '../container/CartContainer';
import Checkout from '../components/Checkout';

const MainNavigator = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartContainer />} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigator;