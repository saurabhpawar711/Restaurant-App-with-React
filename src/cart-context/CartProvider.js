import React, { useState } from "react";

import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    let flag = false;
    setItems((prevState) => {
      const updatedState = prevState.map((prevItem) => {
        if (prevItem.name === item.name) {
          flag = true;
          return {
            ...prevItem,
            quantity: Number(prevItem.quantity) + Number(item.quantity),
          };
        } else {
          return prevItem;
        }
      });
      if (flag) {
        return updatedState;
      } else {
        return [...prevState, { ...item }];
      }
    });
  };

  const deleteItemHandler = (id) => {};
  const cartContext = {
    items: items,
    quantity: 1,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
