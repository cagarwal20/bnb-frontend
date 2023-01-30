import React, { Component } from "react";
import { ReactDOM } from "react";
import './product.css'

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
class Product extends Component
{
    constructor(props) {
        super(props);
        this.slideRef = React.createRef();
        this.state = {
          data : [],
        }
    };
    componentDidMount(){
        let data ;
		axios.get('http://localhost:8000/products/' , { params: { product_type: this.props.asset_type } })
		.then(res => {
            
			data = res.data.data;
			this.setState({
				data : data	

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
                        <span><a href="products">Products</a></span>
                        <div class="dropdown_item">
                            <a href="/products/whey/">Whey</a>
                            <a href="/products/creatine/">Creatine</a>
                            <a href="/products/preworkout/">Pre Workout</a>
                        </div>
                    </div>
                    <span><a href="/contact-us">Contact us</a></span>
                    <span><a href="/about">About</a></span>
                    
            </section>
            <section>
                <p class="mid_text">Get ready to for the extravaganza</p>
            </section>
            <img  src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={1510} height={1000} alt="kf"></img>
           <section>
                {this.state.data.map((data, index)=> (
                        <div>   
                            <p class="products-text">{data.product_type} Collection</p>
                            <div>
                                <section>
                                    <div class="pl-1"><img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg"></img></div>
                                    <text class="products-list">{data.product_type} {data.flavour} flavour!</text>
                                    <text class="products-list">{data.size}</text>
                                    <text class="products-list-dis">Rs.{data.mrp}</text> <text class="products-list">{data.discount}%</text>                                  
                                    <text class="products-list">Rs.{data.price}</text>
                                </section>
                            </div>
                        </div>  
                            
                            
                            
                        )

                        )
                        };
            
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
    }
   
};

export default Product