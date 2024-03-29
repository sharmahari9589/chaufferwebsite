import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import style from "./BookingInfo.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BookingProcessContext } from "../../BookingProcessContext";
import {
  addBookingDetail,
  addDistance,
  addEndLocation,
  addStartDate,
  addStartLocation,
  addStartTime,
  addTime,
  addTimezone,
} from "../../../../Redux/BookingDetails/BookingDetailSlice";
import {
  addBookingDetailForTime,
  addDurationForTime,
  addStartDateForTime,
  addStartLocationForTime,
  addStartTimeForTime,
  addTimezoneForTime,
} from "../../../../Redux/BookingDetails/BookingTimeDetailSlice";

const BookingInfoMain = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const {
    BookingDetail,
    Timezone,
    Distance,
    Time,
    startdate,
    startTime,
    startLocation,
    endLocation,
  } = useSelector((state) => state.BookingDetailsDistance);

  const { PaymentPage } = useContext(BookingProcessContext);

  const {
    BookingDetailTime,
    TimezoneForTime,

    startdateForTime,
    startTimeForTime,
    startLocationForTime,
    durationForTime,
  } = useSelector((state) => state.BookingDetailsTime);

  const [formattedDate, setFormattedDate] = useState("");
  let formattedDate1;

  const navigate = useNavigate();

  useEffect(() => {
    if (BookingDetail.length > 0) {
      setLoading(false);
      const dateString = startdate;

      formattedDate1 = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(dateString));
      setFormattedDate(formattedDate1);
    } else if (BookingDetailTime.length > 0) {
      setLoading(false);
      const dateString = startdateForTime;

      formattedDate1 = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(dateString));
      setFormattedDate(formattedDate1);
    } else if (localStorage.getItem("DistanceCarInfo")) {
      const data = localStorage.getItem("DistanceCarInfo"); // Retrieve the stringified JSON from localStorage
      const extraData = localStorage.getItem("DistanceCarExtraInfo");
      let parsedData = JSON.parse(data); // Parse the stringified JSON into a JavaScript object
      let ExtraInfo = JSON.parse(extraData);
      dispatch(addBookingDetail(parsedData));
      // console.log(ExtraInfo);
      ExtraInfo.map((item) => {
        if (item.distance) {
          dispatch(addDistance(item.distance));
        } else if (item.timezone) {
          dispatch(addTimezone(item.timezone));
        } else if (item.startDate) {
          dispatch(addStartDate(item.startDate));
        } else if (item.startTime) {
          dispatch(addStartTime(item.startTime));
        } else if (item.startLocation) {
          dispatch(addStartLocation(item.startLocation));
        } else if (item.EndLocation) {
          dispatch(addEndLocation(item.EndLocation));
        } else if (item.time) {
          dispatch(addTime(item.time));
        }
      });
      setLoading(false);
    } else if (localStorage.getItem("TimeCarInfo")) {
      const data = localStorage.getItem("TimeCarInfo"); // Retrieve the stringified JSON from localStorage
      const extraData = localStorage.getItem("TimeCarExtraInfo");

      let parsedData = JSON.parse(data); // Parse the stringified JSON into a JavaScript object
      let ExtraInfo = JSON.parse(extraData);
      console.log(parsedData);

      dispatch(addBookingDetailForTime(parsedData));

      ExtraInfo?.map((item) => {
        if (item.timezone) {
          dispatch(addTimezoneForTime(item.timezone));
        } else if (item.startDate) {
          dispatch(addStartDateForTime(item.startDate));
        } else if (item.startTime) {
          dispatch(addStartTimeForTime(item.startTime));
        } else if (item.startLocation) {
          dispatch(addStartLocationForTime(item.startLocation));
        } else if (item.duration) {
          dispatch(addDurationForTime(item.duration));
        }
      });
      setLoading(false);
    }
  }, [BookingDetail]);

  // 12 hrs format data
  function convertTo12HourFormat(timeString) {
    // Extract hours and minutes from the time string
    const [hours, minutes] = timeString.split(":").map(Number);

    // Determine the period (AM or PM)
    const period = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    let hours12 = hours % 12;
    hours12 = hours12 || 12; // Set 12 instead of 0 for midnight

    // Format the time in 12-hour format
    const time12Hour = `${hours12}:${minutes
      .toString()
      .padStart(2, "0")} ${period} (GMT)`;

    return time12Hour;
  }

  return (
    <>
      {loading ? (
        <h1 style={{ color: "#000" }}>🌀 Loading...</h1>
      ) : (
        <Container>
          {BookingDetail.length > 0 ? (
            <Row style={{ justifyContent: "center" }}>
              <Col lg={10}>
                <div className={style.BookingInfoMain}>
                  <div className={style.BookingInfoDate}>
                    <p>{`${formattedDate}  at ${convertTo12HourFormat(
                      startTime
                    )}`}</p>
                  </div>
                  <div className={style.BookingInfoTravelInfo}>
                    <div className={style.TravellingInfoMain}>
                      <Col className={style.TravellingFrom}>
                        <div className={style.TravellingFromSvg}>
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.9996 21.2601C16.2713 21.2601 14.0596 19.0484 14.0596 16.3201C14.0596 13.5918 16.2713 11.3801 18.9996 11.3801C21.7279 11.3801 23.9396 13.5918 23.9396 16.3201C23.9396 19.0484 21.7279 21.2601 18.9996 21.2601Z"
                              stroke="#1C1C1C"
                              stroke-width="1.5"
                            />
                            <path
                              d="M32.2677 13.4565C34.0885 21.4998 29.0852 28.3081 24.6994 32.5198C21.5169 35.5915 16.4819 35.5915 13.2835 32.5198C8.91354 28.3081 3.91021 21.484 5.73104 13.4406C8.85021 -0.271035 29.1644 -0.255201 32.2677 13.4565Z"
                              stroke="#1C1C1C"
                              stroke-width="1.5"
                            />
                          </svg>
                        </div>
                        <div className={style.TravellingFromText}>
                          <p>From</p>

                          <h4>{startLocation}</h4>
                        </div>
                      </Col>
                      <Col className={style.TravellingFrom}>
                        <div className={style.TravellingFromSvg}>
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.9996 21.2601C16.2713 21.2601 14.0596 19.0484 14.0596 16.3201C14.0596 13.5918 16.2713 11.3801 18.9996 11.3801C21.7279 11.3801 23.9396 13.5918 23.9396 16.3201C23.9396 19.0484 21.7279 21.2601 18.9996 21.2601Z"
                              stroke="#1C1C1C"
                              stroke-width="1.5"
                            />
                            <path
                              d="M32.2677 13.4565C34.0885 21.4998 29.0852 28.3081 24.6994 32.5198C21.5169 35.5915 16.4819 35.5915 13.2835 32.5198C8.91354 28.3081 3.91021 21.484 5.73104 13.4406C8.85021 -0.271035 29.1644 -0.255201 32.2677 13.4565Z"
                              stroke="#1C1C1C"
                              stroke-width="1.5"
                            />
                          </svg>
                        </div>
                        <div className={style.TravellingFromText}>
                          <p>To</p>

                          <h4>{endLocation}</h4>
                        </div>
                      </Col>
                    </div>

                    <div className={style.FooterText}>
                      <div>
                        <h6 style={{ fontWeight: 800 }}>Distance:</h6>{" "}
                        <p>{Distance}</p>
                      </div>
                      <div>
                        <h6 style={{ fontWeight: 800 }}>Duration:</h6>{" "}
                        <p>{Time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row style={{ justifyContent: "center" }}>
              <Col lg={10}>
                <div className={style.BookingInfoMain}>
                  <div className={style.BookingInfoDate}>
                    <p>{`${formattedDate}  at  ${convertTo12HourFormat(
                      startTimeForTime
                    )} (EST)`}</p>
                  </div>
                  <div className={style.BookingInfoTravelInfo}>
                    <div className={style.TravellingInfoMain}>
                      <Col className={style.TravellingFrom}>
                        <div className={style.TravellingFromSvg}>
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.9996 21.2601C16.2713 21.2601 14.0596 19.0484 14.0596 16.3201C14.0596 13.5918 16.2713 11.3801 18.9996 11.3801C21.7279 11.3801 23.9396 13.5918 23.9396 16.3201C23.9396 19.0484 21.7279 21.2601 18.9996 21.2601Z"
                              stroke="#1C1C1C"
                              stroke-width="1.5"
                            />
                            <path
                              d="M32.2677 13.4565C34.0885 21.4998 29.0852 28.3081 24.6994 32.5198C21.5169 35.5915 16.4819 35.5915 13.2835 32.5198C8.91354 28.3081 3.91021 21.484 5.73104 13.4406C8.85021 -0.271035 29.1644 -0.255201 32.2677 13.4565Z"
                              stroke="#1C1C1C"
                              stroke-width="1.5"
                            />
                          </svg>
                        </div>
                        <div className={style.TravellingFromText}>
                          <p>From</p>

                          <h4>{startLocationForTime}</h4>
                        </div>
                      </Col>
                      <Col>
                        <div className={style.FooterText}>
                          <h6 style={{ fontWeight: 800, margin: "0px" }}>
                            Duration:
                          </h6>{" "}
                          <p style={{ margin: "0px" }}>{durationForTime} hrs</p>
                        </div>
                      </Col>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )}

          <div style={{ width: "100%" }}>
            <Outlet />
          </div>
        </Container>
      )}
    </>
  );
};

export default BookingInfoMain;
