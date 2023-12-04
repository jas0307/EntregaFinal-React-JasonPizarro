import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCounter from '../ItemCounter/ItemCounter';
import { useState } from 'react';

const ItemDetail = ({item}) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  
  const handleAddToCart = (quantity) => {
    // Validar que la cantidad no supere el stock máximo
    const newCartQuantity = cartQuantity + quantity;
    if (newCartQuantity <= item.stock) {
      setCartQuantity(newCartQuantity);
      console.log(`Agregado al carrito: ${quantity} unidades`);
    } else {
      console.log(`No se pueden agregar más unidades al carrito. Stock máximo alcanzado.`);
    }
  };
   
  const handleEmptyCart = () => {
    setCartQuantity(0);
    console.log('Carrito vaciado');
  };

  return (
<div className='detailcontainer'>
    <Card style={{ width: '38rem' }}>
    <Card.Img variant="top" src={item.image} alt={item.name}  />    
  </Card>

<div className="card2" style={{ width: '38rem' }}>
<Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <h4>{item.marca}</h4>
      <Card.Text>{item.descripcion}
      </Card.Text>
      <h2>$ {item.precio}</h2>
      <h3>Stock: {item.stock}</h3>
    </Card.Body>    
    </div>
    <div className='counter'>
    <ItemCounter className='counter' stock={item.stock} initial= {1} onAdd={handleAddToCart} />
    <p>Cantidad en carrito: {cartQuantity}</p>
    <button onClick={handleEmptyCart}>Vaciar Carrito</button></div>
    </div>
    
  
  )
}

export default ItemDetail