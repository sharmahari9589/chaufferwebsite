import React, { useContext, useEffect, useState } from "react";
import { BookingProcessContext } from "../../../BookingProcessContext";
import style from "./Payment.module.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BaseUrl } from "../../../../../Env";

const bookUrl = `${BaseUrl}/get-book`;
const checkOutUrl = `${BaseUrl}/checkout`;
const payUrl = `${BaseUrl}/create-payment`;

const Payment = () => {
  const { handleSteps } = useContext(BookingProcessContext);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    handleSteps("active-step5");
  }, []);

  let token = Cookies.get("token");

  useEffect(() => {
    getData();
  }, [token]);

  async function getData() {
    try {
      let headers = {
        Authorization: `Bearer ${token}`,
      };
      let res = await axios.get(
        `${bookUrl}/${window.location.href.split("/")[5]}`,
        { headers }
      );
      setData(res.data.data);
      console.log(data);

      if (res.data.data?.checkoutId) {
        loadSumUpCard(res.data.data.checkoutId);
      } else {
        console.error(
          "Invalid state: checkoutId is missing in the fetched data."
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function loadSumUpCard(checkoutId) {
    // Load SumUpCard SDK script dynamically
    const script = document.createElement("script");
    script.src = "https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // SumUpCard SDK is loaded, now mount the card
      window.SumUpCard.mount({
        id: "sumup-card",
        checkoutId: checkoutId,
        showAmount: true,
        onResponse: async function (type, body) {
          if (body.status === "PAID") {
            let headers = {
              Authorization: `Bearer ${token}`,
            };
            let p = await axios.post(
              `${payUrl}/${data._id}`,
              { data: body.transaction_id },
              { headers }
            );

            if (p.data.status === true) {
              toast.success("Payment done successfully");
              setTimeout(() => {
                navigate("/");
              }, 4000);
            }
          }
        },
      });
    };

    // Cleanup: remove the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }

  const HandlePaynow = async () => {
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    let body = {
      amount: Math.ceil(data?.finalPrice),
      currency: "USD",
      id: data?._id,
    };

    try {
      // let res = await axios.post(checkOutUrl, body, { headers });
      getData();
      setPayNow(true);
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  // 12 hrs format data
  function formatDate(dateString) {
    const date = new Date(dateString);

    // Define options for date formatting
    const options = {
      weekday: "short", // abbreviated day of the week (e.g., Sun)
      month: "short", // abbreviated month name (e.g., Dec)
      day: "numeric", // day of the month (e.g., 17)
      year: "numeric", // full year (e.g., 2023)
      hour: "numeric", // hour in 12-hour format (e.g., 02)
      minute: "2-digit", // minutes (e.g., 50)
      hour12: true, // use 12-hour format (AM/PM)
    };

    // Format the date
    const formattedDate = date.toLocaleDateString("en-US", options);

    // Get the time zone abbreviation
    const timeZone = "EST"; // Eastern Standard Time

    // Construct the final formatted date string
    const formattedDateString = `${formattedDate} (${timeZone})`;

    return formattedDateString;
  }

  return (
    <div>
      <Container>
        <ToastContainer />
        {data?.bookingMode === "time" ? (
          <Row style={{ justifyContent: "center" }}>
            <Col lg={10}>
              <div className={style.BookingInfoMain}>
                <div className={style.BookingInfoDate}>
                  <p>{formatDate(data?.bookingDate)}</p>
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

                        <h4>{data?.from}</h4>
                      </div>
                    </Col>
                    <Col>
                      <div className={style.FooterText}>
                        <h6 style={{ fontWeight: 800, margin: "0px" }}>
                          Duration:
                        </h6>{" "}
                        <p style={{ margin: "0px" }}>{data?.duration} hrs</p>
                      </div>
                    </Col>
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
                  <p> {formatDate(data?.startDate)}</p>
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

                        <h4>{data?.from}</h4>
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

                        <h4>{data?.to}</h4>
                      </div>
                    </Col>
                  </div>

                  <div className={style.FooterText}>
                    <div>
                      <h6 style={{ fontWeight: 800 }}>Distance:</h6>{" "}
                      <p>{data?.distance}</p>
                    </div>
                    <div>
                      <h6 style={{ fontWeight: 800 }}>Duration:</h6>
                      <p>{data?.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>

      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col lg={10} style={{ padding: "0px" }}>
            <div
              className={style.BookingInfoTravelInfo}
              style={{ borderRadius: "10px", marginBottom: "30px" }}
            >
              <div className={style.FooterText}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <h6 style={{ fontWeight: 800, margin: "0px" }}>
                    Payment Status :
                  </h6>{" "}
                  <p style={{ margin: "0px" }}>{data?.paymentStatus}</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <h6 style={{ fontWeight: 800, margin: "0px" }}>
                    Booking Status :
                  </h6>
                  <p
                    style={{
                      margin: "0px",
                      color:
                        data?.bookingStatus === "pending" ? "red" : "green",
                    }}
                  >
                    {data?.bookingStatus}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <h6 style={{ fontWeight: 800, margin: "0px" }}>
                    Final Price :
                  </h6>{" "}
                  <p style={{ margin: "0px" }}>{data?.finalPrice}</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <h6 style={{ fontWeight: 800, margin: "0px" }}>
                    Allotment Status:
                  </h6>
                  <p
                    style={{
                      margin: "0px",
                      color: !data?.isAlloted == true ? "red" : "green",
                    }}
                  >
                    {!data?.isAlloted == true
                      ? "Ride Not Alloted"
                      : "Ride Alloted"}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <h6 style={{ fontWeight: 800, margin: "0px" }}>
                    Booking ID :
                  </h6>
                  <p style={{ margin: "0px" }}>{data?.bookingId}</p>
                </div>
              </div>
              <div
                className={style.FooterText}
                style={{ justifyContent: "space-between" }}
              >
                {data?.paymentStatus !== "paid" && (
                  <button
                    className={style.AlignBtn}
                    style={{
                      width: "200px",

                      margin: "0px",
                      backgroundColor:
                        !data?.isAlloted == true ? "red" : "green",
                      borderRadius: "8px",
                      cursor:
                        !data?.isAlloted == true ? "not-allowed" : "pointer",
                    }}
                    onClick={HandlePaynow}
                    disabled={data?.isAlloted == false}
                  >
                    {!data?.isAlloted == true ? "Pending..." : "Pay"}
                  </button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {payNow && <div id="sumup-card"></div>}
    </div>
  );
};

export default Payment;
