import React from "react";
import "./person.scss";
const Person = () => {
  return (
    <div className="speakers-item">
      <div className="speakers-item__imagebox">
        <img src={require("../../static/images/speaker.jpg")} alt="" />
      </div>
      <div className="speakers-item__wrapper">
        <p className="speakers-item__title">Joan Comella</p>
        <p className="speakers-item__subtitle">Proffession</p>
      </div>
    </div>
  );
};

export default Person;
