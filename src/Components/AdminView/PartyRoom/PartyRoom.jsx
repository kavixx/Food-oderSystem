import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { MdModeEdit, MdDelete, MdDone, MdRemoveCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import config from '../../../config';
import QueryString from 'qs';

export default class PartyRoom extends Component {
  constructor() {
    super();
    this.state = {
      rooms: [],
      roomId: '',
      capacity: '',
      price: '',
      status: '',
    };
  }
  componentDidMount() {
    axios
      .get(
        'http://urbansmokehouse.online:8080/api/v1/party-rooms/find-rooms'
        //...config,
      )
      .then(res => {
        this.setState({
          rooms: res.data,
          roomId: '',
          capacity: '',
          price: '',
          status: '',
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  delete = roomID => {
    axios
      .delete(
        'http://urbansmokehouse.online:8080/api/v1/admin/party-room/delete-room/' +
          roomID
        //{
        // ...config,
        //}
      )
      .then(response => {
        if (response != null) {
          alert('Deleted');
          this.componentDidMount();
        }
      });
  };

  statusUpdate = roomId => {
    const data = {
      roomId: parseInt(roomId),
      status: 'available',
    };
    axios
      .put(
        'http://urbansmokehouse.online:8080/api/v1/party-rooms/update-status',
        QueryString.stringify(data)
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <Sidebar />
        <div
          style={{ marginTop: '3vh', marginLeft: '5vw', marginRight: '5vw' }}
        >
          <div style={{ marginBottom: '10px' }}>
            <Link
              className='btn-primary'
              to={'addPartyRoom/'}
              style={{
                border: 'solid 1px',
                padding: '5px 5px 5px 5px',
                marginBottom: '5px',
                textDecoration: 'none',
              }}
            >
              Add New Party Room
            </Link>
          </div>

          <Table striped bordered hover responsive>
            <thead className='thead-dark'>
              <tr>
                <th>Capacity</th>
                <th>Price</th>
                <th>Status</th>
                <th>Activate</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.rooms.map(rooms => (
                <tr key={rooms.roomId}>
                  <td>{rooms.capacity}</td>
                  <td>{rooms.price}</td>
                  <td>{rooms.status}</td>
                  <td>
                    <Button
                      onClick={this.statusUpdate.bind(this, rooms.roomId)}
                      className={
                        rooms.status === 'removed'
                          ? 'btn btn-success'
                          : 'btn btn-danger disabled'
                      }
                    >
                      {rooms.status === 'available' ? (
                        <MdRemoveCircle />
                      ) : (
                        <MdDone />
                      )}
                    </Button>
                  </td>
                  <td>
                    <Link
                      to={'editPartyRoom/' + rooms.roomId}
                      className='btn btn-primary'
                    >
                      <MdModeEdit />
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant='danger'
                      onClick={this.delete.bind(this, rooms.roomId)}
                    >
                      <MdDelete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}
