import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import style from "./Details.module.css";
import {
  ChauffeurContact,
  ChauffeurName,
  Distance,
  DrivingLisence,
  ID,
  Payment,
  Price,
  Time,
  startTime,
} from "../../../../../public/Svgs/Svg";
import { BaseUrl } from "../../../../Env";

const UpComingDetails = () => {
  const { id } = useParams();
  const token = Cookies.get("token");
  const [upcomingRides, setUpcomingRides] = useState();

  async function getUpcomingRides() {
    try {
      const response = await axios.get(`${BaseUrl}/get-book/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUpcomingRides(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    getUpcomingRides();
  }, []);

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <Col lg={10}>
          <div className={style.MainDetailsBox}>
            <div className={style.MainDetailsSubMain}>
              <h3 className={style.YourTrip}>Your Trip</h3>

              <DateComponent upcomingRides={upcomingRides} />
            </div>
            <div className={style.Divider}></div>

            <div className={style.DetailList}>
              <h1>Trip Details</h1>

              <ul>
                <li>
                  {ChauffeurName}
                  {upcomingRides?.fullName}
                </li>
                <li>
                  {ID}
                  Booking ID :&nbsp;
                  {upcomingRides?.bookingId}
                </li>

                {upcomingRides?.distance && (
                  <li>
                    {Distance}
                    {upcomingRides?.distance.replace(" km", "")} Kilometres
                  </li>
                )}
                {upcomingRides?.time ? (
                  <li>
                    {Time}
                    Duration:&nbsp;
                    {upcomingRides?.time}
                  </li>
                ) : (
                  <li>
                    {Time}
                    Duration:&nbsp;
                    {upcomingRides?.duration}{" "}
                    {upcomingRides?.duration === 1 ? "hr" : "hrs"}
                  </li>
                )}
                <li>
                  {Price}${upcomingRides?.finalPrice}
                </li>
                <li style={{ whiteSpace: "nowrap" }}>
                  {Payment} Payment Status:&nbsp;
                  {upcomingRides?.paymentStatus == "paid" ? (
                    <li
                      style={{
                        color:
                          upcomingRides?.paymentStatus == "paid"
                            ? "green"
                            : "red",
                      }}
                    >
                      Completed
                    </li>
                  ) : (
                    <li
                      style={{
                        color:
                          upcomingRides?.paymentStatus == "paid"
                            ? "green"
                            : "red",
                      }}
                    >
                      {upcomingRides?.paymentStatus}
                    </li>
                  )}
                </li>
                <li>
                  {startTime}
                  Booking Time:&nbsp;
                  <TimeComponent dateString={upcomingRides?.startTime} />
                </li>

                {upcomingRides?.reasonExtra && (
                  <li style={{ whiteSpace: "nowrap" }}>
                    {Price}
                    Additional Charges :{upcomingRides?.extraAmount}€ &nbsp; For
                    &nbsp;
                    {upcomingRides?.reasonExtra}
                  </li>
                )}
              </ul>
            </div>
            <div className={style.Divider}></div>
            {/* Chauffeur Details */}
            {upcomingRides?.allocateChaufferName &&
              upcomingRides?.allocatedChaufferMobile &&
              upcomingRides?.chaufferLisecence && (
                <div className={style.DetailList}>
                  <h1>Chauffeur Details</h1>

                  <ul>
                    <li style={{ textTransform: "uppercase" }}>
                      {ChauffeurName}
                      {upcomingRides?.allocateChaufferName}
                    </li>
                    <li>
                      {ChauffeurContact}

                      {upcomingRides?.allocatedChaufferMobile}
                    </li>

                    <li>
                      {DrivingLisence}
                      <img
                        style={{
                          height: "200px",
                          width: "300px",
                          borderRadius: "10px",
                        }}
                        src={`${BaseUrl}/${upcomingRides?.chaufferLisecence}`}
                        alt="Lisecence"
                      />
                    </li>
                  </ul>
                </div>
              )}
            {upcomingRides?.allocateChaufferName &&
              upcomingRides?.allocatedChaufferMobile &&
              upcomingRides?.chaufferLisecence && (
                <div className={style.Divider}></div>
              )}

            {/* Chauffeur End */}
            <div className={style.Routes}>
              <h1>Route</h1>

              <div className={style.RouteMain}>
                <h5>{upcomingRides?.from}</h5>
                {upcomingRides?.to && (
                  <>
                    <svg
                      viewBox="0 -6.5 38 38"
                      version="1.1"
                      width={40}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>right-arrow</title>{" "}
                        <desc>Created with Sketch.</desc>{" "}
                        <g
                          id="icons"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          {" "}
                          <g
                            id="ui-gambling-website-lined-icnos-casinoshunter"
                            transform="translate(-1511.000000, -158.000000)"
                            fill="#1C1C1F"
                            fill-rule="nonzero"
                          >
                            {" "}
                            <g
                              id="1"
                              transform="translate(1350.000000, 120.000000)"
                            >
                              {" "}
                              <path
                                d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
                                id="right-arrow"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>

                    <h5>{upcomingRides?.to}</h5>
                  </>
                )}
              </div>
            </div>

            {upcomingRides?.isAlloted == true &&
              upcomingRides?.paymentStatus !== "paid" && (
                <>
                  <div className={style.Divider}></div>
                  <div
                    className={style.Routes}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <h1>Payment</h1>
                    <button
                      style={{ borderRadius: "10px", width: "200px" }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                        }}
                        to={`${upcomingRides?.paymentUrl}`}
                      >
                        Procced to Pay
                      </Link>
                    </button>
                  </div>
                </>
              )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const DateComponent = ({ upcomingRides }) => {
  // Input date string
  const inputDateString = upcomingRides?.startDate;

  // Convert the string to a Date object
  const date = new Date(inputDateString);

  // Define options for formatting the date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date using the options
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <p className={style.dateAndDriverDetails}>
      {formattedDate} With{" "}
      <span style={{ textTransform: "uppercase" }}>
        &nbsp;
        {upcomingRides?.allocateChaufferName}
      </span>
    </p>
  );
};

const TimeComponent = ({ dateString }) => {
  const dateObject = new Date(dateString);
  const indiaOffset = 5.5 * 60 * 60 * 1000; // India is UTC+5:30

  // Calculate the time in Indian Standard Time (IST)
  const indianTime = new Date(dateObject.getTime() - indiaOffset);

  // Get the components of the Indian time
  let indianHours = indianTime.getHours();
  const indianMinutes = String(indianTime.getMinutes()).padStart(2, "0");
  const ampm = indianHours >= 12 ? "pm" : "am";
  indianHours = indianHours % 12 || 12; // Convert 24-hour to 12-hour format

  // Format the Indian time as a string in the desired format
  const formattedTime = `${indianHours}:${indianMinutes}${ampm}`;

  return formattedTime;
};

export default UpComingDetails;
