import React from "react";
import ReactDOM from "react-dom";

import './Modal.css';

const ModalOverlay = (props) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="item-details">
          <h5>Veg Burger</h5>
        </div>
        <div className="item-total">
          <h3>Total Amount</h3>
          <h3>&#8377;199</h3>
        </div>
        <div className="buttons">
          <button className="close-btn">Close</button>
          <button className="order-btn">Order</button>
        </div>
      </div>
    </div>
  );
};
const Modal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
