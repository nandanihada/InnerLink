import React from "react";
import "../styles/Newsfeed.css";
import { useState, useEffect } from "react";
import Newscard from "../component/Newscard";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

function Newsfeed() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://innerlink.onrender.com/get/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.log("Error fetching news", err));
  }, []);

  // Function to handle view button click
  const handleViewClick = (article) => {
    navigate("/full-news", { state: { article } }); // Pass the article data
  };

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
        {news.map((article, index) => (
          <Newscard
            key={index}
            article={article}
            onViewClick={() => handleViewClick(article)} // Pass the handleViewClick function
          />
        ))}
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Newsfeed;