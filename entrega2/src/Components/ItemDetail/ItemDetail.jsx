import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()
  const onAdd = (quantity) =>{
   setGoToCart(true);
   addProduct(item, quantity);
  }

  return (
<div className='detailcontainer'>
    <Card style={{ width: '38rem' }}>
    <Card.Img variant="top" src={item.image} alt={item.name}  />    
  </Card>
<div className="card2" style={{ width: '38rem' }}>
<Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <h4>{item.brand}</h4>
      <Card.Text>{item.description}
      </Card.Text>
      <h2>$ {item.price}</h2>
      <h3>Stock: {item.stock}</h3>
    </Card.Body>    
    </div>
    <div className='counter'> 
    {goToCart ? <Link to='/cart'>Terminar compra</Link> :<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}</div>
    </div>
    
  
  )
}

export default ItemDetail