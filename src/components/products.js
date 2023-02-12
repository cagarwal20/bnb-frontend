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
import { Carousel ,Dropdown,Space} from "antd";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import axios from "axios";
import  { MenuProps } from "antd";
import Navbar from "./navbar";
import { Loader } from 'rsuite';
import { Spin } from 'antd';
class Product extends Component
{
    constructor(props) {
        super(props);
        this.slideRef = React.createRef();
        this.state = {
          data : [],
          variant_data:[],
          product : "",
          loading: false,
        }
    };
    componentDidMount(){
        let data ;
		axios.get('https://bnb-backend-sandy.vercel.app/products/' , { params: { product_type: this.props.asset_type } })
		.then(res => {
            
			data = res.data.data;
			this.setState({
				data : data,
                product : data.product_type,
                loading:false,
			});
		})
		.catch(err => {})
        let variant_data;
        axios.get('https://bnb-backend-sandy.vercel.app/products/variant/' , { params: { asset_type: this.props.asset_type } })
		.then(res => {
			variant_data = res.data.data;
			this.setState({
				variant_data : variant_data,

			});
            console.log(variant_data)
		})
		.catch(err => {})
    };
   render(){
    return (
        <div class="main-page">
            <section>
                <p class="mid_text">Get ready to for the extravaganza</p>
            </section>
            <img  src="https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg" width={1510} height={1000} alt="kf"></img>
           <section>
                <p class="products-text">Our Collection</p>
                <div class="loader">{this.state.data.length===0 ? <Spin/> : <></>}</div>
                {this.state.data.map((data, index)=> (
                        <div>   
                            <div>
                                <section>
                                    <Carousel>
                                        <img src={data.image_url} class="centre"></img>
                                        <img src={data.image_url} class="centre"></img>
                                    </Carousel>
                                    <text class="products-list">{data.product_type} {data.flavour} flavour!</text>
                                    <text class="products-list">{data.size}</text>
                                    <text class="products-list-dis">Rs.{data.mrp}</text> <text class="products-list">{data.discount}%</text>                                  
                                    <text class="products-list">Rs.{data.price}</text>
                                    {this.state.variant_data.map((data, index)=> (
                                    <div class="centre">
                                        <select name="cars" id="cars" >
                                            <option value="volvo" >{data["size"]}</option>
                                        </select>
                                    </div>))};
                                    <div >
                                            <p class="pl">Protein per scoop: {data.details.protein_per_scoop}</p>
                                            <p class="pl">No of scoops: {data.details.no_of_scoops}</p>
                                            <p class="pl">Details: {data.details.details}</p>
                                    </div>
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