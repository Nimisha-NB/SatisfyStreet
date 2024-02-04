// src/components/Menu.js
import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Menu;
