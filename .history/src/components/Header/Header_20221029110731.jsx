import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
  const [width, setWidth] = useState(30);
  return (
    <div className="main-header">
      <div
        className="side-header"
        style={{ transform: `translateX(${width}rem)` }}
      >
        <CloseIcon
          onClick={() => {
            setWidth(30);
          }}
        />
        <h2>Menu</h2>

        <NavLink
          to="/products"
          onClick={() => {
            setWidth(30);
          }}
        >
          Products
        </NavLink>
        <NavLink to="/club">Club</NavLink>
        <NavLink to="/contact">Get in Touch</NavLink>
      </div>

      <NavLink to="/" className="left-header">
        <img src={Logo} alt="" />
      </NavLink>
      <div className="right-header">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/club">Club</NavLink>
        <NavLink to="/contact">Get in Touch</NavLink>
      </div>
      <div
        className="right-ham"
        onClick={() => {
          setWidth(0);
        }}
      >
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
