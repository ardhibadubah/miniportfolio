import React from 'react';
import { ContactUs, Hero, NavigationBar, WhatWeDo } from '../components';

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <WhatWeDo />
      <ContactUs />
    </>
  );
};

export default HomePage;
