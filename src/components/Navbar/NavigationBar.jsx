import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { ModalContact } from '..';

const NavigationBar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar bg='light' fixed='top'>
        <Container>
          <Navbar.Brand href='/' className='h1'>
            <strong>Dev.</strong>
          </Navbar.Brand>
          <Nav className='ms-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/'>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
