import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
function Static(props) {
  return (
    <div className="inner-container">
      <div className="text-wrapper">{parse(props.data)}</div>
    </div>
  );
}

export default Static;
