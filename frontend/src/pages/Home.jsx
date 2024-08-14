import React from 'react';
import Main from '../components/Main';
import About from '../components/About';
import Principle from '../components/Principe';
import Requests from '../components/Requests';
import Pricing from '../components/Pricing';
import StagesWork from '../components/StagesWork';
import PaymentMethod from '../components/PaymentMethod';

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Principle />
      <Requests />
      <Pricing />
      <StagesWork />
      <PaymentMethod />
    </>
  );
}
