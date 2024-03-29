import React from "react";

import style from "./Influencer.module.css";
import { Col, Container, Row } from "react-bootstrap";
import DisclaimerMain from "../../../../../Images/DisclaimerMain.jpg";
import HowXactlaneWork from "../../../../../Images/HowXactlaneWork.jpg";
import Blog1 from "../../../../../Images/Blog1.jpg";
import Blog2 from "../../../../../Images/Blog2.jpg";
import Blog3 from "../../../../../Images/Blog3.jpg";

const Influencer = () => {
  return (
    <Container>
      <section>
        <Row
          className={style.DisclaimerMain}
          style={{ backgroundImage: `url(${DisclaimerMain})` }}
        >
          <h1>
            xactlane’s <span>Influencer</span>
          </h1>
        </Row>
      </section>

      <section>
        <Row className={style.WelcomeToXactlane}>
          <div>
            <h3 style={{ display: "flex", alignItems: "end" }}>
              Welcome to Xactlane’s influencer program!
              <svg
                className={style.hide}
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
            </h3>

            <p>
              Are you a travel influencer or blogger looking for new and
              exciting experiences? Do you have a passion for sharing your
              travels with your followers? If so, then Xactlane is the perfect
              fit for you!
              <br />
              <div style={{ width: "100%" }}>&nbsp;</div>
              Xactlane is a premium transportation company that offers
              world-class ground transportation services to travelers around the
              world. We care about our family of creators. We value quality
              content, great communication as well as environmental
              consciousness. Now, we’re looking for influencers and bloggers to
              join our program and showcase our services to your followers.
            </p>
          </div>
          <button>Apply Now</button>
        </Row>
      </section>

      <section>
        <Row className={style.BenefitsOfWorking}>
          <h3
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Benefits of working with us
            <svg
              className={style.hide}
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
          </h3>
        </Row>

        <Row className={style.BenefitsOfWorking}>
          <Col className={style.Boxes} lg={3}>
            <div className={style.SvgContainer}>
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 16C1.25 8.92893 1.25 5.3934 3.4467 3.1967C5.6434 1 9.17893 1 16.25 1H23.75C30.8211 1 34.3566 1 36.5533 3.1967C38.75 5.3934 38.75 8.92893 38.75 16C38.75 23.0711 38.75 26.6066 36.5533 28.8033C34.3566 31 30.8211 31 23.75 31H16.25C9.17893 31 5.6434 31 3.4467 28.8033C1.25 26.6066 1.25 23.0711 1.25 16Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
                <path
                  d="M16.25 23.5H8.75"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M23.75 23.5H20.9375"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M1.25 12.25L38.75 12.25"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h1>Free rides</h1>
            <p>
              Enjoy complimentary rides on our premium car services to
              experience the luxury and comfort of Xactlane.
            </p>
          </Col>
          <Col className={style.Boxes} lg={3}>
            <div className={style.SvgContainer}>
              <svg
                width="34"
                height="32"
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.652 8.93041C16.252 7.85408 16.552 7.31592 17.0005 7.31592C17.449 7.31592 17.749 7.85408 18.349 8.93041L18.5042 9.20887C18.6747 9.51473 18.76 9.66766 18.8929 9.76856C19.0258 9.86947 19.1914 9.90692 19.5225 9.98184L19.8239 10.05C20.989 10.3137 21.5716 10.4455 21.7102 10.8912C21.8488 11.3369 21.4516 11.8013 20.6573 12.7301L20.4518 12.9704C20.2261 13.2343 20.1132 13.3663 20.0625 13.5296C20.0117 13.6928 20.0288 13.8689 20.0629 14.2211L20.094 14.5417C20.214 15.7809 20.2741 16.4006 19.9112 16.676C19.5484 16.9515 19.0029 16.7003 17.912 16.1981L17.6298 16.0681C17.3198 15.9254 17.1648 15.854 17.0005 15.854C16.8362 15.854 16.6812 15.9254 16.3712 16.0681L16.089 16.1981C14.9981 16.7003 14.4526 16.9515 14.0898 16.676C13.7269 16.4006 13.787 15.7809 13.9071 14.5417L13.9381 14.2211C13.9723 13.8689 13.9893 13.6928 13.9386 13.5296C13.8878 13.3663 13.7749 13.2343 13.5492 12.9704L13.3437 12.7301C12.5494 11.8013 12.1523 11.3369 12.2909 10.8912C12.4295 10.4455 13.012 10.3137 14.1771 10.05L14.4786 9.98184C14.8097 9.90692 14.9752 9.86947 15.1081 9.76856C15.241 9.66766 15.3263 9.51473 15.4968 9.20887L15.652 8.93041Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
                <path
                  d="M28.0535 12.0526C28.0535 18.1568 23.1051 23.1053 17.0009 23.1053C10.8967 23.1053 5.94824 18.1568 5.94824 12.0526C5.94824 5.94843 10.8967 1 17.0009 1C23.1051 1 28.0535 5.94843 28.0535 12.0526Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
                <path
                  d="M17.0004 23.2124L11.0455 29.3782C10.1927 30.2612 9.76626 30.7027 9.40515 30.8555C8.58228 31.2037 7.6695 30.9057 7.23664 30.1477C7.04668 29.815 6.98749 29.215 6.8691 28.015C6.80226 27.3375 6.76884 26.9987 6.66739 26.715C6.44027 26.0797 5.96303 25.5856 5.34952 25.3504C5.07548 25.2454 4.74829 25.2108 4.09392 25.1416C2.93494 25.019 2.35545 24.9577 2.03417 24.761C1.30207 24.3128 1.01432 23.3677 1.35056 22.5157C1.49812 22.1418 1.92453 21.7003 2.77734 20.8173L6.66739 16.7896"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
                <path
                  d="M17.0006 23.2124L22.9555 29.3782C23.8083 30.2612 24.2347 30.7027 24.5958 30.8555C25.4187 31.2037 26.3315 30.9057 26.7643 30.1477C26.9543 29.815 27.0135 29.215 27.1319 28.015C27.1987 27.3375 27.2321 26.9987 27.3336 26.715C27.5607 26.0797 28.0379 25.5856 28.6515 25.3504C28.9255 25.2454 29.2527 25.2108 29.9071 25.1416C31.066 25.019 31.6455 24.9577 31.9668 24.761C32.6989 24.3128 32.9867 23.3677 32.6504 22.5157C32.5029 22.1418 32.0765 21.7003 31.2236 20.8173L27.3336 16.7896"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <h1>Unique content</h1>
            <p>
              Showcase unique and exciting experiences to your followers with
              our exclusive influencer program.
            </p>
          </Col>
          <Col className={style.Boxes} lg={3}>
            <div className={style.SvgContainer}>
              <svg
                width="24"
                height="32"
                viewBox="0 0 24 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16L7.56345 20.3934C3.17972 24.7345 0.987849 26.905 1.60148 28.7778C1.65423 28.9387 1.71973 29.0953 1.79738 29.2461C2.70069 31 5.80046 31 12 31C18.1995 31 21.2993 31 22.2026 29.2461C22.2803 29.0953 22.3458 28.9387 22.3985 28.7778C23.0121 26.905 20.8203 24.7345 16.4365 20.3934L12 16ZM12 16L16.4365 11.6066C20.8203 7.2655 23.0121 5.09495 22.3985 3.22223C22.3458 3.06125 22.2803 2.90466 22.2026 2.75389C21.2993 1 18.1995 1 12 1C5.80046 1 2.70069 1 1.79738 2.75389C1.71973 2.90466 1.65423 3.06125 1.60148 3.22223C0.987849 5.09495 3.17972 7.2655 7.56345 11.6066L12 16Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
                <path
                  d="M9 6.25H15"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M9 25.75H15"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h1>Revenue share</h1>
            <p>
              Earn revenue for each new customer that you refer to Xactlane.
            </p>
          </Col>
          {/* </div> */}
        </Row>
        <Row className={style.BenefitsOfWorking}>
          <Col className={style.Boxes} lg={3}>
            <div className={style.SvgContainer}>
              <svg
                width="24"
                height="32"
                viewBox="0 0 24 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16L7.56345 20.3934C3.17972 24.7345 0.987849 26.905 1.60148 28.7778C1.65423 28.9387 1.71973 29.0953 1.79738 29.2461C2.70069 31 5.80046 31 12 31C18.1995 31 21.2993 31 22.2026 29.2461C22.2803 29.0953 22.3458 28.9387 22.3985 28.7778C23.0121 26.905 20.8203 24.7345 16.4365 20.3934L12 16ZM12 16L16.4365 11.6066C20.8203 7.2655 23.0121 5.09495 22.3985 3.22223C22.3458 3.06125 22.2803 2.90466 22.2026 2.75389C21.2993 1 18.1995 1 12 1C5.80046 1 2.70069 1 1.79738 2.75389C1.71973 2.90466 1.65423 3.06125 1.60148 3.22223C0.987849 5.09495 3.17972 7.2655 7.56345 11.6066L12 16Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
                <path
                  d="M9 6.25H15"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M9 25.75H15"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h1>Revenue share</h1>
            <p>
              Earn revenue for each new customer that you refer to Xactlane.
            </p>
          </Col>
          <Col className={style.Boxes} lg={3}>
            <div className={style.SvgContainer}>
              <svg
                width="24"
                height="32"
                viewBox="0 0 24 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16L7.56345 20.3934C3.17972 24.7345 0.987849 26.905 1.60148 28.7778C1.65423 28.9387 1.71973 29.0953 1.79738 29.2461C2.70069 31 5.80046 31 12 31C18.1995 31 21.2993 31 22.2026 29.2461C22.2803 29.0953 22.3458 28.9387 22.3985 28.7778C23.0121 26.905 20.8203 24.7345 16.4365 20.3934L12 16ZM12 16L16.4365 11.6066C20.8203 7.2655 23.0121 5.09495 22.3985 3.22223C22.3458 3.06125 22.2803 2.90466 22.2026 2.75389C21.2993 1 18.1995 1 12 1C5.80046 1 2.70069 1 1.79738 2.75389C1.71973 2.90466 1.65423 3.06125 1.60148 3.22223C0.987849 5.09495 3.17972 7.2655 7.56345 11.6066L12 16Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                />
                <path
                  d="M9 6.25H15"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M9 25.75H15"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h1>Revenue share</h1>
            <p>
              Earn revenue for each new customer that you refer to Xactlane.
            </p>
          </Col>
        </Row>
      </section>
      {/* They love exactlane */}
      <section style={{}}>
        <Row
          className={style.XactLaneWorks}
          style={{
            backgroundImage: `url(${HowXactlaneWork})`,
            display: "flex",

            justifyContent: "center",
            padding: "70px 0px",
          }}
        >
          <div className={style.XactLaneWorksMain} style={{}}>
            <div className={style.Services2} style={{}}>
              <h1 style={{ display: "flex", alignItems: "end" }}>
                They love Xactlane
                <svg
                  className={style.hide}
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
            </div>

            <div className={style.UserInfo}>
              <div>
                <img src={Blog1} alt="" />
                <p>Duc @ducdubois</p>
              </div>
              <div>
                <img src={Blog2} alt="" />
                <p>Nikol @freshbeautystudio</p>
              </div>
              <div>
                <img src={Blog3} alt="" />
                <p>Cory @the_fashionable_man</p>
              </div>
            </div>
          </div>

          <div className={style.getInvolved}>
            <h1 style={{ display: "flex", alignItems: "end" }}>
              Want to get involved? Become a Xactlane influencer!
              <svg
                className={style.hide}
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

            <button>Apply Now</button>
          </div>

          <div className={style.XactLaneWorksMain}>
            <div className={style.OurAdvantageMain}>
              <h1 style={{ display: "flex", alignItems: "end" }}>
                Frequently Questions
                <svg
                  className={style.hide}
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
                      <h6>How does the collaboration work?</h6>
                    </div>
                    <p>
                      You will get the opportunity to try our premium chauffeur
                      service completely free of charge in order for you to
                      create an honest review of our brand. Together we will
                      decide what the partnership will look like, what your
                      content will be, and what we would like to communicate
                      depending on active campaigns.
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
                    <p>Which social media platforms are you interested in?</p>
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
                      I am a creator with a smaller following. Would you still
                      be open to collaborating with me?
                    </p>
                  </div>

                  {/* <div className={style.ourAdvantageListingSolo}>
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
                  </div> */}
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
                    <p>When will I hear back about my application?</p>
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
                      Do I have to disclose this partnership to my audience?
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
                    <p>Do you work with creators internationally?</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
};

export default Influencer;
