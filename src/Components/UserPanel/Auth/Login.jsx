import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Login.module.css";
import { PhoneInput } from "react-international-phone";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BaseUrl } from "../../../Env";
import { XactlaneWhite } from "../../../../public/Svgs/Svg";

const Login = () => {
  const [toggle, setToggle] = useState(true);
  const [otpToggle, setOtptoggle] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleTitleChange = (event) => {
  //   setSelectedTitle(event.target.value);
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const url = `${BaseUrl}/login`;
      const response = await axios.post(url, {
        email: data.Email,
        password: data.Password,
      });
      Cookies.set("token", response.data.token, { expires: 1 });
      toast.success(response.data.message);
      navigate("/user");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const Register = async (data) => {
    try {
      const url = `${BaseUrl}/signup-otp`;
      const response = await axios.post(url, {
        fullName: `${data.firstname} ${data.lastname}`,
        password: data.password,
        email: data.email,
        phoneNo: data.phoneNo,
        title: data.title,
        confirmPassword: data.password,
      });

      localStorage.setItem("fullname", `${data.firstname} ${data.lastname}`);
      localStorage.setItem("password", data.password);
      localStorage.setItem("email", data.email);
      localStorage.setItem("phoneNo", data.phoneNo);
      localStorage.setItem("title", data.title);

      toast.success(response.data.message);
      setOtptoggle(true);
    } catch (error) {
      toast.error(error.response);
    }
  };

  const verifyOtp = async () => {
    if (otp.length > 3) {
      console.log(otp);
    }

    try {
      const url = `${BaseUrl}/signup`;
      const response = await axios.post(url, {
        fullName: localStorage.getItem("fullname"),
        password: localStorage.getItem("password"),
        email: localStorage.getItem("email"),
        phoneNo: localStorage.getItem("phoneNo"),
        title: localStorage.getItem("title"),
        confirmPassword: localStorage.getItem("password"),
        otp: otp,
      });

      console.log(response);
      if (response.data.message == "Invalid Otp") {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        localStorage.removeItem("fullname");
        localStorage.removeItem("password");
        localStorage.removeItem("email");
        localStorage.removeItem("phoneNo");
        localStorage.removeItem("title");
        setToggle(true);
        setOtptoggle(false);
      }

      setOtptoggle(true);
    } catch (error) {
      toast.error(error.response);
    }
  };

  return (
    <div>
      <div className={style.HeaderMain}>{XactlaneWhite}</div>
      <Container style={{}} className={style.LoginMain}>
        <ToastContainer />
        <Row
          style={{
            padding: "20px 0px",
            justifyContent: "center",
          }}
        >
          <Col lg={8}>
            <div>
              {toggle ? (
                <Col lg={12} className={style.PickMain}>
                  <div className={style.headingText}>
                    <h3>Welcome to xactlane</h3>
                    <p>
                      You'll be able to easily book and manage rides, and get
                      ride status updates on the day of travel.
                    </p>
                  </div>
                  <form
                    style={{ width: "100%" }}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className={style.PickUpDeatilsFormFields}>
                      <label
                        className={style.SelectLabel}
                        htmlFor="titleSelect"
                      >
                        Email
                      </label>
                      <input
                        className={style.SelectFeild}
                        type="email"
                        placeholder="Enter Your Email"
                        {...register("Email", { required: true })}
                      />
                    </div>

                    <div className={style.PickUpDeatilsFormFields}>
                      <label
                        className={style.SelectLabel}
                        htmlFor="titleSelect"
                      >
                        Password
                      </label>
                      <input
                        className={style.SelectFeild}
                        type="password"
                        placeholder="Enter Your Password"
                        {...register("Password", { required: true })}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{ marginTop: "10px" }}
                      className={style.button}
                    >
                      Log in
                    </button>
                  </form>
                  <p>
                    New to xactlane?{" "}
                    <span onClick={() => setToggle(!toggle)}>
                      {`${toggle ? " Create account?" : "Login"} `}
                    </span>
                  </p>
                </Col>
              ) : (
                <Col lg={12}>
                  <div className={style.PickMain}>
                    {!otpToggle ? (
                      <>
                        <h3>Create your account</h3>
                        <form
                          style={{ width: "100%" }}
                          onSubmit={handleSubmit(Register)}
                        >
                          <div className={style.CreateAccountForm}>
                            <div className={style.PickUpDeatilsFormFields}>
                              <label
                                className={style.SelectLabel}
                                htmlFor="titleSelect"
                              >
                                Title
                              </label>
                              <select
                                id="titleSelect"
                                // value={selectedTitle}
                                {...register("title", { required: true })}
                                // onChange={handleTitleChange}
                                className={style.SelectFeild}
                              >
                                <option
                                  className={style.DefaultSelect}
                                  value=""
                                >
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
                              <label
                                className={style.SelectLabel}
                                htmlFor="titleSelect"
                              >
                                First Name
                              </label>
                              <input
                                className={style.SelectFeild}
                                type="text"
                                placeholder="Enter Your First Name"
                                {...register("firstname", { required: true })}
                              />
                            </div>

                            <div className={style.PickUpDeatilsFormFields}>
                              <label
                                className={style.SelectLabel}
                                htmlFor="titleSelect"
                              >
                                Last Name
                              </label>
                              <input
                                className={style.SelectFeild}
                                type="text"
                                placeholder="Enter Your Last Name"
                                {...register("lastname", { required: true })}
                              />
                            </div>

                            <div className={style.PickUpDeatilsFormFields}>
                              <label
                                className={style.SelectLabel}
                                htmlFor="titleSelect"
                              >
                                Email Address
                              </label>
                              <input
                                className={style.SelectFeild}
                                type="email"
                                placeholder="Enter Your Email Address"
                                {...register("email", { required: true })}
                              />
                            </div>

                            <div className={style.PickUpDeatilsFormFields}>
                              <label
                                className={style.SelectLabel}
                                htmlFor="titleSelect"
                              >
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
                              <label
                                className={style.SelectLabel}
                                htmlFor="titleSelect"
                              >
                                Password
                              </label>
                              <input
                                className={style.SelectFeild}
                                type="password"
                                placeholder="Enter Password"
                                {...register("password", { required: true })}
                              />
                            </div>
                          </div>
                          <button
                            style={{ marginTop: "10px" }}
                            className={style.button}
                          >
                            Create Account
                          </button>
                        </form>
                      </>
                    ) : (
                      <form
                        onSubmit={handleSubmit(verifyOtp)}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          gap: "20px",
                        }}
                      >
                        <h3>Enter Otp</h3>
                        <OTPInput
                          containerStyle="otp-input"
                          inputStyle="otp-style  signup-otp-style"
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          // inputType=""zzzz
                          renderSeparator={<span>-</span>}
                          renderInput={(props) => <input {...props} />}
                        />
                        <button
                          style={{
                            width: "100px",
                            alignSelf: "center",
                            paddingTop: "10px",
                          }}
                          className={style.button}
                        >
                          Confirm
                        </button>
                      </form>
                    )}
                    <p>
                      New to xactlane?{" "}
                      <span onClick={() => setToggle(!toggle)}>
                        {`${toggle ? " Create account?" : "Login"} `}
                      </span>
                    </p>
                  </div>
                </Col>
              )}
            </div>
          </Col>
        </Row>

        {/* <Row style={{ padding: "20px 0px" }}>
        <Col>
        <div className={style.AppleLogin}>
        <div>
        <svg
        width="28"
        height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.4008 21.8205C24.9735 22.7987 24.4677 23.6992 23.8817 24.5271C23.0829 25.6557 22.4288 26.4369 21.9248 26.8707C21.1434 27.5828 20.3063 27.9475 19.4098 27.9682C18.7662 27.9682 17.9901 27.7867 17.0867 27.4186C16.1803 27.0522 15.3473 26.8707 14.5856 26.8707C13.7868 26.8707 12.9301 27.0522 12.0138 27.4186C11.096 27.7867 10.3567 27.9786 9.79144 27.9976C8.93177 28.0339 8.0749 27.6588 7.21959 26.8707C6.67369 26.3989 5.99087 25.59 5.17289 24.4441C4.29526 23.2205 3.57372 21.8015 3.00846 20.1838C2.40308 18.4364 2.09961 16.7444 2.09961 15.1062C2.09961 13.2298 2.50878 11.6114 3.32833 10.2551C3.97242 9.16575 4.8293 8.30642 5.90175 7.67557C6.9742 7.04473 8.13298 6.72326 9.38088 6.70269C10.0637 6.70269 10.9591 6.91199 12.0719 7.32334C13.1815 7.73607 13.8939 7.94537 14.2063 7.94537C14.4398 7.94537 15.2313 7.70063 16.573 7.21272C17.8419 6.76024 18.9127 6.57289 19.79 6.64669C22.1672 6.83681 23.9532 7.76545 25.1409 9.43848C23.0149 10.715 21.9632 12.503 21.9841 14.7967C22.0033 16.5833 22.6573 18.07 23.9427 19.2505C24.5253 19.7983 25.1758 20.2218 25.8996 20.5225C25.7426 20.9736 25.577 21.4057 25.4008 21.8205ZM19.9487 0.56016C19.9487 1.96048 19.4325 3.26795 18.4035 4.47814C17.1617 5.91681 15.6596 6.74814 14.0308 6.61696C14.0101 6.44897 13.998 6.27216 13.998 6.08636C13.998 4.74206 14.5886 3.30338 15.6373 2.12707C16.1609 1.53149 16.8268 1.03627 17.6343 0.641218C18.4401 0.252064 19.2023 0.0368539 19.9191 0C19.94 0.187201 19.9487 0.374414 19.9487 0.560141V0.56016Z"
                  fill="black"
                />
              </svg>
            </div>

            <p style={{ margin: "0px" }}>Continue with Apple</p>
          </div>
        </Col>
      </Row> */}

        {/* <Row style={{ justifyContent: "center" }}>
          <Col lg={8}>
            <div className={style.AppleLogin}>
              <div>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#1877F2" />
                  <path
                    d="M19.4496 18.0469L20.0703 14H16.1875V11.375C16.1875 10.2676 16.7289 9.1875 18.468 9.1875H20.2344V5.74219C20.2344 5.74219 18.632 5.46875 17.1008 5.46875C13.9016 5.46875 11.8125 7.40742 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8305C12.5262 27.9426 13.2562 28 14 28C14.7438 28 15.4738 27.9426 16.1875 27.8305V18.0469H19.4496Z"
                    fill="white"
                  />
                </svg>
              </div>

              <p style={{ margin: "0px" }}>Continue with Facebook</p>
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Login;
