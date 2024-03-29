import { Col, Container, Row, Spinner } from "react-bootstrap";
import style from "./PickUpInfo.module.css";
import { useContext, useEffect, useMemo, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { InfoSvg } from "../../../../../../public/Svgs/Svg";
import { BookingProcessContext } from "../../../BookingProcessContext";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
const bookingUrl = `${BaseUrl}/create-booking`;
const userUrl = `${BaseUrl}/get-profile`;
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BaseUrl } from "../../../../../Env";
import { CheckForCarDetails } from "../../../../../../public/Svgs/ExtraFunctions";

const PickupInfo = () => {
  const [selectedOption, setSelectedOption] = useState("someone_else");
  const [person, setPerson] = useState({});
  const [selectedTitle, setSelectedTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [carId, setCarId] = useState("");
  const [price, setPrice] = useState("");
  const [bookingMode, setBookingMode] = useState("");
  const [title, setTitle] = useState("");

  const [specialRequest, setSpecialRequest] = useState("");
  const [additionalInfo, setAddtionalInfo] = useState("");

  const [isloading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { handleSteps, activeStep } = useContext(BookingProcessContext);
  let user = useSelector((state) => state.UserDetails.user);
  // const { cartype, price: pricess, mode } = useParams();

  const distance = useSelector((state) => state.BookingDetailsDistance);

  const time = useSelector((state) => state.BookingDetailsTime);

  let token;

  token = Cookies.get("token");

  useEffect(() => {
    handleSteps("active-step3");

    if (!token) {
      HandleNavigate();
    } else if (token.length > 10) {
    }
  }, []);

  useEffect(() => {
    setCarId(window.location.href.split("/")[5]);
    setPrice(window.location.href.split("/")[6]);
    setBookingMode(window.location.href.split("/")[7]);
    SetValueFromLocalStorage();
  }, []);

  const SetValueFromLocalStorage = useMemo(() => {
    return () => {
      const PrevData = localStorage.getItem("formData");
      const ParsePrevData = JSON.parse(PrevData);
      // console.log(ParsePrevData);
      setPerson(ParsePrevData);
      setAddtionalInfo(ParsePrevData?.noteForChauffer);
      setSpecialRequest(ParsePrevData?.specialReq);
    };
  }, []);

  const handleOptionChange = async (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value == "myself") {
      setSelectedTitle("");
      localStorage.removeItem("formData");
      setIsLoading(true);

      reset();
      let headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        let res = await axios.get(userUrl, { headers });
        setPerson(res.data.data);
        setAddtionalInfo("");
        setIsLoading(false);
        setSpecialRequest("");
      } catch (error) {
        setIsLoading(false);
      }
      // setPerson(user)
    } else {
      reset();
      setPerson({});
      setSelectedTitle("");
    }
  };
  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
    setTitle(event.target.value);
  };

  const navigate = useNavigate();
  const HandleNavigate = () => {
    navigate("/bookingProcess/login");
  };

  const checkKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const onFormSubmit = async (data) => {
    console.log(data);
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    let priceString = price; // Assuming this is your string representation of the number
    let priceNumber = parseFloat(priceString); // Convert string to a floating-point number
    let FinalPrice = priceNumber.toFixed(2);

    const body = {
      title: selectedTitle ? selectedTitle : person?.title,
      bookingForOther: selectedOption,
      carId: carId,
      bookingMode: bookingMode,
      startTime: distance?.startTime || time?.startTimeForTime,
      finalPrice: FinalPrice,
      startDate: distance?.startdate || time?.startdateForTime,
      duration: time?.durationForTime,
      from: distance?.startLocation || time?.startLocationForTime,
      to: distance?.endLocation,
      noteForChauffer: additionalInfo,
      specialReq: specialRequest,
      // fullName: person?.fullName || data?.firstName + " " + data?.lastName,
      fullName: data.name ? data?.name : person?.fullName,
      phone: data?.phone.length > 6 ? data?.phone : person?.phone,
      email: data?.email || person?.email,
      distance: distance?.Distance,
      time: distance?.Time,
    };
    console.log(body);
    localStorage.setItem("formData", JSON.stringify(body));

    setTimeout(() => {
      navigate(`/bookingProcess/checkout`);
    }, 700);
  };

  return (
    <Container
      className={style.PickUpInfoMain}
      // style={{ padding: "0px 92px 30px 92px", gap: "20px" }}
    >
      <Row style={{ padding: "20px 0px" }}>
        <Col>
          <div className={style.PickMain}>
            <h3>Select who you are booking for</h3>
            <div className={style.RadioBtnsMain}>
              <div
                className={style.radioButton}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <input
                  type="radio"
                  value="myself"
                  checked={selectedOption === "myself"}
                  onChange={handleOptionChange}
                />
                <label>Book for myself</label>
              </div>

              <div
                className={style.radioButton}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <input
                  type="radio"
                  value="someone_else"
                  checked={selectedOption === "someone_else"}
                  onChange={handleOptionChange}
                />
                <label>Book for someone else</label>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        onKeyDown={(e) => checkKeyDown(e)}
      >
        <Row style={{ padding: "20px 0px" }}>
          <Col>
            <div
              className={style.PickMain}
              style={{
                position: "relative",
                padding: "24px",
              }}
            >
              {isloading && (
                <div
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backdropFilter: "blur(2px)",
                    zIndex: "10000",
                    // backgroundColor: "red",
                    borderRadius: "10px",
                  }}
                >
                  <Spinner />
                </div>
              )}
              <h3>Provide additional information</h3>

              <div className={style.PickUpDeatilsForm}>
                <div className={style.PickUpDeatilsFormFields}>
                  <label className={style.SelectLabel} htmlFor="titleSelect">
                    Title
                  </label>
                  <select
                    id="titleSelect"
                    value={selectedTitle ? selectedTitle : person?.title}
                    onChange={handleTitleChange}
                    className={style.SelectFeild}
                    name="title"
                  >
                    <option className={style.DefaultSelect} value="">
                      Select your title
                    </option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="miss">Miss</option>
                    <option value="ms">Ms.</option>
                    <option value="dr">Dr.</option>
                  </select>
                </div>

                <div className={style.PickUpDeatilsFormFields}>
                  <label className={style.SelectLabel} htmlFor="titleSelect">
                    Name
                  </label>
                  <input
                    className={style.SelectFeild}
                    type="text"
                    placeholder="Enter Your Name"
                    defaultValue={person?.fullName}
                    name="firstName"
                    {...register("name")}
                    required
                  />
                </div>
                {/* 
                <div className={style.PickUpDeatilsFormFields}>
                  <label className={style.SelectLabel} htmlFor="titleSelect">
                    Last Name
                  </label>
                  <input
                    className={style.SelectFeild}
                    type="text"
                    placeholder="Enter Your Last Name"
                    defaultValue={person?.fullName?.split(" ")[1]}
                    name="lastName"
                    {...register("lastName")}
                    required
                  />
                </div> */}

                <div className={style.PickUpDeatilsFormFields}>
                  <label className={style.SelectLabel} htmlFor="titleSelect">
                    Contact Number
                  </label>
                  <PhoneInput
                    defaultCountry="de"
                    disableDialCodePrefill={true}
                    value={person?.phone ? person?.phone : phone}
                    style={{ width: "100%" }}
                    onChange={(phone) => setPhone(phone)}
                    placeholder="+49 895524554536"
                    name="phone"
                    required
                    {...register("phone")}
                  />
                </div>

                <div className={style.PickUpDeatilsFormFields}>
                  <label className={style.SelectLabel} htmlFor="titleSelect">
                    Email Address
                  </label>
                  <input
                    className={style.SelectFeild}
                    defaultValue={person?.email}
                    type="email"
                    placeholder="Enter Your Email Address"
                    name="email"
                    required
                    {...register("email")}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/*Notes and Special request*/}
        <Row style={{ padding: "20px 0px" }}>
          <Col>
            <div className={style.PickMain}>
              <h3>Provide additional information</h3>
              <div style={{ width: "100%" }}>
                <textarea
                  className={style.NoteForChauffeur}
                  // name="noteForChauffer"
                  id=""
                  style={{ width: "100%" }}
                  placeholder="Notes for the chauffeur"
                  value={additionalInfo}
                  onChange={(e) => setAddtionalInfo(e.target.value)}
                  // {...register("noteForChauffer")}
                />
              </div>

              <div className={style.SpecialRequest}>
                <p>
                  Add special requests, e.g. number of bags, child seats, etc.
                  Please do not include confidential information.
                </p>
                <textarea
                  name="specialReq"
                  placeholder="Reference number or cost center"
                  value={specialRequest}
                  // {...register("specialReq")}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                ></textarea>
              </div>
              <p>
                Booking for business? What you enter above will appear on the
                invoice.
              </p>
            </div>
          </Col>
        </Row>

        <Row style={{ padding: "20px 0px" }}>
          <Col>
            <div className={style.PickMain}>
              <div className={style.InfoSection}>
                <div>{InfoSvg}</div>
                <p>
                  The contact info entered will receive ride updates and booking
                  confirmation.
                </p>
              </div>

              <div className={style.InfoSection}>
                <div>{InfoSvg}</div>
                <p>Invoices are sent only to the booker, not the guest.</p>
              </div>
            </div>
          </Col>
        </Row>
        {/* {/ Submit button /} */}
        <Row style={{ justifyContent: "center" }}>
          <button type="submit" className={style.Continue}>
            Continue
          </button>
        </Row>
      </form>
      <ToastContainer />
    </Container>
  );
};

export default PickupInfo;
