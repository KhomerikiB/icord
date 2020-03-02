import React, { useEffect, useState } from "react";
import "./header.scss";
import ReactFitText from 'react-fittext';

const Index = props => {
  const [isIndex, setIsIndex] = useState(true);
  const [path, setPath] = useState("");
  useEffect(() => {
    const { pathname } = props.history.location;
    setPath(pathname.split("/")[1].replace("-", " "));
    if (pathname !== "/") {
      setIsIndex(false);
    } else {
      setIsIndex(true);
    }
  }, [props.history.location.pathname]);
  
  return (
    <header className={`main-header flex-center ${!isIndex ? "auto" : ""}`}>
      <div className="main-header__wrapper">
        <div className="home-row">
          <div className="home-col-1 relative">
            <img
              src={require("../../static/images/logo_icord.png")}
              alt="icord"
              className="main-header__logo"
            />
          </div>
          {isIndex ? (
            <div className="main-header__text__wrapper">
              
              <ReactFitText compressor={3.94}  minFontSize={10} maxFontSize = {50} >
              <p className="main-header__text home-col-2">
                <strong> 15<span className="up">th</span> INTERNATIONAL CONFERENCE ON RARE DISEASES AND
                ORPHAN DRUGS <span className="brackets">(</span>ICORD 2020<span className="brackets">)</span>  </strong>
               
              </p>
              </ReactFitText>
             


              <div className="main-header__text__bottom">
              <ReactFitText compressor={2}  minFontSize={8} maxFontSize = {35} >
               <strong> <p className="main-header__small__text">NOVEMBER 19-21, 2020 <br></br>  TBILISI,    GEORGIA</p> </strong>
               </ReactFitText>
               <div></div>


               <ReactFitText compressor={1.5}  minFontSize={10} maxFontSize = {40} >
               <strong> <p className="main-header__right__text">RARE DISEASES ARE NOT ORPHANS</p>   </strong>
               </ReactFitText>
              </div>
            </div>
          ) : (
            <div className="header-image">
              <img
                alt=""
                src={require("../../static/images/header-image.jpg")}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Index;
