import React from "react";
import "./HomeCard.css";
import Image from "./cardImage.png";
const HomeCard = ({ item }) => {
  return (
    <div className="home-card">
      <img src={Image} alt="" />
    </div>
  );
};

export default HomeCard;
