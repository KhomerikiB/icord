import React from "react";

const RegistrationForm = props => {
  return (
    <div className="inner-container">
      <form>
        <input
          type="text"
          placeholder="Enter firstname"
          className="main-input"
        />
        <input
          type="text"
          placeholder="Enter lastname"
          className="main-input"
        />
        <input type="email" placeholder="Enter email" className="main-input" />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
