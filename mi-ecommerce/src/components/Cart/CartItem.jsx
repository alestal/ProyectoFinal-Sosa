import React, {useState,useContext} from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { sendOrder } from '../../firebase/firebase';

const CartItem = ({ product }) => {
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

export default function AddOrders() {
    const [orderId, setOrderId] = useState(null);
    const { cart } = useContext(CartContext);


  
        const handleClick = async () => {
            const newOrder = {

        buyer: {
                    email: "ejemplo@ejemplo",
                    name: "Nombre Completo",
                    phone:"12345678",
                }, 
                
            
                date: new Date(),
                items: cart.map( product=> ({ 
                         id: product.id,
                          name: product.name,
                          price:product.price,
              })),
                          
           total: cart.reduce((total, product) => total + product.price, 0),
              };
    
          
           sendOrder(newOrder).then((id) => setOrderId(id));
        
        };
            
         return(
            <>

            <h3>Realizar la orden del pedido</h3>
            <button onClick={handleClick}>Enviar la orden del Pedido</button>
            {orderId && <p>Su orden se genero con el :{orderID}</p>}
            {cart.map((product) => (<CartItem key={product.id} product={product} />
            ))};
            </>


        );
    }






