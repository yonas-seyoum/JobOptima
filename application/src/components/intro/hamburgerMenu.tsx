import React, { useState } from "react";
import "../../styles/hamburgerMenu.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
        </ul>
        <div className="hero-buttons">
          <button className="cta-primary">Find Jobs</button>
          <button className="cta-secondary">Post a Job</button>
        </div>
      </nav>
    </div>
  );
}
