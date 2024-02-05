// src/App.js
import React, { useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import { router, RouterProvider } from './router';
import { SelectedItemContextProvider } from './pages/Home/selectedItemContext';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SelectedItemContextProvider>
        <RouterProvider router={router} />
      </SelectedItemContextProvider>
    </div>
  );
};

export default App;
