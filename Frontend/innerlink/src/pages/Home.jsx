import React from "react";
import "../styles/Home.css";
import Navbar from "../component/Navbar";
import Cards from "../component/Cards";
import CancelIcon from "@mui/icons-material/Cancel";
import SecurityIcon from "@mui/icons-material/Security";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DevCards from "../component/DevCards";
import Footer from "../component/Footer";
import { motion, useInView } from "motion/react";
import { useNavigate } from "react-router-dom";
import { duration } from "@mui/material";
function Home() {
  // const { scrollYProgress } = useScroll();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();
  // useEffect(() => {}, [isInView]);
  return (
    <>
      <Navbar />
      <motion.div className="top-container">
        <motion.div
          ref={ref}
          className="heading-top"
          whileInView={{
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <div className="heading-container" ref={ref}>
            <motion.h1
              className="first-heading"
              whileInView={{ letterSpacing: ["20px", "0px"] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              ref={ref}
              viewport={{ once: true }}
            >
              INNER
            </motion.h1>
            <motion.h1
              className="second-heading"
              whileInView={{ letterSpacing: ["0px", "20px"] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              ref={ref}
              viewport={{ once: true }}
            >
              LINK
            </motion.h1>
          </div>
          <motion.h6
            className="sub-heading"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            ref={ref}
            viewport={{ once: true }}
          >
            Connecting Hearts, Beyond Screens.
          </motion.h6>
          <motion.button
            className="btn-get-started"
            onClick={() => {
              navigate("/login");
            }}
          >
            Get Started
          </motion.button>
        </motion.div>
        <div className="image-top">
          <motion.img
            ref={ref}
            whileInView={{
              x: [-100, 0],
              opacity: [0, 1],
              transition: { delay: 1, duration: 0.5 },
            }}
            src="https://png.pngtree.com/png-clipart/20240516/original/pngtree-illustration-of-camping-in-the-wild-forest-png-image_15107429.png"
            alt=""
            viewport={{ once: true }}
            className="img-top"
          />
        </div>
      </motion.div>
      <section className="section-one">
        <div className="first-section">
          <motion.h1
            ref={ref}
            whileInView={{
              x: [100, 0],
              opacity: [0, 1],
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Try Something New !
          </motion.h1>
        </div>
        <div className="content-container">
          <motion.div
            ref={ref}
            className="content"
            whileInView={{
              x: [-100, 0],
              opacity: [0, 0.5, 1],
              transition: { delay: 1 },
            }}
            viewport={{ once: true }}
          >
            Inner Link is more than just a social media platform – it’s a space
            to connect, express, and grow. Whether you're sharing your thoughts,
            discovering new interests, or building meaningful relationships,
            Inner Link brings people together in an authentic way. Explore fresh
            content, engage in real conversations, and stay linked with what
            truly matters. Try something new, step out of your comfort zone, and
            make every connection count!
          </motion.div>
          <div className="content-img">
            <motion.img
              ref={ref}
              src="https://cdn.dribbble.com/userupload/21292774/file/original-14d7feebe36c9c9e5ef5f720b9d31791.gif"
              alt=""
              whileInView={{
                x: [100, 0],
                opacity: [0, 1],
                transition: { delay: 0.5 },
              }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>

      <section className="section-two">
        <motion.h1
          ref={ref}
          whileInView={{
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Minimalism in Action
        </motion.h1>

        <motion.div
          ref={ref}
          className="cards-container"
          whileInView={{
            transition: { delay: 0.5 },
            opacity: [0, 1],
            delay: 1,
          }}
          viewport={{ once: true }}
        >
          <Cards
            icon={
              <SecurityIcon
                sx={{
                  color: "green",
                  fontSize: "10vh",
                  cursor: "pointer",
                  position: "relative",
                  left: "15vh",
                  top: "20px",
                  padding: "10px",
                }}
                className="card3"
              />
            }
            content="Stay Safe, Stay Connected."
          />
          <Cards
            icon={
              <CancelIcon
                sx={{
                  color: "green",
                  fontSize: "10vh",
                  cursor: "pointer",
                  position: "relative",
                  left: "15vh",
                  top: "20px",
                  padding: "10px",
                  textAlign: "center",
                }}
              />
            }
            content="Your Data, Your Control."
          />
          <Cards
            icon={
              <ThumbUpAltIcon
                sx={{
                  color: "green",
                  fontSize: "10vh",
                  cursor: "pointer",
                  position: "relative",
                  left: "15vh",
                  top: "20px",
                  padding: "10px",
                }}
              />
            }
            content="A Space for Positivity & Growth."
          />
        </motion.div>
      </section>

      <section className="section-three">
        <motion.h1
          ref={ref}
          whileInView={{
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Our Developers
        </motion.h1>
        <motion.div
          ref={ref}
          className="dev-container"
          whileInView={{ transition: { delay: 0.5 }, y: [0, 1] }}
          viewport={{ once: true }}
        >
          <motion.div
            ref={ref}
            whileInView={{
              transition: { delay: 0.5, duration: 0.5 },
              x: [200, 0],
              opacity: [0, 1],
            }}
            viewport={{ once: true }}
          >
            <DevCards
              img="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
              devName="Nandani Hada"
              devDesc="A passionate developer with a vision to make social media safer and more meaningful."
            />
          </motion.div>
          <motion.div
            whileInView={{
              transition: { delay: 1, duration: 0.5 },
              x: [-200, 0],
              opacity: [0, 1],
            }}
          >
            <DevCards
              img="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
              devName="Rishabh Gupta"
              devDesc="A creative mind who believes in simplicity and user experience. "
            />
          </motion.div>
        </motion.div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
