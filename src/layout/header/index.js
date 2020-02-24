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
        <div className=" home-row">
          <div className="home-col-1 relative">
            <img
              src={require("../../static/images/logo_icord.png")}
              alt="icord"
              className="main-header__logo"
            />
            <p className="current-page">{path}</p>
          </div>
          {isIndex ? (
            <p className="main-header__text home-col-2">
              The 15 th Meeting of the International Conferences on Rare Diseases and Orphan Drugs (ICORD)
              arranged by ICORD in collaboration with the GEORGIAN FOUNDATION FOR GENETIC AND RARE DISEASES
              (GeRaD)
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
