import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { SkillCard } from '..';
import { DiCode, DiDatabase } from 'react-icons/di';
import { FaFigma } from 'react-icons/fa';

const WhatWeDo = () => {
  return (
    <div className='bg-light'>
      <Container className='d-flex flex-column justify-content-center vh-100'>
        <h1 className='text-center mb-5'>What We Do</h1>
        <Stack
          direction='horizontal'
          gap={3}
          className='justify-content-center'>
          <SkillCard name={'UI/UX Design'} logo={FaFigma()} />
          <SkillCard name={'Front End'} logo={DiCode()} />
          <SkillCard name={'Back End'} logo={DiDatabase()} />
        </Stack>
      </Container>
    </div>
  );
};

export default WhatWeDo;
