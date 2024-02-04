// src/components/MenuItem.js
import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="item-img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className="price">${item.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
