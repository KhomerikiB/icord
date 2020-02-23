import React from "react";
import "./nav.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li className="main-nav__dropdown__li">
          <div className="flex-space">
            <p>Conference Information</p>
            <IoMdArrowDropdown size={20} />
          </div>
          <ul className="main-nav__dropdown">
            <li>
              <Link to="/general-information">General Information</Link>
            </li>
            <li>
              <Link to="/organizers">Organizers and Support Organizations</Link>
            </li>
            <li>
              <Link to="/organizing-committees">Organizing Committees</Link>
            </li>
            <li>
              <Link to="/general-information">Venue</Link>
            </li>
          </ul>
        </li>
        <li className="main-nav__dropdown__li">
          <div className="flex-space">
            <p>The Program</p>
            <IoMdArrowDropdown size={20} />
          </div>
          <ul className="main-nav__dropdown">
            <li>
              <Link to="/programming-plan">Program Planning Committee</Link>
            </li>
            <li>
              <Link to="/generalinformation">Scientific Program</Link>
            </li>
            <li>
              <Link to="/generalinformation">Program at a glance</Link>
            </li>
            <li>
              <Link to="/generalinformation">Speakers</Link>
            </li>
            <li>
              <Link to="/generalinformation">CME</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/generalinformation">Registration</Link>
        </li>
        <li>
          <Link to="/generalinformation">Abstracts</Link>
        </li>
        <li>
          <Link to="/generalinformation">Accommodation</Link>
        </li>
        <li className="main-nav__dropdown__li">
          <div className="flex-space">
            <p>Discover Tbilisi</p>
            <IoMdArrowDropdown size={20} />
          </div>
          <ul className="main-nav__dropdown">
            <li>
              <Link to="/generalinformation">Tours</Link>
            </li>
            <li>
              <Link to="/generalinformation">About Georgia</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/generalinformation">Useful Information</Link>
        </li>
        <li>
          <Link to="/generalinformation">Sponsors</Link>
        </li>
        <li>
          <Link to="/generalinformation">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
