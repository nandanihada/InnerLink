import React from "react";
import "../styles/Newsfeed.css";
import Newscard from "../component/Newscard";
import Footer from "../component/Footer";
function Newsfeed() {
  return (
    <>
      <div className="headin">
        <img
          className="img"
          src="https://i.postimg.cc/52fHzDqJ/earth.gif"
          alt="Description of image"
        />
        <h1> News</h1>
      </div>
      <div className="together">
        <Newscard />
        <Newscard />
        <Newscard />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Newsfeed;
