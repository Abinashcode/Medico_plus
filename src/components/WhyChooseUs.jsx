// src/components/WhyChooseUs.jsx
import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const usps = [
    {
      title: "Trusted by Thousands",
      description: "Reliable healthcare services trusted by 10,000+ users.",
      icon: "✅",
    },
    {
      title: "One-Stop Platform",
      description: "Connect with doctors, pharmacies, and labs – all in one place.",
      icon: "🩻",
    },
    {
      title: "24/7 Support",
      description: "Get round-the-clock help for your medical needs.",
      icon: "📞",
    },
    {
      title: "Affordable Pricing",
      description: "We ensure quality care at reasonable costs.",
      icon: "💰",
    },
  ];

  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose MedicoPlus?</h2>
      <div className="usp-container">
        {usps.map((usp, index) => (
          <div className="usp-card" key={index}>
            <div className="usp-icon">{usp.icon}</div>
            <h3 className="usp-title">{usp.title}</h3>
            <p className="usp-description">{usp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
