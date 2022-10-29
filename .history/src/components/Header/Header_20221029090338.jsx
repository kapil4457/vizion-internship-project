import React from "react";
import Logo from "./logo.png";
const Header = () => {
  return (
    <div className="main-header">
      <div className="left-header">
        <img src={Logo} alt="" />
      </div>
      <div className="right-header"></div>
    </div>
  );
};

export default Header;
