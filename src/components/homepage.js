import React , {Component} from "react";
import { ReactDOM } from "react";
import './homepage.css'
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


class Homepage extends Component
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
                <section class="home-page-top">
                    <div class="logo-right"><img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg"></img></div>
                    
                    <span><a href="/">Home</a></span>
                    <div class="dropdown">
                        <span><a href="/products">Products</a></span>
                        <div class="dropdown_item">
                            <a href="/products/whey/">Whey</a>
                            <a href="/products/creatine/">Creatine</a>
                            <a href="/products/preworkout/">Pre Workout</a>
                        </div>
                    </div>
                    <span><a href="/contact-us">Contact</a></span>
                    <span><a href="/about">About</a></span>
                    
                </section>
            
        
        
                <section>
                    <p class="mid_text">Sign up for the newsletter for more details on your journey</p>
                </section>
                <div>
                    
                        {this.state.slideImages.map((slideImage, index)=> (
                            <img src={slideImage.url} alt={slideImage.caption}></img>
                        )

                        )
                        };
                    
                </div>
            
                <p class="team">Our Products</p>
                <section class="images">
                    <li><img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={400} alt="jj"></img><figcaption class="a">Whey protein 4.6 Ratings 1261 Reviews</figcaption></li>
                    <li><img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={400} alt="jj"></img><figcaption class="b">Creatine 4.7 Ratings 971 Reviews</figcaption></li>
                    <li><img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={400} alt="kj"></img><figcaption class="c">Pre Workout 4.3 Ratings 761 Reviews</figcaption></li>
                </section>
                <p class="team">Managed with Muscled Toned by Trainers</p>
                <section class="home-page-bottom">
                    <li><img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={400}></img></li>
                    <li><img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={400}></img></li>
                    <li><img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={400}></img></li>
                </section>
                <p class="team">Go online start pumping!!</p>
                <section>
                    <div class="sm">
                    <img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={380}></img>
                    <img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={380}></img>
                    <img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={380}></img>
                    <img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={380}></img>
                    </div>
                    <div class="sm">
                    <img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={380}></img>
                    <img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={380}></img>
                    <img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={380}></img>
                    <img src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={380}></img>
                    </div>
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

export default Homepage

