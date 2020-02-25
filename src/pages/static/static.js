import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
const Static = props => {
  const replace = domNode => {
    if (domNode.attribs && domNode.attribs.id === "replace-link") {
      return <Link to="/registration-form">Click here</Link>;
    }
  };
  return (
    <div className="inner-container">
      <div className="text-wrapper">{parse(props.data, { replace })}</div>
    </div>
  );
};

export default Static;
