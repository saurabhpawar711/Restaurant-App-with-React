import React from "react";

import "./Menu.css";

const Menu = () => {
  const menuList = [
    { name: "Veg Burger", description: "Fresh Veggies Burger", price: 89 },
    {
      name: "Chicken Burger",
      description: "Delicious Chicken Burger",
      price: 129,
    },
    { name: "Egg Burger", description: "Delicious Egg Burger", price: 99 },
    { name: "Veg Wrap", description: "Fresh Veggies Wrap", price: 119 },
  ];
  return (
    <div className="menu">
      {menuList.map((item) => (
        <div className="item">
          <div className="items">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <h2>&#8377;{item.price}</h2>
            </div>
            <div className="item-quantity">
              <div>
                <label style={{fontWeight: "bold"}}>Quantity:</label>
                <input type="number" value={1} className="quantity-input" />
              </div>
              <button className="add-btn">+Add</button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Menu;
