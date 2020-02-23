import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./home.scss";

const Home = props => {
  const images = ["1", "2", "3", "4", "5", "6", "7", "8"];
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
        {images.map(num => (
          <div className="main-slider__item  full" key={num}>
            <img
              src={require(`../../static/images/slider-image${num}.jpg`)}
              className="main-slider__item__img"
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
