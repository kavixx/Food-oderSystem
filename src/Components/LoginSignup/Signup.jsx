import React, { Component } from 'react';
import './main.css';
import bg from '../../Images/logo.png';
import axios from 'axios';
import QueryString from 'qs';
import { Route } from 'react-router';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      mobile: '',
      type: 'user',
      password: '',
      username: '',
    };
    this.valueChange = this.valueChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  formReset = () => {
    this.setState({
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      mobile: '',
      password: '',
      username: '',
    });
  };
  submit = e => {
    e.preventDefault();
    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      address: this.state.address,
      email: this.state.email,
      mobile: parseInt(this.state.mobile),
      type: this.state.type,
      password: this.state.password,
      username: this.state.username,
    };
    console.log(user);
    try {
      axios
        .post(
          'http://localhost:8080/api/v1/users/new-user',
          QueryString.stringify(user)
        )
        .then(res => {
          if (res.status === 200) {
            alert('Your registration successfully');
            this.formReset();
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      throw err;
    }
  };

  valueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { firstname, lastname, address, email, mobile, password, username } =
      this.state;
    return (
      <div className='limiter'>
        <div className='container-login100'>
          <div className='wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55'>
            <form
              className='login100-form validate-form flex-sb flex-w'
              onSubmit={this.submit}
            >
              <span className='login100-form-title p-b-32'>
                <img className='img-fluid' src={bg} />
                <br />
                <h3>SIGNUP HERE</h3>
              </span>
              <div
                className='form-input validate-input m-b-36 glow'
                data-validate='Firstname is required'
              >
                <input
                  className='input100'
                  type='text'
                  name='firstname'
                  placeholder='First Name'
                  onChange={this.valueChange}
                  value={firstname}
                />
                <span className='focus-input100' />
              </div>
              <div
                className='form-input validate-input m-b-36 glow'
                data-validate='Lastname is required'
              >
                <input
                  className='input100'
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                  onChange={this.valueChange}
                  value={lastname}
                />
                <span className='focus-input100' />
              </div>
              <div
                className='form-input validate-input m-b-36 glow'
                data-validate='Address is required'
              >
                <input
                  className='input100'
                  type='text'
                  name='address'
                  placeholder='Address'
                  value={address}
                  onChange={this.valueChange}
                />
                <span className='focus-input100' />
              </div>
              <div
                className='form-input validate-input m-b-36 glow'
                data-validate='Mobile is required'
              >
                <input
                  className='input100'
                  type='text'
                  name='mobile'
                  placeholder='Mobile Number'
                  value={mobile}
                  onChange={this.valueChange}
                />
                <span className='focus-input100' />
              </div>
              <div
                className='form-input validate-input m-b-36 glow'
                data-validate='Email is required'
              >
                <input
                  className='input100'
                  type='email'
                  name='email'
                  placeholder='E-mail'
                  value={email}
                  onChange={this.valueChange}
                />
                <span className='focus-input100' />
              </div>
              <div
                className='form-input validate-input m-b-36 glow'
                data-validate='Username is required'
              >
                <input
                  className='input100'
                  type='text'
                  name='username'
                  placeholder='Username'
                  value={username}
                  onChange={this.valueChange}
                />
                <span className='focus-input100' />
              </div>
              <div
                className='form-input validate-input m-b-36 glow'
                data-validate='Password is required'
              >
                <input
                  className='input100'
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={password}
                  onChange={this.valueChange}
                />
                <span className='focus-input100' />
              </div>
              <div className='flex-sb-m w-full p-b-48'></div>
              <br />
              <span className='txt1 p-b-11 error-txt'></span>
              <div className='container-login100-form-btn'>
                <button type='submit' className='login100-form-btn'>
                  Signup
                </button>
              </div>
              <div
                className='txt3'
                style={{
                  marginTop: '20px',
                  color: 'rgba(255, 255, 255, 0.87)',
                }}
              >
                Already have an account?{' '}
                <a
                  href='/login'
                  className='txt3'
                  style={{ color: '#006400', fontWeight: '500' }}
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
