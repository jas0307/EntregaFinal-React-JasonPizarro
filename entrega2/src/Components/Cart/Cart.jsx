import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import Button from 'react-bootstrap/esm/Button';


const Cart = () => {
  const { cart, totalPrice } = useCartContext();
 
  if (cart.length === 0) {
    return (
      <><div className="text-center">
        <br></br>
        <p >No hay productos en el carro</p>
        <Link to="/"><Button variant="secondary">Comprar</Button> </Link></div>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className='contcart'>
      <h4 className='contxt'>Total: $ {totalPrice()}</h4>
   
      <Link to="/checkout">
        {' '}
        <Button variant="success" >Finalizar Compra</Button>
      </Link>
      </div>
    </>
  );
};

export default Cart;
