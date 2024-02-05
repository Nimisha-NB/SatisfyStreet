// src/components/Menu.js
import React, { useContext } from 'react';
import SelectedItemContext from '../pages/Home/selectedItemContext';
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

const MenuItem = ({ item }) => {
  const { selectedItems, setSelectedItems } = useContext(SelectedItemContext);
  const selected = selectedItems.includes(item.name);

  const handleClick = (e) => {
    if (selectedItems.includes(item.name)) {
      setSelectedItems(selectedItems.filter((e) => e !== item.name));
    } else {
      setSelectedItems([...selectedItems, item.name])
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




