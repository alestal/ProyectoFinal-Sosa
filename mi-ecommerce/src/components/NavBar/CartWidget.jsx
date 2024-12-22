/*import React from 'react'*/
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export default function CartWidget (){

    return (
      
      <>
     <button>🛒</button>
      <p>{cart.length}</p>
   
      </>  
    )
}
 