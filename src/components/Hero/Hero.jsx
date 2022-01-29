import React from 'react';
import { Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <>
      <div className='Hero-Wrapper bg-light vh-100 vw-100'>
        <Container className='d-flex align-items-center h-100'>
          <h1 className='display-1'>
            Hello <br />
            Wellcome to <br />
            our site
          </h1>
        </Container>
      </div>
    </>
  );
};

export default Hero;
