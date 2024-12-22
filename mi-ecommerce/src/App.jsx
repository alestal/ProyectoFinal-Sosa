import { useState } from 'react';
import './App.css';
import {NavBar} from'./components/NavBar/NavBar';
import {CartWidget} from './components/NavBar/CartWidget';
import ItemList from'./components/ItemListContainer/ItemList';;
import Item from './components/ItemListContainer/Item'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartItem from './components/Cart/CartItem';
import  CheckoutForm from './components/Cart/CheckoutForm'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import ItemCount from './components/ItemDetailContainer/ItemCount'
/*import { ProductProvaider} from './context/ProductContext';*/
/*import { CartProvider } from './context/CartContext';*/
import firebase from './firebase/firebase'
import { CartContext } from './context/CartContext';



 function App() {
  
  return (
    <>
 <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
   
      <Route exact path ='/' element={<ItemListContainer />} />
      <Route exact path ='/ maquillaje' element={<ItemListContainer category='maquillaje' />} />
      <Route exact path ='/ accesorios' element={<ItemListContainer category='accesorios' />} />
      <Route exact path ='/ perfumes' element={<ItemListContainer category='perfumes' />} />
      <Route exact path="/product/:name" element={<ItemDetail />} />
      <Route exact path="/cart" element={<CartItem />} />
      <Route exact path="/checkoutform" element={<CheckoutForm />} />
      <Route exact path ='*' element={<h1>404 not found </h1>} />
       
    </Routes>
          <CartWidget />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
    </>
  )
}

export default App
