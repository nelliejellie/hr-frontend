import React from "react";
import { Carousel } from "react-responsive-carousel";
import images from "../Assets/img";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <Carousel>
      <div>
        <img src={images.carousel} className="h-50" />
      </div>
      <div>
        <img src={images.carousel2} className="h-50" />
      </div>
      <div>
        <img src={images.carousel2} className="h-50" />
      </div>
    </Carousel>
  );
};

export default Hero;
