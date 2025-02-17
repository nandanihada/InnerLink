import React from "react";
import "../styles/Home.css";
import Navbar from "../component/Navbar";
import Cards from "../component/Cards";
import CancelIcon from "@mui/icons-material/Cancel";
import SecurityIcon from "@mui/icons-material/Security";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DevCards from "../component/DevCards";
import Footer from "../component/Footer";
import { delay, easeIn, easeInOut, motion, useScroll } from "motion/react";
function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navbar />
      <motion.div className="top-container">
        <motion.div
          className="heading-top"
          whileInView={{
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          <div className="heading-container">
            <h1 className="first-heading">INNER</h1>
            <h1 className="second-heading">LINK</h1>
          </div>
          <h6 className="sub-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum.
          </h6>
          <motion.button
            className="btn-get-started"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "green",
              transition: { duration: 0.5 },
              color: "white",
              border: "2px solid white",
              cursor: "pointer",
              transition: { duration: 0.5 },
            }}
          >
            Get Started
          </motion.button>
        </motion.div>
        <div className="image-top">
          <motion.img
            whileInView={{
              x: [-100, 0],
              opacity: [0, 1],
              transition: { delay: 1, duration: 0.5 },
            }}
            src="https://png.pngtree.com/png-clipart/20240516/original/pngtree-illustration-of-camping-in-the-wild-forest-png-image_15107429.png"
            alt=""
            className="img-top"
          />
        </div>
      </motion.div>
      <section className="section-one">
        <div className="first-section">
          <motion.h1
            whileInView={{
              x: [100, 0],
              opacity: [0, 1],
              transition: { duration: 0.5 },
            }}
            className="section-heading"
          >
            Try Something New !
          </motion.h1>
        </div>
        <div className="content-container">
          <motion.div
            className="content"
            whileInView={{
              x: [-100, 0],
              opacity: [0, 0.5, 1],
              transition: { delay: 0.5 },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptatum quod ullam culpa sit fugiat ea facere quibusdam impedit
            inventore eius doloremque veritatis, fuga quae animi, dolorem
            corporis dolorum distinctio sequi sed porro aperiam. Asperiores,
            magnam quo esse hic officia voluptatum corrupti non numquam cumque
            accusantium quibusdam necessitatibus pariatur fuga, accusamus
            eligendi nemo repellat deleniti molestias reprehenderit? Eum, et
            facilis?
          </motion.div>
          <div className="content-img">
            <motion.img
              src="https://cdn.dribbble.com/users/2218682/screenshots/6132827/2.gif"
              alt=""
              whileInView={{
                x: [100, 0],
                opacity: [0, 1],
                transition: { delay: 0.5 },
              }}
            />
          </div>
        </div>
      </section>

      <section className="section-two">
        <motion.h1
          whileInView={{
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 0.5 },
          }}
          className="section-heading"
        >
          Minimalism in Action
        </motion.h1>

        <motion.div
          className="cards-container"
          whileInView={{
            transition: { delay: 0.5 },
            opacity: [0, 1],
            delay: 1,
          }}
        >
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
                className="card3"
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
        </motion.div>
      </section>

      <section className="section-three">
        <motion.h1
          whileInView={{
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 0.5 },
          }}
          className="section-heading"
        >
          Our Developers
        </motion.h1>
        <div className="dev-container">
          <DevCards
            img="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
            devName="Rishabh Gupta"
            devDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum."
          />
          <DevCards
            img="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
            devName="Nandani Hada"
            devDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum."
          />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
