import React , {Component} from "react";
import { ReactDOM } from "react";
import './about-us-journey.css'
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


class About_Us_Journey extends Component
{
    
    constructor(props) {
        super(props);
        this.slideRef = React.createRef();
        this.state = {
          data : [],
          data_category : true,
          slideImages : [
            {
              url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
              caption: 'Slide 1'
            },
            {
              url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
              caption: 'Slide 2'
            },
            {
              url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
              caption: 'Slide 3'
            },
          ]
          
          };
        };
      
    componentDidMount() {

		let data ;
		axios.get('http://localhost:8000/user/')
		.then(res => {
            
			data = res.data.data;
			this.setState({
				data : data	

			});
		})
		.catch(err => {})
        
        
	};


    get_component(props)
    {
        let data_category=true
        if(props)
        {
        {
        this.setState({
            
            data_category:false
            
        });}
    }
    console.log(props)
    console.log(data_category)
        
    }

   render(){
    return (     
        <div class="main-page">
                <section class="faqs">
                    <p class="mid_text">Sign up for the newsletter for more details on your journey</p>
                </section>
                <section>
                    <h class="fr">Journey</h>
                </section>
                <section class="faqss">
                    <p class="q1">Q. Why BNB?</p>
                    <p class="q2"> We are the most affordable and provide perfect blend of protein and essentials</p>
                    <p class="q1">Q. Why BNB?</p>
                    <p class="q2"> We are the most affordable and provide perfect blend of protein and essentials</p>
                    <p class="q1">Q. Why BNB?</p>
                    <p class="q2"> We are the most affordable and provide perfect blend of protein and essentials</p>
                    <p class="q1">Q. Why BNB?</p>
                    <p class="q2"> We are the most affordable and provide perfect blend of protein and essentials</p>
                </section>
                <section class="footer">
                    <div>
                        <div class="d">Services</div>
                        <div> Customer Support</div>
                        <div> FAQs</div>
                        <div> Contact</div>
                    </div>
                    <div>
                        <h class="e">About BNB</h>
                        <div>The Journey</div>
                        <div>Why us?</div>
                        <div>The process</div>
                    </div>
                    <div>
                        <h class="f">Available on</h>
                        <div><Link to="https://www.flipkart.com/">Flipkart</Link></div>
                        <div><Link to="https://www.amazon.in/">Amazon</Link></div>
                        <div><Link to="https://www.snapdeal.in/">Snapdeal</Link></div>
                    </div>
                    <div>
                        <h class="g">Follow Us</h>
                        <div>Instagram</div>
                        <div>Facebook</div>
                        <div>Twitter</div>
                    </div>
                    <div>
                        <h class="h">Reach us at</h>
                        <div>xyz@gmail.com</div>
                        <div>011-123456</div>
                        <div></div>
                    </div>
                </section>
        </div>
    )
   };
}

export default About_Us_Journey

