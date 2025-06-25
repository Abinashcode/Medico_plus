import React from "react";
import "./HeroBanner.css";

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h2>Your Health, Our Priority</h2>
        <p>
          Book doctor appointments, order medicines, and get lab tests from the comfort of your home.
        </p>
        <button>Book Appointment</button>
      </div>
      <div className="hero-image">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/06/02/24/doctor-2585793_1280.jpg"
          alt="Healthcare"
        />
      </div>
    </section>
  );
}
