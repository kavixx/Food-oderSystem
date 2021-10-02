import { React, useState, useEffect, useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import './food.css';
import FoodList from './FoodList';
import axios from 'axios';
import { useParams } from 'react-router';
import config from '../../config';

function Food() {
  const [food, setFood] = useState([]);
  const { code } = useParams();

  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const token = localStorage.getItem('token');
      let res = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8080/api/v1/food-item/find-items/' + code,
        //...config,
      }).catch(err => {
        console.log(err);
      });
      setFood(res.data);
    } catch (e) {
      throw e;
    }
  };
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '15vh' }}>
        <section id='menu' className='menu'>
          <div className='container'>
            <div className='heading-section text-center'>
              <h2>
                CHECK OUR TASTY <span>{code}</span>
              </h2>
              <div />
              <div className='row'>
                <div className='col-lg-12 d-flex justify-content-center'>
                  <ul id='menu-flters'>
                    <li
                      data-filter='*'
                      className={code === 'BURGERS' ? 'filter-active' : ''}
                    >
                      Burgers
                    </li>
                    <li
                      data-filter='.filter-starters'
                      className={code === 'SUBMARINES' ? 'filter-active' : ''}
                    >
                      Submarines
                    </li>
                    <li
                      data-filter='.filter-salads'
                      className={code === 'WAFFLES' ? 'filter-active' : ''}
                    >
                      Waffels
                    </li>
                    <li
                      data-filter='.filter-specialty'
                      className={code === 'APPERTIZERS' ? 'filter-active' : ''}
                    >
                      Appetizers
                    </li>
                    <li
                      data-filter='.filter-specialty'
                      className={code === 'BEVARAGES' ? 'filter-active' : ''}
                    >
                      Bevarage
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='row menu-container'>
              {food.length ? (
                food.map(item => (
                  <FoodList
                    key={item.code}
                    code={item.code}
                    title={item.title}
                    item={item.item}
                    price={item.price}
                    description={item.description}
                  />
                ))
              ) : (
                <div>Not found</div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default Food;
