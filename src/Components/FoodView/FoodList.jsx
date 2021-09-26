import { React, useContext } from 'react';
import axios from 'axios';
import config from '../../config';
import { CartContext } from '../../context';

export default function FoodList(props) {
  const value = useContext(CartContext);
  return (
    <div className='col-lg-6 menu-item'>
      <div className='menu-content'>
        <a onClick={() => value.addCart(props.code)}>{props.item}</a>
        <span>Rs. {props.price}</span>
      </div>
      <div className='menu-ingredients'>
        {props.description}
        {'          '}
      </div>
    </div>
  );
}
