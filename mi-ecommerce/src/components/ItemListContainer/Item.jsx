import React from 'react';
import {Link,useState, useEffect, useParams} from 'react-router-dom';
import { getSingleProduct } from '../../firebase/firebase';



export default function Item(){
  
  const [singleProd, setSingleProd] = useState(null)
  /*const {id} = useParams();*/

  
  useEffect(() => {
  getSingleProducts()
  .then((product) => {
  setSingleProd(product);
   })
   .catch ((error) => {
    console.error('Error', error);
  });
  }, []); 
  

 
    return (
      <>
      <div className="card">
      <h3>{product.name} - {product.id}</h3>
      <img src={product.img} alt={product.name} />
      <p class = "text">${product.price}</p>
      <button className="btn ">
      <Link to={`/product/${product.id}`}>Ver Mas Detalles</Link>
      </button>
  </div>
  </>
    );
  };
  

