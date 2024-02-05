// src/App.js
import React from 'react';

import './styles/App.css';
import Navbar from './components/Navbar';
import menuItems from './logic/data'
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home menuItems={menuItems} />
    </div>
  );
};

export default App;
