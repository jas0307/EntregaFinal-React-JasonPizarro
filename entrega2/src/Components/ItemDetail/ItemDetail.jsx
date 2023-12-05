import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCounter from '../ItemCounter/ItemCounter';
import { useState } from 'react';

const ItemDetail = ({item}) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [maximo,setMaximo] = useState(false);
  const handleAddToCart = (quantity) => {
   
    const newCartQuantity = cartQuantity + quantity;
    if (newCartQuantity <= item.stock) {
      setCartQuantity(newCartQuantity);   
        
    } else {
      
     setMaximo("Alcanzo maximo de productos")
    
    }
  };
   
  const handleEmptyCart = () => {
    setCartQuantity(0);
    setMaximo(false)
    
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
    <p>{maximo}</p>
    <button onClick={handleEmptyCart}>Vaciar Carrito</button></div>
    </div>
    
  
  )
}

export default ItemDetail