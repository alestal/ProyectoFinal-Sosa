import React from 'react';
import {Link, useEffect} from 'react-router-dom';
import { getSingleProduct } from '../../firebase/firebase';
import Item from "./Item";

export default function Item(){

  getSingleProduct(id).then((product) => setSingleProd(product)); 
 
  useEffect(() => {
}, []);

  
    return (
      <>
      <div className="item-card">
      <h3>{product.name} - {product.id}</h3>
      <img src={product.img} alt={product.name} />
      <p>${product.price}</p>
      <button className="detalles">
      <Link to={`/product/${product.id}`}>Ver Mas Detalles</Link>
      </button>
  </div>
  </>
    );
  };
  

