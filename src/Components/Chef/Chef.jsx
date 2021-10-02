import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import ChefList from './ChefList';
import './chef.css';
import config from '../../config';

export default function Chef() {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    // axios
    //   .get('http://urbansmokehouse.online:8080/api/v1/chef/find-chefs')
    //   .then(res => {
    //     return JSON.stringify(res);
    //   })
    //   .then(resData => {
    //     setChef([...chef, resData.data]);
    //     console.log(resData);
    //     // console.log('Data ' + resData);
    //     // console.log('Data ' + chef);
    //   });
    // // console.log(chefListCom());
    getCategories();
  }, []);
  // const getChef = () => {
  //   const res = axios.get('http://urbansmokehouse.online:8080/api/v1/chef/find-chefs');
  //   console.log(res);
  // };

  const getCategories = async () => {
    try {
      let res = await axios.get(
        'http://urbansmokehouse.online:8080/api/v1/chef/find-chefs'
        //{ ...config }
      );
      setChef(res.data);
    } catch (e) {
      throw e;
    }
  };

  // const chefListComponent = () => {
  //   if (chef == null) {
  //     return console.log('no data');
  //   } else {
  //     return chef.map(item => {
  //       return (
  //         <ChefList
  //           key={item.chefId}
  //           name={`${item.firstName}${item.lastName}`}
  //           gender={item.gender}
  //           experience={item.experience}
  //           rate={item.rate}
  //           skill={item.skill}
  //           status={item.status}
  //           price={item.price}
  //         />
  //       );
  //     });
  //   }
  // };

  return (
    <>
      <Navbar />
      <section className='ftco-section'>
        <div className='container'>
          <div className='text-center heading-section ftco-animate'>
            <span className='subheading'>Chef</span>
            <h2 className='mb-4'>Our Master Chef</h2>
          </div>
          <div className='cards'>
            {/* {chefListComponent()} */}
            {chef.length ? (
              chef.map(item => (
                <ChefList
                  key={item.chefId}
                  name={item.firstName}
                  // gender={item.gender}
                  experience={item.experience}
                  rate={item.rate}
                  skill={item.skill}
                  status={item.status}
                  price={item.price}
                />
              ))
            ) : (
              <div>Not found</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
