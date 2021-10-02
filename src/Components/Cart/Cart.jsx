import React, { useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { MdDelete, MdShoppingCart } from 'react-icons/md';
import ReactDOM from 'react-dom';
window.React = React;
window.ReactDOM = ReactDOM;
const PayPalButton = window.paypal.Buttons.driver('react', {
  React,
  ReactDOM,
});
export default function Cart() {
  const id = parseInt(localStorage.getItem('userId'));
  const [cart, setCart] = useState([]);
  const [detail, setDetail] = useState([]);
  const [payMethod, setPayMethod] = useState('online');
  const [delMethod, SetdelMethod] = useState('courier');

  useEffect(() => {
    axios
      .post('http://urbansmokehouse.online:8080/api/v1/user-cart/get-cart', {
        id: id,
      })
      .then(res => {
        if (res.status === 200) {
          setCart(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getTotal();
  }, [cart]);

  const getTotal = () => {
    let result = cart.map(item => item.price);
    let sum = 0;
    let items = result.length;
    for (let i = 0; i < result.length; i++) {
      sum += result[i];
    }
    let tax = (sum * 0.1).toFixed(2);
    setDetail([
      {
        total: sum,
        Tax: tax,
        itemQty: items,
      },
    ]);
  };

  const removeItem = id => {
    axios
      .delete(
        'http://urbansmokehouse.online:8080/api/v1/user-cart/delete-cart',
        { id: id }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const changeHandle = e => {
    const target = e.target;
    if (target.checked) {
      setPayMethod(target.value);
    }
    console.log('pay ' + payMethod);
    console.log('del ' + delMethod);
  };
  const changeHandler = e => {
    const target = e.target;
    if (target.checked) {
      SetdelMethod(target.value);
    }
    console.log('pay ' + payMethod);
    console.log('del ' + delMethod);
  };

  const setOrder = () => {
    const delvMethod = delMethod;
    const status = payMethod;
    const id = parseInt(localStorage.getItem('userId'));
    axios
      .post('http://urbansmokehouse.online:8080/api/v1/order/new-order', {
        deliveryMethod: delvMethod,
        id: id,
        status: status,
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '0.1',
          },
        },
      ],
    });
    setOrder();
  };
  const onApprove = (data, actions) => {
    return actions.order.capture();
    setOrder();
  };
  return (
    <>
      {cart.length != 0 ? (
        <div className='container cart'>
          <div className='contentbar'>
            {/* Start row */}
            <div className='row'>
              {/* Start col */}
              <div className='col-md-12 col-lg-12 col-xl-12'>
                <div className='card m-b-30'>
                  <div className='card-header'>
                    <h5 className='card-title'>Cart {<MdShoppingCart />}</h5>
                  </div>
                  <div className='card-body'>
                    <div className='row justify-content-center'>
                      <div className='col-lg-10 col-xl-8'>
                        <div className='cart-container'>
                          <div className='cart-head'>
                            <div className='table-responsive'>
                              <table className='table table-borderless'>
                                <thead>
                                  <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Action</th>
                                    <th scope='col'>Product</th>
                                    <th scope='col'>Qty</th>
                                    <th scope='col'>Price</th>
                                    <th scope='col' className='text-right'>
                                      Total
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {cart.map(item => (
                                    <tr key={item.cartId}>
                                      <td scope='row'>{item.cartId}</td>
                                      <td>
                                        <Button
                                          variant='danger'
                                          size='sm'
                                          onClick={() =>
                                            removeItem(item.cartId)
                                          }
                                        >
                                          {<MdDelete />}
                                        </Button>
                                      </td>
                                      <td>{item.itemName}</td>
                                      <td>
                                        <div className='form-group mb-0'>
                                          <input
                                            type='number'
                                            className='form-control cart-qty'
                                            name='cartQty1'
                                            id='cartQty1'
                                            min='1'
                                            defaultValue={item.quantity}
                                          />
                                        </div>
                                      </td>
                                      <td>Rs.{item.price}</td>
                                      <td>Rs.{item.totalPrice}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className='cart-body'>
                            <div className='row'>
                              <div className='col-md-12 order-2 order-lg-1 col-lg-5 col-xl-6'>
                                <div className='order-note mt-2'>
                                  <form>
                                    <div
                                      class='btn-group'
                                      role='group'
                                      aria-label='Basic radio toggle button group'
                                      style={{ marginTop: '0.5vw' }}
                                    >
                                      <label
                                        style={{
                                          marginRight: '1vw',
                                          fontWeight: '600',
                                        }}
                                      >
                                        Payment Method:
                                      </label>
                                      <input
                                        type='radio'
                                        class='btn-check'
                                        name='btnradio'
                                        id='btnradio2'
                                        value='online'
                                        onChange={changeHandle}
                                        checked={payMethod === 'online'}
                                      />
                                      <label
                                        class='btn btn-outline-primary'
                                        for='btnradio2'
                                      >
                                        Online
                                      </label>
                                      <input
                                        type='radio'
                                        class='btn-check '
                                        name='btnradio'
                                        id='btnradio1'
                                        checked={payMethod === 'cash'}
                                        value='cash'
                                        onChange={changeHandle}
                                      />
                                      <label
                                        class='btn btn-outline-primary'
                                        for='btnradio1'
                                      >
                                        Cash on Delivery
                                      </label>
                                    </div>
                                    <div
                                      className='form-group'
                                      style={{ marginTop: '0.5vw' }}
                                    >
                                      {payMethod === 'online' ? (
                                        ''
                                      ) : (
                                        <div
                                          class='btn-group'
                                          role='group'
                                          aria-label='Basic radio toggle button group'
                                          style={{ marginTop: '0.5vw' }}
                                        >
                                          <label
                                            style={{
                                              marginRight: '1vw',
                                              fontWeight: '600',
                                            }}
                                          >
                                            Delivery Method:
                                          </label>
                                          <input
                                            type='radio'
                                            class='btn-check '
                                            name='btnRadio'
                                            id='btnradio3'
                                            checked={delMethod === 'pick'}
                                            value='pick'
                                            onChange={changeHandler}
                                          />
                                          <label
                                            class='btn btn-outline-primary'
                                            for='btnradio3'
                                          >
                                            Courier
                                          </label>
                                          <input
                                            type='radio'
                                            class='btn-check'
                                            name='btnRadio'
                                            id='btnradio4'
                                            checked={delMethod === 'courier'}
                                            value='courier'
                                            onChange={changeHandler}
                                          />
                                          <label
                                            class='btn btn-outline-primary'
                                            for='btnradio4'
                                          >
                                            Pick
                                          </label>
                                        </div>
                                      )}
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div
                                className='col-md-12 order-1 order-lg-2 col-lg-7 col-xl-6'
                                style={{ paddingLeft: '6vw', marginTop: '1vh' }}
                              >
                                <div className='order-total table-responsive '>
                                  <table className='table table-borderless text-right'>
                                    <tbody>
                                      {detail.map(item => (
                                        <ul
                                          key={Math.random()}
                                          style={{ listStyle: 'none' }}
                                        >
                                          <li>
                                            <span style={{ fontWeight: '600' }}>
                                              Food items :
                                            </span>{' '}
                                            {item.itemQty}
                                          </li>
                                          <li>
                                            <span style={{ fontWeight: '600' }}>
                                              Tax(10%) :
                                            </span>{' '}
                                            Rs.{item.Tax}
                                          </li>
                                          <li>
                                            <span style={{ fontWeight: '700' }}>
                                              Total:
                                            </span>{' '}
                                            Rs.{item.total}
                                          </li>
                                        </ul>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className='cart-footer btn-cart mt-3'>
                      <Button className='btn-clear'>Clear cart</Button>
                    </div> */}
                          <div className='mt-3'>
                            {payMethod === 'online' ? (
                              <PayPalButton
                                createOrder={(data, actions) =>
                                  createOrder(data, actions)
                                }
                                onApprove={(data, actions) =>
                                  onApprove(data, actions)
                                }
                              />
                            ) : (
                              <Button
                                style={{
                                  width: '43vw',
                                  marginLeft: '1vw',
                                  height: '8vh',
                                  backgroundColor: '#FFB03B',
                                }}
                                onClick={() => setOrder()}
                              >
                                Oder
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End col */}
            </div>
            {/* End row */}
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
