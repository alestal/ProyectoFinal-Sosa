import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({product})  => {

   const[, , ,removeItem] = useContext(CartContext);

   const handleRemove = () => {
    removeItem ( product.id );
   };

   return (
    <div className="cart-item">
      <img src={product.img} alt={product.name} />
      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <p>Precio: ${product.price}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Total: ${product.price * product.quantity}</p>
        <button onClick={handleRemove}>Eliminar</button>
      </div>
    </div>
  );

};

export default CartItem;