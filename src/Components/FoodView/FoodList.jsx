import React, { useState, useEffect } from 'react';
import QueryString from 'qs';
import axios from 'axios';

export default function FoodList(props) {
  const [item, setItem] = useState([{ itemCode: '', quantity: '', uid: '' }]);

  const addToCart = (code, qty) => {
    const uid = parseInt(localStorage.getItem('userId'));
    setItem({ itemCode: code, quantity: qty, uid: uid });
    if (item.itemCode != null) {
      axios
        .post(
          'http://localhost:8080/api/v1/user-cart/new-item',
          item
          // {
          //   ...config,
          // }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.responseCode === 1) {
            alert('Added to cart');
          }
        })
        .catch(err => {
          console.log('Error ' + err);
        });
    }
  };
  return (
    <div className='col-lg-6 menu-item'>
      <div className='menu-content'>
        <a onClick={() => addToCart(props.code, 1)}>{props.item}</a>
        <span>Rs. {props.price}</span>
      </div>
      <div className='menu-ingredients'>
        {props.description}
        {'          '}
      </div>
    </div>
  );
}
