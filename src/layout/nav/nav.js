import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/speakers">Speakers</Link>
        </li>
        <li>
          <Link to="/">Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
