import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function OrderConfirm() {
  const [order, setOrder] = useState([]);
  const id = parseInt(localStorage.getItem('userId'));
  useEffect(() => {
    axios
      .post('http://urbansmokehouse.online:8080/api/v1/order/find-order', {
        id: id,
      })
      .then(res => {
        console.log(res);
        setOrder(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div
        className='Container'
        style={{
          border: '1px solid black',
          margin: '12vh 5vw 5vh 5vw',
        }}
      >
        <div className='card text-center'>
          <div className='card-header'>
            <h1 className='text-center' style={{ fontWeight: '700' }}>
              Thank for your order!
            </h1>
            <h5 className='text-center'>
              We are procceing your order now, here are the details
            </h5>
          </div>
          <div className='card-body '>
            {order.map(item => (
              <div key={Math.random()}>
                <div className='row'>{}</div>
                <div className='row'>{}</div>
                <div className='row'>{}</div>
                <div className='row'>{}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
