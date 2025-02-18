import React from "react";
import "../styles/Feed.css";
import FaceIcon from "@mui/icons-material/Face";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";


function Feed() {

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
        <section class="layout">
          <div class="sidebar">
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
          <div class="body">
            <div className="post-container">
             
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Feed;
