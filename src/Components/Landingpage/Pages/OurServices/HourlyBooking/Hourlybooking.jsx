import React, { useRef, useState } from "react";
import style from "./HourlyBooking.module.css";
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

const AirportTransfer = () => {
  const [toggle, setToggle] = useState(true);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [directionsResponse, setDirectionsResponse] = useState(null);
  let toogleValue;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (toggle) {
    toogleValue = "time";
  } else {
    toogleValue = "distance";
  }

  const center = { lat: 48.8584, lng: 2.2945 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAvcG3LD0cvh3t1u0dPm4YxGhCIFfy0Vi8",
    libraries: ["places"],
  });

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (Data) => {
    if (Data?.SartingLocation === "" || Data?.EndingLocation === "") {
      return null;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: Data?.SartingLocation,
      destination: Data?.EndingLocation,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);

    const endLocation = results.routes[0].legs[0].end_location;
    const timestamp = Date.now() / 1000;
    const apiKey = "AIzaSyAvcG3LD0cvh3t1u0dPm4YxGhCIFfy0Vi8"; // Replace 'Your_API_Key' with your actual API key

    const timezoneResponse = await fetch(
      `https://maps.googleapis.com/maps/api/timezone/json?location=${endLocation.lat()},${endLocation.lng()}&timestamp=${timestamp}&key=${apiKey}`
    );

    const timezoneData = await timezoneResponse.json();
    const timezone = timezoneData.timeZoneId;

    console.log(`Time Zone of End Location: ${timezone}`);
    // Get the current date and time in the "Asia/Tokyo" time zone
    const tokyoTime = new Date().toLocaleString("en-US", {
      timeZone: `${timezone}`,
    });

    console.log("Current time in Asia/Tokyo", tokyoTime);

    const uri = `${BaseUrl}/calculate-price`;

    let d = results.routes[0].legs[0].distance.text;

    let timeString = results.routes[0].legs[0].duration.text;
    var timeArray = timeString.split(" ");

    var hours = parseFloat(timeArray[0]);
    var minutes = parseFloat(timeArray[2]);

    var totalTimeInHours = hours + minutes / 60;

    const data = {
      bookingMode: toogleValue,
      totalDistance: parseFloat(d),
      totalTime: totalTimeInHours,
      duration: Data.Duration,
    };

    axios
      .post(uri, data)
      .then((response) => {
        // Handle the successful response
        dispatch(addBookingDetail(response.data));
        dispatch(addDistance(results.routes[0].legs[0].distance.text));
        dispatch(addTimezone(tokyoTime));
        dispatch(addTime(results.routes[0].legs[0].duration.text));
        dispatch(addStartDate(Data.SartingDate));
        dispatch(addStartTime(Data.SartingTime));
        dispatch(addStartLocation(Data.SartingLocation));
        dispatch(addEndLocation(Data.EndingLocation));

        // to delete the above data in redux which is for distance
        dispatch(addBookingDetailForTime([]));
      })
      .catch((error) => {
        // Handle the error
        console.error("Error posting data:", error);
      });

    navigate("/bookingProcess/services");
  };

  const onTimeSubmit = async (Data) => {
    console.log(Data.SartingLocationByTime);
    try {
      const apiKey = "AIzaSyAvcG3LD0cvh3t1u0dPm4YxGhCIFfy0Vi8";
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          Data.SartingLocationByTime
        )}&key=${apiKey}`
      );

      const myData = await response.json();

      if (myData.status === "OK" && myData.results.length > 0) {
        const location = myData.results[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;

        const timestamp = Date.now() / 1000;

        const timezoneResponse = await fetch(
          `https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=${timestamp}&key=${apiKey}`
        );

        const timezoneData = await timezoneResponse.json();
        const timezone = timezoneData.timeZoneId;

        console.log(`Time Zone of End Location: ${timezone}`);
        // Get the current date and time in the "Asia/Tokyo" time zone
        const tokyoTime = new Date().toLocaleString("en-US", {
          timeZone: `${timezone}`,
        });

        const uri = `${BaseUrl}/calculate-price`;

        const data = {
          bookingMode: toogleValue,
          duration: Data.Duration,
        };

        axios
          .post(uri, data)
          .then((response) => {
            // Handle the successful response
            // localStorage.setItem("res", JSON.stringify(response.data));
            // localStorage.setItem("timezone", tokyoTime);
            // localStorage.setItem("startLoaction", Data.SartingLocationByTime);
            // localStorage.setItem("startDate", Data.SartingDateByTime);
            // localStorage.setItem("startTime", Data.SartingTimeByTime);
            // localStorage.setItem("duration", Data.Duration);

            dispatch(addBookingDetailForTime(response.data));
            dispatch(addTimezoneForTime(tokyoTime));
            dispatch(addStartDateForTime(Data.SartingDateByTime));

            dispatch(addStartTimeForTime(Data.SartingDateByTime));
            dispatch(addStartLocationForTime(Data.SartingLocationByTime));
            dispatch(addDurationForTime(Data.Duration));

            // to delete the above data in redux which is for distance
            dispatch(addBookingDetail([]));
          })

          .catch((error) => {
            // Handle the error
            console.error("Error posting data:", error);
          });

        navigate("/bookingProcess/services");
      } else {
        console.error(`Failed to fetch coordinates. Status: ${data.status}`);
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!isLoaded)
    return (
      <div
        className=""
        style={{
          color: "#000",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Xactlane}
      </div>
    );

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1; // Months are zero-indexed
    let day = today.getDate();

    // Add leading zero if month or day is a single digit
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <div
        className={style.HeroMain}
        style={{ backgroundImage: `url(${CategoryHero})` }}
      >
        <section>
          <div className={style.TextContainer}>
            <h1>
              Hourly <span>Car Service</span>
            </h1>
          </div>
        </section>
      </div>
      {/* Booking Deatils section start */}
      <section className={style.Sections}>
        <div className={style.BookingDeatils}>
          {/*Pick up Location*/}
          <form
            onSubmit={handleSubmit(toggle ? onTimeSubmit : onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {toggle ? (
              <>
                <Row className={style.DifferentReturnLocation}>
                  <Col lg={6}>
                    <Autocomplete>
                      <div className={style.Input}>
                        {Location}
                        <input
                          type="text"
                          placeholder="From"
                          ref={originRef}
                          {...register("SartingLocationByTime", {
                            required: true,
                          })}
                        />
                      </div>
                    </Autocomplete>
                  </Col>
                  <Col>
                    <div className={style.Input}>
                      {DateInput}
                      <input
                        min={getCurrentDate()}
                        type="date"
                        {...register("SartingDateByTime", { required: true })}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className={style.Input}>
                      {TimeInput}
                      <input
                        type="time"
                        {...register("SartingTimeByTime", { required: true })}
                      />
                    </div>
                  </Col>
                </Row>
                {/*Return  Location*/}
                <Row className={style.DifferentReturnLocation}>
                  <Col lg={6}>
                    <div className={style.Input}>
                      {Location}
                      <input
                        type="number"
                        placeholder="Duration"
                        {...register("Duration", { required: true })}
                      />
                    </div>
                  </Col>
                  <Col>
                    <button type="submit" className={style.SelectCarBtn}>
                      Search car
                    </button>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <Row className={style.DifferentReturnLocation}>
                  <Col lg={6}>
                    <Autocomplete>
                      <div className={style.Input}>
                        {Location}
                        <input
                          type="text"
                          placeholder="From"
                          ref={originRef}
                          {...register("SartingLocation", { required: true })}
                        />
                      </div>
                    </Autocomplete>
                  </Col>
                  <Col>
                    <div className={style.Input}>
                      {DateInput}
                      <input
                        min={getCurrentDate()}
                        type="date"
                        {...register("SartingDate", { required: true })}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className={style.Input}>
                      {TimeInput}
                      <input
                        type="time"
                        {...register("SartingTime", { required: true })}
                      />
                    </div>
                  </Col>
                </Row>
                {/*Return  Location*/}
                <Row className={style.DifferentReturnLocation}>
                  <Col lg={6}>
                    <Autocomplete>
                      <div className={style.Input}>
                        {Location}
                        <input
                          type="text"
                          placeholder="To"
                          ref={destiantionRef}
                          {...register("EndingLocation", { required: true })}
                        />
                      </div>
                    </Autocomplete>
                  </Col>
                  <Col>
                    <button type="submit" className={style.SelectCarBtn}>
                      Search car
                    </button>
                  </Col>
                </Row>
                {/* Select my car */}
              </>
            )}
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
                width="50px"
                height="50px"
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
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 14.803v6.447c0 .414.336.75.75.75h1.614a.75.75 0 0 0 .74-.627L5.5 19h13l.395 2.373a.75.75 0 0 0 .74.627h1.615a.75.75 0 0 0 .75-.75v-6.447a5.954 5.954 0 0 0-1-3.303l-.78-1.17a1.994 1.994 0 0 1-.178-.33h.994a.75.75 0 0 0 .671-.415l.25-.5A.75.75 0 0 0 21.287 8H19.6l-.31-1.546a2.5 2.5 0 0 0-1.885-1.944C15.943 4.17 14.141 4 12 4c-2.142 0-3.943.17-5.405.51a2.5 2.5 0 0 0-1.886 1.944L4.399 8H2.714a.75.75 0 0 0-.67 1.085l.25.5a.75.75 0 0 0 .67.415h.995a1.999 1.999 0 0 1-.178.33L3 11.5c-.652.978-1 2.127-1 3.303zm15.961-4.799a4 4 0 0 0 .34.997H5.699c.157-.315.271-.65.34-.997l.632-3.157a.5.5 0 0 1 .377-.39C8.346 6.157 10 6 12 6c2 0 3.654.156 4.952.458a.5.5 0 0 1 .378.389l.631 3.157zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM20 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                    fill="#0bc36b"
                  ></path>
                </g>
              </svg>
              <div className={style.BenefitsMainText}>
                <h1>Your safe passage </h1>
                <p>
                  Travel confidently knowing your safety is our #1 priority.
                  Rigorous health and cleaning standards round out a
                  best-in-class service.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className={style.BenefitsMain}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width="50px"
                height="50px"
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
                    d="M23 12C23 12.3545 22.9832 12.7051 22.9504 13.051C22.3838 12.4841 21.7204 12.014 20.9871 11.6675C20.8122 6.85477 16.8555 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12C3.00683 16.8555 6.85477 20.8122 11.6675 20.9871C12.014 21.7204 12.4841 22.3838 13.051 22.9504C12.7051 22.9832 12.3545 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
                    fill="#0bc36b"
                  ></path>{" "}
                  <path
                    d="M13 11.8812L13.8426 12.3677C13.2847 12.7802 12.7902 13.2737 12.3766 13.8307L11.5174 13.3346C11.3437 13.2343 11.2115 13.0898 11.1267 12.9235C11 12.7274 11 12.4667 11 12.4667V6C11 5.44771 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11.8812Z"
                    fill="#0bc36b"
                  ></path>{" "}
                  <path
                    d="M15.2929 17.7071C15.6834 17.3166 16.3166 17.3166 16.7071 17.7071L17.3482 18.3482L19.2473 16.4491C19.6379 16.0586 20.271 16.0586 20.6615 16.4491C21.0521 16.8397 21.0521 17.4728 20.6615 17.8634L18.1213 20.4036C18.0349 20.49 17.9367 20.5573 17.8318 20.6054C17.4488 20.8294 16.9487 20.7772 16.6203 20.4487L15.2929 19.1213C14.9024 18.7308 14.9024 18.0976 15.2929 17.7071Z"
                    fill="#0bc36b"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 24C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12C14.6863 12 12 14.6863 12 18C12 21.3137 14.6863 24 18 24ZM18 22.0181C15.7809 22.0181 13.9819 20.2191 13.9819 18C13.9819 15.7809 15.7809 13.9819 18 13.9819C20.2191 13.9819 22.0181 15.7809 22.0181 18C22.0181 20.2191 20.2191 22.0181 18 22.0181Z"
                    fill="#0bc36b"
                  ></path>{" "}
                </g>
              </svg>
              <div className={style.BenefitsMainText}>
                <h1>Set your own schedule</h1>
                <p>
                  Schedule your pickup whenever you want, and leave departure
                  boards and timetables in the rear-view mirror.
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
            <Col lg={6} className="col-md-6 order-1 order-md-2">
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
            <Col lg={6}>
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
export default AirportTransfer;
