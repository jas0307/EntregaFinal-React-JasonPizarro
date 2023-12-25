import React from 'react';
import { useCartContext } from '../Context/CartContext';
import Button from 'react-bootstrap/esm/Button';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
<div className="contcart">
<div className="contxt">
          <h3>Producto: {product.name}</h3>
          <h5 >Cantidad: {product.quantity}</h5>
          <h5 >Precio unidad: ${product.price}</h5>
          <h5 >Subtotal: ${product.quantity * product.price}</h5>
  </div>
  <div className="conimage">
  <img className="conimage" src={product.image} alt={product.image} />
  </div>
  <div className="conbtn">
  <Button  className="conbtn" variant="danger" onClick={() => removeProduct(product.id)}>Eliminar</Button>
  </div>
      
     
    </div>
      

  
    );
};

export default ItemCart;
