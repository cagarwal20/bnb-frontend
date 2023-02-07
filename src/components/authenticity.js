import React , {Component} from "react";
import { ReactDOM } from "react";
import './authenticity.css'
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
import {Alert,Button} from 'antd';


function Authenticity()
{
    
    const [code,setCode] = useState();
    const [submit,submitted] = useState(false);
    const [auth,setAuth] = useState(false);
    const[color,setColor] = useState("failure");
    const[h,seth] = useState(1);
    const[news,setnews]= useState([]); 
    const componentDidMount = () => {


		axios.get('http://localhost:8000/authenticity/check/' , {params:{"code":code}})
		.then(res => {
			if(res.data["success"]=="authentic")
            {   
                alert('original')
                setAuth(true);
                setColor("success");
                window.location.reload();  
            }
            else{
                alert('Fake');
                setColor("failure");
                window.location.reload();  
            }
		})
		.catch(err => {})
        axios.get('https://live-fitness-and-health-news.p.rapidapi.com/news/',{params:{"newspaperId":"Harvard Health Publishing"},headers:{
            'X-RapidAPI-Key': '0930f71fc8mshfb60c5b06ee27a7p1dd996jsna79e9df462ea',
            'X-RapidAPI-Host': 'live-fitness-and-health-news.p.rapidapi.com'
          }}).then(res=>{
            {console.log(res)}
            setnews(res.data.data)
          })
          .catch(err=>{})
        
	};
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(code);
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
                    
                <p class="jknb2">Check it now!</p>       
                    
                </div>
                <div>
                    <form onSubmit={handleSubmit} class="feedback-form">
                        <label>
                        <input
                            type="text"
                            onChange={(e)=>setCode(e.target.value)}
                        />
                        </label>
                        <span>
                            <button>Submit</button>
                        </span>
                        <p >{color}</p>
                     </form>
                     {auth}
                </div>
                <section>
                    <p>Hiii</p>
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
                        <div><faTwitter/></div>
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

export default Authenticity

