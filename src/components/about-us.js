import React from "react";
import { ReactDOM } from "react";
import './about-us.css'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { Outlet, Link } from "react-router-dom";
function About_us()
{
   
    return (
        <div class="main-page">
            <ul class="home-page-top">
                <div class="mid-top"></div>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
                <li class="logo-right"><img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg"></img></li>
            </ul>
            <section>
                <p class="mid_text">Sign up for the newsletter for more details on your journey</p>
            </section>
            
        </div>
   );
}

export default About_us