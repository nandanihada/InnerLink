import React from "react";
import "../styles/Home.css";
import Navbar from "../component/Navbar";
import Cards from "../component/Cards";
import CancelIcon from "@mui/icons-material/Cancel";
import SecurityIcon from "@mui/icons-material/Security";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Card } from "@mui/material";
function Home() {
  return (
    <>
      <Navbar />
      <div className="top-container">
        <div className="heading-top">
          <div className="heading-container">
            <h1 className="first-heading">INNER</h1>
            <h1 className="second-heading">LINK</h1>
          </div>
          <h6 className="sub-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum.
          </h6>
        </div>
        <div className="image-top">
          <img
            src="https://png.pngtree.com/png-clipart/20240516/original/pngtree-illustration-of-camping-in-the-wild-forest-png-image_15107429.png"
            alt=""
            className="img-top"
          />
        </div>
      </div>
      <section className="section-one">
        <div className="first-section">
          <h1 className="section-heading">Try Something New !</h1>
        </div>
        <div className="content-container">
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptatum quod ullam culpa sit fugiat ea facere quibusdam impedit
            inventore eius doloremque veritatis, fuga quae animi, dolorem
            corporis dolorum distinctio sequi sed porro aperiam. Asperiores,
            magnam quo esse hic officia voluptatum corrupti non numquam cumque
            accusantium quibusdam necessitatibus pariatur fuga, accusamus
            eligendi nemo repellat deleniti molestias reprehenderit? Eum, et
            facilis?
          </div>
          <div className="content-img">
            <img
              src="https://cdn.dribbble.com/users/2218682/screenshots/6132827/2.gif"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="section-two">
        <h1 className="section-heading">Minimalism in Action</h1>

        <div className="cards-container">
          <Cards
            icon={
              <SecurityIcon
                sx={{
                  color: "green",
                  fontSize: "10vh",
                  cursor: "pointer",
                  position: "relative",
                  left: "19vh",
                  top: "20px",
                  padding: "10px",
                }}
              />
            }
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum."
          />
          <Cards
            icon={
              <ThumbUpAltIcon
                sx={{
                  color: "green",
                  fontSize: "10vh",
                  cursor: "pointer",
                  position: "relative",
                  left: "19vh",
                  top: "20px",
                  padding: "10px",
                }}
              />
            }
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum."
          />
          <Cards
            icon={
              <CancelIcon
                sx={{
                  color: "green",
                  fontSize: "10vh",
                  cursor: "pointer",
                  position: "relative",
                  left: "19vh",
                  top: "20px",
                  padding: "10px",
                }}
              />
            }
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum."
          />
        </div>
      </section>

      <section className="section-three">
        <h1 className="section-heading">Our Users</h1>
      </section>
    </>
  );
}

export default Home;
