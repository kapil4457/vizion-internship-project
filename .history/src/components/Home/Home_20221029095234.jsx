import React from "react";
import { data } from "../../item";
import "./Home.css";
import HomeCard from "./HomeCard";
const Home = () => {
  return (
    <div className="main-home">
      <h2 className="heading">Lorem ipsum dolor sit amet consectetur</h2>

      <div className="home-card-container">
        {data.map((item, key) => {
          <p>hii</p>;
        })}
      </div>
    </div>
  );
};

export default Home;
