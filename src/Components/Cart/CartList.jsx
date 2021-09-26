import React, { useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../../context';

const CartList = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      {console.log(cart)}
      {cart.map(item => (
        <div className='col-lg-6 menu-item' key={item.code}>
          <div className='menu-content'>
            <a>{item.item}</a>
            <span>Rs. {item.price}</span>
          </div>
          <div className='menu-ingredients'>
            {item.description}
            {'          '}
          </div>
        </div>
      ))}
    </>
  );
};
export default CartList;
