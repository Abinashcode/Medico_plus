import React from "react";
import "./Header.css"; // ⬅️ Import component-specific styles

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">MedicoPlus</h1>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#doctors">Doctors</a>
        <a href="#pharmacy">Pharmacy</a>
        <a href="#lab">Lab Test</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </header>
  );
}
