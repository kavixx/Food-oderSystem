import React, { Component } from 'react';
import './main.css';
import bg from '../../Images/logo.png';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false,
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    try {
      axios({
        method: 'POST',
        baseURL: 'http://localhost:8080/api/v1/authentication/authenticate',
        data: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            localStorage.setItem('token', res.data.jwt);
            this.setState({ redirect: true });
            this.onRedirect();
            console.log('redirect' + this.state.redirect);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  onRedirect = () => {
    if (this.state.redirect === true) {
      return <Redirect to='/home' />;
    }
  };

  render() {
    return (
      <div className='limiter'>
        <div className='container-login100'>
          <div className='wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55'>
            <form
              className='login100-form validate-form flex-sb flex-w'
              onSubmit={this.onSubmitHandler}
            >
              <span className='login100-form-title p-b-32'>
                <img src={bg} />
                <br />
                Welcome
              </span>
              <div
                className='wrap-input100 validate-input m-b-36 glow'
                data-validate='Username is required'
              >
                <input
                  className='form-input'
                  type='text'
                  name='username'
                  placeholder='Username'
                  onChange={this.onChangeHandler}
                  value={this.state.username}
                />
                <span className='focus-input100' />
              </div>
              <div
                className='wrap-input100 validate-input m-b-12 glow'
                data-validate='Password is required'
              >
                <input
                  className='form-input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={this.onChangeHandler}
                  value={this.state.password}
                />
                <span className='focus-input100' />
              </div>
              <div className='flex-sb-m w-full p-b-48'>
                <div className='contact100-form-checkbox'>
                  <input
                    className='input-checkbox100'
                    id='ckb1'
                    type='checkbox'
                    name='remember-me'
                  />
                  <label className='label-checkbox100' htmlFor='ckb1'>
                    <h5 style={{ fontSize: '15px' }}>Remember me</h5>
                  </label>
                </div>
                <div>
                  <a href='/home' className='txt3' style={{ fontSize: '17px' }}>
                    Forgot Password?
                  </a>
                </div>
              </div>
              <span className='txt1 p-b-11 error-txt'></span>
              <div className='container-login100-form-btn'>
                <button type='submit' className='login100-form-btn'>
                  Login
                </button>
              </div>
              <div className='txt3' style={{ marginTop: '20px' }}>
                New to Urban Smokehouse?{' '}
                <a
                  href='/signup'
                  className='txt3'
                  style={{ color: '#006400', fontWeight: '500' }}
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
