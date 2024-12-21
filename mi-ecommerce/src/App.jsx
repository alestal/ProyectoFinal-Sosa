import { useState } from 'react';
import './App.css';
import './components/NavBar/NavBar';
import './components/NavBar/CartWidget';
import './components/ItemListContainer/ItemList';
import './components/ItemListContainer/Item';
import './components/ItemListContainer/ItemListContainer';
import './components/Cart/CartItem';
import './components/Cart/CheckoutForm';
/*import { NavBar } from './components/NavBar/NavBar';*/
/*import {BrowserRouter, Routes, Route} from 'react-router-dom';*/
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import ItemDetail from './components/ItemDetailContainer/ItemCount';
import Cart from './components/Cart/CartItem';
import cart from './components/Cart/CheckoutForm';
import { CartProvider } from './context/CartContext';
import { ProductProvaider } from './Context/ProductContext';




 function App() {
  
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path ='/' element={<Item />} />
      <Route exact path ='/ maquillaje' element={<Item />} />
      <Route exact path ='/ accesorios' element={<Item  />} />
      <Route exact path ='/ perfumes' element={<Item  />} />
      <Route exact path="/product/:name" element={<ItemDetail />} />
      <Route exact path="/cart" element={<CartItem />} />
      <Route exact path="/product/:checkout" element={<CheckoutForm />} />
      <Route exact path ='*' element={<h1>404 not found </h1>} />
    </Routes>
    </BrowserRouter>
    <CartProvider>
      <CartWidget/>
      </CartProvider>
    </>
  )
}

export default App
