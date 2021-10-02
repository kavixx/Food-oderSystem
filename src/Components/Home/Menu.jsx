import React from 'react';
import '../style.css';
import OrderSec from './OrderSec';

function Menu() {
  return (
    <>
      <section className='home-menu'>
        <div className='container'>
          <div className='row first'>
            <div
              className='col-12 col-sm-5 col-lg-6 new'
              style={{ height: '250px' }}
            >
              <p>submarines</p>
              <a href='/food/SUBMARINES'>
                Check out
                <i className='icofont-arrow' />
              </a>
            </div>
            <div
              className='col-12 col-sm-5 col-lg-4 search'
              style={{ height: '250px' }}
            >
              <p>Burgers</p>
              <a href='/food/BURGERS'>Check out</a>
            </div>
          </div>
          <div className='row second'>
            <div className='col-12 col-sm-3 order' style={{ height: '250px' }}>
              <p>waffels</p>
              <a href='/food/WAFFLES'>Check out</a>
            </div>
            <div
              className='col-12 col-sm-3 food-one'
              style={{ height: '250px' }}
            >
              <p>appetizers</p>
              <a href='/food/APPERTIZERS'>Check out</a>
            </div>
            <div
              className='col-12 col-sm-3 food-two'
              style={{ height: '250px' }}
            >
              <p>beverages</p>
              <a href='/food/BEVARAGES'>Check out</a>
            </div>
          </div>
        </div>
      </section>
      <OrderSec />
    </>
  );
}
export default Menu;
