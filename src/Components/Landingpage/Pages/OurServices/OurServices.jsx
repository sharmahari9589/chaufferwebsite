import React, { useContext, useEffect } from "react";
import style from "./OurServices.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { BookingProcessContext } from "../../BookingProcessContext";
import ServicesHero from "../../../../../Images/ServicesHero.jpg";
import HeroCar from "../../../../../Images/HeroCar.png";
import OurServices1 from "../../../../../Images/OurServices1.jpg";
import OurServices3 from "../../../../../Images/OurServices2.jpg";
import OurServices2 from "../../../../../Images/OurServices3.jpg";
import CustomerImage from "../../../../../Images/CustomerImage.png";
import Slider from "react-slick";
import MagicSliderDots from "react-magic-slider-dots";
import { CallSvg } from "../../../../../Images/Svg";

const OurServices = () => {
  const { handleSteps, activeStep, handleWhiteHeader } = useContext(
    BookingProcessContext
  );
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
  useEffect(() => {
    handleWhiteHeader(false);
    return () => {
      handleWhiteHeader(true);
    };
  }, []);

  return (
    <Container style={{ padding: "120px 0px 0px 0px" }}>
      <div style={{ padding: "0px 120px" }}>
        <section
          className={style.OurServices}
          style={{
            backgroundImage: `url(${ServicesHero})`,
            backgroundSize: "100% 72%",
          }}
        >
          <Row>
            <Col style={{ color: "#fff" }}>
              {/* <p>Our&nbsp;Services</p> */}
            </Col>
            <Col lg={8}>
              <img
                style={{ width: "100%", height: "100%", marginLeft: "80px" }}
                src={HeroCar}
                alt=""
              />
            </Col>
          </Row>
        </section>
      </div>

      <section className={style.OverviewMain} style={{ padding: "50px 120px" }}>
        <Row style={{ justifyContent: "center", width: "100%" }}>
          <div className={style.Services2} style={{ width: "40%" }}>
            <h1>Overview</h1>
            <p>
              We Invite you to try our services, and we personally guarantee
              that you will be completely satisified{" "}
            </p>
          </div>
          {/*  */}
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
            journeys. We serve with a lot of values that you can feel
            directly.Join our satisfied customers who trust us for their
            journeys. We serve with a lot of values that you can feel
            directly.Join our satisfied customers who trust us for their
            journeys. We serve with a lot of values that you can feel
            directly.Join our satisfied customers who trust us for their
            journeys. We serve with a lot of values that you can feel directly.
          </p>
        </Row>
      </section>

      <section className={style.OverviewMain} style={{ padding: "0px 80px" }}>
        <Row style={{ justifyContent: "center", width: "100%" }}>
          <div className={style.Services2} style={{ width: "40%" }}>
            <h1>Our Services</h1>
            <p>
              We Invite you to try our services, and we personally guarantee
              that you will be completely satisified{" "}
            </p>
          </div>
          {/*  */}
        </Row>
        <Row>
          <Col>
            <div className={style.OverServices}>
              <img src={OurServices1} alt="" />
              <div className={style.OverServicesTextMain}>
                <h5>Airport Transfer</h5>

                <p>
                  Join our satisfied customers who trust us for their journeys.
                  We serve with a lot of values that you can feel directly.Join
                  our satisfied customers who trust us for their journeys. We
                  serve with a lot of values that you can feel directly.Join our
                  satisfied customers who trust us for their journeys. We serve
                  with a lot of values that you can feel directly.
                </p>

                <button>Book Now</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className={style.OverServices}>
              <img src={OurServices3} alt="" />
              <div className={style.OverServicesTextMain}>
                <h5>City to City Transfer</h5>

                <p>
                  Join our satisfied customers who trust us for their journeys.
                  We serve with a lot of values that you can feel directly.Join
                  our satisfied customers who trust us for their journeys. We
                  serve with a lot of values that you can feel directly.Join our
                  satisfied customers who trust us for their journeys. We serve
                  with a lot of values that you can feel directly.
                </p>

                <button>Book Now</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className={style.OverServices}>
              <img src={OurServices2} alt="" />
              <div className={style.OverServicesTextMain}>
                <h5>Hourly Booking</h5>

                <p>
                  Join our satisfied customers who trust us for their journeys.
                  We serve with a lot of values that you can feel directly.Join
                  our satisfied customers who trust us for their journeys. We
                  serve with a lot of values that you can feel directly.Join our
                  satisfied customers who trust us for their journeys. We serve
                  with a lot of values that you can feel directly.
                </p>

                <button>Book Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* Our Fleet */}
      <section style={{ padding: "60px 80px" }}>
        <div className={style.OurFleet}>
          <Row className={style.OurFleetMainDiv}>
            <Col lg={4} className={style.OurFleetLeftMain}>
              <div className={style.OurFleetLeft}>
                <h1>Our Fleet</h1>
                <p>
                  We Offer an extensive fleet of vehicles including sedans,
                  lumounsines and crossovers
                </p>
                <button className={style.ExploreMore}>Explore More</button>
              </div>
            </Col>
            <Col lg={6}>{/* <SliderCar /> */}</Col>
          </Row>
        </div>
      </section>

      {/* Our Customer */}
      <section style={{ padding: "0px 0px" }}>
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
                  <div style={{ display: "flex" }}>
                    <Col lg={6}>
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
                    <Col lg={6}>
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
                  <div style={{ display: "flex" }}>
                    <Col lg={6}>
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
                    <Col lg={6}>
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

      {/* Call us Section */}
      <section>
        <Row className={style.CallUsMain}>
          <Col lg={8}>
            <h5>
              Call us for further information. Rentaly
              <br /> customer care is here to help you anytime.
            </h5>
          </Col>
          <Col lg={3}>
            <div className={style.CallUs}>
              <div className={style.callSvgMain}>
                {CallSvg}
                <p>CALL US NOW</p>
                <h5>1200 333 999</h5>
              </div>
              <button>Contact us</button>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default OurServices;
