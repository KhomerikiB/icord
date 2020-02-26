import React, { useEffect, useState } from "react";
import "./header.scss";
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
    <header className={`main-header flex-center ${!isIndex ? "auto" : null}`}>
      <div className="main-header__wrapper">
        <div className="home-row">
          <div className="home-col-1 relative">
            <div className="grid-container">
              <div className="grid-item">
                <img
                   src={require("../../static/images/logo_icord.png")}
                  alt="icord"
                  className="main-header__logo"
                 />
              </div>
              <div className="grid-item2">
                <strong>ICORD 2020 </strong> 
                <p className="nextDown">NOVEMBER 19-21, 2020 TBILISI, GEORGIA </p>
              </div>
            

            <div className="grid-item3">
                <p className="current-page">{path}</p>
            </div>
          </div>
          </div>
          {isIndex ? (
            <p className="main-header__text home-col-2">
              <strong>
              THE 15-th ANNUAL INTERNATIONAL CONFERENCE ON RARE DISEASES AND ORPHAN DRUGS (ICORD) MEETING <br></br>
               ARRANGED IN COLABORATION WITH THE GEORGIAN FOUNDATION FOR GENETIC AND RARE DISEASES (GeRaD)
               </strong>
            </p>
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
