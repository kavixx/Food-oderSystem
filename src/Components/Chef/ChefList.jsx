import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

function ChefList(props) {
  return (
    <>
      <div className='card'>
        <div className='staff'>
          <div className='text px-4 pt-2' style={{ color: 'black' }}>
            <div className='faded'>
              <ul key={props.chefId}>
                <h3>
                  {props.name}
                  {'  '}
                  <i
                    style={{
                      color: props.status === 'available' ? 'green' : 'red',
                    }}
                  >
                    <BsFillCircleFill />
                  </i>
                </h3>
                {/* <li className='position mb-2'>{props.gender}</li> */}
                <li className=''>LKR {props.price}</li>
                <li className='position mb-2'>{props.skill}</li>
                <li className='position mb-2'>{props.rate}</li>
                <li className='position mb-2'>
                  Work experience: {props.experience}
                </li>
                {/* <li className='position mb-2'>{props.status}</li> */}
                <button className='btn btn-info btn-sm'>Check out</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChefList;
