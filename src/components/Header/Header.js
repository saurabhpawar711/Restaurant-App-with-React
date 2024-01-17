import React from "react";

import "./Header.css";
import HeaderCart from "./HeaderCart";

const Header = () => {
  return (
    <div className="nav-header">
      <h2>Meals Stop</h2>
      <HeaderCart />
    </div>
  );
};

export default Header;
