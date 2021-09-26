import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import config from '../../../config';

export default class FoodView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      code: '',
      currency: '',
      description: '',
      item: '',
      photos: '',
      price: '',
      status: '',
      title: '',
      type: '',
    };
    this.delete = this.delete.bind(this);
  }
  componentDidMount() {
    try {
      axios
        .get('http://localhost:8080/api/v1/food-item/find-items', { config })
        .then(res => {
          this.setState({
            food: res.data,
            code: '',
            currency: '',
            description: '',
            item: '',
            photos: '',
            price: '',
            status: '',
            title: '',
            type: '',
          });
        });
    } catch (e) {
      throw e;
    }
  }
  delete = fCode => {
    try {
      axios
        .delete(
          'http://localhost:8080/api/v1/admin/food-item/delete-item/' + fCode,
          {
            config,
          }
        )
        .then(response => {
          if (response === '') {
            this.componentDidMount();
          }
        });
    } catch (e) {}
  };

  render() {
    return (
      <>
        <div
          style={{ marginTop: '10px', marginLeft: '20px', marginRight: '20px' }}
        >
          <Table striped bordered hover style={{ fontSize: '15px' }} size='sm'>
            <thead className='thead-dark'>
              <tr>
                <th>Currency</th>
                <th>Description</th>
                <th>Item</th>
                <th>Photos</th>
                <th>Price</th>
                <th>Status</th>
                <th>Title</th>
                <th>Type</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.food.map(item => (
                <tr key={item.code}>
                  <td>{item.currency}</td>
                  <td>{item.description}</td>
                  <td>{item.item}</td>
                  <td>
                    <img src={item.photos}></img>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.status}</td>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>
                    <Link
                      to={'editFood/' + item.code}
                      className='btn btn-primary'
                    >
                      <MdModeEdit />
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant='danger'
                      size=''
                      onClick={this.delete.bind(this, item.code)}
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
