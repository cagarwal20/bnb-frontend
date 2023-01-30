import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage.js'
import Product from './components/products.js';
import About_us from './components/about-us.js';
import Check from './components/check.js';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
function App() {
    
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/products/" element={<Product />} />
        <Route path="/about-us/" element={<About_us />} />
        <Route path="/check/" element={<Check />}/>
        <Route path="/products/whey/" element={<Product asset_type="Whey Protein"/>} />
        <Route path="/products/creatine/" element={<Product asset_type="Creatine"/>}/>
        <Route path="/products/preworkout/" element={<Product asset_type="Pre Workout"/>}/>
      </Routes>
  </BrowserRouter> 
    );
  // return (
  //   <div className="App">
  //     <Homepage />
  //   </div>
  // );
}

export default App;
