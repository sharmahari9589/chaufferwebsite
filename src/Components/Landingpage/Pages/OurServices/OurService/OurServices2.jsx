import React, { useContext, useEffect } from "react";
import style from "./OurServices2.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { BookingProcessContext } from "../../../BookingProcessContext";
import Services2 from "../../../../../../Images/Services2.png";
import OurServices1 from "../../../../../../Images/OurServices1.jpg";
import OurServices12 from "../../../../../../Images/OurServices2.jpg";
import OurServices3 from "../../../../../../Images/OurServices3.jpg";
import OurServices4 from "../../../../../../Images/OurServices4.jpg";
import CustomerImage from "../../../../../../Images/CustomerImage.png";
import CallUs from "../../../../../../Images/CallUs.jpg";
import Slider from "react-slick";
import MagicSliderDots from "react-magic-slider-dots";

const settings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots) => {
    return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />;
  },
};

const OurServices2 = () => {
  // const { handleWhiteHeader } = useContext(BookingProcessContext);
  // useEffect(() => {
  //   handleWhiteHeader(true);
  //   return () => {
  //     handleWhiteHeader(false);
  //   };
  // }, []);
  return (
    <Container style={{ padding: "0px" }}>
      <section className={style.OurServicesMain}>
        <p>Our Services</p>
        <img style={{}} src={Services2} alt="" />
      </section>
      <section className={style.OverviewMain}>
        <Row style={{ justifyContent: "center", width: "100%" }}>
          <div className={style.Services2}>
            <h1>Overview</h1>
            <p>
              We Invite you to try our services, and we personally guarantee
              that you will be completely satisified{" "}
            </p>
          </div>
        </Row>
        <Row>
          <p className={style.OverviewText}>
            Join our satisfied customers who trust us for their journeys. We
            serve with a lot of values that you can feel directly.Join our
            satisfied customers who trust us for their journeys. We serve with a
            lot of values that you can feel directly.Join our satisfied
            customers who trust us for their journeys. We serve with a lot of
            values that you can feel directly.Join our satisfied customers who
            trust us for their journeys. We serve with a lot of values that you
            can feel directly.Join our satisfied customers who trust us for
            their journeys. We serve with a lot of values that you can feel
            directly.Join our satisfied customers who trust us for their
            journeys. We serve with a lot of values that you can feel directly.
            Join our satisfied customers who trust us for their journeys. We
            serve with a lot of values that you can feel directly.Join our
            satisfied customers who trust us for their journeys. We serve with a
            lot of values that you can feel directly.Join our satisfied
            customers who trust us for their journeys. We serve with a lot of
            values that you can feel directly.Join our satisfied customers who
            trust us for their journeys. We serve with a lot of values that you
            can feel directly.Join our satisfied customers who trust us for
            their journeys. We serve with a lot of values that you can feel
            directly.Join our satisfied customers who trust us for their
            journeys. We serve with a lot of values that you can feel
            directly.Join our satisfied customers who trust us for their
            journeys. We serve with a lot of values that you can feel
            directly.Join our satisfied customers who trust us for their
            journeys. We serve with a lot of values that you can feel
            directly.Join our satisfied customers who trust us for their
            journeys.
          </p>
        </Row>
      </section>
      {/*  */}
      <section className={style.OverviewMain}>
        <Row style={{ justifyContent: "center", width: "100%" }}>
          <div className={style.Services2}>
            <h1 style={{ display: "flex", alignItems: "end" }}>
              Airport Transfer
              <svg
                width="11"
                height="10"
                style={{ marginBottom: "4px" }}
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.28498 9.91176C7.92737 9.91176 10.0695 7.69293 10.0695 4.95588C10.0695 2.21882 7.92737 0 5.28498 0C2.6426 0 0.500488 2.21882 0.500488 4.95588C0.500488 7.69293 2.6426 9.91176 5.28498 9.91176Z"
                  fill="#0BC36B"
                />
              </svg>
            </h1>
            <p>
              We Invite you to try our services, and we personally guarantee
              that you will be completely satisified
            </p>
          </div>
        </Row>
        <Row>
          <Col lg={6} className="col-md-6 order-2 order-md-1">
            <div className={`${style.AirportTransfer} `}>
              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>

              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>

              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>
            </div>
            <button>Book Now</button>
          </Col>
          <Col lg={6} className="col-md-6 order-1 order-md-2">
            <img
              style={{ width: "100%", height: "100%" }}
              src={OurServices1}
              alt=""
            />
          </Col>
        </Row>
      </section>
      {/*  */}
      <section className={style.OverviewMain}>
        <Row style={{ justifyContent: "center", width: "100%" }}>
          <div className={style.Services2}>
            <h1 style={{ display: "flex", alignItems: "end" }}>
              City to City Transfer
              <svg
                width="11"
                height="10"
                style={{ marginBottom: "4px" }}
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.28498 9.91176C7.92737 9.91176 10.0695 7.69293 10.0695 4.95588C10.0695 2.21882 7.92737 0 5.28498 0C2.6426 0 0.500488 2.21882 0.500488 4.95588C0.500488 7.69293 2.6426 9.91176 5.28498 9.91176Z"
                  fill="#0BC36B"
                />
              </svg>
            </h1>
            <p>
              We Invite you to try our services, and we personally guarantee
              that you will be completely satisified
            </p>
          </div>
        </Row>
        <Row>
          <Col lg={6}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={OurServices12}
              alt=""
            />
          </Col>
          <Col lg={6}>
            <div className={style.AirportTransfer}>
              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>

              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>

              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>
            </div>
            <button>Book Now</button>
          </Col>
        </Row>
      </section>
      {/*  */}
      <section className={style.OverviewMain}>
        <Row style={{ justifyContent: "center", width: "100%" }}>
          <div className={style.Services2}>
            <h1 style={{ display: "flex", alignItems: "end" }}>
              Hourly Booking
              <svg
                width="11"
                height="10"
                style={{ marginBottom: "4px" }}
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.28498 9.91176C7.92737 9.91176 10.0695 7.69293 10.0695 4.95588C10.0695 2.21882 7.92737 0 5.28498 0C2.6426 0 0.500488 2.21882 0.500488 4.95588C0.500488 7.69293 2.6426 9.91176 5.28498 9.91176Z"
                  fill="#0BC36B"
                />
              </svg>
            </h1>
            <p>
              We Invite you to try our services, and we personally guarantee
              that you will be completely satisified
            </p>
          </div>
        </Row>
        <Row>
          <Col lg={6} className="col-md-6 order-2 order-md-1">
            <div className={style.AirportTransfer}>
              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>

              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>

              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>
            </div>
            <button>Book Now</button>
          </Col>
          <Col lg={6} className="col-md-6 order-1 order-md-2">
            <img
              style={{ width: "100%", height: "100%" }}
              src={OurServices3}
              alt=""
            />
          </Col>
        </Row>
      </section>
      {/*  */}

      <section className={style.OverviewMain} style={{ paddingBottom: "30px" }}>
        <Row style={{ justifyContent: "center", width: "100%" }}>
          <div className={style.Services2}>
            <h1 style={{ display: "flex", alignItems: "end" }}>
              Events and Shuttle Service
              <svg
                width="11"
                height="10"
                style={{ marginBottom: "4px" }}
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.28498 9.91176C7.92737 9.91176 10.0695 7.69293 10.0695 4.95588C10.0695 2.21882 7.92737 0 5.28498 0C2.6426 0 0.500488 2.21882 0.500488 4.95588C0.500488 7.69293 2.6426 9.91176 5.28498 9.91176Z"
                  fill="#0BC36B"
                />
              </svg>
            </h1>
            <p>
              We Invite you to try our services, and we personally guarantee
              that you will be completely satisified
            </p>
          </div>
        </Row>
        <Row>
          <Col lg={6} className={style.ServicesImage}>
            <img src={OurServices4} alt="" />
          </Col>
          <Col lg={6}>
            <div className={style.AirportTransfer}>
              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>

              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>

              <p>
                Join our satisfied customers who trust us for their journeys. We
                serve with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.Join our
                satisfied customers who trust us for their journeys. We serve
                with a lot of values that you can feel directly.
              </p>
            </div>
            <button>Book Now</button>
          </Col>
        </Row>
      </section>

      <section>
        <div
          className={style.CallUsFor}
          style={{ backgroundImage: `url(${CallUs})` }}
        >
          <div className={style.callUsFurther}>
            <h5>
              Call us for further information. Rentaly <br />
              customer care is here to help you anytime.
            </h5>

            <div className={style.CallNumber}>
              <svg
                className={style.Headphone}
                viewBox="0 0 60 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="7.33496"
                  y="31.9985"
                  width="2.66667"
                  height="11.9998"
                  fill="white"
                />
                <rect
                  x="50.0029"
                  y="31.9995"
                  width="2.66667"
                  height="11.9998"
                  fill="white"
                />
                <path
                  d="M0 37.9984C0 34.6848 2.68635 31.9985 6 31.9985V43.9983C2.68635 43.9983 0 41.3121 0 37.9984Z"
                  fill="white"
                />
                <path
                  d="M60 37.9984C60 34.6848 57.3137 31.9985 54 31.9985V43.9983C57.3137 43.9983 60 41.3121 60 37.9984Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M53.0043 47.3408V46.0015H55.671V47.3408C55.671 51.6189 54.7282 56.3983 51.1371 59.4849C48.0253 62.1594 43.4898 64.5213 37.8799 63.9954L38.1288 61.3404C42.8032 61.7786 46.6477 59.8272 49.3989 57.4626C52.0982 55.1425 53.0043 51.3572 53.0043 47.3408Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.3332 63.9994C35.2537 63.9994 35.9999 63.2532 35.9999 62.3328C35.9999 61.4123 35.2537 60.6661 34.3332 60.6661C33.4127 60.6661 32.6665 61.4123 32.6665 62.3328C32.6665 63.2532 33.4127 63.9994 34.3332 63.9994ZM34.3332 66.666C36.7264 66.666 38.6665 64.726 38.6665 62.3328C38.6665 59.9396 36.7264 57.9995 34.3332 57.9995C31.94 57.9995 29.9999 59.9396 29.9999 62.3328C29.9999 64.726 31.94 66.666 34.3332 66.666Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7973 8.52266C10.2146 12.6702 7.33561 18.6653 7.33561 25.3329V30.6662H4.66895V25.3329C4.66895 11.3419 16.0111 0 30.0023 0C43.9935 0 55.3356 11.3419 55.3356 25.3329V30.6662H52.6689V25.3329C52.6689 18.5215 49.6644 12.4118 44.9084 8.25686L41.472 12.1704C36.7622 8.03501 32.1534 7.20783 28.138 7.74454C23.9762 8.30083 20.2458 10.3637 17.6963 12.3134L14.7973 8.52266Z"
                  fill="white"
                />
              </svg>
              <p>CALL US NOW: 1200 333 999</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Customer */}
      <section>
        <Row className={style.OurCustomerMain}>
          <Col lg={4}>
            <div className={style.OurCustomerLeft}>
              <h1>Our Customer Love</h1>
              <p>
                We Invite you to try our services, and we personally guarantee
                that you will be completely satisficed. We Invite you to try our
                services, and we personally guarantee that you will be
                completely satisficed.
              </p>
              <button className={style.ExploreMore}>Explore More</button>
            </div>
          </Col>
          <Col
            lg={7}
            style={
              {
                // display: "flex",
                // alignItems: "center",
              }
            }
          >
            <div>
              <Slider {...settings}>
                {/* Slider 1 starts */}

                <div className={style.Slider}>
                  <div className={style.SliderMain}>
                    <Col lg={6} md={12}>
                      <div className={style.CustomerMainBox}>
                        <div>
                          <img
                            className={style.CustomerImage}
                            src={CustomerImage}
                            alt=""
                          />
                        </div>
                        <div className={style.soloCustomer}>
                          <div>
                            <div
                              style={{
                                display: "flex",
                                gap: "6px",
                                alignItems: "center",
                              }}
                            >
                              {[...Array(5)].map((_, index) => (
                                <svg
                                  key={index}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M6.52447 1.46352C6.67415 1.00287 7.32585 1.00287 7.47553 1.46353L8.45934 4.49139C8.52628 4.6974 8.71826 4.83688 8.93487 4.83688H12.1186C12.6029 4.83688 12.8043 5.45669 12.4124 5.74139L9.83679 7.61271C9.66155 7.74003 9.58822 7.96572 9.65516 8.17173L10.639 11.1996C10.7886 11.6602 10.2614 12.0433 9.86955 11.7586L7.29389 9.88729C7.11865 9.75997 6.88135 9.75997 6.70611 9.88729L4.13045 11.7586C3.73859 12.0433 3.21136 11.6602 3.36103 11.1996L4.34484 8.17173C4.41178 7.96572 4.33845 7.74003 4.16321 7.61271L1.58755 5.74139C1.1957 5.45669 1.39708 4.83688 1.88145 4.83688H5.06513C5.28174 4.83688 5.47372 4.6974 5.54066 4.49139L6.52447 1.46352Z"
                                    fill="white"
                                  />
                                </svg>
                              ))}
                              <p className={style.Rating}>5.0 rating</p>
                            </div>
                          </div>
                          <p>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </p>

                          <div className={style.CustomerName}>
                            <h5>Elisa Grant</h5>
                            <p>Legacy Solutions Engineer</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={12}>
                      <div className={style.CustomerMainBox}>
                        <div>
                          <img
                            className={style.CustomerImage}
                            src={CustomerImage}
                            alt=""
                          />
                        </div>
                        <div className={style.soloCustomer}>
                          <div>
                            <div
                              style={{
                                display: "flex",
                                gap: "6px",
                                alignItems: "center",
                              }}
                            >
                              {[...Array(5)].map((_, index) => (
                                <svg
                                  key={index}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M6.52447 1.46352C6.67415 1.00287 7.32585 1.00287 7.47553 1.46353L8.45934 4.49139C8.52628 4.6974 8.71826 4.83688 8.93487 4.83688H12.1186C12.6029 4.83688 12.8043 5.45669 12.4124 5.74139L9.83679 7.61271C9.66155 7.74003 9.58822 7.96572 9.65516 8.17173L10.639 11.1996C10.7886 11.6602 10.2614 12.0433 9.86955 11.7586L7.29389 9.88729C7.11865 9.75997 6.88135 9.75997 6.70611 9.88729L4.13045 11.7586C3.73859 12.0433 3.21136 11.6602 3.36103 11.1996L4.34484 8.17173C4.41178 7.96572 4.33845 7.74003 4.16321 7.61271L1.58755 5.74139C1.1957 5.45669 1.39708 4.83688 1.88145 4.83688H5.06513C5.28174 4.83688 5.47372 4.6974 5.54066 4.49139L6.52447 1.46352Z"
                                    fill="white"
                                  />
                                </svg>
                              ))}
                              <p className={style.Rating}>5.0 rating</p>
                            </div>
                          </div>
                          <p>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </p>

                          <div className={style.CustomerName}>
                            <h5>Elisa Grant</h5>
                            <p>Legacy Solutions Engineer</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </div>
                </div>
                {/* Slider 2 starts */}
                <div className={style.Slider}>
                  <div className={style.SliderMain}>
                    <Col lg={6} md={12}>
                      <div className={style.CustomerMainBox}>
                        <div>
                          <img
                            className={style.CustomerImage}
                            src={CustomerImage}
                            alt=""
                          />
                        </div>
                        <div className={style.soloCustomer}>
                          <div>
                            <div
                              style={{
                                display: "flex",
                                gap: "6px",
                                alignItems: "center",
                              }}
                            >
                              {[...Array(5)].map((_, index) => (
                                <svg
                                  key={index}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M6.52447 1.46352C6.67415 1.00287 7.32585 1.00287 7.47553 1.46353L8.45934 4.49139C8.52628 4.6974 8.71826 4.83688 8.93487 4.83688H12.1186C12.6029 4.83688 12.8043 5.45669 12.4124 5.74139L9.83679 7.61271C9.66155 7.74003 9.58822 7.96572 9.65516 8.17173L10.639 11.1996C10.7886 11.6602 10.2614 12.0433 9.86955 11.7586L7.29389 9.88729C7.11865 9.75997 6.88135 9.75997 6.70611 9.88729L4.13045 11.7586C3.73859 12.0433 3.21136 11.6602 3.36103 11.1996L4.34484 8.17173C4.41178 7.96572 4.33845 7.74003 4.16321 7.61271L1.58755 5.74139C1.1957 5.45669 1.39708 4.83688 1.88145 4.83688H5.06513C5.28174 4.83688 5.47372 4.6974 5.54066 4.49139L6.52447 1.46352Z"
                                    fill="white"
                                  />
                                </svg>
                              ))}
                              <p className={style.Rating}>5.0 rating</p>
                            </div>
                          </div>
                          <p>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </p>

                          <div className={style.CustomerName}>
                            <h5>Elisa Grant</h5>
                            <p>Legacy Solutions Engineer</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={12}>
                      <div className={style.CustomerMainBox}>
                        <div>
                          <img
                            className={style.CustomerImage}
                            src={CustomerImage}
                            alt=""
                          />
                        </div>
                        <div className={style.soloCustomer}>
                          <div>
                            <div
                              style={{
                                display: "flex",
                                gap: "6px",
                                alignItems: "center",
                              }}
                            >
                              {[...Array(5)].map((_, index) => (
                                <svg
                                  key={index}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M6.52447 1.46352C6.67415 1.00287 7.32585 1.00287 7.47553 1.46353L8.45934 4.49139C8.52628 4.6974 8.71826 4.83688 8.93487 4.83688H12.1186C12.6029 4.83688 12.8043 5.45669 12.4124 5.74139L9.83679 7.61271C9.66155 7.74003 9.58822 7.96572 9.65516 8.17173L10.639 11.1996C10.7886 11.6602 10.2614 12.0433 9.86955 11.7586L7.29389 9.88729C7.11865 9.75997 6.88135 9.75997 6.70611 9.88729L4.13045 11.7586C3.73859 12.0433 3.21136 11.6602 3.36103 11.1996L4.34484 8.17173C4.41178 7.96572 4.33845 7.74003 4.16321 7.61271L1.58755 5.74139C1.1957 5.45669 1.39708 4.83688 1.88145 4.83688H5.06513C5.28174 4.83688 5.47372 4.6974 5.54066 4.49139L6.52447 1.46352Z"
                                    fill="white"
                                  />
                                </svg>
                              ))}
                              <p className={style.Rating}>5.0 rating</p>
                            </div>
                          </div>
                          <p>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </p>

                          <div className={style.CustomerName}>
                            <h5>Elisa Grant</h5>
                            <p>Legacy Solutions Engineer</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </div>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default OurServices2;
