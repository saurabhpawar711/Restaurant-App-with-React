import React from "react";

import "./CartItem.css";

const CartItem = () => {
  return (
    <div>
      <div className="cart-item">
        <div className="item-details">
          <div className="item-name">Veg Burger</div>
          <div className="price-quantity">
            <div className="item-price">&#8377;119</div>
            <div className="item-quantities">&times;2</div>
          </div>
        </div>
        <div className="buttons">
          <button className="btn">+</button>
          <button className="btn">-</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
