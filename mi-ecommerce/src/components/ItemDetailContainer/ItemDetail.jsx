import React from 'react';
import {useParams} from 'react-router-dom';
import { useState,useEffect } from "react";
import { getProducts} from '../../firebase/firebase';
import{  getSingleProduct} from'../../firebase/firebase';
import{  filterProductsByCategory} from '../../firebase/firebase';
import ItemCount from './ItemCount';


const ItemDetail = () => {
  const {name} = useParams ();
  const [product,setProduct] = useState ({});
  
useEffect( ()=> {
setProduct(getProduct(name));
}, []);

  return (
<>
    <h1>Detalles del Producto</h1>
    <h2>Nombre:{product.name}</h2>
    <p>ID: {product.id}</p>
    <img>src = {product.img} alt='productos de la perfumeria'</img>
    <p>Descripcion: {product.description}</p>
    <p>Categoria: {product.category}</p>
    <p>Precio ${product.price}</p>
    <button>COMPRAR</button>
 </>
  );
}

  

export default ItemDetail




   