import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
    <div> 
    <img
            src="https://i.postimg.cc/Qt1jkQqb/Whats-App-Image-2025-02-16-at-23-32-01-6a2df891-removebg-preview.png"
            alt=""
            className="logo"
          />
 
  
      <div
        className="navbar-container"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        <ul className="navbar-list">
         
          <li className="nav-links">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-links">
            <Link to="#">About US</Link>
          </li>
          <li className="nav-links">
            <Link to="#">Services</Link>
          </li>
          <li className="nav-links">
            <Link to="/coming-soon">Partners</Link>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default Navbar;
