import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="main-header">
      <NavLink className="left-header">
        <img src={Logo} alt="" />
      </NavLink>
      <div className="right-header">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/club">Club</NavLink>
        <NavLink to="/contact">Get in Touch</NavLink>
      </div>
    </div>
  );
};

export default Header;
