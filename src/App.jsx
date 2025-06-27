import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import FeatureCards from './components/FeatureCards';
import AboutUs from './components/AboutUs';
import StoreLocations from './components/StoreLocations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CoreServices from './components/CoreServices';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <FeatureCards />
      <AboutUs />
      <StoreLocations />
      <ContactForm />
      <Footer />
      <CoreServices/>
      <WhyChooseUs/>
    </>
  );
}

export default App;
