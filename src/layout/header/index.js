import React, { useEffect, useState } from "react";
import "./header.scss";
const Index = props => {
  const [isIndex, setIsIndex] = useState(true);
  const [path, setPath] = useState("");
  useEffect(() => {
    const { pathname } = props.history.location;
    setPath(pathname.split("/")[1]);
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
              ICORD is an International Society for all individuals active in
              rare diseases and/or orphan drugs, including health care,
              research, academic, industry, patients, patient groups, regulatory
              authorities, health authorities, and public policy professionals.
            </p>
          ) : (
            <div className="header-image">
              <img alt="" src={require("../../static/images/slider-b.jpg")} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Index;
