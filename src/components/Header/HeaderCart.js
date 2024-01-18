import React, { useContext } from "react";

import "./HeaderCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../cart-context/cartContext";

const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalQuantity = cartCtx.items.reduce(
    (acc, curr) => acc + Number(curr.quantity),
    0
  );

  const showcart = () => {
    props.showCart();
  };

  return (
    <div className="cart-header" onClick={showcart}>
      <FontAwesomeIcon icon={faCartShopping} />
      <h4>Your Cart</h4>
      <div className="cart-items">{totalQuantity}</div>
    </div>
  );
};

export default HeaderCart;
