import React from 'react';
import {Link} from 'react-router-dom';



const Item = ({product}) => {
  return (
    <>
    <div className="item-card">
    <h3>{product.name} - {product.id}</h3>
    <img src={product.img} alt={product.name} />
    <p>${product.price}</p>
    <button className=" ver mas detalles">
    <Link to={`/product/${product.id}`}>Ver Mas Detalles</Link>
    </button>
</div>
</>
  );
};

export default Item;