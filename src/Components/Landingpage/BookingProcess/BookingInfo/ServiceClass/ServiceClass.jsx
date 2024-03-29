import { Col, Container, Row } from "react-bootstrap";
import style from "./ServiceClass.module.css";
import BusinessClass from "../../../../../../Images/BusinessClass.png";
import FirstClass from "../../../../../../Images/FirstClass.png";
import BusinessVanSUV from "../../../../../../Images/BusinessVanSUV.png";

import {
  GreenArrow,
  InfoSvg,
  Luggage,
  MaxSvg,
} from "../../../../../../public/Svgs/Svg";
import { useContext, useEffect } from "react";
import { BookingProcessContext } from "../../../BookingProcessContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ServiceClass = () => {
  const navigate = useNavigate();
  const HandleNavigate = (type, finalPrice, bookingMode) => {
    localStorage.setItem("finalPrice", finalPrice.toFixed(2));
    localStorage.setItem("bookingMode", bookingMode);
    navigate(
      `/bookingProcess/pickup-info/${type}/${finalPrice}/${bookingMode}`
    );
    localStorage.setItem("carType", type);
  };

  const { BookingDetail } = useSelector(
    (state) => state.BookingDetailsDistance
  );

  const {
    BookingDetailTime,
    TimezoneForTime,

    startdateForTime,
    startTimeForTime,
    startLocationForTime,
    durationForTime,
  } = useSelector((state) => state.BookingDetailsTime);

  let myCars;

  if (BookingDetail.length > 0) {
    myCars = BookingDetail;
    console.log("Booking details info");
  } else if (BookingDetailTime.length > 0) {
    myCars = BookingDetailTime;
    console.log("Booking details time info");
  } else if (localStorage.getItem("DistanceCarInfo")) {
    console.log("car info");
  }

  const ListData = [
    "Free cancellation up until 1 hour before pickup",
    "Free 15 minutes of wait time",
    "Meet & Greet",
    "Complimentary bottle of water",
    "Complimentary in-vehicle WiFi",
    "Tissues and sanitizer",
    "Android and iPhone chargers",
  ];
  const { handleSteps, activeStep } = useContext(BookingProcessContext);
  useEffect(() => {
    handleSteps("active-step1");
  }, []);

  return (
    <>
      <Container
        style={{
          padding: "0px",
          flexDirection: "column",
          display: "flex",
          gap: "30px",
        }}
      >
        {/* booking cars start */}
        <Row
          onClick={() =>
            HandleNavigate(
              myCars[4]?.data._id,
              myCars[4]?.finalPrice,
              myCars[4]?.bookingMode
            )
          }
          className={style.CarSelectColorMain}
        >
          <Col lg={4} style={{ zIndex: "1000", padding: "0px" }}>
            <img className={style.Image} src={BusinessClass} alt="" />
          </Col>
          <Col style={{ padding: "0px" }}>
            <div className={style.CarDetails}>
              <div style={{}} className={style.CarDetailText}>
                <h3>{myCars[4]?.data.vehicleType}</h3>
                <div className={style.CarDetailsEmojis}>
                  <div className={style.CarDetailsEmojisMaxPeople}>
                    {MaxSvg} <p>max. 3</p>
                  </div>
                  <div className={style.CarDetailsEmojisMaxPeople}>
                    {Luggage} <p>max. 2</p>
                  </div>
                </div>
                <h4>Most popular - Mercedes-Benz E-Class or similar</h4>
                <p>{Math.ceil(myCars[4]?.finalPrice)} USD</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row
          onClick={() =>
            HandleNavigate(
              myCars[0]?.data._id,
              myCars[0]?.finalPrice,
              myCars[0]?.bookingMode
            )
          }
          className={style.CarSelectColorMain}
        >
          <Col
            className={style.displayVisibleMobile}
            lg={4}
            style={{ zIndex: "1000", padding: "0px" }}
          >
            <img
              style={{ marginLeft: "0%" }}
              className={style.Image}
              src={BusinessVanSUV}
              alt=""
            />
          </Col>
          <Col style={{ padding: "0px" }}>
            <div
              className={`${style.CarDetails} ${style.firstClassSidan}`}
              // style={{ marginLeft: "11%", marginTop: "2.5%" }}
            >
              <div
                style={{}}
                className={`${style.CarDetailText} ${style.CarDetailsAlignmnet}`}
              >
                <h3>{myCars[0]?.data.vehicleType}</h3>
                <div className={style.CarDetailsEmojis}>
                  <div className={style.CarDetailsEmojisMaxPeople}>
                    {MaxSvg} <p>max. 3</p>
                  </div>
                  <div className={style.CarDetailsEmojisMaxPeople}>
                    {Luggage} <p>max. 2</p>
                  </div>
                </div>
                <h4>Most popular - Mercedes-Benz E-Class or similar</h4>
                <p>{Math.ceil(myCars[0]?.finalPrice)} USD</p>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            style={{ zIndex: "1000", padding: "0px" }}
            className={style.displayNoneMobile}
          >
            <img
              style={{ marginLeft: "0%" }}
              className={style.Image}
              src={BusinessVanSUV}
              alt=""
            />
          </Col>
        </Row>

        <Row
          onClick={() =>
            HandleNavigate(
              myCars[1]?.data._id,
              myCars[1]?.finalPrice,
              myCars[1]?.bookingMode
            )
          }
          className={style.CarSelectColorMain}
        >
          <Col lg={4} style={{ zIndex: "1000" }}>
            <img
              className={`${style.Image} ${style.ImageWidth}`}
              src={FirstClass}
              alt=""
            />
          </Col>
          <Col style={{ padding: "0px" }}>
            <div className={`${style.CarDetails} ${style.CarDetailsMargin}`}>
              <div style={{}} className={style.CarDetailText}>
                <h3>{myCars[1]?.data.vehicleType}</h3>
                <div className={style.CarDetailsEmojis}>
                  <div className={style.CarDetailsEmojisMaxPeople}>
                    {MaxSvg} <p>max. 3</p>
                  </div>
                  <div className={style.CarDetailsEmojisMaxPeople}>
                    {Luggage} <p>max. 2</p>
                  </div>
                </div>
                <h4>Most popular - Mercedes-Benz E-Class or similar</h4>
                <p>{Math.ceil(myCars[1]?.finalPrice)} USD</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row
          onClick={() =>
            HandleNavigate(
              myCars[2]?.data._id,
              myCars[2]?.finalPrice,
              myCars[2]?.bookingMode
            )
          }
          className={style.CarSelectColorMain}
        >
          <Col
            className={style.displayVisibleMobile}
            lg={4}
            style={{ zIndex: "1000", padding: "0px" }}
          >
            <img
              style={{ marginLeft: "0%" }}
              className={style.Image}
              src={BusinessVanSUV}
              alt=""
            />
          </Col>

          <Col style={{ padding: "0px" }}>
            <div
              className={`${style.CarDetails} ${style.firstClassSidan}`}
              // style={{ marginLeft: "11%", marginTop: "2.5%" }}
            >
              <div
                // style={{ alignItems: "end", marginRight: "14%" }}
                className={`${style.CarDetailText} ${style.CarDetailsAlignmnet}`}
              >
                <h3>{myCars[2]?.data.vehicleType}</h3>
                <div className={style.CarDetailsEmojis}>
                  <div className={style.CarDetailsEmojisMaxPeople}>
                    {MaxSvg} <p>max. 3</p>
                  </div>
                  <div className={style.CarDetailsEmojisMaxPeople}>
                    {Luggage} <p>max. 2</p>
                  </div>
                </div>
                <h4>Most popular - Mercedes-Benz E-Class or similar</h4>
                <p>{Math.ceil(myCars[2]?.finalPrice)} USD</p>
              </div>
            </div>
          </Col>

          <Col
            className={style.displayNoneMobile}
            lg={4}
            style={{ zIndex: "1000", padding: "0px" }}
          >
            <img
              style={{ marginLeft: "0%" }}
              className={style.Image}
              src={BusinessVanSUV}
              alt=""
            />
          </Col>
        </Row>

        <Row
          onClick={() =>
            HandleNavigate(
              myCars[3]?.data._id,
              myCars[3]?.finalPrice,
              myCars[3]?.bookingMode
            )
          }
          className={style.CarSelectColorMain}
        >
          <Col lg={4} style={{ zIndex: "1000" }}>
            <img
              style={{}}
              className={`${style.Image} ${style.ImageWidth}`}
              src={FirstClass}
              alt=""
            />
          </Col>
          <Col style={{ padding: "0px" }}>
            <div className={`${style.CarDetails} ${style.CarDetailsMargin}`}>
              <div style={{}} className={style.CarDetailText}>
                <h3>{myCars[3]?.data.vehicleType}</h3>
                <div className={style.CarDetailsEmojis}>
                  <div className={style.CarDetailsEmojisMaxPeople}>
                    {MaxSvg} <p>max. 3</p>
                  </div>
                  <div className={style.CarDetailsEmojisMaxPeople}>
                    {Luggage} <p>max. 2</p>
                  </div>
                </div>
                <h4>Most popular - Mercedes-Benz E-Class or similar</h4>
                <p>{Math.ceil(myCars[3]?.finalPrice)} USD</p>
              </div>
            </div>
          </Col>
        </Row>
        {/* booking cars end */}

        {/* All ClassesIncludes */}
        <Row
          style={{ justifyContent: "center", padding: "16px 0px", gap: "20px" }}
        >
          <Col lg={5} style={{ padding: "0px" }}>
            <div className={style.AllClassesInclude}>
              <h3>All classes include:</h3>

              {ListData.map((item, i) => (
                <div key={i} className={style.AllClassesIncludeList}>
                  {GreenArrow}
                  <p style={{ margin: "0px" }}>{item}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={5} style={{ padding: "0px" }}>
            <div className={style.AllClassesInclude}>
              <h3>Please note:</h3>
              <div className={style.PleaseNoteMain}>
                <div>{InfoSvg}</div>
                <p style={{ margin: "0px" }}>
                  Guest/luggage capacities must be abided by for safety reasons.
                  If you are unsure, select a larger class as chauffeurs may
                  turn down service when they are exceeded.
                </p>
              </div>

              <div className={style.PleaseNoteMain}>
                <div>{InfoSvg}</div>
                <p style={{ margin: "0px" }}>
                  The vehicle images above are examples. You may get a different
                  vehicle of similar quality.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom btn */}
        {/* <Row>
          <div className={style.TermsConditions}>
            <p>View terms & conditions</p>
            <button onClick={HandleNavigate}>Continue</button>
          </div>
        </Row> */}
      </Container>
    </>
  );
};

export default ServiceClass;
