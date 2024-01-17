import React from "react";

import "./HeaderCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const HeaderCart = (props) => {
  const showcart = () => {
    props.showCart();
  }
  return (
    <div className="cart-header" onClick={showcart}>
      <FontAwesomeIcon icon={faCartShopping} />
      <h4>Your Cart</h4>
      <div className="cart-items">0</div>
    </div>
  );
};

export default HeaderCart;
