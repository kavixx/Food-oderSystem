import React, { Component } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import QueryString from 'qs';
import Sidebar from '../Sidebar/Sidebar';
import config from '../../../config';

export default class FoodForm extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      currency: '',
      description: '',
      item: '',
      photos: '',
      price: '',
      title: '',
      type: '',
    };
    this.findFood = this.findFood.bind(this);
    this.valueChange = this.valueChange.bind(this);
    this.submit = this.submit.bind(this);
    this.convertImg = this.convertImg.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.code != null) {
      const fCode = parseInt(this.props.match.params.code);
      this.findFood(fCode);
    }
    console.log('code ' + this.props.match.params.code);
  }

  findFood = fCode => {
    axios
      .get('http://localhost:8080/api/v1/food-item/find-items/' + fCode)
      .then(res => {
        this.setState({
          code: res.data.code,
          currency: res.data.currency,
          description: res.data.description,
          item: res.data.item,
          photos: res.data.photos,
          price: res.data.price,
          title: res.data.title,
          type: res.data.type,
        });
      });
    console.log(this.state);
  };

  submit = event => {
    const food = {
      currency: this.state.currency,
      description: this.state.description,
      item: this.state.item,
      photos: this.state.photos,
      price: this.state.price,
      title: this.state.title,
      type: this.state.type,
    };
    console.log('Photo' + this.state.photos);
    event.preventDefault();

    axios
      .post(
        'http://localhost:8080​/api/v1/admin/food-item/new-item',
        QueryString.stringify(food)
        //{ ...config }
      )
      .then(res => {
        if (res == null) {
          alert('Error');
        }
      })
      .catch(err => {
        console.log('Error ' + err);
      });
  };

  update = event => {
    event.preventDefault();
    const food = {
      code: this.state.code,
      currency: this.state.currency,
      description: this.state.description,
      price: this.state.price,
      type: this.state.type,
    };
    try {
      axios
        .put(
          'http://localhost:8080/api/v1/admin/food-item/update-item',
          QueryString.stringify(food)
          //{ ...config }
        )
        .then(res => {
          console.log(res);
        });
    } catch (e) {}
  };

  convertImg = file => {
    // return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      return fileReader.result;
    };
    fileReader.onerror = error => {
      return error;
    };
    // });
  };

  handleChange = event => {
    const file = event.target.files[0];
    console.log('file ' + event.target);
    const base64 = this.convertImg(file);
    this.setState({ photos: base64 });
    console.log(file);
  };

  valueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { currency, description, item, price, title, type } = this.state;
    return (
      <div>
        <Sidebar />
        <div style={{ marginRight: '5vw', marginLeft: '5vw' }}>
          <Card className={'border  bg-white text-dark'}>
            <form onSubmit={this.state.code ? this.update : this.submit}>
              <Card.Header>
                {this.state.code ? 'Update Food' : 'Add New Food'}
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <div className='mb-3'>
                      <label className='form-label'>Item</label>
                      <input
                        type='text'
                        id='item'
                        className='form-control'
                        name='item'
                        onChange={this.valueChange}
                        value={item}
                        disabled={
                          this.props.match.params.code != null ? true : false
                        }
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='mb-3'>
                      <label className='form-label'>Type</label>
                      <input
                        type='text'
                        className='form-control'
                        name='type'
                        onChange={this.valueChange}
                        value={type}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className='mb-3'>
                      <label className='form-label'>Title</label>
                      <input
                        type='text'
                        className='form-control'
                        name='title'
                        value={title}
                        onChange={this.valueChange}
                        disabled={
                          this.props.match.params.code != null ? true : false
                        }
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='mb-3'>
                      <label className='form-label'>Currency</label>
                      <input
                        type='text'
                        className='form-control'
                        name='currency'
                        onChange={this.valueChange}
                        value={currency}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className='mb-3'>
                      <label for='formFileSm' className='form-label'>
                        Image{' '}
                      </label>
                      <input
                        className='form-control'
                        id='formFileSm'
                        type='file'
                        accept='image/*'
                        name='photos'
                        onChange={this.handleChange}
                        multiple={true}
                        disabled={
                          this.props.match.params.code != null ? true : false
                        }
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='mb-3'>
                      <label className='form-label'>Price</label>
                      <input
                        type='number'
                        min='1'
                        className='form-control'
                        name='price'
                        value={price}
                        onChange={this.valueChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea
                      className='form-control'
                      rows='3'
                      name='description'
                      onChange={this.valueChange}
                      value={description}
                    />
                  </div>
                </Row>
              </Card.Body>
              <Card.Footer style={{ textAlign: 'right' }}>
                <Button size='sm' variant='success' type='submit'>
                  {/* <FontAwesomeIcon icon={faSave} />{' '} */}
                  {this.state.code ? 'Update' : 'Save'}
                </Button>{' '}
              </Card.Footer>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}
