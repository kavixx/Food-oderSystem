import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Chef from './Chef/ChefView';
import ChefForm from './Chef/ChefForm';
import FoodItem from './Food/FoodItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PartyRoomForm from './PartyRoom/PartyRoomForm';
import PartyRoom from './PartyRoom/PartyRoom';
import FoodForm from './Food/FoodForm';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <Router>
          <Switch></Switch>
        </Router>
      </>
    );
  }
}
