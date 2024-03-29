import style from "./Hero.module.css";
import HeroImage from "../../../../Images/HeroImage.jpg";
import { Col, Container, Row } from "react-bootstrap";
import {
  BuildingService2,
  CalanderServices2,
  DateInput,
  GlobalNetwork,
  Location,
  ServicesPlane,
  SmartSegmentationSvg,
  TimeInput,
  TimeOptimization,
  TimeServices,
  Xactlane,
  returnLocation,
} from "../../../../public/Svgs/Svg";
import WhyXactlane from "../../../../Images/WhyXactlane.png";
import Slider from "react-slick";
import SliderCar from "./carSlider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import CustomerImage from "../../../../Images/CustomerImage.png";

import CityToImg from "../../../../Images/CityToCity.jpg";
import AirportTransfer from "../../../../Images/AirportTransfer.jpeg";
import HourlyBooking from "../../../../Images/HourlyBooking.jpg";

import Benz from "../../../../Images/Benz.png";
import ServicesImg from "../../../../Images/ServicesImg.jpg";
import ShuttleService from "../../../../Images/ShuttleService.jpg";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useRef, memo } from "react";
import { BookingProcessContext } from "../BookingProcessContext";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import axios from "axios";
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
} from "../../../Redux/BookingDetails/BookingDetailSlice";
import {
  addBookingDetailForTime,
  addDurationForTime,
  addStartDateForTime,
  addStartLocationForTime,
  addStartTimeForTime,
  addTimezoneForTime,
} from "../../../Redux/BookingDetails/BookingTimeDetailSlice";
import CircleCarousel from "../Slider/XactLaneCar";
import Spinner from "../Pages/Spinner/Spinner";
import { BaseUrl } from "../../../Env";

import CarSlider1 from "../../../../Images/CarSlider1.png";

import CarSlider2 from "../../../../Images/CarSlider2.png";
import CarSlider3 from "../../../../Images/CarSlider3.png";
import CarSlider4 from "../../../../Images/CarSlider4.png";
import CarSlider5 from "../../../../Images/CarSlider5.png";
import CarSlider6 from "../../../../Images/CarSlider6.png";

import CarSlider7 from "../../../../Images/CarSlider7.png";
import CarSlider8 from "../../../../Images/CarSlider8.png";
import CarSlider9 from "../../../../Images/CarSlider9.png";
import CarSlider10 from "../../../../Images/CarSlider10.png";
import CarSlider11 from "../../../../Images/CarSlider11.png";
import CarSlider12 from "../../../../Images/CarSlider12.png";
import CarSlider13 from "../../../../Images/CarSlider13.png";
import CarSlider14 from "../../../../Images/CarSlider14.png";
import { toast, ToastContainer } from "react-toastify";

