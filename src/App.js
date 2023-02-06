import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage.js'
import Product from './components/products.js';
import About_us from './components/about-us.js';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Authenticity from './components/authenticity';
import Auth from './components/success';
import Reviews from './components/reviews';
import About_Us_FAQ from './components/about-us-faqs';
import About_Us_Mission from './components/about-us-mission';
import About_Us_Journey from './components/about-us-journey';
import Cart from './components/cart';
import Complaint from './components/complaints';
function App() {
    const [code,setCode] = useState(0)

    
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/products/" element={<Product />} />
        <Route path="/about-us/" element={<About_us />} />
        <Route path="/products/whey/" element={<Product asset_type="Whey Protein"/>} />
        <Route path="/products/creatine/" element={<Product asset_type="Creatine"/>}/>
        <Route path="/products/preworkout/" element={<Product asset_type="Pre Workout"/>}/>
        <Route path="/authenticity/" element={<Authenticity/>}/>
        <Route path="/reviews/" element={<Reviews/>}/>
        <Route path="/about-us/faqs" element={<About_Us_FAQ/>}/>
        <Route path="/about-us/journey" element={<About_Us_Journey/>}/>
        <Route path="/about-us/mission" element={<About_Us_Mission/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact-us/redressal" element={<Complaint/>}/>
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
