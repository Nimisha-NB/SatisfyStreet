// src/components/Navbar.js
import React from 'react';
import { stylize } from '../utils/stylize';

const Navbar = () => {
  stylize(`
    a {
      text-decoration: none;
    }
  `)
  return (
    <nav className="navbar">
      <div className="logo">SatisfyStreet</div>
      <div className="nav-buttons">

        <a href='/' className="nav-button">Home</a>
        <a href='/mycart' className="nav-button">My Cart</a>
        <a href='/logout' className="nav-button">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
