import React, { Component } from 'react';

export default class ChefItem extends Component {
  state = {
    loading: true,
    chef: [],
  };

  async componentDidMount() {
    const url = 'http://localhost:8080/api/v1/chef/find-chefs';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ chef: data.results, loading: false });
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
