import React , {Component} from "react";
import { ReactDOM } from "react";
import './navbar.css'
import Product from "./products.js";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { hover } from "@testing-library/user-event/dist/hover";
import { Slide } from 'react-slideshow-image';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { QRCode } from 'antd';
import image from'../assests/bnb13.PNG'
function Navbar()
{


return  (
<section class="home-page-top">
                    <div class="logo-right"><img src={image}></img></div>
                
                    <span><a href="/">Home</a></span>
                    <div class="dropdown">
                        <span><a href="/products">Products</a></span>
                        <div class="dropdown_item">
                            <a href="/products/whey/">Whey</a>
                            <a href="/products/creatine/">Creatine</a>
                            <a href="/products/preworkout/">Pre Workout</a>
                            <a href="/authenticity/">Check Authenticity</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <span><a>About us</a></span>
                        <div class="dropdown_item">
                            <a href="/about-us/faqs/">FAQs</a>
                            <a href="/about-us/journey/">Our Journey</a>
                            <a href="/about-us/mission/">Mission</a>
                            <a href="/reviews">Reviews</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <span><a>Contact</a></span>
                        <div class="dropdown_item">
                            <a href="/contact-us/redressal/">Complaints</a>
                            <a href="/contact-us/business-enquiries/">Business enquiries</a>
                            <a href="/contact-us/reach-us/">Call/Email/Whatsapp</a>
                        </div>

                    </div>
                    <span ><a class="cart" href="/cart"><ShoppingCartIcon/></a></span>
                    
                </section>
);

}

export default Navbar;