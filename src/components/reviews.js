import React , {Component} from "react";
import { ReactDOM } from "react";
import './reviews.css'
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
import {  Button, Checkbox, Form, Input  } from 'antd';
import { RateReviewTwoTone, RemoveTwoTone } from "@material-ui/icons";

function Reviews()
{
    
    const [code,setCode] = useState();
    const [submit,submitted] = useState(false);
    const [auth,setAuth] = useState(false);
    const[color,setColor] = useState("failure");
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[phone,setPhone] = useState();
    const[feedback,setfeedback] = useState();
    const [value,setValue] = useState();
    const[reviews,setreviews] = useState([]);
    const[slideImages,setslideImages]=useState([
        {
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 1'
        },
       
      ]);
   
    const componentDidMount = () => {
        
    
		axios.post('http://localhost:8000/reviews/add/' , {"name":name , "email":email,"phone":phone,"feedback":feedback})
		.then(res => {
			if(res.data["data"]==="success")
            {
                alert('added');
                window.location.reload();
                

            }
            else{
                alert('not added');   
                window.location.reload();       
            }
		})
		.catch(err => {})
	};
    const reviewloader = () => {
        axios.get('http://localhost:8000/reviews/')
		.then(res => {
            console.log(res.data.data)
            setreviews(res.data.data);
		})
    };
    reviewloader();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name);
        console.log(feedback);
        componentDidMount();
    }


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
                    <span><a href="/authenticity">Authenticity checker</a></span>
                    <span><a href="/reviews">Reviews</a></span>
                    
                </section>
            
        
        
                <section>
                    <p class="mid_text">Sign up for the newsletter for more details on your journey</p>
                </section>
                <div>
                        {slideImages.map((slideImage, index)=> (
                            <img src={slideImage.url} alt={slideImage.caption}></img>
                        )

                        )
                        };
                    
                       
                </div>
                <div>
                    
                        {reviews.map((review,index)=>(
                            <div class="fgg1">
                               
                               <p>{review.name}</p>
                               <p>{review.feedback}</p>
                            
                            </div>
                        ))}
                    
                </div>
                <div>
                    
                       
                    <p class="jknb2">Show us the iron love!</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit} >
                        <div class="f1">
                        <label class="jknb">
                        Name:
                        <input
                            type="text"
                            onChange={(e)=>setName(e.target.value)}
                            required
                        />
                        </label>
                        </div>
                        <div class="f1">
                        <label class="jknb">
                        Phone Number:
                        <input
                            type="text"
                            onChange={(e)=>setPhone(e.target.value)}
                            required
                        />
                        </label>
                        </div>
                        <div class="f1">
                        <label class="jknb">
                        Email:
                        <input
                            type="text"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        </label>
                        </div>
                        <div class="f1">
                        <label class="jknb">
                        Feedback:
                        <input
                            type="text"
                            onChange={(e)=>setfeedback(e.target.value)}
                            required
                        />
                        
                        
                        </label>
                        </div>
                        <div class="f1">
                         <section>
                            <button>Submit</button>
                        </section> 
                        </div>
                        <p >{color}</p>
                     </form>
                     
                     {auth}
                </div>
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
    );
   
}

export default Reviews

