import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";
import CartItem from "./CartItem";

const ModalOverlay = (props) => {
  const cartItems = [
    { name: "Veg Burger", description: "Fresh Veggies Burger", price: 89 },
    {
      name: "Chicken Burger",
      description: "Delicious Chicken Burger",
      price: 129,
    },
  ];
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="item-details">
          {cartItems.map(item => (
            <CartItem />
          ))}
        </div>
        <div className="item-total">
          <h3>Total Amount</h3>
          <h3>&#8377;199</h3>
        </div>
        <div className="buttons">
          <button className="close-btn" onClick={props.closeCart}>
            Close
          </button>
          <button className="order-btn">Order</button>
        </div>
      </div>
    </div>
  );
};
const Modal = (props) => {
  const closeCartModal = () => {
    props.closeCart();
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay closeCart={closeCartModal} />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
