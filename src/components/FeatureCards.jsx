import React from "react";
import { FaUserMd, FaPills, FaVials } from "react-icons/fa";
import "./FeatureCards.css";

export default function FeatureCards() {
  const services = [
    {
      id: 1,
      title: "Doctor Consultation",
      icon: <FaUserMd className="feature-icon" />,
    },
    {
      id: 2,
      title: "Pharmacy",
      icon: <FaPills className="feature-icon" />,
    },
    {
      id: 3,
      title: "Lab Tests",
      icon: <FaVials className="feature-icon" />,
    },
  ];

  return (
    <section className="features-section">
      <h2 className="features-heading">Key Features</h2>
      <div className="features-grid">
        {services.map((service) => (
          <div key={service.id} className="feature-card">
            {service.icon}
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
