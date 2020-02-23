import React from "react";
import "./person.scss";
const Person = ({ data }, ...rest) => {
  return (
    <div className="speakers-item">
      <div className="speakers-item__imagebox">
        <img
          src={require(`../../static/images/speaker-${data.image}.jpg`)}
          alt=""
        />
      </div>
      <div className="speakers-item__wrapper">
        <p className="speakers-item__title">{data.title}</p>
        <p className="speakers-item__subtitle">{data.description}</p>
      </div>
    </div>
  );
};

export default Person;
