import React, { useEffect, useState } from 'react';
import '../style.css';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar(props) {
  const [length, setLength] = useState([]);
  const id = parseInt(localStorage.getItem('userId'));
  useEffect(() => {
    axios
      .post('http://urbansmokehouse.online:8080/api/v1/user-cart/get-cart', {
        id: id,
      })
      .then(res => {
        if (res.status === 200) {
          setLength(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
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
              <Link className='nav-link' to='/home'>
                Home
              </Link>
              {/* <a aria-current='page' href=''>
                Home
              </a> */}
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/home/partyRooms'>
                Party Rooms
              </Link>
              {/* <a className='nav-link' to='/home/partyRooms'>
                Party Rooms
              </a> */}
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/home/chefHire'>
                Chef Hire
              </Link>
              {/* <a className='nav-link' href='/home/chefHire'>
                Chef Hire
              </a> */}
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/home/partyRooms'>
                Party Rooms
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/home/cart'>
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
                    fontSize: '13px',
                    background: '#ff0000',
                    color: '#fff',
                    padding: '0 6px',
                    verticalAlign: 'top',
                    marginLeft: '-10px',
                  }}
                >
                  {length.length}
                </span>
              </Link>
            </li>
            {/* <a className='nav-link' href='/home/cart'>
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
              </a> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
