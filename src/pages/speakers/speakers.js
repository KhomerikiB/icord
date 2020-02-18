import React from "react";
import Person from "../../components/speakers/person";
import "./speakers.scss";
const Speakers = () => {
  return (
    <div className="inner-container">
      <div className="speakers-grid">
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    </div>
  );
};

export default Speakers;
