import React, { useEffect, useState } from "react";
import "../styles/post.css";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Modal, Fade, Backdrop, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Post() {
  const [getPrivate, setPrivate] = useState(true);
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [open, setOpen] = useState(false);
  const authToken = localStorage.getItem("authToken");
  const [post, setPost] = useState({
    title: "",
    postImage: null,
    content: "",
    isPrivate: getPrivate,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpen = (e) => {
    e.preventDefault(); // Prevent page reload
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleClick = () => {
    setPrivate(!getPrivate);
    console.log(getPrivate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!authToken) {
      alert("Authentication token missing. Please log in again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/post/create-new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
        body: JSON.stringify({
          title: post.title,
          postImage: image,
          caption: post.caption,
          isPrivate: getPrivate,
        }),
      });

      // Check if response is empty
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      console.log("Upload successful:", data);
      console.log(image);
      if (response.ok) {
        alert("Post Created Successfully");
        navigate("/feed");
        handleClose();
      } else {
        alert(`Error: ${data.message || "Something went wrong"}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong while submitting the post.");
    }
  };

  const convertToBase64 = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.onerror = (error) => {
        console.error("Error converting file to base64:", error);
      };
    }
  };



  return (
    <>
      <ArrowBackIcon
        sx={{
          color: "black",
          fontSize: "10vh",
          cursor: "pointer",
          position: "absolute",
          left: "10px",
          top: "50%",
          borderRadius: "50%",
          padding: "20px",
          backgroundColor: "rgba(120, 224, 79, 0.45)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        onClick={() => {
          navigate("/feed");
        }}
      />
      <div className="post-heading-container">
        <motion.h1 whileInView={{ x: [100, 0], opacity: [0, 1] }}>
          SHARE WITH THE WORLD !
        </motion.h1>
        <motion.div
          className="body-container"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="https://i.postimg.cc/m2yLD11k/56c2f1ef08c560260b5a3699763121d8-removebg-preview.png"
            alt=""
            className="stick-img"
          />
          <motion.div className="bush-container">
            <img
              src="https://freesvg.org/img/1552219632.png"
              alt=""
              className="bush-img"
            />
            <img
              src="https://freesvg.org/img/1552219632.png"
              alt=""
              className="bush-img2"
            />
            <img
              src="https://freesvg.org/img/1552219632.png"
              alt=""
              className="bush-img3"
            />
            <img
              src="https://freesvg.org/img/1552219632.png"
              alt=""
              className="bush-img4"
            />
            <img
              src="https://freesvg.org/img/1552219632.png"
              alt=""
              className="bush-img5"
            />
            <img
              src="https://freesvg.org/img/1552219632.png"
              alt=""
              className="bush-img6"
            />
            <img
              src="https://freesvg.org/img/1552219632.png"
              alt=""
              className="bush-img7"
            />
          </motion.div>

          <motion.form action="POST" className="form-container">
            <h2 className="post-heading">Add a New Post</h2>
            <motion.input
              type="text"
              placeholder="Title"
              className="post-title"
              whileFocus={{ scale: 1.1 }}
              name="title"
              onChange={handleChange}
            />
            <div className="image-container">
              <motion.button
                className="post-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleOpen}
              >
                Upload the Post
              </motion.button>
              <img src={image} alt="" className="preview-image" />
            </div>

            <motion.input
              type="text"
              placeholder="Caption"
              className="post-description"
              whileFocus={{ scale: 1.1 }}
              name="caption"
              onChange={handleChange}
            />
            <label className="switch">
              <label className="post-isPrivate">PRIVATE</label>
              <input type="checkbox" />
              <span className="slider round" onClick={handleClick}></span>
            </label>
            <motion.button
              className="btn-post"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSubmit}
            >
              <ArrowForwardIcon sx={{ color: "white", fontSize: "4vh" }} />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
      <div className="ground-texture"></div>

      {/* Image Upload Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" component="h2">
              Upload an Image
            </Typography>
            <input type="file" accept="image/*" onChange={convertToBase64} />
            {image && (
              <img
                src={image}
                alt="Preview"
                style={{ width: "100%", marginTop: 10 }}
              />
            )}
            <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Post;
