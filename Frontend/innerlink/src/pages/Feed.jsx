import React, { useEffect } from "react";
import "../styles/Feed.css";
import FaceIcon from "@mui/icons-material/Face";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";

function Feed() {
  const [getPost, setPost] = React.useState([]);

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
                    <div className="postCard-img">
                      <img
                        src={post.postImage}
                        alt="Post-Image Comes here!"
                        className="postCard-img"
                      />
                    </div>
                    <h2 className="postCard-title">{post.title}</h2>
                    <p className="postCard-caption">{post.caption}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="post-container">
                <div className="postCard">
                  <div className="postCard-img">
                    <img src="" alt="No Post" className="postCard-img" />
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
