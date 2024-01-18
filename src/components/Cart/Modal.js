import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./Modal.css";
import CartItem from "./CartItem";
import CartContext from "../../cart-context/cartContext";

const ModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.items.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="item-details">
          {cartCtx.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="item-total">
          <h3>Total Amount</h3>
          <h3>&#8377;{totalAmount}</h3>
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
