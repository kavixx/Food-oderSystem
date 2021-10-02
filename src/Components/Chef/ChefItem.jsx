import axios from 'axios';
import React, { Component } from 'react';

export default class ChefItem extends Component {
  state = {
    loading: true,
    chef: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:8080/api/v1/chef/find-chefs')
      .then(res => {
        this.setState({ chef: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    return (
      <div>
        {this.state.chef.map(person => (
          <div key={person.firstName}>
            <div>{person.gender}</div>
            <div>{person.skill}</div>
            <div>{person.rate}</div>
            <div>{person.experience}</div>
          </div>
        ))}
      </div>
    );
  }
}
