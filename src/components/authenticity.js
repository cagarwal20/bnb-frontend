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
import { Spin } from 'antd';
import Navbar from "./navbar";
function Authenticity()
{
    
    const [code,setCode] = useState();
    const [submit,submitted] = useState(false);
    const [auth,setAuth] = useState(false);
    const[color,setColor] = useState("failure");
    const[h,seth] = useState(1);
    const[news,setnews]= useState([]); 
    const[loading,setloading] = useState(false);
    const componentDidMount = () => {


		axios.get('https://bnb-backend-sandy.vercel.app/authenticity/check/' , {params:{"code":code}})
		.then(res => {
			if(res.data["success"]=="authentic")
            {   
                setloading(false)
                alert('original')
                setAuth(true);
                setColor("success");
                window.location.reload();  
            }
            else{
                setloading(false)
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
        setloading(true)
        console.log(code);
        componentDidMount();
    }


    return (     
        <div class="main-page">
                
            
        
        
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
                     <div class="loader">{loading ? <Spin/> : <></> }</div>
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

