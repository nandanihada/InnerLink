import React from "react";
import "../styles/Footer.css";
import {
  delay,
  easeIn,
  easeInOut,
  motion,
  useInView,
  useScroll,
} from "motion/react";
function Footer() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <>
      <motion.div
        className="footer-container"
        whileInView={{
          x: [100, 0],
          opacity: [0, 1],
          transition: { duration: 0.5 },
        }}
        ref={ref}
        viewport={{ once: true }}
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
                ref={ref}
                viewport={{ once: true }}
              >
                Home
              </motion.l1>
              <motion.l1
                whileInView={{
                  x: [100, 0],
                  opacity: [0, 1],
                  transition: { duration: 1, delay: 1.5 },
                }}
                ref={ref}
                viewport={{ once: true }}
              >
                Data Privacy
              </motion.l1>
              <motion.l1
                whileInView={{
                  x: [100, 0],
                  opacity: [0, 1],
                  transition: { duration: 1, delay: 2 },
                }}
                ref={ref}
                viewport={{ once: true }}
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
              ref={ref}
              viewport={{ once: true }}
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
