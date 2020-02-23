import React from "react";
import parse from "html-react-parser";
const Static = props => {
  return (
    <div className="inner-container">
      <div className="text-wrapper">{parse(props.data)}</div>
    </div>
  );
};

export default Static;
