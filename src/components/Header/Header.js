import React, { useState } from "react";

import "./Header.css";
import HeaderCart from "./HeaderCart";
import Modal from "../Cart/Modal";

const Header = () => {
  const [modal, setModal] = useState(false);

  const showCart = () => {
    setModal(true);
  };

  const closeCartModal = () => {
    setModal(false);
  };
  return (
    <React.Fragment>
      {modal && <Modal closeCart={closeCartModal} />}
      <div className="nav-header">
        <h2>Meals Stop</h2>
        <HeaderCart showCart={showCart} />
      </div>
    </React.Fragment>
  );
};

export default Header;
