import React, { Component } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import QueryString from 'qs';
import Sidebar from '../Sidebar/Sidebar';

export default class DelUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      mobile: '',
      type: 'deliver',
      uid: '',
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

    axios
      .post(
        'http://urbansmokehouse.online:8080/api/v1/admin/new-deliver-user',
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
  };

  valueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { firstname, lastname, address, email, mobile, password, username } =
      this.state;
    return (
      <>
        <Sidebar />
        <div style={{ marginRight: '5vw', marginLeft: '5vw' }}>
          <Card className={'border  bg-white text-dark'}>
            <Card.Header>
              {this.state.uid ? 'Update Chef' : 'Add New Deliver'}
            </Card.Header>
            <Form onSubmit={this.submit}>
              <Card.Body>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Control
                        className=''
                        type='text'
                        name='firstname'
                        placeholder='First Name'
                        onChange={this.valueChange}
                        value={firstname}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Control
                        className=''
                        type='text'
                        name='lastname'
                        placeholder='Last Name'
                        onChange={this.valueChange}
                        value={lastname}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Control
                        className=''
                        type='text'
                        name='address'
                        placeholder='Address'
                        value={address}
                        onChange={this.valueChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Control
                        className=''
                        type='text'
                        name='mobile'
                        placeholder='Mobile Number'
                        value={mobile}
                        onChange={this.valueChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Control
                        className=''
                        type='email'
                        name='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={this.valueChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Control
                        className=''
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={username}
                        onChange={this.valueChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Control
                        className=''
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={this.valueChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer style={{ textAlign: 'right' }}>
                <Button size='sm' variant='success' type='submit'>
                  {/* <FontAwesomeIcon icon={faSave} />{' '} */}
                  {this.state.uid ? 'Update' : 'Save'}
                </Button>{' '}
              </Card.Footer>
            </Form>
          </Card>
        </div>
      </>
    );
  }
}
