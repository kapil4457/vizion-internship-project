import React from "react";
import "./HomeCard.css";
import Image from "./cardImage.png";
const HomeCard = ({ item }) => {
  return (
    <div className="home-card">
      <img src={Image} alt="" />
      <div className="card-info">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
