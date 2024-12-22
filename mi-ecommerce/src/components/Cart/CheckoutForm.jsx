import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { sendOrder } from '../firebase/firebase';

const CheckoutForm = () => {
    const { cart, clearCart, calculateTotal } = useContext(CartContext);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: ''
    });
    const [orderCompleted, setOrderCompleted] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cart.length === 0) {
          alert('El carrito está vacío');
          return;
        }
    
        const orderItems = cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          img: item.img,
        }));
    
        const order = {
          buyer: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          },
          items: orderItems,
          totalPrice: calculateTotal(),
          date: new Date().toISOString(),

        };

        try {const orderId = await sendOrder(order);
            alert(`Tu pedido ha sido procesado. ID de la orden: ${orderId}`);
            clearCart();
            setOrderCompleted(true);
        } catch (error) {
          console.error('Error al procesar la compra: ', error);
        }
    };
  
    return (
        <>
      <div>
        {orderCompleted ? (
          <div>
            <h2>Gracias por tu compra!!! Tu pedido fue realizado con exito {formData.name}!</h2>
        </div>
        ) : (
          <div>
            <h2>Formulario de Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nombre Completo:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Correo Electrónico:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Teléfono:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Finalizar Compra</button>
            </form>
          </div>
        )}
      </div>
      </>
    );
  };
  
  export default CheckoutForm;