import React from 'react';
import "../styles/Newscard.css";

function Newscard({ article, onViewClick }) {
  // Function to handle the "View" button click
  const handleViewClick = () => {
    if (article.url) {
      window.open(article.url, "_blank"); // Open the URL in a new tab
    } else {
      console.error("No URL found for this article.");
    }
  };

  return (
    <>
      <article className="card1">
        <section className="card__hero1">
          <header className="card__hero-header1">
            <span>{article.publishedAt}</span> {/* Use publishedAt for time */}
            <div className="card__icon1">
              <svg
                height="20"
                width="20"
                stroke="currentColor"
                strokeWidth="1.5" // Use camelCase for React props
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  strokeLinejoin="round" // Use camelCase for React props
                  strokeLinecap="round" // Use camelCase for React props
                ></path>
              </svg>
            </div>
          </header>

          <p className="card__job-title1">
            <img src={article.urlToImage} alt="" className="chuza" />
            {article.title}
          </p>
        </section>
          
        <footer className="card__footer1">
          {/* Centered "View" button */}
          <button className="card__btn1" onClick={handleViewClick}>
            View
          </button>
        </footer>
      </article>
    </>
  );
}

export default Newscard;