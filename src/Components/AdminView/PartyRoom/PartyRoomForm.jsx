import React, { Component } from 'react';
import axios from 'axios';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import QueryString from 'qs';
import Sidebar from '../Sidebar/Sidebar';
import config from '../../../config';

export default class PartyRoomForm extends Component {
  constructor() {
    super();
    this.state = {
      roomId: '',
      capacity: '',
      price: '',
    };

    this.submit = this.submit.bind(this);
    this.valueChange = this.valueChange.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.roomId != null) {
      const roomID = +this.props.match.params.roomId;
      this.findRoom(roomID);
    }
  }

  findRoom = roomID => {
    try {
      axios
        .get('http://localhost:8080/api/v1/party-rooms/find-rooms/' + roomID, {
          //...config,
        })
        .then(res => {
          if (res.data != null) {
            this.setState({
              roomId: res.data.roomId,
              capacity: res.data.capacity,
              price: res.data.price,
            });
          } else {
          }
        })
        .catch(err => {
          // console.log(err);
        });
    } catch (e) {
      throw e;
    }
  };

  submit = event => {
    event.preventDefault();
    const partyRoom = {
      capacity: parseInt(this.state.capacity),
      price: parseFloat(this.state.price),
    };
    axios
      .post(
        'http://localhost:8080/api/v1/admin/party-room/new-room',
        QueryString.stringify(partyRoom)
        //...config
      )
      .then(res => {
        console.log(partyRoom);
        if (res.data != null) {
          alert('Saved !');
        } else {
          alert('Error encountered !');
        }
      })
      .catch(err => {
        console.log('error' + err);
      });
  };

  update = event => {
    event.preventDefault();
    const rooms = {
      roomId: this.state.roomId,
      capacity: this.state.capacity,
      price: this.state.price,
    };
    axios
      .put(
        'http://localhost:8080/api/v1/admin/party-room/update-room',
        QueryString.stringify(rooms)
        //{ ...config }
      )
      .then(res => {
        if (res != null) {
          alert('Updated');
        } else {
          alert('Error encountered');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  valueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { capacity, price } = this.state;
    return (
      <>
        <Sidebar />
        <div style={{ marginRight: '5vw', marginLeft: '5vw' }}>
          {' '}
          <Card className={'border  bg-white text-dark'}>
            <Card.Header>
              {this.state.roomId ? 'Update Party Room' : 'Add New Party Room'}
            </Card.Header>
            <Form onSubmit={this.state.roomId ? this.update : this.submit}>
              <Card.Body>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>Capacity</Form.Label>
                      <Form.Control
                        type='number'
                        value={capacity}
                        onChange={this.valueChange}
                        name='capacity'
                        min='1'
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-2'>
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type='number'
                        value={price}
                        onChange={this.valueChange}
                        name='price'
                        min='1'
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer style={{ textAlign: 'right' }}>
                <Button size='sm' variant='success' type='submit'>
                  {/* <FontAwesomeIcon icon={faSave} />{' '} */}
                  {this.state.roomId ? 'Update' : 'Save'}
                </Button>{' '}
              </Card.Footer>
            </Form>
          </Card>
        </div>
      </>
    );
  }
}
