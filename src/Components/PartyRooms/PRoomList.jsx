import { React, useState } from 'react';
import { MdEventAvailable } from 'react-icons/md';
import axios from 'axios';
import QueryString from 'qs';
import partyRoomModal from './partyRoomModal';

function ChefList(props) {
  const [item, setItem] = useState([{ itemCode: '', quantity: '' }]);
  const itemHandle = () => {
    setItem({ itemCode: props.roomId, quantity: 1 });
  };
  const addCart = () => {
    try {
      axios
        .post(
          'http://urbansmokehouse.online:8080/api/v1/api/v1/user-cart/new-item',
          QueryString.stringify(item)
        )
        .then(Response => {
          console.log(Response);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (e) {}
  };
  return (
    <>
      <div className='card'>
        <div className='staff'>
          <div className='text px-4 pt-2' style={{ color: 'black' }}>
            <div className='faded'>
              <ul key={props.roomId}>
                <h3>
                  Room Type {props.roomId}
                  {'      '}
                  <i
                    style={{
                      color: props.status === 'available' ? 'green' : 'red',
                      fontSize: '23px',
                    }}
                  >
                    <MdEventAvailable />
                  </i>
                </h3>
                <li className=''>Crowd {props.capacity}</li>
                <li className='position mb-2'>LKR {props.price}</li>
                <button
                  className='btn btn-info btn-sm'
                  onClick={() => {
                    itemHandle();
                    addCart();
                  }}
                >
                  Check out
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChefList;
