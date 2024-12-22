import React, { useState } from 'react';

const ItemCount = ({ onAdd, product }) => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    
    onAdd({ ...product, quantity });
};

return (
  <div className="item-count">
    <div className="quantity-controls">
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
    <button onClick={handleAdd}>
      Agregar al Carrito
    </button>
  </div>
);
};

export default ItemCount;