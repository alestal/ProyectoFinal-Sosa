import React from 'react';
import {Link,useState, useEffect, useParams} from 'react-router-dom';
import { getSingleProduct } from '../../firebase/firebase';



export default function Item(){
  
  const [singleProd, setSingleProd] = useState(null)
  const {id} = useParams();

  
  useEffect(() => {
  getSingleProducts(id)
  .then((product) => {
  setSingleProd(product);
   })
   .catch ((error) => {
    console.error('Error', error);
  });
  }, [id]); 
  
 /* getSingleProduct(id).then((product) => setSingleProd(product)); */
 
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
  

