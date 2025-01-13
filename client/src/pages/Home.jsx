import React from 'react';
import Hero from '../../components/Hero'; // Corrected import path
import Features from '../../components/Features'; // Corrected import path
import Stats from '../../components/Stats'; // Corrected import path
import Calculator from '../../components/Calculator';
export const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Calculator/>
      <Stats />
    </div>
  );
};

export default Home;