import React, { useEffect, useRef, useState } from "react";
import style from "./BecomeChauffeur.module.css";
// import OurServices1 from "../../../../../../Images/OurServices1.jpg";
import OurServices1 from "../../../../../Images/Blog4.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CategoryHero from "../../../../../Images/CategoryHero.jpg";
import { Col, Row } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import { Efficiency } from "../../../../../Images/Svg";
import OTPInput from "react-otp-input";
import axios from "axios";
import { BaseUrl } from "../../../../Env";
const BecomeChauffeur = () => {
  const [phone, setPhone] = useState("");
  const [otpToggle, setOtptoggle] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    // Target both elements with the specified classes
    const phoneInputContainer = document.querySelector(
      ".react-international-phone-input-container"
    );

    const phoneInputPadding = document.querySelector(
      ".react-international-phone-input"
    );

    const international = document.querySelector(
      ".react-international-phone-country-selector-button"
    );
    if (phoneInputContainer && international && phoneInputPadding) {
      // Remove the border from the countrySelectorButton
      // phoneInputPadding.style.border = "none";
      // international.style.border = "none";
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const OnSubmit = (data) => {
    console.log(data);
    setOtptoggle(true);
  };

  const BecomeAChauffeur = async (data) => {
    console.log(data);
    try {
      let url = `${BaseUrl}/vandor-otp`;
      const response = await axios.post(url, {
        name: data.name,
        additonalInfo: data.additionalInfo,
        email: data.email,
        phone: data.phoneno,
        companyName: data.companyname,
        address: data.address,
      });

      localStorage.setItem("name", data.name);
      localStorage.setItem("additionalInfo", data.additionalInfo);
      localStorage.setItem("email", data.email);
      localStorage.setItem("phoneno", data.phoneno);
      localStorage.setItem("companyname", data.companyname);
      localStorage.setItem("address", data.address);
      console.log(response.data.message);
      toast.success(response.data.message);
      setOtptoggle(true);
      reset();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const verifyOtp = async () => {
    if (otp.length > 5) {
      console.log(otp);

      try {
        let url = `${BaseUrl}/register-vandor`;
        const response = await axios.post(url, {
          name: localStorage.getItem("name"),
          additonalInfo: localStorage.getItem("additionalInfo"),
          email: localStorage.getItem("email"),
          phone: localStorage.getItem("phoneno"),
          companyName: localStorage.getItem("companyname"),
          address: localStorage.getItem("address"),
          otp: otp,
        });

        if (response.data.message == "Invalid Otp") {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          localStorage.removeItem("name");
          localStorage.removeItem("pin");
          localStorage.removeItem("email");
          localStorage.removeItem("pin");
          localStorage.removeItem("address");

          localStorage.removeItem("title");

          setOtptoggle(false);
        }
        setOtp("");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className={style.HeroMain}
        style={{ backgroundImage: `url(${CategoryHero})` }}
      >
        <section>
          <div className={style.TextContainer}>
            <h1>
              <span>Become</span> a Partner
            </h1>
          </div>
        </section>
      </div>

      <section>
        <div
          style={{
            padding: "100px 0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col lg={12} xxl={5} className={style.WhyPartnerMainWidth}>
            <div className={style.BecomeaChauffeur}>
              <h1>Why Partners Choose Us</h1>
            </div>
            <Row className={`${style.WhyPartnerMain} `}>
              <Col lg={3}>
                <div className={style.SvgAndText}>
                  <svg
                    viewBox="0 0 24 24"
                    width={50}
                    height={50}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 14.803v6.447c0 .414.336.75.75.75h1.614a.75.75 0 0 0 .74-.627L5.5 19h13l.395 2.373a.75.75 0 0 0 .74.627h1.615a.75.75 0 0 0 .75-.75v-6.447a5.954 5.954 0 0 0-1-3.303l-.78-1.17a1.994 1.994 0 0 1-.178-.33h.994a.75.75 0 0 0 .671-.415l.25-.5A.75.75 0 0 0 21.287 8H19.6l-.31-1.546a2.5 2.5 0 0 0-1.885-1.944C15.943 4.17 14.141 4 12 4c-2.142 0-3.943.17-5.405.51a2.5 2.5 0 0 0-1.886 1.944L4.399 8H2.714a.75.75 0 0 0-.67 1.085l.25.5a.75.75 0 0 0 .67.415h.995a1.999 1.999 0 0 1-.178.33L3 11.5c-.652.978-1 2.127-1 3.303zm15.961-4.799a4 4 0 0 0 .34.997H5.699c.157-.315.271-.65.34-.997l.632-3.157a.5.5 0 0 1 .377-.39C8.346 6.157 10 6 12 6c2 0 3.654.156 4.952.458a.5.5 0 0 1 .378.389l.631 3.157zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM20 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                        fill="#0bc36b"
                      ></path>
                    </g>
                  </svg>
                  <h5>Fleet and Transfer Management</h5>
                  <p>
                    We allow our partners to seamlessly manage their fleet and
                    transfer all from one app. With Connecto, you can be sure of
                    efficiency in fleet and transfer management
                  </p>
                </div>
              </Col>
              <Col lg={3}>
                <div className={style.SvgAndText}>
                  <span>{Efficiency}</span>
                  <h5>Increasing Efficiency</h5>
                  <p>
                    We have optimized our processes to ensure that you get the
                    best value for your time. Say goodbye to empty miles and say
                    hello to a more optimized transfer allocation system.
                  </p>
                </div>
              </Col>{" "}
              <Col lg={3}>
                <div className={style.SvgAndText}>
                  <svg
                    width={50}
                    height={50}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z"
                        fill="#0bc36b"
                      ></path>{" "}
                    </g>
                  </svg>
                  <h5>Admin and Driver App</h5>
                  <p>
                    App enables seamless admin-driver communication, real-time
                    transfer coordination, and vehicle monitoring. Drivers
                    accept/reject transfers instantly.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
      </section>

      <section>
        <div
          style={{
            padding: "100px 0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col lg={12} xxl={5} className={style.WhyPartnerMainWidth}>
            <div className={style.BecomeaChauffeur}>
              <h1>How Can I Get Started?</h1>
            </div>
            <Row className={style.WhyPartnerMain}>
              <Col lg={3}>
                <div className={style.SvgAndText}>
                  <svg
                    width={50}
                    height={50}
                    fill="#0bc36b"
                    viewBox="0 0 36 36"
                    version="1.1"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>form-line</title>{" "}
                      <path
                        d="M21,12H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H21a1,1,0,0,1,1,1v4A1,1,0,0,1,21,12ZM8,10H20V7.94H8Z"
                        class="clr-i-outline clr-i-outline-path-1"
                      ></path>
                      <path
                        d="M21,14.08H7a1,1,0,0,0-1,1V19a1,1,0,0,0,1,1H18.36L22,16.3V15.08A1,1,0,0,0,21,14.08ZM20,18H8V16H20Z"
                        class="clr-i-outline clr-i-outline-path-2"
                      ></path>
                      <path
                        d="M11.06,31.51v-.06l.32-1.39H4V4h20V14.25L26,12.36V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V31a1,1,0,0,0,1,1h8A3.44,3.44,0,0,1,11.06,31.51Z"
                        class="clr-i-outline clr-i-outline-path-3"
                      ></path>
                      <path
                        d="M22,19.17l-.78.79A1,1,0,0,0,22,19.17Z"
                        class="clr-i-outline clr-i-outline-path-4"
                      ></path>
                      <path
                        d="M6,26.94a1,1,0,0,0,1,1h4.84l.3-1.3.13-.55,0-.05H8V24h6.34l2-2H7a1,1,0,0,0-1,1Z"
                        class="clr-i-outline clr-i-outline-path-5"
                      ></path>
                      <path
                        d="M33.49,16.67,30.12,13.3a1.61,1.61,0,0,0-2.28,0h0L14.13,27.09,13,31.9a1.61,1.61,0,0,0,1.26,1.9,1.55,1.55,0,0,0,.31,0,1.15,1.15,0,0,0,.37,0l4.85-1.07L33.49,19a1.6,1.6,0,0,0,0-2.27ZM18.77,30.91l-3.66.81L16,28.09,26.28,17.7l2.82,2.82ZM30.23,19.39l-2.82-2.82L29,15l2.84,2.84Z"
                        class="clr-i-outline clr-i-outline-path-6"
                      ></path>{" "}
                      <rect
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                        fill-opacity="0"
                      ></rect>{" "}
                    </g>
                  </svg>
                  <h5 style={{ opacity: "0.8" }}>
                    Step 1- Complete Sign Up Form
                  </h5>
                  <p>
                    Set up your account by filling in all the relevant details.
                    This process is easy and you can reach out to any of our
                    agents if you encounter any problems while you are signing
                    up. This step gives you access to our platform.
                  </p>
                </div>
              </Col>

              <Col lg={3}>
                <div className={style.SvgAndText}>
                  <svg
                    width={70}
                    height={70}
                    fill="#0bc36b"
                    version="1.1"
                    id="Capa_1"
                    viewBox="0 0 548.066 548.066"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M473.239,107.971l-58.889,35.972l4.284,7.269c-28.655-8.173-85.571-22.909-115.6-22.909 c-28.424,0-43.588,7.337-63.308,16.857c-3.876,1.843-35.904,17.204-36.516,17.34l-68.816-0.197l-63.444,86.836l44.608,41.005 c-3.767,9.826-1.557,19.42,4.42,26.314c5.732,6.672,14.267,10.371,24.412,8.426c-6.807,12.92-5.937,23.324,1.632,32.027 c7.317,8.426,17.599,11.533,31.416,6.332c-2.448,9.295-1.571,17.619,4.896,25.16c5.841,6.799,14.532,10.41,24.888,8.568 l2.448-0.477c-4.399,11.512-2.4,20.727,3.808,27.879c9.438,10.996,25.738,12.193,36.38,2.789l9.656-8.357l9.316,17.469 c4.576,8.678,15.626,13.002,25.5,7.82c9.744-5.242,12.75-16.666,8.092-25.568c-6.731-12.586-17.815-32.986-17.815-32.986 c0.4-9.479-2.944-13.559-7.957-18.768l7.072-4.76c0,0,19.992,38.357,27.2,51.959c4.583,8.873,15.77,12.92,25.5,7.812 c10.085-5.412,12.614-16.973,8.092-25.637l-29.308-54.74l8.296-5.242l32.64,61.473c4.924,9.33,16.354,12.688,25.5,7.887 c10.037-5.459,12.717-16.809,8.093-25.635l-33.933-63.859l8.637-5.168c0,0,22.439,43.111,30.531,58.48 c4.577,8.676,15.627,13.002,25.5,7.82c9.452-5.033,12.988-16.32,8.093-25.643l-22.372-42.154 c16.558-9.805,26.976-24.785,38.964-43.119l29.92-18.836l9.255,14.776l63.736-33.184L473.239,107.971z M174.379,350.392 c-5.664,5.037-14.334,4.168-18.904-1.285c-4.814-5.379-3.835-17.211,5.44-23.061c0.639-0.42,51.932-44.838,52.428-45.279 c5.433-4.828,13.967-4.434,18.972,1.352c4.984,5.672,4.515,14.172-1.156,19.115L174.379,350.392z M210.691,381.942 c-5.596,4.957-14.198,4.258-18.972-1.299c-4.624-5.371-4.556-13.186,0.136-18.223c0.769-0.775,41.548-36.061,42.364-36.789 c5.548-4.943,14.069-4.283,18.972,1.293c5.114,5.969,4.352,14.496-1.156,19.168L210.691,381.942z M267.811,395.542l-25.908,22.373 c-5.542,4.924-14.13,4.318-19.04-1.359c-5.046-5.746-4.264-14.438,1.224-19.115l25.908-22.57c4.95-4.236,12.866-4.684,18.564,1.014 C273.074,379.501,274.611,389.62,267.811,395.542 M437.335,256.755c-0.973,0.972-1.938,1.85-2.516,2.713 c-8.772,13.675-21.672,30.695-34.775,37.515c-51.755-70.849-80.655-94.03-118.157-127.405l-87.38,40.943 c-6.528,3.257-14.742,0.462-18.02-6.392c-3.291-6.725-0.523-14.898,6.256-18.156l84.728-39.712 c10.744-3.944,21.896-5.787,35.7-5.787c28.825,0,96.954,18.944,125.433,26.887l41.161,70.21L437.335,256.755z M0,208.128 l73.147-106.393l53.822,43.146l-71.468,99.158L0,208.128z M129.363,308.64c-5.086-5.822-4.25-14.498,1.156-19.109l46.444-40.392 c5.644-4.699,14.192-4.202,19.04,1.428c5.032,5.78,4.488,14.212-1.156,19.176l-46.512,40.256 C143.398,314.493,134.49,314.589,129.363,308.64z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <h5 style={{ opacity: "0.8", marginTop: "10px" }}>
                    Step 2- Finish Onboarding and Accept Our Contract
                  </h5>
                  <p>
                    Next, you will be onboarded onto the platform and shown all
                    the details you need to know to set up your account. Once
                    you have provided all the relevant details and accepted our
                    terms of service, your profile will be activated.
                  </p>
                </div>
              </Col>

              <Col lg={3}>
                <div className={style.SvgAndText}>
                  <svg
                    width={50}
                    height={50}
                    fill="#0bc36b"
                    version="1.1"
                    id="Icons"
                    viewBox="0 0 32 32"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M27,19c0-0.6,0.4-1,1-1h3.6c-0.8-1.8-2.5-3-4.6-3h-2.5L21,10.8C20,9.7,18.6,9,17.1,9H9.5C7.6,9,5.9,10.1,5,11.8L3.4,15H3 c-1.7,0-3,1.3-3,3v4c0,1.1,0.9,2,2,2h1.1c0.4,1.7,2,3,3.9,3s3.4-1.3,3.9-3h8.3c0.4,1.7,2,3,3.9,3s3.4-1.3,3.9-3H30c1.1,0,2-0.9,2-2 v-2h-4C27.4,20,27,19.6,27,19z M7,25c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S8.1,25,7,25z M9.4,15H5.6l1.2-2.3c0.5-1,1.5-1.7,2.7-1.7 h1.9L9.4,15z M11.6,15l2-4h3.5c0.9,0,1.7,0.4,2.3,1.1l2.4,2.9H11.6z M23,25c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S24.1,25,23,25z"></path>{" "}
                    </g>
                  </svg>
                  <h5 style={{ opacity: "0.8" }}>
                    Step 3- Start Receiving Transfers
                  </h5>
                  <p>
                    You can start receiving transfers and monitoring your
                    drivers once you are done signing up on the platform. We
                    have a well integrated system that ensures you receive your
                    transfers promptly and without delay. Also, our integrated
                    dashboard is designed to help you to keep track of your
                    transfers.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
      </section>

      {/*  */}
      <div>
        <Row className={style.AirportRow}>
          <Col lg={6} className={style.alignImage}>
            <img
              style={{ width: "100%", height: "100%", maxWidth: "500px" }}
              src={OurServices1}
              alt=""
            />
          </Col>
          <Col lg={6}>
            <div className={style.AirportTransfer}>
              <h1 style={{ textAlign: "start" }}>Requirments</h1>
              <ul>
                <li>
                  A valid company registration along with licenses and insurance
                  is mandatory for all chauffeurs and vehicles.
                </li>
                <li>
                  Vehicles are required to be in a clean, undamaged, and
                  smoke-free condition, adhering to all local regulations.
                </li>
                <li>
                  Companies must keep up-to-date with new standards and policies
                  and ensure excellent quality.{" "}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      {/*  */}

      {/* form div starts */}

      <section style={{ display: "flex", justifyContent: "center" }}>
        <Row style={{}} className={style.BecomeAChauffeurFormWidth}>
          <div className={style.PickMain}>
            <h3>Become a Partner</h3>

            <div className={style.CreateAccountForm}>
              {!otpToggle ? (
                <form action="" onSubmit={handleSubmit(BecomeAChauffeur)}>
                  <Row>
                    <Col lg={6} className={style.PickUpDeatilsFormFields}>
                      <label
                        className={style.SelectLabel}
                        htmlFor="titleSelect"
                      >
                        Name
                      </label>
                      <input
                        className={style.SelectFeild}
                        type="text"
                        placeholder="Enter Your Name"
                        {...register("name", { required: true })}
                      />
                    </Col>

                    <Col lg={6} className={style.PickUpDeatilsFormFields}>
                      <label
                        className={style.SelectLabel}
                        htmlFor="titleSelect"
                      >
                        Company Name
                      </label>
                      <input
                        className={style.SelectFeild}
                        type="text"
                        placeholder="Enter Compnay Name"
                        {...register("companyname", { required: true })}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6} className={style.PickUpDeatilsFormFields}>
                      <label
                        className={style.SelectLabel}
                        htmlFor="titleSelect"
                      >
                        Address
                      </label>
                      <input
                        {...register("address", { required: true })}
                        className={style.SelectFeild}
                        type="text"
                        placeholder="Enter Your Address"
                      />
                    </Col>

                    <Col lg={6} className={style.PickUpDeatilsFormFields}>
                      <label
                        className={style.SelectLabel}
                        htmlFor="titleSelect"
                      >
                        Email Address
                      </label>
                      <input
                        {...register("email", { required: true })}
                        className={style.SelectFeild}
                        type="email"
                        placeholder="Enter Your Email Address"
                      />
                    </Col>
                  </Row>
                  <Row style={{ alignItems: "end" }}>
                    <Col lg={6} className={style.PickUpDeatilsFormFields}>
                      <label
                        className={style.SelectLabel}
                        htmlFor="titleSelect"
                      >
                        Contact Number
                      </label>
                      <PhoneInput
                        defaultCountry="de"
                        value={phone}
                        style={{ width: "100%" }}
                        onChange={(phone) => setPhone(phone)}
                        placeholder="1234567890"
                        inputStyle={{ padding: "0px" }}
                        {...register("phoneno", { required: true })}
                      />
                    </Col>

                    <Col lg={6} className={style.PickUpDeatilsFormFields}>
                      <label
                        className={style.SelectLabel}
                        htmlFor="titleSelect"
                      >
                        Additional Information
                      </label>

                      <textarea
                        className={style.TextArea}
                        placeholder="Something..."
                        type="text"
                        {...register("additionalInfo", { required: true })}
                      />
                    </Col>
                  </Row>
                  <button type="submit" className={style.button}>
                    Submit
                  </button>
                </form>
              ) : (
                <form
                  onSubmit={handleSubmit(verifyOtp)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    gap: "20px",
                  }}
                >
                  <h3
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Enter Otp
                  </h3>
                  <OTPInput
                    containerStyle="otp-input"
                    inputStyle="otp-style  signup-otp-style"
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    // inputType=""zzzz
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                  <button
                    type="submit"
                    style={{ width: "100px", alignSelf: "center" }}
                    className={style.button}
                  >
                    Confirm
                  </button>
                </form>
              )}
            </div>
            <div></div>
          </div>
        </Row>
      </section>
    </>
  );
};

export default BecomeChauffeur;
