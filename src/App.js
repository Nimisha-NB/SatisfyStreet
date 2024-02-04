// src/App.js
import React from 'react';
import Menu from './components/Menu';
import './App.css'; 
import Navbar from './components/Navbar';
// import images from './components/images'
import burger1 from './components/images/burger1.png';
import pizzaImg01 from "./components/images/pizza1.png";
import pizzaImg03 from "./components/images/pizza3.png";
import pizzaImg04 from "./components/images/pizza4.png";

import fastFood01 from "./components/images/chicken1.png";
import fastFood03 from "./components/images/chicken3.png";
import fastFood04 from "./components/images/chicken4.png";
import fastFood02 from "./components/images/chicken2.png";

import rice from "./components/images/rice02.png";
import slider2 from "./components/images/slider2.png";



import dessert02 from "./components/images/dessert02.png";
import dessert2 from "./components/images/dessert2.png";
import dessert3 from "./components/images/dessert3.png";
import coffe2 from "./components/images/coffe2.png";

const App = () => {
  const menuItems = [
    {
      name: 'Butter Chicken',
      description: 'Tender chicken in a rich, creamy tomato sauce.',
      price: 14.99,
      image: fastFood03, 
    },
    {
      name: 'Grilled Chicken',
      description: 'Grilled chicken in a rich, creamy tomato sauce.',
      price: 14.99,
      image: fastFood01, 
    },
    {
      name: 'Skewed Kabab',
      description: 'Chicken skewed with fresh tomato and basil.',
      price: 14.99,
      image: fastFood02, 
    },
    {
      name: 'Paneer Tikka Masala',
      description: 'Cottage cheese in a spicy, flavorful curry.',
      price: 12.99,
      image: fastFood04, 
    },
    {
      name: 'Margareta Pizza',
      description: 'Classic pizza with tomato, mozzarella, and basil.',
      price: 16.99,
      image: pizzaImg01, 
    },{
      name: 'Margareta Pizza',
      description: 'Classic pizza with tomato, mozzarella, and basil.',
      price: 16.99,
      image: pizzaImg03, 
    },{
      name: 'Margareta Pizza',
      description: 'Classic pizza with tomato, mozzarella, and basil.',
      price: 16.99,
      image: pizzaImg04, 
    },
    {
      name: 'Burger',
      description: 'Potatoes and cauliflower cooked with Indian spices.',
      price: 10.99,
      image: burger1, 
    },
    {
      name: 'Fragrant Rice',
      description: 'Potatoes and cauliflower cooked with Indian spices.',
      price: 10.99,
      image: rice, 
    },
    {
      name: 'Salad',
      description: 'Potatoes and cauliflower cooked with Indian spices.',
      price: 10.99,
      image: slider2, 
    },
    {
      name: 'Vanilla Cupcake',
      description: 'Decadent cupcake served with vanilla ice cream.',
      price: 8.99,
      image: dessert02,
    },
    {
      name: 'Peach Custard Cupcake',
      description: 'Peach cupcake served with custard ice cream.',
      price: 8.00,
      image: dessert2,
    },
    {
      name: 'Strawberry Cupcake',
      description: 'Vanilla cupcake served with Strawberry cream.',
      price: 9.00,
      image: dessert3,
    },
    {
      name: 'Cappachino',
      description: 'Vanilla cupcake served with Strawberry cream.',
      price: 9.00,
      image: coffe2,
    },
    // Add more delicious dishes!
  ];

  return (
    <div className="app">
      <Navbar />
      <h1><strong>Food Menu</strong></h1>
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default App;
