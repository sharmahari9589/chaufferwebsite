// import React from "react";
import { useEffect, useState } from "react";
import "./Menu.css";
import Home from "../../../../../assets/Image/Home.jpg";
import OurServices from "../../../../../assets/Image/OurServices.jpg";
import Category from "../../../../../assets/Image/Category.jpg";
import Partner from "../../../../../assets/Image/Partner.jpg";
import Help from "../../../../../assets/Image/Help.jpg";
import { useNavigate } from "react-router-dom";

const Menu = ({ handleToggle }) => {
  const [bodyClass, setBodyClass] = useState("light");

  const handleMouseOver = (color) => {
    setBodyClass(color);
  };

  const handleMouseOut = () => {
    setBodyClass(Help);
  };

  const navTo = useNavigate();

  const handleNavigate = (url) => {
    navTo(url);
    handleToggle();
  };
  return (
    <>
      <div className="Test" style={{}}>
        <div
          className="Overlay"
          style={{
            display: "flex",

            // height: "100vh",
            justifyContent: "end",
            alignItems: "center",
            margin: "0px",
            padding: "0px",
          }}
        >
          <ul className="menu ">
            <li
              onMouseOver={() => handleMouseOver(Home)}
              onMouseOut={handleMouseOut}
              onClick={() => handleNavigate("/")}
            >
              <div className="SideBar-Li-Main">
                <span>01</span>
                <h5>Home</h5>
              </div>
            </li>
            <li
              onMouseOver={() => handleMouseOver(OurServices)}
              onMouseOut={handleMouseOut}
              onClick={() => handleNavigate("/aboutus")}
            >
              <div className="SideBar-Li-Main">
                <span>02</span>
                <h5>About Us</h5>
              </div>
              {/* Submenu for Our Services */}
            </li>
            <li
              onMouseOver={() => handleMouseOver(OurServices)}
              onMouseOut={handleMouseOut}
            >
              <div className="SideBar-Li-Main">
                <span>03</span>
                <h5>Our Services</h5>
              </div>
              {/* Submenu for Our Services */}
              <ul className="submenu">
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavigate("/services2");
                  }}
                >
                  Overview
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavigate("/services2/airporttransfer");
                  }}
                >
                  Airport Transfer
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavigate("/services2/CityToCity");
                  }}
                >
                  City to city Transfer
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavigate("/services2/Hourlybooking");
                  }}
                >
                  Hourly Booking
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavigate("/services2/ShuttleService");
                  }}
                  style={{ whiteSpace: "nowrap" }}
                >
                  Events and Shuttle Service
                </li>
              </ul>
            </li>
            <li
              onMouseOver={() => handleMouseOver(Category)}
              onMouseOut={handleMouseOut}
              onClick={() => handleNavigate("/category")}
            >
              <div className="SideBar-Li-Main">
                <span>04</span>
                <h5>Category</h5>

                <ul className="submenu" style={{ top: "170px" }}>
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleNavigate("/category");
                    }}
                  >
                    Business Class
                  </li>
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleNavigate("/category");
                    }}
                  >
                    First Class Sedan
                  </li>
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleNavigate("/category");
                    }}
                  >
                    First Class Van
                  </li>
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleNavigate("/category");
                    }}
                  >
                    Luxury Van
                  </li>
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleNavigate("/category");
                    }}
                  >
                    Luxury Sedan
                  </li>
                </ul>
              </div>
            </li>
            <li
              onMouseOver={() => handleMouseOver(Partner)}
              onMouseOut={handleMouseOut}
              onClick={() => handleNavigate("/becomepartner")}
            >
              <div className="SideBar-Li-Main">
                <span>05</span>
                <h5>Become a Partner</h5>
              </div>
            </li>

            <li
              className="visibleOnMobile"
              onMouseOver={() => handleMouseOver(Partner)}
              onMouseOut={handleMouseOut}
              onClick={() => handleNavigate("/login")}
            >
              <div className="SideBar-Li-Main">
                <span>06</span>
                <h5>Login/Signup</h5>
              </div>
            </li>
          </ul>
          {/* <style>
          {`
          .Overlay {
            z-index:10000;
            transition: 500ms ease-in-out;
            background-image: url(${bodyClass === "light" ? Help : bodyClass}) ; 
            
            background-repeat:no-repeat;
            background-size:100% 100vh;
            object-fit: cover;
            
            
          }
          `}
        </style> */}
        </div>
      </div>
    </>
  );
};

export default Menu;
