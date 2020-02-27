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
            <div class="main-header__text__wrapper">
              <p className="main-header__text home-col-2">
                THE 15-th ANNUAL INTERNATIONAL CONFERENCE ON RARE DISEASES AND
                ORPHAN DRUGS (ICORD) MEETING ARRANGED IN COLABORATION WITH THE
                GEORGIAN FOUNDATION FOR GENETIC AND RARE DISEASES (GeRaD)
              </p>
              <div className="flex-space main-header__text__bottom">
                <p className="main-header__small__text">NOVEMBER 19-21, 2020 <br></br>  TBILISI,GEORGIA</p>
                <p>RARE DISEASES ARE NOT ORPHANS</p>
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
