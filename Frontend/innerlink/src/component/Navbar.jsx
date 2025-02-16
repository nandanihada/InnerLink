import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
       <div className="navbar-container" data-aos="fade-down" data-aos-delay="300">
    
    <ul className="navbar-list" >
      <li className="nav-links">
        <Link to="/" >Lorem</Link>
      </li>
      <li className="nav-links">
        <Link to="#">
        Lorem
        </Link>
      </li>
      <li className="nav-links">
        <Link to="#">
        Lorem
        </Link>
      </li>
      <li className="nav-links">
        <Link to="/coming-soon">
        Lorem
        </Link>
      </li>
    </ul>  
  </div>
    </>
  )
}

export default Navbar
