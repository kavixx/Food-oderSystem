import React from 'react';
import mobile from '../../Images/mobile.png';
import './Index.css';

function SectionApp() {
  return (
    <section id='mobile'>
      <div className='container-fluid content'>
        <div className='row'>
          <div className='col-sm-4 mob'>
            <img src={mobile} className='img-fluid' />
          </div>
          <div className='col-sm-8 col mob-desc'>
            <h1 className>GET MOBILE APP | SAVE TIME</h1>
            <p className='text-justify'>
              Millions of customers around the world use us for one simple
              reason, it’s simple. Just an email address and password will get
              you through to checkout before you can reach for your wallet.
            </p>
            <a href=''>Pay online</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionApp;
