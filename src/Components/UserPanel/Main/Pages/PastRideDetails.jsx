import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

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

const PastRideDetails = () => {
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
                    {upcomingRides?.distance.replace(" km", "")} Kilometres{" "}
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
                    Additional Charges :&nbsp;{upcomingRides?.reasonExtra}
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
                    <div className={style.arrow} />

                    <h5>{upcomingRides?.to}</h5>
                  </>
                )}
              </div>
            </div>
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

export default PastRideDetails;
