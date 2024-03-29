import { Col, Container, Row } from "react-bootstrap";
import style from "./Header.module.css";
import {
  LoginSignup,
  LoginSignupWhite,
  TranslatorSvg,
  WhiteTranslatorSvg,
  Xactlane,
  XactlaneWhite,
} from "../../../../../public/Svgs/Svg";
import { BookingProcessContext } from "../../BookingProcessContext";
import { useContext, useEffect, useState } from "react";
import WhiteGlobe from "../../../../../Images/TranslateWhite (1).png";
import BlackGlobe from "../../../../../Images/TranslateBlack.png";

import Menu from "./Menu/Menu";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl } from "../../../../Env";
import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const token = Cookies.get("token");
  const { user } = useSelector((state) => state.UserDetails);
  const { WhiteHeader } = useContext(BookingProcessContext);

  const getUser = async () => {
    try {
      let url = `${BaseUrl}/get-profile`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserDetails(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  return (
    <div style={{ position: "relative" }}>
      {toggle && (
        <div
          style={{
            position: "fixed",
            right: "80px",
            top: "50px",
            zIndex: "100000",
            background: "white",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => setToggle(false)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18.8642 18.1581L6.13623 5.43018"
              stroke="#1C1C1C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.7279 5.27208L6 18"
              stroke="#1C1C1C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
      <div
        style={{ position: "absolute", left: "0", top: "0", zIndex: "10000" }}
      >
        {toggle && <Menu handleToggle={() => setToggle(false)} />}
      </div>
      {WhiteHeader ? (
        <Container>
          <div className={style.HeaderMain}>
            <Link to={"/"}>{XactlaneWhite}</Link>
            <div className={style.HeaderSubMain}>
              <span style={{ cursor: "pointer" }}>{WhiteTranslatorSvg}</span>
              {userDetails?.fullName ? (
                <Link
                  to={"/user"}
                  style={{ textDecoration: "none" }}
                  className={`${style.HeaderLoginMain}  ${style.VisibleLoginIn}`}
                >
                  {LoginSignupWhite}
                  <div className={`${style.HeaderLogin}`}>
                    {" "}
                    {userDetails?.fullName}
                  </div>
                </Link>
              ) : (
                <Link
                  to={"/login"}
                  style={{ textDecoration: "none" }}
                  className={`${style.HeaderLoginMain}  ${style.VisibleLoginIn}`}
                >
                  {LoginSignupWhite}
                  <div className={`${style.HeaderLogin}`}>Login/Signup</div>
                </Link>
              )}
              <div className={style.HeaderLogin}>
                <p style={{ paddingRight: "10px" }}>Menu</p>
                <div
                  style={{
                    background: "white",
                    height: "28px",
                    borderRadius: "100%",
                    width: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setToggle(true)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 18H3"
                      stroke="#1C1C1C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 14H3"
                      stroke="#1C1C1C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 10H3"
                      stroke="#1C1C1C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 6H3"
                      stroke="#1C1C1C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <div className={style.HeaderMain}>
            <Link to={"/"}>{Xactlane}</Link>
            <div className={style.HeaderSubMain}>
              <span style={{ cursor: "pointer" }}>{TranslatorSvg}</span>
              {userDetails?.fullName ? (
                <Link
                  to={"/user"}
                  className={`${style.HeaderLoginMain}  ${style.VisibleLoginIn}`}
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                  {LoginSignup}
                  <div className={style.HeaderLogin} style={{ color: "#000" }}>
                    {userDetails?.fullName}
                  </div>
                </Link>
              ) : (
                <Link
                  to={"/login"}
                  className={`${style.HeaderLoginMain}  ${style.VisibleLoginIn}`}
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                  {LoginSignup}
                  <div className={style.HeaderLogin} style={{ color: "#000" }}>
                    Login/Signup
                  </div>
                </Link>
              )}

              <div className={style.HeaderLogin} style={{ color: "#000" }}>
                <p style={{ paddingRight: "10px" }}>Menu</p>
                <div
                  style={{
                    background: "Black",
                    height: "28px",
                    borderRadius: "100%",
                    width: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setToggle(true)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 18H3"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 14H3"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 10H3"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 6H3"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Header;
