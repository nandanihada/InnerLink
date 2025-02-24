import React, { useEffect, useRef } from "react";
import "../styles/Feed.css";
import FaceIcon from "@mui/icons-material/Face";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import AddIcon from "@mui/icons-material/Add";
import { motion, useInView, useScroll } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Menu } from "@mui/material";
import AccountMenu from "../component/AccountMenu";
import { useNavigate } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"

function Feed() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll();
  const isInView = useInView(ref, { once: true });
  const [getPost, setPost] = React.useState([]);
  const [newComment, setNewComment] = React.useState("");
  const [getLike, setLike] = React.useState(0);

  const navigate = useNavigate();
  const handleAddComment = async (postId) => {
    if (!newComment.trim()) return; // Prevent empty comments

    try {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch(
        `https://innerlink.onrender.com/post/comment/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + authToken,
          },
          body: JSON.stringify({ comment: newComment }),
        }
      );

      if (response.ok) {
        const updatedPost = getPost.map((post) => {
          if (post.postid === postId) {
            return {
              ...post,
              comments: [...post.comments, newComment],
            };
          }
          return post;
        });

        setPost(updatedPost);
        setNewComment("");
      } else {
        alert("Failed to add comment");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLikes = async (postId) => {
    try {
      const authToken = localStorage.getItem("authToken");
      setPost((prevPosts) =>
        prevPosts.map((post) => {
          if (post.postid === postId) {
            const hasLiked = post.likedBy?.includes(
              localStorage.getItem("username")
            );
            return {
              ...post,
              likes: hasLiked ? post.likes - 1 : post.likes + 1,
              likedBy: hasLiked
                ? post.likedBy.filter(
                    (user) => user !== localStorage.getItem("username")
                  )
                : [...(post.likedBy || []), localStorage.getItem("username")],
            };
          }
          return post;
        })
      );
      const response = await fetch(
        `https://innerlink.onrender.com/post/likes/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + authToken,
          },
        }
      );

      if (!response.ok) {
        setPost((prevPosts) =>
          prevPosts.map((post) => {
            if (post.postid === postId) {
              const hasLiked = post.likedBy?.includes(
                localStorage.getItem("username")
              );

              return {
                ...post,
                likes: hasLiked ? post.likes + 1 : post.likes - 1,
                likedBy: hasLiked
                  ? [...(post.likedBy || []), localStorage.getItem("username")]
                  : post.likedBy.filter(
                      (user) => user !== localStorage.getItem("username")
                    ),
              };
            }
            return post;
          })
        );
        alert("Failed to update like status");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getPostData = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch("https://innerlink.onrender.com/get/all", {
        headers: {
          method: "GET",
          Authorization: `Basic ${authToken}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        setPost(data);
      } else {
        alert("Unable to Fetch the Post");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPostData();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };
  return (
    <>
    <SpeedInsights>
      <motion.div
        className="full-container"
        whileInView={{ backgroundPositionY: ["120%", "100%"], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="bird-container"
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        ></motion.div>
        {/* <PersistentDrawerLeft/> */}
        <motion.div
          className="feed-heading-container"
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 1 }}
          ref={ref}
          viewport={{ once: true }}
        >
          <h1 className="feed-heading">
            Hey {localStorage.getItem("username")}, Here is your Feed
          </h1>
          <div className="menu-container">
            <motion.button
              className="profile"
              whileHover={{ scale: 1.1, fontSize: "30px" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/profile")}
            >
              {localStorage.getItem("username").charAt(0).toUpperCase()}
            </motion.button>
          </div>
        </motion.div>
        <section className="layout">
          <motion.div
            className="sidebar"
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            ref={ref}
          >
            <div className="item-main-container">
              <div className="item2">
                <div className="item-container">
                  <img src="" alt="" />
                  <NewspaperIcon
                    sx={{
                      fontSize: "7vh",
                      color: "black",
                      cursor: "pointer",
                      borderRadius: "50%",
                      padding: "20px",
                      transition: "all 1s ease",
                      "&:hover": { backgroundColor: "green", color: "white" },
                    }}
                    onClick={() => navigate("/newsfeed")}
                  />
                  <h2>News</h2>
                </div>
              </div>
              <div className="item3">
                <div className="item-container">
                  <img src="" alt="" />
                  <AddIcon
                    sx={{
                      fontSize: "7vh",
                      color: "black",
                      cursor: "pointer",
                      borderRadius: "50%",
                      padding: "20px",
                      transition: "all 1s ease",
                      "&:hover": { backgroundColor: "green", color: "white" },
                    }}
                    onClick={() => navigate("/post")}
                  />
                  <h2>New Post</h2>
                </div>
              </div>
              <div className="item4">
                <div className="item-container">
                  <img src="" alt="" />
                  <LogoutIcon
                    sx={{
                      fontSize: "7vh",
                      color: "black",
                      cursor: "pointer",
                      borderRadius: "50%",
                      padding: "20px",
                      transition: "all 1s ease",
                      "&:hover": { backgroundColor: "green", color: "white" },
                    }}
                    onClick={handleLogOut}
                  />
                  <h2>Log Out</h2>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="body"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            {getPost.length > 0 ? (
              <motion.div
                className="post-container"
                whileInView={{ opacity: [0, 1] }}
                viewport={{ once: true }}
              >
                {getPost.map((post) => (
                  <motion.div
                    className="postCard"
                    key={post.postid}
                    whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                    transition={{ duration: 0.1, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="postCard-title">{post.title}</h2>
                    <div className="postCard-img-container">
                      <img
                        src={post.postImage}
                        alt="Post-Image Comes here!"
                        className="postCard-img"
                      />
                    </div>
                    <div className="postCard-stat-container">
                      <motion.button
                        className="btn-like"
                        onClick={() => handleLikes(post.postid)}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgb(230, 42, 236)",
                          color: "white",
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FavoriteBorderIcon className="like-icon" />
                        <span className="postCard-likes">{post.likes}</span>
                      </motion.button>
                    </div>

                    <p className="postCard-caption">
                      <span className="postCard-postedBy">
                        {post.postedby + " : "}
                      </span>
                      {post.caption}
                    </p>
                    <div className="comments-container">
                      {post.comments && post.comments.length > 0 ? (
                        post.comments.map((comment, index) => (
                          <div key={index} className="comment">
                            <ul className="comment-list">
                              <li>{comment}</li>
                            </ul>
                          </div>
                        ))
                      ) : (
                        <p className="no-comments">No comments yet</p>
                      )}
                    </div>
                    <div className="add-comment-container">
                      <textarea
                        className="add-comment"
                        placeholder=" Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                      />
                    </div>
                    <motion.button
                      className="btn-comment"
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.1, backgroundColor: "green" }}
                      onClick={() => handleAddComment(post.postid, newComment)}
                    >
                      <span className="postCard-comments">
                        <ArrowForwardIcon
                          className="arrow-icon"
                          sx={{ fontSize: "4vh", fontWeight: "bold" }}
                        />
                      </span>
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="post-container">
                <div className="postCard">
                  <div className="postCard-img">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                      alt="No Post"
                      className="postCard-img"
                    />
                  </div>
                  <h2 className="postCard-title">No Post Available</h2>
                  <p className="postCard-caption">You can Post Now</p>
                </div>
              </div>
            )}
          </motion.div>
        </section>
      </motion.div>
      </SpeedInsights>
    </>
  );
}

export default Feed;
