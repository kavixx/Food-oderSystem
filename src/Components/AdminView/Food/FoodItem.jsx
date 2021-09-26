import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FoodView from './FoodView';
import Sidebar from '../Sidebar/Sidebar';
export default class FoodItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Sidebar />
        <div style={{ marginLeft: '1.5vw' }}>
          <div style={{ marginBottom: '10px' }}>
            <Link
              className='btn-primary'
              to={'addFood/'}
              style={{
                border: 'solid 1px',
                padding: '5px 5px 5px 5px',
                marginBottom: '5px',
                textDecoration: 'none',
              }}
            >
              Add New Food{' '}
            </Link>
          </div>
        </div>
        <FoodView />
      </>
    );
  }
}
