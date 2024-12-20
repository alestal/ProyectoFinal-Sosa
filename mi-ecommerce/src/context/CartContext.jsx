import { createContext, useState } from "react";

export const CartContext = createContext (false);


export function CartProvider ({children}){
    const [cart, setCart]= useState([]);


const addItem =  (item) => {
    setCart ([...cart, item]);
};

const removeItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId)); 
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0); }; 
  
  const clearCart = () => {
    setCart([]); 
  };


return(
    <CartContext.Provider  value = {[cart,setCart,addItem, removeItem,calculateTotal, clearCart]}>
    {children}
    </CartContext.Provider>
);
}