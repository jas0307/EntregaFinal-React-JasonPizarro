

import  cart2  from "./cart.png"


import {useCartContext} from '../Context/CartContext';

const CartWidget = () => {
  const {totalProducts, cart} = useCartContext();
  return (
    
      <button>
        
      <img src={cart2}  alt="cart" width="80px"/>
        <span className="position-absolute   translate-middle badge rounded-pill bg-danger">{totalProducts() ||cart}</span>
      </button>
   
  );
};

export default CartWidget;
