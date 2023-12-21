import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({item}) => {
  return (

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} alt={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <h6>{item.brand}</h6>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
          $ {item.price}
        </Card.Text>
        <Link to= {"/item/" + item.id} > <Button variant="primary">Ver detalles</Button> </Link>
      </Card.Body>      
    </Card>   

  )
}

export default Item