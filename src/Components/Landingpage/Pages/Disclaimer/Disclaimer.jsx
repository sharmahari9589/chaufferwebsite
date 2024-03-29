import React from "react";
import style from "./Disclaimer.module.css";
import { Col, Container, Row } from "react-bootstrap";

import DisclaimerMain from "../../../../../Images/DisclaimerMain.jpg";
import DisclaimerBenz from "../../../../../Images/DisclaimerBenz.png";
import {
  Fb,
  Ig,
  linkedin,
  pinterest,
  twitter,
} from "../../../../../Images/Svg";

const Disclaimer = () => {
  return (
    <Container>
      <section>
        <Row
          className={style.DisclaimerMain}
          style={{ backgroundImage: `url(${DisclaimerMain})` }}
        >
          <h1>
            xactlane
            <br />
            <span>Disclaimer</span>
          </h1>
        </Row>
      </section>

      <section>
        <Row className={style.DisclaimerRow} style={{}}>
          <div className={style.DisclaimerText}>
            <h1 style={{}}>
              Disclaimer
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
              All contents, texts, logos as well as the design of this website
              are the property of Chile Inside SpA and protected by copyright.
              It is prohibited to copy this website or parts of it. All photos
              and images on this website are either the property of Chile Inside
              SpA or have been provided by our partners, clients or any other
              source, mainly the Internet. Although the content of this website
              is edited and updated as carefully as possible, Chile Inside SpA
              disclaims any and all responsibility for the accuracy, content,
              completeness, legality, reliability, operability or availability
              of information or material displayed on this website. The
              information we use for our program descriptions comes directly
              from each program place or language school. We make the effort to
              ensure that the information is as accurate as possible. However,
              it may happen that project conditions change with short or no
              notice. The information disclosed on our website complies with our
              current state of knowledge and no responsibility is taken for the
              correctness of this information.
              {/* <br /> */}
              This website contains web links to other websites. These links are
              provided solely as a convenience to you and are not endorsements
              of any products or services in such websites and no information in
              such websites has been endorsed or approved by Chile Inside SpA.
              <br />
              All prices listed on this website are subject to changes without
              prior notice.
            </p>
          </div>
        </Row>
      </section>

      <section>
        <Row style={{ gap: "50px" }}>
          <Col lg={7} style={{ padding: "0px" }}>
            <img
              src={DisclaimerBenz}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <div className={style.TextContainer} style={{}}>
              <h1>Contact details of the company</h1>
              <div className={style.Boxesdiv}>
                <div
                  style={{
                    display: "flex",
                    padding: "14px",
                    alignItems: "flex-start",
                    borderRadius: "13.327px",
                    background: "#F7F7F7",
                  }}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 38 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.808 24.6406C28.808 25.0737 28.7922 25.4902 28.7447 25.89C28.3805 30.3877 25.863 32.6199 21.2239 32.6199H20.5905C20.1947 32.6199 19.8147 32.8198 19.5772 33.1529L17.6772 35.8183C16.838 37.001 15.4763 37.001 14.6372 35.8183L12.7372 33.1529C12.5313 32.8697 12.0722 32.6199 11.7239 32.6199H11.0905C6.03969 32.6199 3.50635 31.3039 3.50635 24.6406V17.9773C3.50635 13.0965 5.64386 10.4478 9.90303 10.0647C10.283 10.0147 10.6789 9.99805 11.0905 9.99805H21.2239C26.2747 9.99805 28.808 12.6634 28.808 17.9773V24.6406Z"
                      stroke="#1C1C1C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M35.1412 17.9783C35.1412 22.8758 33.0037 25.5078 28.7445 25.8909C28.792 25.4911 28.8078 25.0747 28.8078 24.6415V17.9783C28.8078 12.6643 26.2745 9.99897 21.2237 9.99897H11.0903C10.6787 9.99897 10.2828 10.0156 9.90283 10.0656C10.267 5.58456 12.7845 3.33569 17.4237 3.33569H27.557C32.6078 3.33569 35.1412 6.00102 35.1412 11.315V17.9783Z"
                      stroke="#1C1C1C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.7083 22.0795H21.7226"
                      stroke="#1C1C1C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.1678 22.0795H16.1821"
                      stroke="#1C1C1C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.6253 22.0795H10.6396"
                      stroke="#1C1C1C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className={style.bottomMainDiv}>
                  <div className={style.BoxesdivBottom}>
                    <h6>Chat to support</h6>
                    <p>We’re here to help.</p>
                  </div>
                  <span>support@xactlane.com</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          <Col lg={10} className={style.ContactInfo}>
            <div className={style.Boxesdiv}>
              <div
                style={{
                  display: "flex",
                  padding: "14px",
                  alignItems: "flex-start",
                  borderRadius: "13.327px",
                  background: "#F7F7F7",
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.3835 30.7594C34.1143 31.3294 33.766 31.8677 33.3068 32.3744C32.531 33.2294 31.676 33.8469 30.7102 34.2427C29.7602 34.6386 28.731 34.8444 27.6227 34.8444C26.0077 34.8444 24.2818 34.4644 22.461 33.6886C20.6402 32.9127 18.8193 31.8677 17.0143 30.5536C15.1935 29.2236 13.4677 27.7511 11.821 26.1202C10.1902 24.4736 8.71766 22.7477 7.40349 20.9427C6.10516 19.1377 5.06016 17.3327 4.30016 15.5436C3.54016 13.7386 3.16016 12.0127 3.16016 10.3661C3.16016 9.2894 3.35016 8.26023 3.73016 7.31023C4.11016 6.3444 4.71182 5.45773 5.55099 4.66607C6.56432 3.66857 7.67266 3.17773 8.84433 3.17773C9.28766 3.17773 9.73099 3.27273 10.1268 3.46273C10.5385 3.65273 10.9027 3.93773 11.1877 4.3494L14.861 9.5269C15.146 9.92273 15.3518 10.2869 15.4943 10.6352C15.6368 10.9677 15.716 11.3002 15.716 11.6011C15.716 11.9811 15.6052 12.3611 15.3835 12.7252C15.1777 13.0894 14.8768 13.4694 14.4968 13.8494L13.2935 15.1002C13.1193 15.2744 13.0402 15.4802 13.0402 15.7336C13.0402 15.8602 13.056 15.9711 13.0877 16.0977C13.1352 16.2244 13.1827 16.3194 13.2143 16.4144C13.4993 16.9369 13.9902 17.6177 14.6868 18.4411C15.3993 19.2644 16.1593 20.1036 16.9827 20.9427C17.8377 21.7819 18.661 22.5577 19.5002 23.2702C20.3235 23.9669 21.0043 24.4419 21.5427 24.7269C21.6218 24.7586 21.7168 24.8061 21.8277 24.8536C21.9543 24.9011 22.081 24.9169 22.2235 24.9169C22.4927 24.9169 22.6985 24.8219 22.8727 24.6477L24.076 23.4602C24.4718 23.0644 24.8518 22.7636 25.216 22.5736C25.5802 22.3519 25.9443 22.2411 26.3402 22.2411C26.641 22.2411 26.9577 22.3044 27.306 22.4469C27.6543 22.5894 28.0185 22.7952 28.4143 23.0644L33.6552 26.7852C34.0668 27.0702 34.3518 27.4027 34.526 27.7986C34.6843 28.1944 34.7793 28.5902 34.7793 29.0336C34.7793 29.6036 34.6527 30.1894 34.3835 30.7594Z"
                    stroke="#1C1C1C"
                    stroke-width="1.5"
                  />
                </svg>
              </div>

              <div className={style.bottomMainDiv}>
                <div className={style.BoxesdivBottom}>
                  <h6>Call Us</h6>
                  <p style={{ fontSize: "12px" }}>Mon-Fri from 8am to 5pm.</p>
                </div>
                <span>+91 1234567890</span>
              </div>
            </div>

            <div className={style.Boxesdiv}>
              <div
                style={{
                  display: "flex",
                  padding: "14px",
                  alignItems: "flex-start",
                  borderRadius: "13.327px",
                  background: "#F7F7F7",
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.81307 19.1704C5.46843 17.5618 5.29611 16.7574 5.49354 15.8826C5.67392 15.0833 6.20181 14.2095 6.82525 13.6785C7.5076 13.0972 8.40566 12.8469 10.2018 12.3461C10.8712 12.1595 11.2059 12.0662 11.5149 11.921C11.8203 11.7775 12.1067 11.5965 12.3674 11.3822C12.6312 11.1655 12.8592 10.9032 13.3153 10.3785L13.5489 10.1099C16.2617 6.98912 17.6181 5.42874 19.1463 5.51638C19.4392 5.53318 19.735 5.59289 20.0116 5.69111C21.4544 6.20336 22.0964 8.152 23.3804 12.0493C23.8558 13.4923 24.2509 14.7307 24.4449 15.4267C24.6389 16.1227 24.9415 17.3868 25.2812 18.8677C26.1986 22.8672 26.6573 24.8669 25.6875 26.0517C25.5016 26.2789 25.2794 26.483 25.0374 26.6489C23.7749 27.5145 21.8069 26.8809 17.8709 25.6136L17.532 25.5045C16.8703 25.2915 16.5394 25.185 16.2016 25.136C15.8676 25.0875 15.5288 25.0808 15.1932 25.1159C14.8537 25.1515 14.519 25.2448 13.8496 25.4314C12.0535 25.9321 11.1554 26.1825 10.2708 26.0381C9.46249 25.9061 8.55871 25.4315 7.99082 24.8408C7.36927 24.1942 7.10063 23.4167 6.56335 21.8618C6.40441 21.4018 6.26034 20.9507 6.14273 20.5288C6.02513 20.1069 5.91503 19.6463 5.81307 19.1704Z"
                    stroke="#1C1C1C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M14.25 25.333L15.8333 33.2497"
                    stroke="#1C1C1C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M28.5002 3.95801L25.3335 7.12467M28.5002 12.6663L34.8335 10.2913M30.0835 18.9997L34.8335 19.7913"
                    stroke="#1C1C1C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <div className={style.bottomMainDiv}>
                <div className={style.BoxesdivBottom}>
                  <h6>Follow Us</h6>
                  <p>Follow on our social media</p>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  {pinterest} {linkedin} {Ig} {twitter} {Fb}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Disclaimer;
