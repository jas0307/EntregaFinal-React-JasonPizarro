import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCounter from '../ItemCounter/ItemCounter';

const Item = ({item}) => {
  return (

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <h6>{item.marca}</h6>
        <Card.Text>
          {item.descripcion}
        </Card.Text>
        <Card.Text>
          $ {item.precio}
        </Card.Text>
        <Link to= {"/item/" + item.id} > <Button variant="primary">Ver detalles</Button> </Link>
      </Card.Body>      
    </Card>   

  )
}

export default Item