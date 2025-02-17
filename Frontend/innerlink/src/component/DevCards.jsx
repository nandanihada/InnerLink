import React from "react";
import "../styles/DevCards.css";
function DevCards(props) {
  return (
    <>
      <div className="dev-card-container">
        <div className="dev-card">
          <img
            src={props.img}
            alt=""
            className="dev-img"
          />
          <div className="dev-info">
            <h3>{props.devName}</h3>
            <p>
             {props.devDesc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevCards;
