// src/components/Navbar.js
import React from 'react';
import { stylize } from '../utils/stylize';


const excluded = ['logout'];

const checkIfExcludedRoute = (ecx) => {
  for (let i of ecx) {
    if (window.location.href.includes(i))
      return true;
  }
  return false;
}

const Navbar = () => {
  stylize(`
    a {
      text-decoration: none;
    }
  `)

  const isRoot = (window.location.href.split('/').pop() === '');

  if (isRoot || checkIfExcludedRoute(excluded)) {
    return <div />
  }

  return (

    <nav className="navbar">
      <div className="logo">SatisfyStreet</div>
      <div className="nav-buttons">

        <a href='/home' className="nav-button">Home</a>
        <a href='/mycart' className="nav-button">My Cart</a>
        <a href='/logout' className="nav-button">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
