import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Xactlane } from "../../../../public/Svgs/Svg";
import { BookingProcessContext } from "../../Landingpage/BookingProcessContext";
import style from "./Pages/UpComing.module.css";

const UserMain = () => {
  const token = Cookies.get("token");
  const { visibleNotificationDot } = useContext(BookingProcessContext);

  function signOut() {
    Cookies.remove("token");
    navigate("/");
  }

  const navigate = useNavigate();
  useEffect(() => {
    !token && navigate("/login");
  }, [token]);

  useEffect(() => {
    const bootstrapIconsLink = document.createElement("link");
    bootstrapIconsLink.rel = "stylesheet";
    bootstrapIconsLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css";
    document.head.appendChild(bootstrapIconsLink);
  }, []);

  // State to manage the active tab (Upcoming or Past)
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="container-fluid">
        <div
          className="row flex-nowrap"
          style={{ position: "fixed", width: "100%" }}
        >
          <div
            className="col-auto col-md-3 col-xl-2 px-sm-2 px-0"
            style={{
              background: "rgb(240, 240, 240)",
            }}
          >
            <div className="d-flex flex-column  align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">{Xactlane}</span>
              </a>
              <ul
                className={`${style.Listings} nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start`}
                id="menu"
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house" />
                    <span className="ms-1 d-none d-sm-inline">New Ride</span>
                  </Link>
                </li>

                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2" />
                    <span className="ms-1 d-none d-sm-inline">Rides</span>
                  </a>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <Link to="/user/upcomingrides" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Upcoming</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/user/pastrides" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Past</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/user/contactdetails" className="nav-link px-0">
                    <i className="fs-4 bi-table" />
                    <span className="ms-1 d-none d-sm-inline">
                      Contact Details
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/user/notifications" className="nav-link px-0">
                    <i className="fs-4 bi-people" />
                    <span
                      className="ms-1 d-none d-sm-inline"
                      style={{ display: "flex" }}
                    >
                      Notifications
                      {visibleNotificationDot && (
                        <span
                          style={{
                            position: "absolute",
                            backgroundColor: "green",
                            width: "5px",
                            height: "5px",
                            alignSelf: "end",
                            marginTop: "14px",
                            borderRadius: "100%",
                          }}
                        >
                          &nbsp;
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/user/changepassword" className="nav-link px-0">
                    <i className="fs-4 bi-people" />
                    <span className="ms-1 d-none d-sm-inline">
                      Change password
                    </span>
                  </Link>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <i className="fs-4 bi bi-box-arrow-right" />

                  <span className="ms-1 d-none d-sm-inline" onClick={signOut}>
                    Log Out
                  </span>
                </li>
              </ul>
              <hr />
              {/* <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width={30}
                    height={30}
                    className="rounded-circle"
                  />
                  <span
                    className="d-none d-sm-inline mx-1"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    Sahil Shaikh
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdownUser1"
                >
                  <li></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <p className="dropdown-item" style={{ cursor: "pointer" }}>
                      Sign out
                    </p>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="col py-3  integration-mainbody">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMain;
