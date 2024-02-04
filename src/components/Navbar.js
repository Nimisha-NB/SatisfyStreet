// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SatisfyStreet</div>
      <div className="nav-buttons">
        <button className="nav-button">Home</button>
        <button className="nav-button">My Cart</button>
        <button className="nav-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
