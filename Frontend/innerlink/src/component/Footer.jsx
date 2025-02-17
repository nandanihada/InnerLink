import React from "react";
import "../styles/Footer.css";
import { delay, easeIn, easeInOut, motion, useScroll } from "motion/react";
function Footer() {
  return (
    <>
      <motion.div
        className="footer-container"
        whileInView={{
          x: [100, 0],
          opacity: [0, 1],
          transition: { duration: 0.5},
        }}
      >
        <div className="footer">
          <div className="links-container">
            <ul className="links">
              <motion.l1
                whileInView={{
                  x: [100, 0],
                  opacity: [0, 1],
                  transition: { duration: 1, delay: 1 },
                }}
              >
                Home
              </motion.l1>
              <motion.l1
                whileInView={{
                  x: [100, 0],
                  opacity: [0, 1],
                  transition: { duration: 1, delay: 1.5 },
                }}
              >
               Data Privacy
              </motion.l1>
              <motion.l1
                whileInView={{
                  x: [100, 0],
                  opacity: [0, 1],
                  transition: { duration: 1, delay: 2 },
                }}
              >
                Terms and Condition
              </motion.l1>
            </ul>
            <motion.p
              style={{
                fontSize: "20px",
                padding: "5px",
                fontFamily: "Belanosima",
                textAlign: "center",
              }}
              whileInView={{
                opacity: [0, 1],
                transition: { duration: 1, delay: 3 },
              }}
            >
              Copyright &copy; 2025 InnerLink
            </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Footer;
