import React from 'react';
import Hero from '../../components/Hero'; // Corrected import path
import Features from '../../components/Features'; // Corrected import path
import Stats from '../../components/Stats'; // Corrected import path

export const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Stats />
    </div>
  );
};

export default Home;