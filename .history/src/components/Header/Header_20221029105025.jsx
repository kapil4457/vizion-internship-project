import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
const Header = () => {
  return (
    <div className="main-header">
      <div className="side-header">
        <h2>Menu</h2>
        <div>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/club">Club</NavLink>
          <NavLink to="/contact">Get in Touch</NavLink>
        </div>
      </div>

      <NavLink to="/" className="left-header">
        <img src={Logo} alt="" />
      </NavLink>
      <div className="right-header">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/club">Club</NavLink>
        <NavLink to="/contact">Get in Touch</NavLink>
      </div>
      <div className="right-ham">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
