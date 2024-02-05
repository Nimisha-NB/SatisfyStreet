// src/App.js
import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import { router, RouterProvider } from './router';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
