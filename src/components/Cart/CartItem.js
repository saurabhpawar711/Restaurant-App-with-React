import React from "react";

import "./CartItem.css";

const CartItem = (props) => {
  const increaseQty = (id) => {
    props.increaseQty(id);
  };

  const decreaseQty = (id) => {
    props.decreaseQty(id);
  };

  return (
    <div>
      <div className="cart-item">
        <div className="item-details">
          <div className="item-name">{props.item.name}</div>
          <div className="price-quantity">
            <div className="item-price">&#8377;{props.item.price}</div>
            <div className="item-quantities">&times;{props.item.quantity}</div>
          </div>
        </div>
        <div className="buttons">
          <button className="btn" onClick={() => increaseQty(props.item.id)}>
            +
          </button>
          <button className="btn" onClick={() => decreaseQty(props.item.id)}>
            -
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
