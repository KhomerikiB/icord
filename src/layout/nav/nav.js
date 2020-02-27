import React, { useState } from "react";
import "./nav.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
const Nav = () => {
  const [currentMenu, setCurrentMenu] = useState(undefined);
  const menu = [
    {
      title: "Home Page",
      slug: "/",
      hasDropdown: false
    },
    {
      title: "Welcome",
      slug: "/welcome",
      hasDropdown: false
    },
    {
      title: "Conference Information",
      hasDropdown: true,
      dropdown: [
        {
          slug: "/general-information",
          title: "General Information"
        },
        {
          slug: "/organizers",
          title: "Organizers and Support Organizations"
        },
        {
          slug: "/organizing-committees",
          title: "Organizing Committees"
        },
        {
          slug: "/Venue",
          title: "Venue"
        }
      ]
    },
    {
      title: "The Program",
      hasDropdown: true,
      dropdown: [
        {
          slug: "/programming-plan",
          title: "Program Planning Committee"
        },
        {
          slug: "/Scientific-Program",
          title: "Scientific Program"
        },
        {
          slug: "/",
          title: "Program at a glance"
        },
        {
          slug: "/",
          title: "Speakers"
        },
        {
          slug: "/",
          title: "CME"
        }
      ]
    },
    {
      title: "Registration",
      slug: "/registration",
      hasDropdown: false
    },
    {
      title: "Abstracts",
      slug: "/Abstracts",
      hasDropdown: false
    },
    {
      title: "Accommodation",
      slug: "/Accomodation",
      hasDropdown: false
    },
    {
      title: "Discover Tbilisi",
      hasDropdown: true,
      dropdown: [
        {
          slug: "/Tours",
          title: "Tours"
        },
        {
          slug: "/About-Georgia",
          title: "About Georgia"
        }
      ]
    },
    {
      title: "Useful Information",
      slug: "/useful-Information"
    },
    {
      title: "Sponsors",
      slug: "/Sponsors"
    }
  ];
  const outputMenu = () => {
    return menu.map((item, index) => {
      if (!item.hasDropdown) {
        return (
         
          <li className = "no_dropdown" key={index} onClick={() => setCurrentMenu(undefined)}>
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
            onClick={() =>
              currentMenu !== index
                ? setCurrentMenu(index)
                : setCurrentMenu(undefined)
            }
          >
            <div className="flex-space">
              <p>{item.title}</p>
              <IoMdArrowDropdown size={20} />
            </div>

            <ul className="main-nav__dropdown">
              {item.dropdown.map((inner, innerindex )=> {
                return (
                  <li key={innerindex}
                  className="dropdown-item">
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
      <ul>{outputMenu()}</ul>
    </nav>
  );
};

export default Nav;
