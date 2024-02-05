// src/components/Menu.js
import React, { useContext } from 'react';
import { SelectedItemContext } from '../pages/Home/selectedItemContext';
import { stylize } from '../utils/stylize';

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

export const MenuItem = ({ item }) => {
  const { selectedItems, setSelectedItems } = useContext(SelectedItemContext);
  const selected = (selectedItems.filter((x) => x.name === item.name).length != 0);

  const handleClick = (e) => {
    const sel = selectedItems.filter((x) => x.name === item.name);
    if (sel.length != 0) {
      setSelectedItems(selectedItems.filter((x) => x.name !== item.name))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  return (
    <div className="menu-item" style={selected ? { border: '5px solid #e91e63' } : {}} onClick={handleClick}>
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




