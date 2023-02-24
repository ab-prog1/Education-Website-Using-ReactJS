import React, { Component } from "react";
import Slider from "react-slick";
import { service } from "../../data/Data";
import "./about.css"



export default class PauseOnHover extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      return (
        <div className="container-fluid bag-cart py-5">
             <div className="container">
                <div className="text-center mx-auto mb-5 "  style={{maxWidth: `600px`}}>
                    <h1 className="mb-3 titel">Our Clients Say!</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
        <div>
        <Slider {...settings}>
        {service.map((items, index) => (
        <div className="owl-carousel testimonial-carousel " key={index}>
                    <div className="testimonial-item  rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>{items.title}</p>
                            <div className="d-flex align-items-center fut-cart">
                                <img className="img-fluid flex-shrink-0 rounded" src={items.cover} alt="" style={{width: `45px` , height: `45px`}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">{items.name}</h6>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                 
               
                 ))}
          </Slider>
        </div>
        </div>
        </div>
      );
    }
  }