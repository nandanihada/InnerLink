import React, { useRef, useState } from "react";
import "../styles/Profile.css";
import { motion, useInView } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function Profile() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const navigate = useNavigate();
  const [isActive, setActive] = useState("profile");
  return (
    <>
      <motion.div
        className="arrow-container"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <ArrowBackIcon
          sx={{
            color: "black",
            fontSize: "10vh",
            cursor: "pointer",
            position: "absolute",
            left: "20px",
            top: "10px",
            borderRadius: "50%",
            padding: "20px",
            color: "white",
            backgroundColor: "rgba(61, 150, 9, 0.6)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
          onClick={() => {
            navigate("/feed");
          }}
        />
      </motion.div>

      <motion.div
        className="profile-main-container"
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
      >
        <motion.h1
          className="profile-heading"
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          MANAGE YOUR PROFILE
        </motion.h1>
        <div className="profile-outer-container">
          {isActive === "profile" ? (
            <div className="profile-container">
              <motion.img
                src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
                className="profile-img"
                alt=""
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="profile-content-container"
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="profile-name">Name</h3>
                <h2 className="profile-name-content">
                  {localStorage.getItem("username").toUpperCase()}
                </h2>
              </motion.div>
              <motion.div
                className="profile-content-container"
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <h3 className="profile-email">Email</h3>
                <h3 className="profile-name-content">something@gmail.com</h3>
              </motion.div>
              <motion.div
                className="profile-content-container"
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <h3 className="profile-post">Post</h3>
                <h3 className="profile-name-content">0</h3>
              </motion.div>
            </div>
          ) : (
            <motion.div className="profile-container">
              <motion.img
                src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
                className="profile-img"
                alt=""
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.h2
                className="profile-about"
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, voluptatibus ea? Neque voluptas unde impedit illo
                aliquam vero nobis quod delectus facere magnam enim ex minima
                doloribus fuga, reprehenderit labore?
              </motion.h2>
            </motion.div>
          )}
        </div>
        <div className="profile-buttons">
          <motion.button
            className="btn-edit"
            onClick={() => setActive("about")}
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            ABOUT
          </motion.button>
          <motion.button
            className="btn-edit"
            onClick={() => setActive("profile")}
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Edit Profile
          </motion.button>
          <motion.button
            className="btn-changePass"
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Change Password
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

export default Profile;
