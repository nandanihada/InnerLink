import React from "react";
import "../styles/Newsfeed.css";
import { useState, useEffect } from "react";
import Newscard from "../component/Newscard";
import Footer from "../component/Footer";

function Newsfeed() {

  const [news, setNews] = useState([]);
  useEffect(() => {
    
    fetch("http://localhost:8080/get/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.log("Error fetching news",err));     
  },[]);
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
        {news.map((article,index) => (
          <Newscard key={index} article={article} />
        ))}
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Newsfeed;
