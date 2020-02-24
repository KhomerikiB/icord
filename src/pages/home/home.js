import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./home.scss";

const Home = props => {
  const images = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <div className=" main-slider full">
      <div className="main-slider__buttons">
        <button className="button">registration</button>
      </div>
      <div className="main-slider__abs__text">
        <p className="text-wrapper">
          The 15 th Meeting of the International Conferences on Rare Diseases
          and Orphan Drugs (ICORD) arranged by ICORD in collaboration with the
          GEORGIAN FOUNDATION FOR GENETIC AND RARE DISEASES (GeRaD)
        </p>
      </div>
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
