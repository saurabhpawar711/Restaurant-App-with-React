import React from "react";

import './Home.css';
import Summary from "./Summary";
import Menu from "../Menu/Menu";

const Home = () => {
  return (
    <div className="homePage">
      <Summary />
      <Menu />
    </div>
  );
};

export default Home;
