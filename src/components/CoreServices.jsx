// src/components/CoreServices.jsx
import React from "react";
import "./CoreServices.css";

const CoreServices = () => {
  const services = [
    {
      title: "Doctor Consultation",
      description: "Book online and in-clinic appointments with top doctors.",
      icon: "🩺",
    },
    {
      title: "Pharmacy",
      description: "Order genuine medicines with doorstep delivery.",
      icon: "💊",
    },
    {
      title: "Lab Tests",
      description: "Schedule lab tests with home sample pickup.",
      icon: "🧪",
    },
  ];

  return (
    <section className="core-services">
      <h2 className="section-title">Our Core Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreServices;
