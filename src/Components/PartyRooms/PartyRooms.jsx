import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PRoomList from './PRoomList';
import Navbar from '../Navbar/Navbar';

export default function PartyRooms() {
  const [room, setRoom] = useState([]);
  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = async () => {
    try {
      let res = await axios.get(
        'http://localhost:8080/api/v1/party-rooms/find-rooms'
      );
      console.log(res.data);
      setRoom(res.data);
    } catch (e) {}
  };
  return (
    <>
      <Navbar />
      <section className='ftco-section'>
        <div className='container'>
          <div className='text-center heading-section ftco-animate'>
            <span className='subheading'>Party</span>
            <h2 className='mb-4'>Party Rooms</h2>
          </div>
          <div className='cards'>
            {/* {chefListComponent()} */}
            {room.length ? (
              room.map(item => (
                <PRoomList
                  key={item.roomId}
                  roomId={item.roomId}
                  capacity={item.capacity}
                  price={item.price}
                  status={item.status}
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
