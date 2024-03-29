import React, { useContext, useEffect } from "react";
import style from "./Aboutus.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { BookingProcessContext } from "../../BookingProcessContext";
import whyXactlane from "../../../../../Images/Aboutus.png";
import HowXactlaneWork from "../../../../../Images/HowXactlaneWork.jpg";
import TheBestCar from "../../../../../Images/TheBestCar.png";
import CustomerImage from "../../../../../Images/CustomerImage.png";
import CallUs from "../../../../../Images/CallUs.jpg";

import Slider from "react-slick";
import MagicSliderDots from "react-magic-slider-dots";

const Aboutus = () => {
  const { handleSteps, activeStep, handleWhiteHeader } = useContext(
    BookingProcessContext
  );

  useEffect(() => {
    handleWhiteHeader(false);
    return () => {
      handleWhiteHeader(true);
    };
  }, []);

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

  return (
    <Container>
      <Row className={style.getToknowRow} style={{ justifyContent: "center" }}>
        <Col lg={6} xxl={3} className={style.heroMain}>
          <div className={style.getToknowMainSuper}>
            <div className={style.getToknowMain}>
              <div className={style.getToknow}>
                <h5>Get To Know About Our Rentive Company</h5>
                <p>
                  We Invite you to try our services, and we personally guarantee
                  that you will be completely satisficed. We Invite you to try
                  our services, and we personally guarantee that you will be
                  completely satisficed.
                </p>
              </div>
            </div>
            <div className={style.percentageMain}>
              <div>
                <div className={style.Percentage}>
                  <h5>Quality Services</h5>
                  <p>90%</p>
                </div>
                <div className={style.barBody}>
                  <span></span>
                </div>
              </div>
              <div>
                <div className={style.Percentage}>
                  <h5>Successful Contracts</h5>
                  <p>90%</p>
                </div>
                <div className={style.barBody}>
                  <span style={{ width: "95%" }}></span>
                </div>
              </div>
              <div>
                <div className={style.Percentage}>
                  <h5>Luxury Transport</h5>
                  <p>85%</p>
                </div>
                <div className={style.barBody}>
                  <span style={{ width: "85%" }}></span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.ShortAndLongMain}>
            <div>
              <h3>Short and Long Term Car Rental Service</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <h3>Award-winning Car Rental Service</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className={style.ShortAndLongMain}>
            <div>
              <h3>Well Maintained & Comfortable Cars</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <h3>Easy 4 Steps Online Booking System</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={5} xxl={3}>
          <div className={style.WhyChoosexactlane}>
            <img
              className={style.WhyChoosexactlaneImage}
              src={whyXactlane}
              alt=""
            />
            <div>
              <h3>
                Why Choose{" "}
                <span>
                  xactlane{" "}
                  <svg
                    width="10"
                    height="10"
                    style={{ marginTop: "20px", marginLeft: "-10px" }}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.7845 9.91176C7.42688 9.91176 9.56899 7.69293 9.56899 4.95588C9.56899 2.21882 7.42688 0 4.7845 0C2.14211 0 0 2.21882 0 4.95588C0 7.69293 2.14211 9.91176 4.7845 9.91176Z"
                      fill="#0BC36B"
                    />
                  </svg>
                </span>
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <div
          className={style.XactLaneWorks}
          style={{
            backgroundImage: `url(${HowXactlaneWork})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Col
            lg={12}
            xxl={5}
            className={`${style.XactLaneWorksMain} ${style.HowXactlaneWidth}`}
          >
            <div className={style.Services2} style={{ width: "40%" }}>
              <h1 style={{ display: "flex", alignItems: "end" }}>
                How <span>&nbsp;xactlane&nbsp;</span>
                Works
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
              <p>Help you to find perfect</p>
            </div>
            <div className={style.XactlaneNumbers}>
              <div className={style.XactlaneNumbersSingle}>
                <h5>01</h5>
                <div>
                  <h4>Choose a vehicle</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
              {/*  */}
              <div className={style.Steps}>
                <svg
                  width="120"
                  className={style.Divider}
                  height="2"
                  viewBox="0 0 230 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1L230 1.00002"
                    stroke="#1C1C1C"
                    stroke-width="0.5"
                    stroke-dasharray="11 4"
                  />
                </svg>
              </div>
              <div className={style.XactlaneNumbersSingle}>
                <h5>02</h5>
                <div>
                  <h4>Pick location & date</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
              {/*  */}
              <div style={{ margin: " 0px -20px 60px -20px " }}>
                <svg
                  width="120"
                  className={style.Divider}
                  height="2"
                  viewBox="0 0 230 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1L230 1.00002"
                    stroke="#1C1C1C"
                    stroke-width="0.5"
                    stroke-dasharray="11 4"
                  />
                </svg>
              </div>

              <div className={style.XactlaneNumbersSingle}>
                <h5>03</h5>
                <div>
                  <h4>Make a booking</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
              {/*  */}
              <div style={{ margin: " 0px -20px 60px -20px " }}>
                <svg
                  width="120"
                  className={style.Divider}
                  height="2"
                  viewBox="0 0 230 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1L230 1.00002"
                    stroke="#1C1C1C"
                    stroke-width="0.5"
                    stroke-dasharray="11 4"
                  />
                </svg>
              </div>
              <div className={style.XactlaneNumbersSingle}>
                <h5>04</h5>
                <div>
                  <h4>Sit back & relax</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <div className={style.XactLaneWorksMain} style={{ width: "90%" }}>
            <div className={style.OurAdvantageMain} style={{}}>
              <h1 style={{ display: "flex", alignItems: "end" }}>
                Our Advantage
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <Row className={style.ourAdvantageListing}>
              <Col>
                <div className={style.ourAdvantageListingLeft}>
                  <div className={style.ourAdvantageListingHeading}>
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6644 5.47943L18.6367 9.01035C20.2053 10.4047 20.9896 11.1019 20.9896 12C20.9896 12.8981 20.2053 13.5953 18.6367 14.9896L14.6644 18.5206C13.9484 19.157 13.5903 19.4752 13.2952 19.3427C13 19.2101 13 18.7311 13 17.7731V15.4286C9.4 15.4286 5.5 17.1428 4 20C4 10.8571 9.33333 8.57142 13 8.57142V6.22684C13 5.26884 13 4.78984 13.2952 4.65729C13.5903 4.52474 13.9484 4.84297 14.6644 5.47943Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <h6>We offer eco-petrol technology cars</h6>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>

                  <div className={style.ourAdvantageListingSolo}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3251 5.47944L6.35284 9.01037C4.78422 10.4047 3.9999 11.1019 3.9999 12C3.9999 12.8981 4.78422 13.5953 6.35284 14.9896L10.3251 18.5206C11.0412 19.157 11.3992 19.4753 11.6943 19.3427C11.9895 19.2102 11.9895 18.7312 11.9895 17.7732V15.4286C15.5895 15.4286 19.4895 17.1429 20.9895 20C20.9895 10.8571 15.6562 8.57143 11.9895 8.57143V6.22685C11.9895 5.26886 11.9895 4.78986 11.6943 4.65731C11.3992 4.52476 11.0412 4.84298 10.3251 5.47944Z"
                        stroke="#0BC36B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>How Revus can help you buy a new car?</p>
                  </div>

                  <div className={style.ourAdvantageListingSolo}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3251 5.47944L6.35284 9.01037C4.78422 10.4047 3.9999 11.1019 3.9999 12C3.9999 12.8981 4.78422 13.5953 6.35284 14.9896L10.3251 18.5206C11.0412 19.157 11.3992 19.4753 11.6943 19.3427C11.9895 19.2102 11.9895 18.7312 11.9895 17.7732V15.4286C15.5895 15.4286 19.4895 17.1429 20.9895 20C20.9895 10.8571 15.6562 8.57143 11.9895 8.57143V6.22685C11.9895 5.26886 11.9895 4.78986 11.6943 4.65731C11.3992 4.52476 11.0412 4.84298 10.3251 5.47944Z"
                        stroke="#0BC36B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>We help to increase auto sales.</p>
                  </div>

                  <div className={style.ourAdvantageListingSolo}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3251 5.47944L6.35284 9.01037C4.78422 10.4047 3.9999 11.1019 3.9999 12C3.9999 12.8981 4.78422 13.5953 6.35284 14.9896L10.3251 18.5206C11.0412 19.157 11.3992 19.4753 11.6943 19.3427C11.9895 19.2102 11.9895 18.7312 11.9895 17.7732V15.4286C15.5895 15.4286 19.4895 17.1429 20.9895 20C20.9895 10.8571 15.6562 8.57143 11.9895 8.57143V6.22685C11.9895 5.26886 11.9895 4.78986 11.6943 4.65731C11.3992 4.52476 11.0412 4.84298 10.3251 5.47944Z"
                        stroke="#0BC36B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  className={style.ourAdvantageListingLeft}
                  style={{ marginTop: "10px" }}
                >
                  <div className={style.ourAdvantageListingSolo}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3251 5.47944L6.35284 9.01037C4.78422 10.4047 3.9999 11.1019 3.9999 12C3.9999 12.8981 4.78422 13.5953 6.35284 14.9896L10.3251 18.5206C11.0412 19.157 11.3992 19.4753 11.6943 19.3427C11.9895 19.2102 11.9895 18.7312 11.9895 17.7732V15.4286C15.5895 15.4286 19.4895 17.1429 20.9895 20C20.9895 10.8571 15.6562 8.57143 11.9895 8.57143V6.22685C11.9895 5.26886 11.9895 4.78986 11.6943 4.65731C11.3992 4.52476 11.0412 4.84298 10.3251 5.47944Z"
                        stroke="#0BC36B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>

                  <div className={style.ourAdvantageListingSolo}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3251 5.47944L6.35284 9.01037C4.78422 10.4047 3.9999 11.1019 3.9999 12C3.9999 12.8981 4.78422 13.5953 6.35284 14.9896L10.3251 18.5206C11.0412 19.157 11.3992 19.4753 11.6943 19.3427C11.9895 19.2102 11.9895 18.7312 11.9895 17.7732V15.4286C15.5895 15.4286 19.4895 17.1429 20.9895 20C20.9895 10.8571 15.6562 8.57143 11.9895 8.57143V6.22685C11.9895 5.26886 11.9895 4.78986 11.6943 4.65731C11.3992 4.52476 11.0412 4.84298 10.3251 5.47944Z"
                        stroke="#0BC36B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>

                  <div className={style.ourAdvantageListingSolo}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3251 5.47944L6.35284 9.01037C4.78422 10.4047 3.9999 11.1019 3.9999 12C3.9999 12.8981 4.78422 13.5953 6.35284 14.9896L10.3251 18.5206C11.0412 19.157 11.3992 19.4753 11.6943 19.3427C11.9895 19.2102 11.9895 18.7312 11.9895 17.7732V15.4286C15.5895 15.4286 19.4895 17.1429 20.9895 20C20.9895 10.8571 15.6562 8.57143 11.9895 8.57143V6.22685C11.9895 5.26886 11.9895 4.78986 11.6943 4.65731C11.3992 4.52476 11.0412 4.84298 10.3251 5.47944Z"
                        stroke="#0BC36B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Row>

      <Row>
        <Col
          lg={7}
          xxl={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className={style.TheBestCarImg} src={TheBestCar} alt="" />
        </Col>
        <Col xxl={4}>
          <div className={style.bestcartextMain}>
            <h3>The best CAR rental services in this world</h3>

            <div className={style.OurMission}>
              <h4>Our Mission</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className={style.OurMission}>
              <h4>Our Vission</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Our Customer */}
        <section>
          <Row className={style.OurCustomerMain}>
            <Col lg={4}>
              <div className={style.OurCustomerLeft}>
                <h1>Our Customer Love</h1>
                <p>
                  We Invite you to try our services, and we personally guarantee
                  that you will be completely satisficed. We Invite you to try
                  our services, and we personally guarantee that you will be
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
      </Row>

      <Row>
        <div
          className={`${style.CallUsFor} `}
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
      </Row>
    </Container>
  );
};

export default Aboutus;
