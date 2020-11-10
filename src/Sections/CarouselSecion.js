import React from "react";
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import '../assets/style.css'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function CarouselSection() {
  return (
   <React.Fragment>
        <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100 banner"
            src={img1}
            alt="First"
            />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100 banner"
            src={img2}
            alt="Third "
            />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100 banner"
            src={img3}
            alt="Third"
            />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100 banner"
            src={img4}
            alt="Fourth"
            />
        </Carousel.Item>
        </Carousel>
   </React.Fragment>
  );
}