import React, { Component } from 'react';
import axios from 'axios';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import QueryString from 'qs';
import Sidebar from '../Sidebar/Sidebar';

export default class ChefForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.valueChange = this.valueChange.bind(this);
    this.submit = this.submit.bind(this);
    this.update = this.update.bind(this);
  }
  initialState = {
    chefId: '',
    firstName: '',
    lastName: '',
    gender: '',
    experience: '',
    skill: '',
    price: '',
  };
  componentDidMount() {
    if (this.props.match.params.chefId != null) {
      const chefID = +this.props.match.params.chefId;
      this.findChef(chefID);
    }
  }
  findChef = chefID => {
    try {
      axios({
        method: 'GET',
        baseURL: 'http://localhost:8080/api/v1/chef/find-chefs/' + chefID,
        //config,
      })
        .then(res => {
          if (res.data != null) {
            this.setState({
              chefId: res.data.chefId,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              gender: res.data.gender,
              experience: res.data.experience,
              skill: res.data.skill,
              price: res.data.price,
            });
          }
        })
        .catch(error => {});
    } catch (e) {
      throw e;
    }
  };

  submit = event => {
    event.preventDefault();
    const chef = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      experience: parseInt(this.state.experience),
      skill: this.state.skill,
      price: parseFloat(this.state.price),
    };
    const token = localStorage.getItem('token');
    axios
      .post(
        'http://localhost:8080/api/v1/admin/chef/new-chef',
        QueryString.stringify(chef)
      )
      .then(response => {
        if (response.data != null) {
          alert('Chef submit');
          this.resetForm();
          // <Redirect to='/chefView' />;
          this.props.history.push({
            pathname: '/chefView',
          });
        }
      })
      .catch(err => {
        console.log('Error ' + err);
      });
  };
  resetForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      gender: '',
      experience: '',
      skill: '',
      price: '',
    });
    // fetch('http://localhost:8080/api/v1/admin/chef/new-chef', {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc
    //   body: JSON.stringify(chef),
    // })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  update = event => {
    event.preventDefault();
    const chef = {
      chefId: this.state.chefId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      experience: this.state.experience,
      skill: this.state.skill,
      price: this.state.price,
    };
    axios
      .put(
        'http://localhost:8080/api/v1/admin/chef/update-chef',
        QueryString.stringify(chef)
      )
      .then(response => {
        if (response.data != null) {
          alert('Chef Updated');
        } else {
          alert('Error encounterd');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  valueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { firstName, lastName, gender, experience, skill, price } =
      this.state;

    return (
      <>
        <Sidebar />
        <div style={{ marginRight: '5vw', marginLeft: '5vw' }}>
          {' '}
          <Card className={'border  bg-white text-dark'}>
            <Card.Header>
              {this.state.chefId ? 'Update Chef' : 'Add New Chef'}
            </Card.Header>
            <Form onSubmit={this.state.chefId ? this.update : this.submit}>
              <Card.Body>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type='text'
                        value={firstName}
                        onChange={this.valueChange}
                        name='firstName'
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type='text'
                        value={lastName}
                        onChange={this.valueChange}
                        name='lastName'
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2' controlId='gender'>
                      <Form.Label>Gender{''}</Form.Label>
                      <Form.Check
                        inline
                        label='Male'
                        value='Male'
                        name='group1'
                        type='radio'
                        required
                        // id={`inline-${type}-1`}
                        // value={gender}
                        onChange={this.valueChange}
                        name='gender'
                      />
                      <Form.Check
                        inline
                        value='Female'
                        label='Female'
                        name='group1'
                        type='radio'
                        // type={type}
                        // id={`inline-${type}-2`}
                        // value={gender}
                        onChange={this.valueChange}
                        name='gender'
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>Experiences</Form.Label>
                      <Form.Control
                        type='number'
                        min={1}
                        value={experience}
                        onChange={this.valueChange}
                        name='experience'
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>Skill</Form.Label>
                      <Form.Control
                        type='text'
                        value={skill}
                        onChange={this.valueChange}
                        name='skill'
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type='number'
                        min='1'
                        value={price}
                        onChange={this.valueChange}
                        name='price'
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer style={{ textAlign: 'right' }}>
                <Button size='sm' variant='success' type='submit'>
                  {/* <FontAwesomeIcon icon={faSave} />{' '} */}
                  {this.state.chefId ? 'Update' : 'Save'}
                </Button>{' '}
              </Card.Footer>
            </Form>
          </Card>
        </div>
      </>
    );
  }
}
