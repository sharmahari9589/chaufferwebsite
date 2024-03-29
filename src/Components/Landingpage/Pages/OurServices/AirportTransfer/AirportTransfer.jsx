import React, { useRef, useState } from "react";
import style from "./AirportTransfer.module.css";
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

import money from "../../../../../../Images/money.png";

import clock from "../../../../../../Images/clock.png";
import timeLeft from "../../../../../../Images/time-left.png";

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
  const [toggle, setToggle] = useState(false);
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
              Private<span>&nbsp;Airport&nbsp;</span> Transfers
            </h1>
          </div>
        </section>
      </div>
      {/* Booking Deatils section start */}
      <section className={style.Sections}>
        <div className={style.BookingDeatils}>
          {/* Different Return */}

          <div className={style.DifferentReturnLocation}>
            <AiToggle setToggle={setToggle} toggle={toggle} />
          </div>

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
                        type="date"
                        min={getCurrentDate()}
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
                {/* Select my car */}
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
                        type="date"
                        min={getCurrentDate()}
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
                    <button
                      type="submit"
                      className={style.SelectCarBtn}
                      style={{ borderRadius: "6px" }}
                    >
                      Search car
                    </button>
                  </Col>
                </Row>
              </>
            )}
          </form>

          {/* <div style={{ display: "flex" }}></div> */}
        </div>
      </section>
      {/* Booking Deatils section end */}

      <section>
        <Row className={style.Benefits}>
          <Col lg={3}>
            <div className={style.BenefitsMain}>
              <img src={money} alt="" />
              <div className={style.BenefitsMainText}>
                <h1>Competitive pricing</h1>
                <p>
                  Access high-quality service at distance-based rates that are
                  fair to you and our chauffeurs.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className={style.BenefitsMain}>
              <img src={clock} alt="" />
              <div className={style.BenefitsMainText}>
                <h1>Effortless Airport Transit</h1>
                <p>
                  Relax with 45 Minutes of complimentary waiting time and flight
                  tracking.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className={style.BenefitsMain}>
              <img src={timeLeft} alt="" />

              <div className={style.BenefitsMainText}>
                <h1>Tailor Your Travel Experience</h1>
                <p>
                  Maintain flexibility and control over your itinerary. It’s
                  easy and quick for you to cancel or make changes to any
                  booking.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section>
        <div>
          <Row className={style.AirportRow}>
            <Col lg={6} className="col-md-6 order-2 order-md-1">
              <div className={style.AirportTransfer}>
                <h1>Airport transfer in the city</h1>
                <p>
                  Start or end your travels in ease with our chauffeurs who
                  accompany you from the beginning to your final destination.
                  Allow us to pick you up conveniently from your Home. Our
                  airport transfer ensures a hassle-free journey to the airport.
                  Following a potentially lengthy and tiring flight, your driver
                  will be ready for you at the airport. They will handle your
                  luggage and ensure a swift and relaxed ride to your final
                  destination.
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
          <Row className={style.AirportRow}>
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
                  Aiming for the higest standards, xactlane chauffeur service
                  ensures an exceptional experience for all passengers. Whether
                  you're arriving at HAM in Hamburg for business or heading to
                  DXB Dubai International Airport after a vacation, xactlane
                  will transport you comfortably, refreshed, and prepared with
                  its airport pickup or transfer taxi service. Traveling from
                  airports to your hotel with family or colleagues? Opt for a
                  Business Van, accommodating up to six people with enough space
                  for luggage. For those seeking a touch of luxury, explore our
                  First Class service, offering the pinnacle of style and
                  comfort—a perfect choice for special occasions.
                </p>
              </div>
              <button>Book Now</button>
            </Col>
          </Row>
        </div>

        <div>
          <Row className={style.AirportRow}>
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
