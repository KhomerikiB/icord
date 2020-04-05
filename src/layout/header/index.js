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
                <div className="firstGrid">
                    
                  <ReactFitText compressor={3.4}  minFontSize={1} maxFontSize = {40} >
                  <p className="main-header__text home-col-2">
                    <strong>XV INTERNATIONAL CONFERENCE ON RARE DISEASES AND
                    ORPHAN DRUGS</strong>
                  
                  </p>
                  </ReactFitText>
                


                  <div className="main-header__text__bottom">
                  <ReactFitText compressor={1.3}  minFontSize={3} maxFontSize = {50} >
                  <p className="main-header__small__text">
                  <strong> #ICORD2020</strong> 
                  </p> 
                  </ReactFitText>

                  </div>

              </div> 


              <div className="SecondGrid">
                
              <ReactFitText compressor={1.2}  minFontSize={3} maxFontSize = {40} > 
              <p className="main-header__right__text">            
              <strong>NOVEMBER 19-21, 2020 <br></br>  TBILISI,    GEORGIA   </strong>
              </p>
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




