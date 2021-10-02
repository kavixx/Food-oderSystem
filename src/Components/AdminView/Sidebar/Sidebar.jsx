import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Sidebar({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(s => !s);
  return (
    <>
      <Button variant='' onClick={toggleShow} className='me-2'>
        <BiMenuAltLeft style={{ fontSize: '30px', border: 'none' }} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <a
                href='/dashboard'
                style={{
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Dashboard
              </a>
            </li>
            <li>
              <Link
                to='/chefView'
                style={{ textDecoration: 'none', fontWeight: '600' }}
              >
                Chef
              </Link>
            </li>
            <li>
              <Link
                to='/foodView'
                style={{ textDecoration: 'none', fontWeight: '600' }}
              >
                Foods
              </Link>
            </li>
            <li>
              <Link
                to='/partyRoomView'
                style={{ textDecoration: 'none', fontWeight: '600' }}
              >
                Party Rooms
              </Link>
            </li>
            <li>
              <Link
                to='/delUser'
                style={{ textDecoration: 'none', fontWeight: '600' }}
              >
                Delivery User
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
