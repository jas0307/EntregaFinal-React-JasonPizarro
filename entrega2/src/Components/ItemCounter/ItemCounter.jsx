import React, { useState } from 'react';

const ItemCounter = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
    

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleAddToCart = () => {
    if (count > 0) {
      onAdd(count);
    }
  };
 

  return (
    <div>
      
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
      
      
    </div>
  );
};

export default ItemCounter;
