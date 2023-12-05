import React, { useState } from 'react';

const ItemCounter = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
    

  const btnIncrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const btnDecrementar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const addCarrito = () => {
    if (count > 0) {
      onAdd(count);
    }
  };
 

  return (
    <div>
      
      <button onClick={btnDecrementar}>-</button>
      <span>{count}</span>
      <button onClick={btnIncrementar}>+</button>
      <button onClick={addCarrito }>Agregar al carrito</button>
      
      
    </div>
  );
};

export default ItemCounter;
