import React from 'react';
import './StoreLocations.css';

const StoreLocations = () => {
  return (
    <section className="store-locations-section">
      <h2>Our Locations</h2>
      <div className="locations-container">
        <div className="location-card">
          <h3>Bhubaneswar</h3>
          <p>Medicoplus Clinic, Unit-9, Bhubaneswar</p>
        </div>
        <div className="location-card">
          <h3>Cuttack</h3>
          <p>SCB Campus, Near OPD Gate</p>
        </div>
        <div className="location-card">
          <h3>Rourkela</h3>
          <p>Sector-5, Near Main Bus Stand</p>
        </div>
      </div>
    </section>
  );
};

export default StoreLocations;
