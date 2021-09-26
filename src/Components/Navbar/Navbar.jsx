import React, { useContext } from 'react';
import '../style.css';
import { GiShoppingCart } from 'react-icons/gi';
import { CartContext } from '../../context';

function Navbar(props) {
  const { cart } = useContext(CartContext);
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <a
          className='navbar-brand'
          href='/home'
          style={{ fontFamily: 'Limelight', fontWeight: '500' }}
        >
          Urban <span style={{ color: '#ffb03b' }}>Smokehouse</span>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='/home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/partyRooms'>
                Party Rooms
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/chef'>
                Chef Hire
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/cart'>
                <GiShoppingCart
                  style={{
                    marginBottom: '5px',
                    fontSize: '22px',
                    marginLeft: '5px',
                    color: '#fff',
                    zIndex: '200',
                  }}
                />
                <span
                  className='badge badge-warning'
                  id='lblCartCount'
                  style={{
                    fontSize: '12px',
                    background: '#ff0000',
                    color: '#fff',
                    padding: '0 5px',
                    verticalAlign: 'top',
                    marginLeft: '-10px',
                  }}
                >
                  {cart.length == null ? 0 : cart.length}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
