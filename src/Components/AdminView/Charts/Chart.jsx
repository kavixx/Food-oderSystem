import React, { Component } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

export default class Chart extends Component {
  constructor(props) {
    super();
    this.state = {
      lebals: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'Octomber',
        'November',
        'December',
      ],
      values: [],
      foodName: [],
      startTime: 1619585155000,
      endTime: 1620708355000,
    };
  }
  componentDidMount() {
    const data = {
      startTime: this.state.startTime,
      endTime: this.state.endTime,
    };
    let resData;
    axios
      .get(
        `http://localhost:8080/api/v1/admin/summary/monthly-sales/food/${data.startTime}/${data.endTime}`
      )
      .then(res => {
        //console.log(JSON.parse(resData));
        //resData = JSON.parse(res.data);
        console.log(res);
        for (const dataObj of res.data.chartSummaryVO) {
          this.state.foodName.push(Object.keys([res.data.chartSummaryVO]));
          this.state.values.push(parseInt(dataObj.values));
        }
        //console.log(this.state.foodName);
        //console.log(this.state.values);
        this.setState({ apiData: resData.chartSummaryVO.appetizers }, () => {
          //console.log(this.state.apiData);
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log();
  }
  setDataset = () => {
    this.setState({ chartData: {} });
  };

  render() {
    return <div></div>;
  }
}
