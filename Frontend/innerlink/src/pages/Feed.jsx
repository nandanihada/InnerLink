import React, { useEffect } from "react";
import "../styles/Feed.css";
import FaceIcon from "@mui/icons-material/Face";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Feed() {
  const [getPost, setPost] = React.useState([]);

  const handleLikes = async (postId) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch(
        `http://localhost:8080/post/likes/${postId}`,
        {
          headers: {
            method: "POST",
            Authorization: "Basic " + authToken,
          },
        }
      );
      if (response.ok) {
        window.reload();
      } else {
        alert("Unable to Fetch the Post");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getPostData = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch("http://localhost:8080/get/all", {
        headers: {
          method: "GET",
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
      <div className="full-container">
        {/* <PersistentDrawerLeft/> */}
        <div className="feed-heading-container">
          <h1 className="feed-heading">
            Hey {localStorage.getItem("username")}, Here is your Feed
          </h1>
        </div>
        <section className="layout">
          <div className="sidebar">
            <div className="item-main-container">
              <div className="item1">
                <div className="item-container">
                  <img src="" alt="" />
                  <FaceIcon
                    sx={{
                      fontSize: "7vh",
                      color: "black",
                      cursor: "pointer",
                      borderRadius: "50%",
                      padding: "20px",
                      transition: "all 1s ease",
                      "&:hover": { backgroundColor: "green", color: "white" },
                    }}
                  />
                  <h2>Profile</h2>
                </div>
              </div>
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
                  />
                  <h2>News</h2>
                </div>
              </div>
              <div className="item3">
                <div className="item-container">
                  <img src="" alt="" />
                  <DynamicFeedIcon
                    sx={{
                      fontSize: "7vh",
                      color: "black",
                      cursor: "pointer",
                      borderRadius: "50%",
                      padding: "20px",
                      transition: "all 1s ease",
                      "&:hover": { backgroundColor: "green", color: "white" },
                    }}
                  />
                  <h2>Feed</h2>
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
          </div>
          <div className="body">
            {getPost.length > 0 ? (
              <div className="post-container">
                {getPost.map((post) => (
                  <div className="postCard" key={post.postid}>
                    <h2 className="postCard-title">{post.title}</h2>
                    <div className="postCard-img-container">
                      <img
                        src="https://cdn.dribbble.com/users/2071065/screenshots/6559618/attachments/1401967/dribble_4-19.png?resize=400x300&vertical=center"
                        alt="Post-Image Comes here!"
                        className="postCard-img"
                      />
                    </div>
                    <div className="postCard-stat-container">
                      <button className="btn-like" onClick={handleLikes}>
                        <FavoriteBorderIcon className="like-icon" />
                        <span className="postCard-likes">
                          {post.likes}</span>
                      </button>
                    </div>
                    <p className="postCard-caption">{post.caption}</p>
                  </div>
                ))}
              </div>
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
          </div>
        </section>
      </div>
    </>
  );
}

export default Feed;
