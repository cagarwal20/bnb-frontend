import React , {Component} from "react";
import { ReactDOM } from "react";
import './cart.css'
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


class Cart extends Component
{
    
    constructor(props) {
        super(props);
        this.slideRef = React.createRef();
        this.state = {
          data : [],
          cart_data :[],
          data_category : true,
          slideImages : [
            {
              url: "C:\Users\cagar\Downloads\WhatsApp Image 2023-02-05 at 12.48.30 PM (1).jpeg",
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
        let cart_data;
		axios.get('http://localhost:8000/user/')
		.then(res => {
            
			data = res.data.data;
			this.setState({
				data : data	

			});
		})
        
		.catch(err => {})
        console.log(this.data)
        axios.get('http://localhost:8000/user/cart')
		.then(res => {
			cart_data = res.data.data;
			this.setState({
				cart_data:cart_data

			});
            
		})
		.catch(err => {})
        
        
	};


   render(){
    return (     
        <div class="main-page">
                <section class="home-page-top">
                    <div class="logo-right"><img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg"></img></div>
                    
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
                    <span><a href="/contact-us">Contact</a></span>
                    <span ><a class="cart" href="/cart"><ShoppingCartIcon/></a></span>
                    
                </section>
            
        
        
                <section>
                    <p class="mid_text">Sign up for the newsletter for more details on your journey</p>
                </section>
                <div>
                    <section>
                        <span>
                            <p class="colorr">Id</p>
                            <p class="colorr1">Name</p>
                            <p class="colorr2">Cost</p>
                            <p class="colorr2">Disc</p>
                            <p class="colorr2"> Value</p>
                        </span>
                    {this.state.cart_data.map((cart_item, index)=> (
                            <div> 
                                
                                    
                                    <div class="colorr">{cart_item.cart_details.p_id}</div>
                                    <div class="colorr1">{cart_item.cart_details.name}</div>
                                    <div class="colorr2">{cart_item.cart_details.mrp}</div>
                                    <div class="colorr2">{cart_item.cart_details.disc}</div>
                                    <div class="colorr2">{cart_item.cart_details.cmp}</div>
            
                            </div>
                            )

                            )
                            }
                    </section>
                </div>
        </div>
    )
   };
}

export default Cart;

