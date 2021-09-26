import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import config from '../../../config';

export default class Chef extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chef: [],
      chefId: '',
      firstName: '',
      lastName: '',
      gender: '',
      experience: '',
      rate: '',
      skill: '',
      status: '',
      price: '',
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      baseURL: 'http://localhost:8080/api/v1/chef/find-chefs',
      config,
    }).then(res => {
      this.setState({
        chef: res.data,
        chefId: '',
        firstName: '',
        lastName: '',
        gender: '',
        experience: '',
        rate: '',
        skill: '',
        status: '',
        price: '',
      });
    });
    console.log(axios);
  }

  delete = chefID => {
    axios({
      method: 'DELETE',
      baseURL: 'http://localhost:8080/api/v1/admin/chef/delete-chef/' + chefID,
      config,
    }).then(response => {
      if (response.data === 'successful') {
        this.componentDidMount();
      }
    });
  };

  render() {
    return (
      <>
        <Sidebar />
        <div
          style={{ marginTop: '3vh', marginLeft: '5vw', marginRight: '5vw' }}
        >
          {/* <Button variant='outline-primary' onClick={() => this.formChef()}>
          ADD
          <MdControlPoint style={{ fontSize: '20px', marginBottom: '3px' }} />
        </Button> */}
          <div style={{ marginBottom: '10px' }}>
            <Link
              className='btn-primary'
              to={'addChef/' + ''}
              style={{
                border: 'solid 1px',
                padding: '5px 5px 5px 5px',
                marginBottom: '5px',
                textDecoration: 'none',
              }}
            >
              Add New Chef
            </Link>
          </div>
          <Table striped bordered hover responsive>
            <thead className='thead-dark'>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Experince</th>
                <th>Price</th>
                <th>Skill</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.chef.map(chef => (
                <tr key={chef.chefId}>
                  <td>{chef.firstName}</td>
                  <td>{chef.lastName}</td>
                  <td>{chef.gender}</td>
                  <td>{chef.experience}</td>
                  <td>{chef.price}</td>
                  <td>{chef.skill}</td>
                  <td>
                    {/* <Button variant='primary'> */}

                    <Link
                      to={'editChef/' + chef.chefId}
                      className='btn btn-primary'
                    >
                      <MdModeEdit />
                    </Link>
                    {/* </Button> */}
                  </td>
                  <td>
                    <Button
                      variant='danger'
                      onClick={this.delete.bind(this, chef.chefId)}
                      size='sm'
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
