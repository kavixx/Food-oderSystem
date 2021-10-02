import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import Menu from './Menu';
import Cart from '../Cart/Cart';
import Chef from '../Chef/Chef';
import PartyRooms from '../PartyRooms/PartyRooms';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderConfirm from '../OderConfirm/OrderConfirm';

const Home = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/home' component={Menu} />
          <Route path='/home/cart' component={Cart} />
          <Route path='/home/chefHire' component={Chef} />
          <Route path='/home/partyRooms' component={PartyRooms} />
          <Route path='/home/orderStatus' component={OrderConfirm} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};
export default Home;
