import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./home.scss";
import { useHistory } from 'react-router-dom';


const Home = props => {
  const images = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <div className=" main-slider full">
      <div className="main-slider__buttons">
        <button className="button" onClick={() => props.history.push("/Registration")}>Register Today</button> <br></br>
        <br></br>
        <button className="button" onClick={() => props.history.push("/Scientific-Program")}>Scientific Program</button>
        <br></br>
        <br></br>
        <button className="button" onClick={() => props.history.push("/")}>Usful Downloads</button>
      </div>
      <div className="main-slider__abs__text">
        <p className="text-wrapper">
            RARE DISEASES ARE NOT ORPHANS
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
