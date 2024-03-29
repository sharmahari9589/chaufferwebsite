import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Footer.module.css";
import { Xactlane, XactlaneWhite } from "../../../../../public/Svgs/Svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const HandleFooterNAvigation = () => {
    scrollToTop();
  };

  return (
    <Container fluid className={style.FooterMain}>
      <Row className={style.FooterMainRow}>
        <Col md={3} className={style.FooterLogo}>
          <div>{XactlaneWhite}</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <h5>©2023 xactlane. All right reserved</h5>
        </Col>
        <Col>
          <Row className={`${style.FooterColumnAlign} `}>
            <Col className={style.FooterList}>
              <label>About</label>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0px",
                  textDecoration: "none",
                }}
              >
                <Link to={"/aboutus"} onClick={HandleFooterNAvigation}>
                  About us
                </Link>
                <Link to={"/blog"} onClick={HandleFooterNAvigation}>
                  Blog
                </Link>
                <Link to={"/contactus"} onClick={HandleFooterNAvigation}>
                  Contact Us
                </Link>
                <Link to={"/becomepartner"} onClick={HandleFooterNAvigation}>
                  Become a Partner+
                </Link>
                {/* <Link to={"/influencer"} onClick={HandleFooterNAvigation}>
                  Influencer
                </Link> */}
              </ul>
            </Col>

            <Col className={style.FooterList}>
              <label>Discover</label>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                <Link
                  onClick={HandleFooterNAvigation}
                  to={"/services2/airporttransfer"}
                >
                  Transfers
                </Link>
                <Link
                  onClick={HandleFooterNAvigation}
                  to={"/services2/Hourlybooking"}
                >
                  Hourly Booking
                </Link>
                <Link
                  onClick={HandleFooterNAvigation}
                  to={"/services2/CityToCity"}
                >
                  City to City
                </Link>
                <Link
                  onClick={HandleFooterNAvigation}
                  to={"/services2/ShuttleService"}
                >
                  Events And Shuttle Service
                </Link>
              </ul>
            </Col>
            <Col className={style.FooterList}>
              <label>Legal</label>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                <Link onClick={HandleFooterNAvigation}>Imprint</Link>
                <Link onClick={HandleFooterNAvigation} to={"/terms&condition"}>
                  Terms and Conditions
                </Link>
                <Link onClick={HandleFooterNAvigation} to={"/policy"}>
                  Privacy Policy
                </Link>
                <Link onClick={HandleFooterNAvigation} to={"/influencer"}>
                  Partner Terms and Conditions
                </Link>
                <Link onClick={HandleFooterNAvigation} to={"/questions"}>
                  FAQ/Help+
                </Link>
                <Link onClick={HandleFooterNAvigation} to={"/disclaimer"}>
                  Disclaimer
                </Link>
              </ul>
            </Col>
            <Col className={style.FooterList}>
              <label>Social Media</label>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                <Link>Facebook</Link>
                <Link>Twitter</Link>
                <Link>Instagram</Link>
                <Link>TikTok</Link>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
