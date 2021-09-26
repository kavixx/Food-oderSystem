import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import CartList from './CartList';

export default function Cart() {
  return (
    <>
      <Navbar />
      <CartList />
      <Footer />
    </>
  );
}
