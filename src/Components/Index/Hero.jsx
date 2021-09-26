import React from 'react';
import Intro from '../../Images/intro.mp4';
import logo from '../../Images/logo.png';
import './Index.css';
import { IoFastFoodOutline } from 'react-icons/io5';

function Hero() {
  return (
    <header>
      <div className='overlay' />
      <video
        playsInline='playsinline'
        autoPlay='autoplay'
        muted='muted'
        loop='loop'
        src={Intro}
        type='video/mp4'
      ></video>
      <div className='container h-100'>
        <div className='d-flex h-100 text-center align-items-center'>
          <div className='w-100 text-white'>
            <div className='back'>
              <img alt='icon' src={logo} />
              <h1 className='display-3 shadow'>
                <span>URBAN</span> SMOKEHOUSE
              </h1>
              <p className='lead mb-0 shadow letter'>
                <strong>EVERY MEAL IS A HAPPY MEAL</strong>
              </p>
              <br />
              <a href='/login'>
                ORDER ONLINE{' '}
                <IoFastFoodOutline
                  style={{ marginBottom: '7px', fontSize: '22px' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
