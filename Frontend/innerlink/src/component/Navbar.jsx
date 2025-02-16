import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
       <div className="navbar-container" data-aos="fade-down" data-aos-delay="300">
    
    <ul className="navbar-list" >
      <li className="nav-links">
        <Link to="/" >Home</Link>
      </li>
      <li className="nav-links">
        <Link to="#">
        About US
        </Link>
      </li>
      <li className="nav-links">
        <Link to="#">
        Services
        </Link>
      </li>
      <li className="nav-links">
        <Link to="/coming-soon">
        Partners
        </Link>
      </li>
    </ul>  
  </div>
    </>
  )
}

export default Navbar
