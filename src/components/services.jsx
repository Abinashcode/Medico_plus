import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Doctor Consultation",
      description: "Book appointments with qualified doctors online or in-person",
      icon: "🩺",
      features: ["24/7 Availability", "Specialist Doctors", "Video Consultation"]
    },
    {
      id: 2,
      title: "Pharmacy",
      description: "Order medicines and healthcare products with home delivery",
      icon: "💊",
      features: ["Prescription Upload", "Home Delivery", "Genuine Medicines"]
    },
    {
      id: 3,
      title: "Lab Tests",
      description: "Book lab tests and get reports delivered to your home",
      icon: "🔬",
      features: ["Home Sample Collection", "Digital Reports", "Certified Labs"]
    },
    {
      id: 4,
      title: "Health Checkups",
      description: "Comprehensive health packages for preventive care",
      icon: "❤️",
      features: ["Full Body Checkup", "Preventive Care", "Health Monitoring"]
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive healthcare solutions at your fingertips</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}