import React from "react";

const CartContext = React.createContext({
  items: [],
  quantity: 1,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;