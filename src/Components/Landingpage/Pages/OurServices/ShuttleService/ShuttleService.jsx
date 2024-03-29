import React, { useRef, useState } from "react";
import style from "./shuttle.module.css";
import OurServices1 from "../../../../../../Images/OurServices1.jpg";
import CategoryHero from "../../../../../../Images/CategoryHero.jpg";
import { Col, Row } from "react-bootstrap";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addBookingDetail,
  addDistance,
  addEndLocation,
  addStartDate,
  addStartLocation,
  addStartTime,
  addTime,
  addTimezone,
} from "../../../../../Redux/BookingDetails/BookingDetailSlice";

import {
  BuildingService2,
  CalanderServices2,
  DateInput,
  Location,
  RealTimeReport,
  ServicesPlane,
  SmartSegmentationSvg,
  TimeInput,
  TimeOptimization,
  TimeServices,
  Xactlane,
  returnLocation,
} from "../../../../../../public/Svgs/Svg";
import {
  addBookingDetailForTime,
  addDurationForTime,
  addStartDateForTime,
  addStartLocationForTime,
  addStartTimeForTime,
  addTimezoneForTime,
} from "../../../../../Redux/BookingDetails/BookingTimeDetailSlice";
import { BaseUrl } from "../../../../../Env";
import { PhoneInput } from "react-international-phone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShuttleService = () => {
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let url = `${BaseUrl}/request-shuttle`;
      const response = await axios.post(url, {
        fullName: data.name,
        msg: data.additionalInfo,
        email: data.email,
        phone: data.phoneNo,
      });

      toast.success(response.data.message);

      reset();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div
        className={style.HeroMain}
        style={{ backgroundImage: `url(${CategoryHero})` }}
      >
        <ToastContainer />
        <section>
          <div className={style.TextContainer}>
            <h1>
              Events And&nbsp; Shuttle Service{" "}
              <svg
                width="11"
                height="10"
                style={{ marginBottom: "-20px", marginLeft: "-10px" }}
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
        </section>
      </div>
      {/* Booking Deatils section start */}
      <section className={style.Sections}>
        <div className={style.BookingDeatils}>
          {/* Different Return */}

          {/*Pick up Location*/}
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <>
              <Row className={style.DifferentReturnLocation}>
                <>
                  <div className={style.PickUpDeatilsFormFields}>
                    <label className={style.SelectLabel} htmlFor="titleSelect">
                      Name
                    </label>
                    <input
                      className={style.SelectFeild}
                      type="text"
                      placeholder="Enter Your First Name"
                      {...register("name", { required: true })}
                    />
                  </div>
                </>
                <>
                  <div className={style.PickUpDeatilsFormFields}>
                    <label className={style.SelectLabel} htmlFor="titleSelect">
                      Email
                    </label>
                    <input
                      className={style.SelectFeild}
                      type="text"
                      placeholder="Enter Your Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                </>
              </Row>
              {/*Return  Location*/}
              <Row className={style.DifferentReturnLocation}>
                <div className={style.PickUpDeatilsFormFields}>
                  <label className={style.SelectLabel} htmlFor="titleSelect">
                    Contact Number
                  </label>
                  <PhoneInput
                    defaultCountry="de"
                    value={phone}
                    style={{ width: "100%" }}
                    onChange={(phone) => setPhone(phone)}
                    placeholder="1234567890"
                    {...register("phoneNo", { required: true })}
                  />
                </div>

                <div className={style.PickUpDeatilsFormFields}>
                  <label className={style.SelectLabel} htmlFor="titleSelect">
                    Additional Information
                  </label>
                  <textarea
                    className={style.SelectFeild}
                    type="text"
                    placeholder="Something..."
                    {...register("additionalInfo", { required: true })}
                  />
                </div>
              </Row>
              <Col>
                <button
                  style={{ borderRadius: "6px" }}
                  type="submit"
                  className={style.SelectCarBtn}
                >
                  Submit
                </button>
              </Col>
              {/* Select my car */}
            </>
          </form>
        </div>
      </section>
      {/* Booking Deatils section end */}

      <section>
        <Row className={style.Benefits}>
          <Col lg={3}>
            <div className={style.BenefitsMain}>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.052 1.25H11.948C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.27259 4.13189 7.25637 5.15147 7.25179 6.02566C5.22954 6.09171 4.01536 6.32778 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34314 22 6.22876 22 9.99998 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.9846 6.32778 18.7705 6.09171 16.7482 6.02566C16.7436 5.15147 16.7274 4.13189 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25ZM15.2479 6.00188C15.2434 5.15523 15.229 4.24407 15.1835 3.9054C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.9054C8.771 4.24407 8.75661 5.15523 8.75208 6.00188C9.1435 6 9.55885 6 10 6H14C14.4412 6 14.8565 6 15.2479 6.00188ZM12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V10.0102C13.8388 10.2845 14.75 11.143 14.75 12.3333C14.75 12.7475 14.4142 13.0833 14 13.0833C13.5858 13.0833 13.25 12.7475 13.25 12.3333C13.25 11.9493 12.8242 11.4167 12 11.4167C11.1758 11.4167 10.75 11.9493 10.75 12.3333C10.75 12.7174 11.1758 13.25 12 13.25C13.3849 13.25 14.75 14.2098 14.75 15.6667C14.75 16.857 13.8388 17.7155 12.75 17.9898V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.9898C10.1612 17.7155 9.25 16.857 9.25 15.6667C9.25 15.2525 9.58579 14.9167 10 14.9167C10.4142 14.9167 10.75 15.2525 10.75 15.6667C10.75 16.0507 11.1758 16.5833 12 16.5833C12.8242 16.5833 13.25 16.0507 13.25 15.6667C13.25 15.2826 12.8242 14.75 12 14.75C10.6151 14.75 9.25 13.7903 9.25 12.3333C9.25 11.143 10.1612 10.2845 11.25 10.0102V10C11.25 9.58579 11.5858 9.25 12 9.25Z"
                    fill="#0bc36b"
                  />{" "}
                </g>
              </svg>
              <div className={style.BenefitsMainText}>
                <h1>Competitive rates</h1>
                <p>
                  Access premium service at distance-based prices that are fair
                  to you and our chauffeurs.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className={style.BenefitsMain}>
              <svg
                fill="#0bc36b"
                width="50px"
                height="50px"
                viewBox="0 0 32 32"
                id="template"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <path d="M29.028,3l-.017-.015L29,2.972a2.118,2.118,0,0,0-2.993,0l-7.187,7.186L14.67,9.291l2.122-2.123a.354.354,0,0,0-.5-.5l-2.45,2.45-4.12-.861L11.777,6.2a.354.354,0,0,0-.5-.5L8.893,8.082,5.613,7.4a2.909,2.909,0,0,0-2.67.8L1.635,9.5a.354.354,0,0,0,.108.575L13.671,15.3,9.217,19.757,4.475,20.3a1.342,1.342,0,0,0-1.046.747l-.777,1.88a.359.359,0,0,0,.024.319.354.354,0,0,0,.271.169l3.805.36a1.956,1.956,0,0,0,.5.913.223.223,0,0,0,.027.026l.016.018a1.984,1.984,0,0,0,.925.514l.36,3.805a.354.354,0,0,0,.169.271.359.359,0,0,0,.319.024l1.907-.789a1.334,1.334,0,0,0,.72-1.034l.545-4.742L16.7,18.329l5.229,11.928a.356.356,0,0,0,.259.206.368.368,0,0,0,.066.006.354.354,0,0,0,.25-.1l1.308-1.308a2.918,2.918,0,0,0,.8-2.67l-.686-3.28L26.3,20.724a.354.354,0,0,0-.5-.5l-2.055,2.056-.861-4.12,2.45-2.45a.354.354,0,0,0-.5-.5L22.709,17.33l-.867-4.146L29.028,6A2.117,2.117,0,0,0,29.028,3Zm-.5,2.492-7.321,7.322a.354.354,0,0,0-.1.323l2.8,13.391a2.212,2.212,0,0,1-.6,2.024l-.941.942L17.137,17.57a.351.351,0,0,0-.259-.206.3.3,0,0,0-.066-.007.358.358,0,0,0-.25.1l-4.908,4.908a.359.359,0,0,0-.1.21l-.559,4.865a.621.621,0,0,1-.313.472l-1.438.594L8.9,24.919a.353.353,0,0,0-.3-.317,1.4,1.4,0,0,1-.781-.35q-.017-.021-.033-.039a.335.335,0,0,0-.04-.033A1.389,1.389,0,0,1,7.4,23.4a.353.353,0,0,0-.317-.3l-3.591-.34.582-1.411a.627.627,0,0,1,.484-.34l4.865-.559a.359.359,0,0,0,.21-.1l4.908-4.908a.355.355,0,0,0-.109-.575L2.5,9.634l.942-.941a2.216,2.216,0,0,1,2.024-.6l13.391,2.8a.348.348,0,0,0,.323-.1L26.5,3.473a1.411,1.411,0,0,1,1.97-.021.325.325,0,0,0,.074.074A1.41,1.41,0,0,1,28.527,5.5Z"></path>
                </g>
              </svg>
              <div className={style.BenefitsMainText}>
                <h1>Seamless airport travel </h1>
                <p>
                  Relax with 1 hour of complimentary wait time and flight
                  tracking.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className={style.BenefitsMain}>
              <svg
                viewBox="0 0 24 24"
                width="50px"
                height="50px"
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
                    d="M15.24 2H8.76004C5.00004 2 4.71004 5.38 6.74004 7.22L17.26 16.78C19.29 18.62 19 22 15.24 22H8.76004C5.00004 22 4.71004 18.62 6.74004 16.78L17.26 7.22C19.29 5.38 19 2 15.24 2Z"
                    stroke="#0bc36b"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <div className={style.BenefitsMainText}>
                <h1>Travel on your terms</h1>
                <p>
                  Stay flexible and in charge of your schedule. It’s quick and
                  easy for you to cancel or make changes to any ride.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section>
        <div>
          <Row className={style.ImagesAndText}>
            <Col lg={6} className="col-md-6 order-2 order-md-1">
              <div className={style.AirportTransfer}>
                <h1>Airport transfer in the city</h1>
                <p>
                  If you’ve just stepped off a plane, tired and aching from a
                  long flight, there can be no better antidote to your ailments
                  than a Blacklane airport transfer direct to your destination.
                  Blacklane transfers are available in hundreds of cities and
                  airports across the world, and for those who don’t look
                  forward to deciphering foreign public transport maps or
                  haggling with local taxi companies, Blacklane offers a service
                  that will take you to your destination directly from the
                  airport. Wherever you go, our professional drivers can track
                  your flight and adjust for any delays outside of your control.
                  They’re hand-picked and locally knowledgeable, so feel free to
                  ask them for tips or advice on what to do during your stay.
                  Join our satisfied customers who trust us for their journeys.
                  We serve with a lot of values that you can feel directly.Join
                  our satisfied customers who trust us for their journeys.
                </p>
              </div>
              <button>Book Now</button>
            </Col>
            <Col lg={6} className=" col-md-6 order-1 order-md-2">
              <img
                style={{ width: "100%", height: "100%" }}
                src={OurServices1}
                alt=""
              />
            </Col>
          </Row>
        </div>

        <div>
          <Row className={style.ImagesAndText}>
            <Col lg={6} style={{ display: "flex", justifyContent: "end" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={OurServices1}
                alt=""
              />
            </Col>
            <Col lg={6} className="">
              <div className={style.AirportTransfer}>
                <h1>Airport transfer in the city</h1>
                <p>
                  If you’ve just stepped off a plane, tired and aching from a
                  long flight, there can be no better antidote to your ailments
                  than a Blacklane airport transfer direct to your destination.
                  Blacklane transfers are available in hundreds of cities and
                  airports across the world, and for those who don’t look
                  forward to deciphering foreign public transport maps or
                  haggling with local taxi companies, Blacklane offers a service
                  that will take you to your destination directly from the
                  airport. Wherever you go, our professional drivers can track
                  your flight and adjust for any delays outside of your control.
                  They’re hand-picked and locally knowledgeable, so feel free to
                  ask them for tips or advice on what to do during your stay.
                  Join our satisfied customers who trust us for their journeys.
                  We serve with a lot of values that you can feel directly.Join
                  our satisfied customers who trust us for their journeys.
                </p>
              </div>
              <button>Book Now</button>
            </Col>
          </Row>
        </div>

        <div>
          <Row className={style.ImagesAndText}>
            <Col lg={6} className="col-md-6 order-2 order-md-1">
              <div className={style.AirportTransfer}>
                <h1>Airport transfer in the city</h1>
                <p>
                  If you’ve just stepped off a plane, tired and aching from a
                  long flight, there can be no better antidote to your ailments
                  than a Blacklane airport transfer direct to your destination.
                  Blacklane transfers are available in hundreds of cities and
                  airports across the world, and for those who don’t look
                  forward to deciphering foreign public transport maps or
                  haggling with local taxi companies, Blacklane offers a service
                  that will take you to your destination directly from the
                  airport. Wherever you go, our professional drivers can track
                  your flight and adjust for any delays outside of your control.
                  They’re hand-picked and locally knowledgeable, so feel free to
                  ask them for tips or advice on what to do during your stay.
                  Join our satisfied customers who trust us for their journeys.
                  We serve with a lot of values that you can feel directly.Join
                  our satisfied customers who trust us for their journeys.
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
        </div>
      </section>
    </>
  );
};

const AiToggle = ({ toggle, setToggle }) => {
  return (
    <div
      className="plan-toggle-main"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p
        className="plan-toggle-text"
        style={!toggle ? { color: "#358F8B" } : { color: "#B2BBC6" }}
      >
        By Distance
      </p>
      <button
        onClick={() => setToggle(!toggle)}
        className={toggle ? "toggle-button-active" : "toggle-button"}
      >
        <span className="toggle-button-inside"></span>
      </button>
      <p
        className="plan-toggle-text"
        style={toggle ? { color: "#358F8B" } : { color: "#B2BBC6" }}
      >
        By Time
      </p>
    </div>
  );
};
export default ShuttleService;
