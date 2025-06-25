import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import './App.css'; // Optional if needed
import FeatureCards from './components/FeatureCards';

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <FeatureCards/>
    </>
  );
}

export default App;