const Hero = () => {
  const [toggle, setToggle] = useState(false);

  let toogleValue;
  if (toggle) {
    toogleValue = "time";
  } else {
    toogleValue = "distance";
  }
  // code updated by hari//
  const center = { lat: 48.8584, lng: 2.2945 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAvcG3LD0cvh3t1u0dPm4YxGhCIFfy0Vi8",
    libraries: ["places"],
  });

  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const [services, setServices] = useState("CityToCity");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  // code updated by hari//

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleWhiteHeader } = useContext(BookingProcessContext);
  const onSubmit = async (Data) => {
    if (Data?.SartingLocation === "" || Data?.EndingLocation === "") {
      return null;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    let results;
    try {
      results = await directionsService.route({
        origin: Data?.SartingLocation,
        destination: Data?.EndingLocation,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      });
    } catch (error) {
      console.log(error, "error");
      toast.error("No Route Found");
    }

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

    // console.log("Current time in Asia/Tokyo", tokyoTime);

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
        const ExtraInfo = [
          { distance: results.routes[0].legs[0].distance.text },
          { timezone: tokyoTime },
          { time: results.routes[0].legs[0].duration.text },
          { startDate: Data.SartingDate },
          { startTime: Data.SartingTime },
          { startLocation: Data.SartingLocation },
          { EndLocation: Data.EndingLocation },
        ];
        localStorage.setItem("DistanceCarInfo", JSON.stringify(response.data));
        localStorage.setItem("DistanceCarExtraInfo", JSON.stringify(ExtraInfo));

        localStorage.removeItem("TimeCarInfo");
        localStorage.removeItem("TimeCarExtraInfo");
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
    console.log(Data);
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

        // console.log(`Time Zone of End Location: ${timezone}`);
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
            // Starting date for time and all fields for time
            dispatch(addBookingDetailForTime(response.data));
            dispatch(addTimezoneForTime(tokyoTime));
            dispatch(addStartTimeForTime(Data.SartingTimeByTime));

            dispatch(addStartDateForTime(Data.SartingDateByTime));

            // dispatch(addStartTimeForTime(Data.SartingTimeByTime));
            dispatch(addStartLocationForTime(Data.SartingLocationByTime));
            dispatch(addDurationForTime(Data.Duration));

            const ExtraInfo = [
              { timezone: tokyoTime },
              { startDate: Data.SartingDateByTime },
              { startTime: Data.SartingTimeByTime },
              { startLocation: Data.SartingLocationByTime },
              { duration: Data.Duration },
            ];
            localStorage.setItem("TimeCarInfo", JSON.stringify(response.data));
            localStorage.setItem("TimeCarExtraInfo", JSON.stringify(ExtraInfo));
            localStorage.removeItem("DistanceCarInfo");
            localStorage.removeItem("DistanceCarExtraInfo");

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

  // useEffect(() => {
  //   handleWhiteHeader(true);
  // }, []);

  // function to change
  const [count, setCount] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount % 4) + 1);
    }, 10000); // Change the interval as needed

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once

  // function to change
  const [count1, setCount1] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount1((prevCount) => (prevCount % 4) + 1);
    }, 10000); // Change the interval as needed

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
      <ToastContainer />
      <div
        className={style.HeroMain}
        style={{
          backgroundImage: `url(${HeroImage})`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <section> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={style.TextContainer}>
            {/* <p>Drive the best experience</p> */}
            <h1>Your exclusive chauffeur service</h1>
          </div>

          {/* Slider */}
          {/* <CircleCarousel /> */}
          <div className={style.BottomText}>Precision in Every Journey</div>
        </div>
        {/* </section> */}
      </div>

      {/* Booking Deatils section start */}
      <section className={style.Sections}>
        <div className={style.BookingDeatils}>
          {/* Different Return */}

          <div className={style.DifferentReturnLocation}>
            <AiToggle setToggle={setToggle} toggle={toggle} />
            {/* {returnLocation}
            <p>Different return location</p> */}
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
                        min={3} // Set the minimum value to 3
                        max={24} // Set the maximum value to 24
                        step={0.5} // Set the step increment to 0.5
                        defaultValue={duration} // Start with a default value of 3
                        placeholder="Duration"
                        {...register("Duration", { required: true })}
                      />
                    </div>
                  </Col>
                  <Col>
                    <button type="submit" className={style.SelectCarBtn}>
                      Search Car
                    </button>
                  </Col>
                </Row>
                {/* Select my car */}
                {/* <Row className={style.DifferentReturnLocation}></Row> */}
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
                      Search Car
                    </button>
                  </Col>
                </Row>
                {/* Select my car */}
                {/* <Row className={style.DifferentReturnLocation}>
                  <Col style={{ display: "flex" }}></Col>
                </Row> */}
              </>
            )}
          </form>

          {/* <div style={{ display: "flex" }}></div> */}
        </div>
      </section>
      {/* Booking Deatils section end */}

      {/*Why Choose Xactlane  */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row className={style.WhyXactLane}>
          <Col lg={4} xxl={4}>
            <div className={style.WhyXactLaneMain}>
              <h1>Why Choose Xactlane?</h1>
              <p>
                Choose XactLane for precision, personalized service, and
                transparent pricing. Our carefully selected local partners
                ensure authentic experiences. With a global vision and local
                expertise, we guarantee top-notch chauffeur services worldwide.
                Elevate your journey with reliability, quality, and a commitment
                to your unique needs.
              </p>
              <button className={style.SelectCarBtn}>Explore More</button>
            </div>
          </Col>
          <Col lg={7} xxl={5}>
            <img src={WhyXactlane} className={style.WhyXactLanePic} alt=" " />
          </Col>
        </Row>
      </section>

      {/* Services Section */}

      <section>
        <Row>
          <Row className={style.ServicesMain}>
            <div className={style.Services2}>
              <h1>Services</h1>
              <p>
                We Invite you to try our services, and we personally guarantee
                that you will be completely satisified
              </p>
            </div>
          </Row>

          <Row
            className={style.HoverImageContainer}
            style={{ justifyContent: "center" }}
          >
            <Col
              lg={6}
              xxl={4}
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  objectFit: "contain",
                  maxWidth: "800px",
                  maxHeight: "400px",
                  borderRight: "50px",
                  // transition: "width 2s, height 4s",
                  display: "flex",
                }}
                // className={style.fadeInClass}
                src={
                  (count === 1 && CityToImg) ||
                  (count === 2 && AirportTransfer) ||
                  (count === 3 && HourlyBooking) ||
                  (count === 4 && ShuttleService)
                }
                alt=""
              />
            </Col>
            <Col lg={5} xxl={4}>
              <div className={style.Services}>
                {/* first */}
                <div
                  className={`${style.ServicesSubSection} ${
                    count === 4 && style.active
                  }`}
                  // onClick={() => setServices("CityToCity")}
                >
                  <div>
                    <div className={`${style.servicesButton} `}>
                      <div
                        className={`${style.servicesButtonCenter} `}
                        // style={{ background: "#" }}
                      >
                        &nbsp;
                      </div>
                    </div>
                  </div>
                  <div className={style.servicesNavigationMain}>
                    <h4>City to City Transfer</h4>
                    <p>
                      Ditch the driving, embrace luxury. Glide between cities in
                      comfort, arrive relaxed and ready. Book your chauffeur
                      service today!
                    </p>
                  </div>
                </div>

                {/* second */}
                <div
                  className={`${style.ServicesSubSection} ${
                    count === 1 && style.active
                  }`}
                  // onClick={() => setServices("AirportTransfer")}
                >
                  <div>
                    <div className={style.servicesButton}>
                      <div className={style.servicesButtonCenter}>&nbsp;</div>
                    </div>
                  </div>
                  <div className={style.servicesNavigationMain}>
                    <h4>Airport Transfer</h4>
                    <p>
                      Skip the taxi queue. Your private ride awaits at arrivals.
                      Relax and recharge after your flight. We'll handle the
                      driving.
                    </p>
                  </div>
                </div>
                {/* third */}
                <div
                  className={`${style.ServicesSubSection} ${
                    count === 2 && style.active
                  }`}
                  // onClick={() => setServices("HourlyBooking")}
                >
                  <div>
                    <div className={style.servicesButton}>
                      <div className={style.servicesButtonCenter}>&nbsp;</div>
                    </div>
                  </div>
                  <div className={style.servicesNavigationMain}>
                    <h4>Hourly Booking</h4>
                    <p>
                      Your personal city chauffeur for the day. Impeccable
                      service, on-demand. Night out planned? Let us be your
                      designated driver in style.
                    </p>
                  </div>
                </div>
                {/* forth */}
                <div
                  className={`${style.ServicesSubSection} ${
                    count === 3 && style.active
                  }`}
                  // onClick={() => setServices("ShuttleService")}
                >
                  <div>
                    <div className={style.servicesButton}>
                      <div className={style.servicesButtonCenter}>&nbsp;</div>
                    </div>
                  </div>
                  <div className={style.servicesNavigationMain}>
                    <h4>Events and Shuttle Service</h4>
                    <p>
                      Arrive in grand style. Your red carpet chauffeur
                      experience starts here. Make every event entrance
                      unforgettable. Luxury transportation at your fingertips.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </section>

      {/* Our Fleet */}
      <section>
        <div className={`${style.OurFleet} ${style.ourFleetMain}`}>
          <Row className={style.OurFleetMainDiv}>
            <Col lg={4} className={style.OurFleetLeftMain}>
              <div className={style.OurFleetLeft}>
                <h1>Categories</h1>
                <p>
                  Indulge in luxury as you choose between our curated
                  categories, each meticulously crafted to meet your unique
                  demands. Elevate your experience with tailored excellence at
                  every turn.
                </p>
                <button className={style.ExploreMore}>Explore More</button>
              </div>
            </Col>
            <Col lg={6}>
              {/* <SliderCar /> */}
              <img
                style={{
                  maxHeight: "500px",
                  maxWidth: "800px",
                  height: "100%",
                  width: "100%",
                }}
                className={style.moveRightToLeftClass}
                src={
                  (count1 === 1 && CarSlider7) ||
                  (count1 === 2 && CarSlider8) ||
                  (count1 === 3 && CarSlider10) ||
                  (count1 === 4 && CarSlider12)
                }
                alt=""
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Our Customer */}
      <section>
        <Row className={style.OurCustomerMain} xxl={4}>
          <Col lg={4} xxl={2} className={style.SliderTextWidth}>
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
            xxl={4}
            className={style.SliderWidth}
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

      {/* Our Advanture */}
      <section>
        <div className={style.OurAdvantageMainDiv}>
          <Row
            className={style.gap}
            xxl={3}
            style={{ justifyContent: "center" }}
          >
            <Col
              lg={6}
              xl={6}
              xxl={3}
              className={`${style.OurAdvantageWidth} col-md-6 order-2 order-md-1`}
            >
              <div className={style.smartSegmentation}>
                <div
                  className={style.smartSegmentationBox}
                  // style={{ }}
                >
                  <div className={`${style.OurAdvantagesBox} `}>
                    <div className={style.SmartSegmentation}>
                      {SmartSegmentationSvg}
                      <p>Local Expertise</p>
                    </div>
                    <p>
                      we provide local expertise through carefully selected
                      partners who not only offer top-notch service but are also
                      well-acquainted with their region.
                    </p>
                  </div>
                  {/* second box */}
                  <div
                    className={style.OurAdvantagesBox}
                    style={{ background: "#089250" }}
                  >
                    <div className={style.SmartSegmentation}>
                      {TimeOptimization}
                      <p style={{ color: "#fff" }}>Individual Care</p>
                    </div>
                    <p style={{ color: "#fff" }}>
                      Our focus is on personalized service, from booking to
                      arrival. Each ride is tailored to individual needs to
                      ensure a unique experience.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",

                    justifyContent: "center",
                  }}
                >
                  <div
                    className={`${style.OurAdvantagesBox} ${style.OurAdvantagesBoxWidth}`}
                  >
                    <div className={style.SmartSegmentation}>
                      {GlobalNetwork}
                      <p>Global Networking</p>
                    </div>
                    <p>
                      With a worldwide presence and global partners, we ensure
                      seamless connections and top-notch service at key
                      locations around the world.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg={6}
              xl={6}
              xxl={3}
              className={`${style.OurAdvantageWidth} col-md-6 order-1 order-md-2`}
            >
              <div className={style.OurAdvantage}>
                <h1>Our advantages</h1>
                <p>
                  Save your time finding the right chauffeur service in
                  different locations around the world. We have already done
                  this for you. We are your business travel management. Same
                  service and quality everywhere.
                </p>
                <button
                  style={{ padding: "0px" }}
                  className={style.ExploreMore}
                >
                  Explore More
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Services 2 */}
      <section>
        <div className={style.ServiceMainContainer}>
          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            xxl={2}
          >
            <div className={style.Services2} style={{ width: "30%" }}>
              <h1>Services</h1>
              <p>
                We Invite you to try our services, and we personally guarantee
                that you will be completely satisified{" "}
              </p>
            </div>

            <div
              className={style.BenzFeatures}
              style={{
                backgroundImage: `url(${Benz})`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "100%",
                }}
              >
                <div className={style.services2Main}>
                  {ServicesPlane}
                  <p>
                    45 minutes of waiting time for airport pickups with flight
                    tracking for delays.
                  </p>
                </div>

                <div className={style.services2Main}>
                  {BuildingService2}
                  <p>Meet & Greet with a nameboard at the meeting point.</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className={style.services2Main}>
                  {TimeServices}
                  <p>
                    Driver details, including a contact number in advance, to
                    ensure you can contact the driver directly.
                  </p>
                </div>

                <div className={style.services2Main}>
                  {CalanderServices2}
                  <p>Complimentary water for your ride.</p>
                </div>
              </div>
            </div>
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
export default memo(Hero);
