import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import '../assets/style.css'
export default function CarouselSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <Slider {...settings}>
        <div className="banner_container">
        <img src ={img1} alt="img1"/>
        </div>
        <div className="banner_container">
        <img src ={img2} alt="img1"/>
        </div>
        <div className="banner_container">
        <img src ={img3} alt="img1"/>
        </div>
        <div className="banner_container">
        <img src ={img4} alt="img1"/>
        </div>
    </Slider>
  );
}