import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterest } from 'react-icons/fa';
import './style.css';

function Footer() {
  return (
    <footer id='footer'>
      <div className='container'>
        <h1>
          Urban <span>Smokehouse</span>
        </h1>
        <p>EVERY MEAL IS A HAPPY MEAL</p>
        <div className='social-links'>
          <a href='' className='facebook'>
            <FaFacebookF />
          </a>
          <a href='' className='instagram'>
            <FaInstagram style={{ marginBottom: '2px', fontSize: '20px' }} />
          </a>
          <a href='' className='google-plus'>
            <FaPinterest />
          </a>
        </div>
        <div className='copyright'>
          © Copyright <span>UrbansmokeHouse</span>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
export default Footer;
