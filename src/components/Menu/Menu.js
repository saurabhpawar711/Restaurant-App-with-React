import React, { useContext } from "react";

import "./Menu.css";
import CartContext from "../../cart-context/cartContext";

const Menu = () => {
  const cartCtx = useContext(CartContext);
  const menuList = [
    {
      id: 1,
      name: "Veg Burger",
      description: "Fresh Veggies Burger",
      price: 89,
    },
    {
      id: 2,
      name: "Chicken Burger",
      description: "Delicious Chicken Burger",
      price: 129,
    },
    {
      id: 3,
      name: "Egg Burger",
      description: "Delicious Egg Burger",
      price: 99,
    },
    {
      id: 4,
      name: "Veg Wrap",
      description: "Fresh Veggies Wrap",
      price: 119,
    },
  ];

  const addItemHandler = (item) => {
    const quantity = document.getElementById("quantity_" + item.id).value;
    cartCtx.addItem({ ...item, quantity: quantity });
  };

  return (
    <div className="menu">
      {menuList.map((item) => (
        <div className="item" key={item.id}>
          <div className="items">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <h2>&#8377;{item.price}</h2>
            </div>
            <div className="item-quantity">
              <div>
                <label style={{ fontWeight: "bold" }}>Quantity:</label>
                <input
                  id={"quantity_" + item.id}
                  type="number"
                  min={"1"}
                  max={"5"}
                  defaultValue={"1"}
                  className="quantity-input"
                />
              </div>
              <button className="add-btn" onClick={() => addItemHandler(item)}>
                +Add
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Menu;
