import React, { useState } from "react";
import "./nav.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
const Nav = () => {
  function closeNav() {
    const mainNav = document.querySelector(".main-nav");
    mainNav.classList.remove("active");
  }
  const [currentMenu, setCurrentMenu] = useState(undefined);
  const menu = [
    {
      title: "HOME PAGE",
      slug: "/",
      hasDropdown: false,
    },
    {
      title: "WELCOME",
      slug: "/welcome",
      hasDropdown: false,
    },
    {
      title: "THE CONFERENCE",
      hasDropdown: true,
      dropdown: [
        {
          slug: "/general-information",
          title: "GENERAL INFORMATION",
        },
        {
          slug: "/organizers",
          title: "ORGANIZERS AND SUPPORT ORGANIZATIONS",
        },
        {
          slug: "/organizing-committees",
          title: "ORGANIZING COMMITTEES",
        },
        {
          slug: "/Venue",
          title: "VENUE",
        },
      ],
    },
    {
      title: "THE PROGRAM",
      hasDropdown: true,
      dropdown: [
        {
          slug: "/programming-plan",
          title: "PROGRAM PLANNING COMMITTEE",
        },
        {
          slug: "/Scientific-Program",
          title: "SCIENTIFIC PROGRAM",
        },
        {
          slug: "/",
          title: "PROGRAM AT A GLANCE",
        },
        {
          slug: "/",
          title: "SPEAKERS",
        },
        {
          slug: "/",
          title: "CME",
        },
      ],
    },
    {
      title: "REGISTRATION",
      slug: "/registration",
      hasDropdown: false,
    },
    {
      title: "ABSTRACTS",
      slug: "/Abstracts",
      hasDropdown: false,
    },
    {
      title: "ACCOMODATION",
      slug: "/Accomodation",
      hasDropdown: false,
    },
    {
      title: "DISCOVER TBILISI",
      hasDropdown: true,
      dropdown: [
        {
          slug: "/Tours",
          title: "TOURS",
        },
        {
          slug: "/About-Georgia",
          title: "ABOUT GEORGIA",
        },
      ],
    },
    {
      title: "USEFUL INFORMATION",
      slug: "/useful-Information",
    },
    {
      title: "SPONSORS",
      slug: "/Sponsors",
    },
  ];
  const outputMenu = () => {
    return menu.map((item, index) => {
      if (!item.hasDropdown) {
        return (
          <li
            className="no_dropdown"
            key={index}
            onClick={() => setCurrentMenu(undefined)}
          >
            <Link to={item.slug}>{item.title}</Link>
          </li>
        );
      } else {
        return (
          <li
            key={index}
            className={
              currentMenu === index
                ? " main-nav__dropdown__li active"
                : "main-nav__dropdown__li"
            }
          >
            <div
              className="flex-space"
              onClick={() =>
                currentMenu !== index
                  ? setCurrentMenu(index)
                  : setCurrentMenu(undefined)
              }
            >
              <p>{item.title}</p>
              <IoMdArrowDropdown size={20} />
            </div>

            <ul className="main-nav__dropdown">
              {item.dropdown.map((inner, innerindex) => {
                return (
                  <li key={innerindex} className="dropdown-item">
                    <Link to={inner.slug}>{inner.title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      }
    });
  };
  return (
    <nav className="main-nav">
      <div
        className="close"
        onClick={() => {
          closeNav();
        }}
      >
        X
      </div>
      <ul>{outputMenu()}</ul>
    </nav>
  );
};

export default Nav;
