import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import config from './config';

export const CartContext = createContext();
export function CartProvider(props) {
  const [food, setFood] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    try {
      axios
        .get('http://localhost:8080/api/v1/food-item/find-items', { ...config })
        .then(res => {
          setFood(res.data);
        })
        .catch(err => {});
    } catch (e) {
      throw e;
    }
    console.log(food);
  }, []);

  const addCart = id => {
    const data = food.filter(item => {
      return item.code === id;
    });
    setCart(addCart => [...cart, data]);
    console.log(cart);
  };

  return (
    <CartContext.Provider value={{ cart, addCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
