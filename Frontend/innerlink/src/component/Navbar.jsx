import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const handleSomething = () => {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector(".section-one");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };
  const handleHome = () => {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector(".top-container");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };
  const handleOffer = () => {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector(".section-two");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };
  const handleDev = () => {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector(".section-three");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };
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
              <Link onClick={handleHome}>Home</Link>
            </li>
            <li className="nav-links">
              <Link onClick={handleSomething}>Something New</Link>
            </li>
            <li className="nav-links">
              <Link onClick={handleOffer}>We Offer</Link>
            </li>
            <li className="nav-links">
              <Link onClick={handleDev}>Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
