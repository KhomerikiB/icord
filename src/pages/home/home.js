import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./home.scss";

const Home = props => {
  return (
    <div className=" main-slider full">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
      >
        <div className="main-slider__item  full">
          <img
            src={require("../../static/images/slider-1.jpg")}
            className="main-slider__item__img"
            alt=""
          />
        </div>
        <div className="main-slider__item  full">
          <img
            src={require("../../static/images/slider-1.jpg")}
            className="main-slider__item__img"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
