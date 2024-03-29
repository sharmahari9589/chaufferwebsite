import React, { useContext, useEffect } from "react";
import style from "./FrequentQuestion.module.css";
import { BookingProcessContext } from "../../BookingProcessContext";
import { Col, Container, Row } from "react-bootstrap";

import HowXactlaneWork from "../../../../../Images/HowXactlaneWork.jpg";
import OurServices2 from "../../../../../Images/OurServices2.jpg";
import OurServices3 from "../../../../../Images/OurServices3.jpg";
import OurServices1 from "../../../../../Images/OurServices1.jpg";
import Blog1 from "../../../../../Images/Blog1.jpg";
import Blog2 from "../../../../../Images/Blog2.jpg";
import Blog4 from "../../../../../Images/Blog4.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { BaseUrl } from "../../../../Env";
import axios from "axios";

OurServices2;

const FrequentQuestion = () => {
  const { handleWhiteHeader } = useContext(BookingProcessContext);
  useEffect(() => {
    handleWhiteHeader(false);
    return () => {
      handleWhiteHeader(true);
    };
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  const QueryApi = async (data) => {
    console.log(data);
    try {
      let url = `${BaseUrl}/create-query`;
      const response = await axios.post(url, {
        fullName: data.name,
        queryType: data.type,
        email: data.email,
        phone: data.contact,
        ExistingCustomer: data.companyname,
      });

      toast.success(response.data.message);

      reset();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Container style={{ backgroundColor: "#1C1C1C" }}>
      <ToastContainer />
      <Row
        className={style.FrequentQuestionMain}
        style={{ backgroundImage: `url(${HowXactlaneWork})` }}
      >
        <h1>
          xactlane’s
          <br />
          <span>Frequently Questions</span>
        </h1>
      </Row>

      <Row
        style={
          {
            // padding: "0px 80px",
            // justifyContent: "space-evenly",
            // marginTop: "-450px",
            // gap: "30px",
          }
        }
        className={style.QuestionsMain}
      >
        <Col lg={7}>
          <div className={style.RigtColumn}>
            <div className={style.GeneralQuestion}>
              <h1 style={{ display: "flex", alignItems: "end" }}>
                General Questions
                <svg
                  className={style.hide}
                  width="11"
                  height="10"
                  style={{ marginBottom: "4px" }}
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.28498 9.91176C7.92737 9.91176 10.0695 7.69293 10.0695 4.95588C10.0695 2.21882 7.92737 0 5.28498 0C2.6426 0 0.500488 2.21882 0.500488 4.95588C0.500488 7.69293 2.6426 9.91176 5.28498 9.91176Z"
                    fill="#0BC36B"
                  />
                </svg>
              </h1>
              {/* main  div  */}
              <div className={style.FrequentQuestionTextMain}>
                <div className={style.WhatDoINeedGreen}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6644 5.47924L18.6367 9.01017C20.2053 10.4045 20.9896 11.1017 20.9896 11.9998C20.9896 12.8979 20.2053 13.5951 18.6367 14.9894L14.6644 18.5204C13.9484 19.1568 13.5903 19.4751 13.2952 19.3425C13 19.21 13 18.731 13 17.773V15.4284C9.4 15.4284 5.5 17.1427 4 19.9998C4 10.8569 9.33333 8.57124 13 8.57124V6.22665C13 5.26866 13 4.78966 13.2952 4.65711C13.5903 4.52456 13.9484 4.84279 14.6644 5.47924Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>What do I need to rent a car?</p>
                </div>
                <p>
                  You will get the opportunity to try our premium chauffeur
                  service completely free of charge in order for you to create
                  an honest review of our brand. Together we will decide what
                  the partnership will look like, what your content will be, and
                  what we would like to communicate depending on active
                  campaigns.
                </p>
                <div className={style.border}></div>

                <div className={style.WhatDoINeedGreen}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3259 5.47924L6.35358 9.01017C4.78495 10.4045 4.00063 11.1017 4.00063 11.9998C4.00063 12.8979 4.78495 13.5951 6.35358 14.9894L10.3259 18.5204C11.0419 19.1568 11.3999 19.4751 11.6951 19.3425C11.9902 19.21 11.9902 18.731 11.9902 17.773V15.4284C15.5902 15.4284 19.4902 17.1427 20.9902 19.9998C20.9902 10.8569 15.6569 8.57124 11.9902 8.57124V6.22665C11.9902 5.26866 11.9902 4.78966 11.6951 4.65711C11.3999 4.52456 11.0419 4.84279 10.3259 5.47924Z"
                      stroke="#0BC36B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>How much does it cost to rent a car?</p>
                </div>
                <div className={style.border}></div>

                <div className={style.WhatDoINeedGreen}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3259 5.47924L6.35358 9.01017C4.78495 10.4045 4.00063 11.1017 4.00063 11.9998C4.00063 12.8979 4.78495 13.5951 6.35358 14.9894L10.3259 18.5204C11.0419 19.1568 11.3999 19.4751 11.6951 19.3425C11.9902 19.21 11.9902 18.731 11.9902 17.773V15.4284C15.5902 15.4284 19.4902 17.1427 20.9902 19.9998C20.9902 10.8569 15.6569 8.57124 11.9902 8.57124V6.22665C11.9902 5.26866 11.9902 4.78966 11.6951 4.65711C11.3999 4.52456 11.0419 4.84279 10.3259 5.47924Z"
                      stroke="#0BC36B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>Do I need insurance when renting a car?</p>
                </div>
                <div className={style.border}></div>

                <div className={style.WhatDoINeed}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3259 5.47924L6.35358 9.01017C4.78495 10.4045 4.00063 11.1017 4.00063 11.9998C4.00063 12.8979 4.78495 13.5951 6.35358 14.9894L10.3259 18.5204C11.0419 19.1568 11.3999 19.4751 11.6951 19.3425C11.9902 19.21 11.9902 18.731 11.9902 17.773V15.4284C15.5902 15.4284 19.4902 17.1427 20.9902 19.9998C20.9902 10.8569 15.6569 8.57124 11.9902 8.57124V6.22665C11.9902 5.26866 11.9902 4.78966 11.6951 4.65711C11.3999 4.52456 11.0419 4.84279 10.3259 5.47924Z"
                      stroke="#0BC36B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>How much does it cost to rent a car?</p>
                </div>
                <div className={style.border}></div>
              </div>
            </div>

            <div className={style.GeneralQuestion}>
              <h1 style={{ display: "flex", alignItems: "end" }}>
                Reservation Questions
                <svg
                  className={style.hide}
                  width="11"
                  height="10"
                  style={{ marginBottom: "4px" }}
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.28498 9.91176C7.92737 9.91176 10.0695 7.69293 10.0695 4.95588C10.0695 2.21882 7.92737 0 5.28498 0C2.6426 0 0.500488 2.21882 0.500488 4.95588C0.500488 7.69293 2.6426 9.91176 5.28498 9.91176Z"
                    fill="#0BC36B"
                  />
                </svg>
              </h1>
              {/* main  div  */}
              <div className={style.FrequentQuestionTextMain}>
                <div className={style.WhatDoINeedGreen}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6644 5.47924L18.6367 9.01017C20.2053 10.4045 20.9896 11.1017 20.9896 11.9998C20.9896 12.8979 20.2053 13.5951 18.6367 14.9894L14.6644 18.5204C13.9484 19.1568 13.5903 19.4751 13.2952 19.3425C13 19.21 13 18.731 13 17.773V15.4284C9.4 15.4284 5.5 17.1427 4 19.9998C4 10.8569 9.33333 8.57124 13 8.57124V6.22665C13 5.26866 13 4.78966 13.2952 4.65711C13.5903 4.52456 13.9484 4.84279 14.6644 5.47924Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>What do I need to rent a car?</p>
                </div>
                <p>
                  You will get the opportunity to try our premium chauffeur
                  service completely free of charge in order for you to create
                  an honest review of our brand. Together we will decide what
                  the partnership will look like, what your content will be, and
                  what we would like to communicate depending on active
                  campaigns.
                </p>
                <div className={style.border}></div>

                <div className={style.WhatDoINeedGreen}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3259 5.47924L6.35358 9.01017C4.78495 10.4045 4.00063 11.1017 4.00063 11.9998C4.00063 12.8979 4.78495 13.5951 6.35358 14.9894L10.3259 18.5204C11.0419 19.1568 11.3999 19.4751 11.6951 19.3425C11.9902 19.21 11.9902 18.731 11.9902 17.773V15.4284C15.5902 15.4284 19.4902 17.1427 20.9902 19.9998C20.9902 10.8569 15.6569 8.57124 11.9902 8.57124V6.22665C11.9902 5.26866 11.9902 4.78966 11.6951 4.65711C11.3999 4.52456 11.0419 4.84279 10.3259 5.47924Z"
                      stroke="#0BC36B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>How much does it cost to rent a car?</p>
                </div>
                <div className={style.border}></div>

                <div className={style.WhatDoINeedGreen}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3259 5.47924L6.35358 9.01017C4.78495 10.4045 4.00063 11.1017 4.00063 11.9998C4.00063 12.8979 4.78495 13.5951 6.35358 14.9894L10.3259 18.5204C11.0419 19.1568 11.3999 19.4751 11.6951 19.3425C11.9902 19.21 11.9902 18.731 11.9902 17.773V15.4284C15.5902 15.4284 19.4902 17.1427 20.9902 19.9998C20.9902 10.8569 15.6569 8.57124 11.9902 8.57124V6.22665C11.9902 5.26866 11.9902 4.78966 11.6951 4.65711C11.3999 4.52456 11.0419 4.84279 10.3259 5.47924Z"
                      stroke="#0BC36B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>Do I need insurance when renting a car?</p>
                </div>
                <div className={style.border}></div>

                <div className={style.WhatDoINeed}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3259 5.47924L6.35358 9.01017C4.78495 10.4045 4.00063 11.1017 4.00063 11.9998C4.00063 12.8979 4.78495 13.5951 6.35358 14.9894L10.3259 18.5204C11.0419 19.1568 11.3999 19.4751 11.6951 19.3425C11.9902 19.21 11.9902 18.731 11.9902 17.773V15.4284C15.5902 15.4284 19.4902 17.1427 20.9902 19.9998C20.9902 10.8569 15.6569 8.57124 11.9902 8.57124V6.22665C11.9902 5.26866 11.9902 4.78966 11.6951 4.65711C11.3999 4.52456 11.0419 4.84279 10.3259 5.47924Z"
                      stroke="#0BC36B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>How much does it cost to rent a car?</p>
                </div>
                <div className={style.border}></div>
              </div>
            </div>

            <div className={style.GeneralQuestion}>
              <h1 style={{ display: "flex", alignItems: "end" }}>
                Payment Questions
                <svg
                  className={style.hide}
                  width="11"
                  height="10"
                  style={{ marginBottom: "4px" }}
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.28498 9.91176C7.92737 9.91176 10.0695 7.69293 10.0695 4.95588C10.0695 2.21882 7.92737 0 5.28498 0C2.6426 0 0.500488 2.21882 0.500488 4.95588C0.500488 7.69293 2.6426 9.91176 5.28498 9.91176Z"
                    fill="#0BC36B"
                  />
                </svg>
              </h1>
              {/* main  div  */}
              <div className={style.FrequentQuestionTextMain}>
                <div className={style.WhatDoINeedGreen}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6644 5.47924L18.6367 9.01017C20.2053 10.4045 20.9896 11.1017 20.9896 11.9998C20.9896 12.8979 20.2053 13.5951 18.6367 14.9894L14.6644 18.5204C13.9484 19.1568 13.5903 19.4751 13.2952 19.3425C13 19.21 13 18.731 13 17.773V15.4284C9.4 15.4284 5.5 17.1427 4 19.9998C4 10.8569 9.33333 8.57124 13 8.57124V6.22665C13 5.26866 13 4.78966 13.2952 4.65711C13.5903 4.52456 13.9484 4.84279 14.6644 5.47924Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>What do I need to rent a car?</p>
                </div>
                <p>
                  You will get the opportunity to try our premium chauffeur
                  service completely free of charge in order for you to create
                  an honest review of our brand. Together we will decide what
                  the partnership will look like, what your content will be, and
                  what we would like to communicate depending on active
                  campaigns.
                </p>
                <div className={style.border}></div>

                <div className={style.WhatDoINeedGreen}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3259 5.47924L6.35358 9.01017C4.78495 10.4045 4.00063 11.1017 4.00063 11.9998C4.00063 12.8979 4.78495 13.5951 6.35358 14.9894L10.3259 18.5204C11.0419 19.1568 11.3999 19.4751 11.6951 19.3425C11.9902 19.21 11.9902 18.731 11.9902 17.773V15.4284C15.5902 15.4284 19.4902 17.1427 20.9902 19.9998C20.9902 10.8569 15.6569 8.57124 11.9902 8.57124V6.22665C11.9902 5.26866 11.9902 4.78966 11.6951 4.65711C11.3999 4.52456 11.0419 4.84279 10.3259 5.47924Z"
                      stroke="#0BC36B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>How much does it cost to rent a car?</p>
                </div>
                <div className={style.border}></div>

                <div className={style.WhatDoINeedGreen}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3259 5.47924L6.35358 9.01017C4.78495 10.4045 4.00063 11.1017 4.00063 11.9998C4.00063 12.8979 4.78495 13.5951 6.35358 14.9894L10.3259 18.5204C11.0419 19.1568 11.3999 19.4751 11.6951 19.3425C11.9902 19.21 11.9902 18.731 11.9902 17.773V15.4284C15.5902 15.4284 19.4902 17.1427 20.9902 19.9998C20.9902 10.8569 15.6569 8.57124 11.9902 8.57124V6.22665C11.9902 5.26866 11.9902 4.78966 11.6951 4.65711C11.3999 4.52456 11.0419 4.84279 10.3259 5.47924Z"
                      stroke="#0BC36B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>Do I need insurance when renting a car?</p>
                </div>
                <div className={style.border}></div>

                <div className={style.WhatDoINeed}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3259 5.47924L6.35358 9.01017C4.78495 10.4045 4.00063 11.1017 4.00063 11.9998C4.00063 12.8979 4.78495 13.5951 6.35358 14.9894L10.3259 18.5204C11.0419 19.1568 11.3999 19.4751 11.6951 19.3425C11.9902 19.21 11.9902 18.731 11.9902 17.773V15.4284C15.5902 15.4284 19.4902 17.1427 20.9902 19.9998C20.9902 10.8569 15.6569 8.57124 11.9902 8.57124V6.22665C11.9902 5.26866 11.9902 4.78966 11.6951 4.65711C11.3999 4.52456 11.0419 4.84279 10.3259 5.47924Z"
                      stroke="#0BC36B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>How much does it cost to rent a car?</p>
                </div>
                <div className={style.border}></div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className={style.BlogInfo}>
            {/* Follow Us */}

            <div className={style.HelpCenter}>
              <h4>Can’t Find Answer?</h4>
              <h5>
                Submit<span>&nbsp;Your Queries</span>
              </h5>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h6>+91 1234567890</h6>

              <span>support@xactlane.com</span>

              <button>Call Us</button>
            </div>

            {/* Contact from  */}

            <div className={style.ContactFromMain}>
              <form
                action=""
                style={{ width: "100%" }}
                onSubmit={handleSubmit(QueryApi)}
              >
                <div>
                  <h5>Query Type</h5>

                  <input
                    type="text"
                    placeholder="Car Rental"
                    {...register("type", { required: true })}
                  />
                </div>

                <div>
                  <h5>Existing customer?</h5>

                  <select
                    id="titleSelect"
                    // value={selectedTitle}
                    {...register("existingCustomer", { required: true })}
                    // onChange={handleTitleChange}
                    className={style.SelectFeild}
                  >
                    <option style={{ color: "#000" }} value="mr">
                      Yes
                    </option>
                    <option style={{ color: "#000" }} value="mrs">
                      No
                    </option>
                  </select>
                </div>

                <div>
                  <h5>Name</h5>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", { required: true })}
                  />
                </div>

                <div>
                  <h5>Email Address </h5>

                  <input
                    type="text"
                    placeholder="Search here..."
                    {...register("email", { required: true })}
                  />
                </div>

                <div>
                  <h5>Contact Number</h5>

                  <input
                    type="tel"
                    placeholder="+49 1234567890"
                    onKeyPress={handleKeyPress}
                    {...register("contact", { required: true })}
                  />
                </div>

                <div>
                  <h5>Message</h5>

                  <textarea
                    type="text"
                    placeholder="Car Rental"
                    {...register("message", { required: true })}
                  />
                </div>

                <button style={{ marginTop: "20px" }}>Submit</button>
              </form>
            </div>

            {/* Follow Us */}

            <div className={style.RecentPost}>
              <h4>Follow Us</h4>

              <div
                style={{
                  display: "flex",
                  //   flexDirection: "column",
                  gap: "10px",
                  paddingBottom: "10px ",
                }}
              >
                <span>
                  {
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_530_663)">
                        <path
                          d="M12 0C5.37188 0 0 5.37188 0 12C0 17.0859 3.16406 21.4266 7.62656 23.175C7.52344 22.2234 7.425 20.7703 7.66875 19.7344C7.88906 18.7969 9.075 13.7719 9.075 13.7719C9.075 13.7719 8.71406 13.0547 8.71406 11.9906C8.71406 10.3219 9.67969 9.075 10.8844 9.075C11.9062 9.075 12.4031 9.84375 12.4031 10.7672C12.4031 11.7984 11.7469 13.3359 11.4094 14.7609C11.1281 15.9562 12.0094 16.9313 13.1859 16.9313C15.3187 16.9313 16.9594 14.6812 16.9594 11.4375C16.9594 8.56406 14.8969 6.55313 11.9484 6.55313C8.53594 6.55313 6.52969 9.1125 6.52969 11.7609C6.52969 12.7922 6.92812 13.8984 7.425 14.4984C7.52344 14.6156 7.5375 14.7234 7.50937 14.8406C7.42031 15.2203 7.21406 16.0359 7.17656 16.2C7.125 16.4203 7.00313 16.4672 6.77344 16.3594C5.27344 15.6609 4.33594 13.4719 4.33594 11.7094C4.33594 7.92188 7.0875 4.44844 12.2625 4.44844C16.425 4.44844 19.6594 7.41563 19.6594 11.3813C19.6594 15.5156 17.0531 18.8438 13.4344 18.8438C12.2203 18.8438 11.0766 18.2109 10.6828 17.4656C10.6828 17.4656 10.0828 19.7578 9.9375 20.3203C9.66562 21.3609 8.93437 22.6688 8.44687 23.4656C9.57187 23.8125 10.7625 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_530_663">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                </span>
                {/* socail 2 */}
                <span>
                  {
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_530_664)">
                        <path
                          d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_530_664">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                </span>
                {/* socail 3 */}
                <span>
                  {
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_530_665)">
                        <path
                          d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0187 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85937 20.0344 3.12187 20.4516 3.53906C20.8734 3.96094 21.1313 4.35937 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96562 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65312 19.0641C2.48906 18.6422 2.29219 18.0047 2.24062 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78437 2.18438 8.40469 2.24062 7.14375C2.29219 5.97187 2.48906 5.33906 2.65312 4.91719C2.86875 4.35937 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85937 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126562 4.90312 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01562 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90312 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8562C0.9375 20.6484 1.34531 21.3187 2.01562 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3187 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74687 23.9719 8.33906 23.9156 7.05937C23.8594 5.78437 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                          fill="white"
                        />
                        <path
                          d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                          fill="white"
                        />
                        <path
                          d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_530_665">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                </span>{" "}
                {/* socail 4 */}
                <span>
                  {
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_530_666)">
                        <path
                          d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23461 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51564 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71998C2.41463 9.69516 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_530_666">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                </span>{" "}
                {/* socail 5 */}
                <span>
                  {
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_530_667)">
                        <path
                          d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_530_667">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <section className={style.OverviewMain} style={{}}>
        <Row style={{ justifyContent: "center", width: "100%" }}>
          <div className={style.Services2} style={{}}>
            <h1 style={{ display: "flex", alignItems: "end" }}>
              Our Latest Blog
              <svg
                className={style.hide}
                width="11"
                height="10"
                style={{ marginBottom: "4px" }}
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.28498 9.91176C7.92737 9.91176 10.0695 7.69293 10.0695 4.95588C10.0695 2.21882 7.92737 0 5.28498 0C2.6426 0 0.500488 2.21882 0.500488 4.95588C0.500488 7.69293 2.6426 9.91176 5.28498 9.91176Z"
                  fill="#0BC36B"
                />
              </svg>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/*  */}
        </Row>
        <Row>
          <Col>
            <div className={style.OverServices}>
              <img src={Blog1} alt="" />
              <div className={style.OverServicesTextMain}>
                <h5>A COMPREHENSIVE GUIDE FOR CAR HIRE SERVICES IN GURGAON </h5>

                <div className={style.BlogDetailsMain}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8.00065"
                          cy="4.50016"
                          r="2.66667"
                          stroke="#0BC36B"
                        />
                        <path
                          d="M13.3327 12.1665C13.3327 13.8234 13.3327 15.1665 7.99935 15.1665C2.66602 15.1665 2.66602 13.8234 2.66602 12.1665C2.66602 10.5096 5.05383 9.1665 7.99935 9.1665C10.9449 9.1665 13.3327 10.5096 13.3327 12.1665Z"
                          stroke="#0BC36B"
                        />
                      </svg>
                      <p style={{ margin: "0px" }}>James Colies</p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33398 8.49984C1.33398 5.98568 1.33398 4.7286 2.11503 3.94755C2.89608 3.1665 4.15316 3.1665 6.66732 3.1665H9.33398C11.8481 3.1665 13.1052 3.1665 13.8863 3.94755C14.6673 4.7286 14.6673 5.98568 14.6673 8.49984V9.83317C14.6673 12.3473 14.6673 13.6044 13.8863 14.3855C13.1052 15.1665 11.8481 15.1665 9.33398 15.1665H6.66732C4.15316 15.1665 2.89608 15.1665 2.11503 14.3855C1.33398 13.6044 1.33398 12.3473 1.33398 9.83317V8.49984Z"
                          stroke="#0BC36B"
                        />
                        <path
                          d="M4.66602 3.1665V2.1665"
                          stroke="#0BC36B"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.334 3.1665V2.1665"
                          stroke="#0BC36B"
                          stroke-linecap="round"
                        />
                        <path
                          d="M1.66602 6.5H14.3327"
                          stroke="#0BC36B"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.9993 11.8333C11.9993 12.2015 11.7009 12.5 11.3327 12.5C10.9645 12.5 10.666 12.2015 10.666 11.8333C10.666 11.4651 10.9645 11.1667 11.3327 11.1667C11.7009 11.1667 11.9993 11.4651 11.9993 11.8333Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M11.9993 9.16667C11.9993 9.53486 11.7009 9.83333 11.3327 9.83333C10.9645 9.83333 10.666 9.53486 10.666 9.16667C10.666 8.79848 10.9645 8.5 11.3327 8.5C11.7009 8.5 11.9993 8.79848 11.9993 9.16667Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M8.66732 11.8333C8.66732 12.2015 8.36884 12.5 8.00065 12.5C7.63246 12.5 7.33398 12.2015 7.33398 11.8333C7.33398 11.4651 7.63246 11.1667 8.00065 11.1667C8.36884 11.1667 8.66732 11.4651 8.66732 11.8333Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M8.66732 9.16667C8.66732 9.53486 8.36884 9.83333 8.00065 9.83333C7.63246 9.83333 7.33398 9.53486 7.33398 9.16667C7.33398 8.79848 7.63246 8.5 8.00065 8.5C8.36884 8.5 8.66732 8.79848 8.66732 9.16667Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M5.33333 11.8333C5.33333 12.2015 5.03486 12.5 4.66667 12.5C4.29848 12.5 4 12.2015 4 11.8333C4 11.4651 4.29848 11.1667 4.66667 11.1667C5.03486 11.1667 5.33333 11.4651 5.33333 11.8333Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M5.33333 9.16667C5.33333 9.53486 5.03486 9.83333 4.66667 9.83333C4.29848 9.83333 4 9.53486 4 9.16667C4 8.79848 4.29848 8.5 4.66667 8.5C5.03486 8.5 5.33333 8.79848 5.33333 9.16667Z"
                          fill="#0BC36B"
                        />
                      </svg>
                      <p style={{ margin: "0px" }}>17 April 2023</p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.72313 14.7586L9.15341 15.0133L8.72313 14.7586ZM9.08453 14.148L8.65426 13.8934L9.08453 14.148ZM6.91284 14.148L6.48256 14.4027V14.4027L6.91284 14.148ZM7.27423 14.7586L7.70451 14.5039V14.5039L7.27423 14.7586ZM1.58577 11.1091L2.04771 10.9178H2.04771L1.58577 11.1091ZM5.19175 13.1611L5.18314 13.6611L5.19175 13.1611ZM3.38975 12.9131L3.19841 13.375L3.19841 13.375L3.38975 12.9131ZM14.4116 11.1091L14.8736 11.3004V11.3004L14.4116 11.1091ZM10.8056 13.1611L10.797 12.6612L10.8056 13.1611ZM12.6076 12.9131L12.799 13.375V13.375L12.6076 12.9131ZM13.0737 2.3247L12.8124 2.75102L13.0737 2.3247ZM14.1742 3.42517L14.6005 3.16392L14.6005 3.16392L14.1742 3.42517ZM2.9237 2.3247L2.66245 1.89838V1.89838L2.9237 2.3247ZM1.82323 3.42517L1.39691 3.16392H1.39691L1.82323 3.42517ZM6.26723 13.3067L6.51861 12.8745L6.51861 12.8745L6.26723 13.3067ZM9.15341 15.0133L9.51481 14.4027L8.65426 13.8934L8.29286 14.5039L9.15341 15.0133ZM6.48256 14.4027L6.84396 15.0133L7.70451 14.5039L7.34311 13.8934L6.48256 14.4027ZM8.29286 14.5039C8.16435 14.721 7.83302 14.721 7.70451 14.5039L6.84396 15.0133C7.35968 15.8846 8.63769 15.8846 9.15341 15.0133L8.29286 14.5039ZM6.9987 2.3335H8.9987V1.3335H6.9987V2.3335ZM14.1654 7.50016V8.16683H15.1654V7.50016H14.1654ZM1.83203 8.16683V7.50016H0.832031V8.16683H1.83203ZM0.832031 8.16683C0.832031 8.93656 0.83176 9.53889 0.864908 10.0247C0.898362 10.515 0.967517 10.9231 1.12383 11.3004L2.04771 10.9178C1.95028 10.6826 1.89257 10.396 1.86259 9.95664C1.8323 9.51275 1.83203 8.95024 1.83203 8.16683H0.832031ZM5.20036 12.6612C4.36341 12.6468 3.92485 12.5935 3.58109 12.4512L3.19841 13.375C3.73506 13.5973 4.34628 13.6466 5.18314 13.6611L5.20036 12.6612ZM1.12383 11.3004C1.51289 12.2397 2.25914 12.986 3.19841 13.375L3.5811 12.4512C2.88685 12.1636 2.33527 11.612 2.04771 10.9178L1.12383 11.3004ZM14.1654 8.16683C14.1654 8.95024 14.1651 9.51275 14.1348 9.95664C14.1048 10.396 14.0471 10.6826 13.9497 10.9178L14.8736 11.3004C15.0299 10.9231 15.099 10.515 15.1325 10.0247C15.1656 9.53889 15.1654 8.93656 15.1654 8.16683H14.1654ZM10.8142 13.6611C11.6511 13.6466 12.2623 13.5973 12.799 13.375L12.4163 12.4512C12.0725 12.5935 11.634 12.6468 10.797 12.6612L10.8142 13.6611ZM13.9497 10.9178C13.6621 11.612 13.1105 12.1636 12.4163 12.4512L12.799 13.375C13.7383 12.986 14.4845 12.2397 14.8736 11.3004L13.9497 10.9178ZM8.9987 2.3335C10.0995 2.3335 10.89 2.33402 11.5066 2.39265C12.1158 2.45057 12.5034 2.56165 12.8124 2.75102L13.3349 1.89838C12.8424 1.59654 12.2837 1.46202 11.6013 1.39714C10.9264 1.33297 10.0802 1.3335 8.9987 1.3335V2.3335ZM15.1654 7.50016C15.1654 6.4187 15.1659 5.57249 15.1017 4.89757C15.0368 4.2152 14.9023 3.65647 14.6005 3.16392L13.7478 3.68642C13.9372 3.99543 14.0483 4.38305 14.1062 4.99222C14.1648 5.60883 14.1654 6.39934 14.1654 7.50016H15.1654ZM12.8124 2.75102C13.1937 2.98464 13.5142 3.30518 13.7478 3.68642L14.6005 3.16392C14.2844 2.64812 13.8507 2.21446 13.3349 1.89838L12.8124 2.75102ZM6.9987 1.3335C5.91724 1.3335 5.07103 1.33297 4.3961 1.39714C3.71374 1.46202 3.155 1.59654 2.66245 1.89838L3.18495 2.75102C3.49397 2.56165 3.88159 2.45057 4.49076 2.39265C5.10737 2.33402 5.89787 2.3335 6.9987 2.3335V1.3335ZM1.83203 7.50016C1.83203 6.39934 1.83256 5.60883 1.89119 4.99222C1.94911 4.38305 2.06018 3.99543 2.24955 3.68642L1.39691 3.16392C1.09508 3.65647 0.960556 4.2152 0.895676 4.89757C0.831504 5.57249 0.832031 6.4187 0.832031 7.50016H1.83203ZM2.66245 1.89838C2.14666 2.21446 1.71299 2.64812 1.39691 3.16392L2.24955 3.68642C2.48318 3.30518 2.80371 2.98464 3.18495 2.75102L2.66245 1.89838ZM7.34311 13.8934C7.20776 13.6647 7.08894 13.4629 6.9734 13.3044C6.85172 13.1374 6.71213 12.9871 6.51861 12.8745L6.01584 13.7389C6.04745 13.7573 6.09051 13.7908 6.16527 13.8934C6.24617 14.0044 6.33759 14.1578 6.48256 14.4027L7.34311 13.8934ZM5.18314 13.6611C5.47587 13.6661 5.66128 13.6698 5.80262 13.6854C5.93469 13.7001 5.98589 13.7215 6.01585 13.7389L6.51861 12.8745C6.32343 12.761 6.12034 12.7145 5.91268 12.6915C5.71429 12.6696 5.47453 12.6659 5.20036 12.6612L5.18314 13.6611ZM9.51481 14.4027C9.65977 14.1578 9.75119 14.0044 9.8321 13.8934C9.90686 13.7908 9.94992 13.7573 9.98152 13.7389L9.47876 12.8745C9.28523 12.9871 9.14565 13.1374 9.02396 13.3044C8.90843 13.4629 8.78961 13.6647 8.65426 13.8934L9.51481 14.4027ZM10.797 12.6612C10.5228 12.6659 10.2831 12.6696 10.0847 12.6915C9.87703 12.7145 9.67393 12.761 9.47876 12.8745L9.98152 13.7389C10.0115 13.7215 10.0627 13.7001 10.1947 13.6854C10.3361 13.6698 10.5215 13.6661 10.8142 13.6611L10.797 12.6612Z"
                        fill="#0BC36B"
                      />
                    </svg>
                    <p style={{ margin: "0px" }}>No Comments</p>
                  </div>
                </div>
                <button>Discover</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className={style.OverServices}>
              <img src={Blog2} alt="" />
              <div className={style.OverServicesTextMain}>
                <h5>A COMPREHENSIVE GUIDE FOR CAR HIRE SERVICES IN GURGAON </h5>

                <div className={style.BlogDetailsMain}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8.00065"
                          cy="4.50016"
                          r="2.66667"
                          stroke="#0BC36B"
                        />
                        <path
                          d="M13.3327 12.1665C13.3327 13.8234 13.3327 15.1665 7.99935 15.1665C2.66602 15.1665 2.66602 13.8234 2.66602 12.1665C2.66602 10.5096 5.05383 9.1665 7.99935 9.1665C10.9449 9.1665 13.3327 10.5096 13.3327 12.1665Z"
                          stroke="#0BC36B"
                        />
                      </svg>
                      <p style={{ margin: "0px" }}>James Colies</p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33398 8.49984C1.33398 5.98568 1.33398 4.7286 2.11503 3.94755C2.89608 3.1665 4.15316 3.1665 6.66732 3.1665H9.33398C11.8481 3.1665 13.1052 3.1665 13.8863 3.94755C14.6673 4.7286 14.6673 5.98568 14.6673 8.49984V9.83317C14.6673 12.3473 14.6673 13.6044 13.8863 14.3855C13.1052 15.1665 11.8481 15.1665 9.33398 15.1665H6.66732C4.15316 15.1665 2.89608 15.1665 2.11503 14.3855C1.33398 13.6044 1.33398 12.3473 1.33398 9.83317V8.49984Z"
                          stroke="#0BC36B"
                        />
                        <path
                          d="M4.66602 3.1665V2.1665"
                          stroke="#0BC36B"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.334 3.1665V2.1665"
                          stroke="#0BC36B"
                          stroke-linecap="round"
                        />
                        <path
                          d="M1.66602 6.5H14.3327"
                          stroke="#0BC36B"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.9993 11.8333C11.9993 12.2015 11.7009 12.5 11.3327 12.5C10.9645 12.5 10.666 12.2015 10.666 11.8333C10.666 11.4651 10.9645 11.1667 11.3327 11.1667C11.7009 11.1667 11.9993 11.4651 11.9993 11.8333Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M11.9993 9.16667C11.9993 9.53486 11.7009 9.83333 11.3327 9.83333C10.9645 9.83333 10.666 9.53486 10.666 9.16667C10.666 8.79848 10.9645 8.5 11.3327 8.5C11.7009 8.5 11.9993 8.79848 11.9993 9.16667Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M8.66732 11.8333C8.66732 12.2015 8.36884 12.5 8.00065 12.5C7.63246 12.5 7.33398 12.2015 7.33398 11.8333C7.33398 11.4651 7.63246 11.1667 8.00065 11.1667C8.36884 11.1667 8.66732 11.4651 8.66732 11.8333Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M8.66732 9.16667C8.66732 9.53486 8.36884 9.83333 8.00065 9.83333C7.63246 9.83333 7.33398 9.53486 7.33398 9.16667C7.33398 8.79848 7.63246 8.5 8.00065 8.5C8.36884 8.5 8.66732 8.79848 8.66732 9.16667Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M5.33333 11.8333C5.33333 12.2015 5.03486 12.5 4.66667 12.5C4.29848 12.5 4 12.2015 4 11.8333C4 11.4651 4.29848 11.1667 4.66667 11.1667C5.03486 11.1667 5.33333 11.4651 5.33333 11.8333Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M5.33333 9.16667C5.33333 9.53486 5.03486 9.83333 4.66667 9.83333C4.29848 9.83333 4 9.53486 4 9.16667C4 8.79848 4.29848 8.5 4.66667 8.5C5.03486 8.5 5.33333 8.79848 5.33333 9.16667Z"
                          fill="#0BC36B"
                        />
                      </svg>
                      <p style={{ margin: "0px" }}>17 April 2023</p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.72313 14.7586L9.15341 15.0133L8.72313 14.7586ZM9.08453 14.148L8.65426 13.8934L9.08453 14.148ZM6.91284 14.148L6.48256 14.4027V14.4027L6.91284 14.148ZM7.27423 14.7586L7.70451 14.5039V14.5039L7.27423 14.7586ZM1.58577 11.1091L2.04771 10.9178H2.04771L1.58577 11.1091ZM5.19175 13.1611L5.18314 13.6611L5.19175 13.1611ZM3.38975 12.9131L3.19841 13.375L3.19841 13.375L3.38975 12.9131ZM14.4116 11.1091L14.8736 11.3004V11.3004L14.4116 11.1091ZM10.8056 13.1611L10.797 12.6612L10.8056 13.1611ZM12.6076 12.9131L12.799 13.375V13.375L12.6076 12.9131ZM13.0737 2.3247L12.8124 2.75102L13.0737 2.3247ZM14.1742 3.42517L14.6005 3.16392L14.6005 3.16392L14.1742 3.42517ZM2.9237 2.3247L2.66245 1.89838V1.89838L2.9237 2.3247ZM1.82323 3.42517L1.39691 3.16392H1.39691L1.82323 3.42517ZM6.26723 13.3067L6.51861 12.8745L6.51861 12.8745L6.26723 13.3067ZM9.15341 15.0133L9.51481 14.4027L8.65426 13.8934L8.29286 14.5039L9.15341 15.0133ZM6.48256 14.4027L6.84396 15.0133L7.70451 14.5039L7.34311 13.8934L6.48256 14.4027ZM8.29286 14.5039C8.16435 14.721 7.83302 14.721 7.70451 14.5039L6.84396 15.0133C7.35968 15.8846 8.63769 15.8846 9.15341 15.0133L8.29286 14.5039ZM6.9987 2.3335H8.9987V1.3335H6.9987V2.3335ZM14.1654 7.50016V8.16683H15.1654V7.50016H14.1654ZM1.83203 8.16683V7.50016H0.832031V8.16683H1.83203ZM0.832031 8.16683C0.832031 8.93656 0.83176 9.53889 0.864908 10.0247C0.898362 10.515 0.967517 10.9231 1.12383 11.3004L2.04771 10.9178C1.95028 10.6826 1.89257 10.396 1.86259 9.95664C1.8323 9.51275 1.83203 8.95024 1.83203 8.16683H0.832031ZM5.20036 12.6612C4.36341 12.6468 3.92485 12.5935 3.58109 12.4512L3.19841 13.375C3.73506 13.5973 4.34628 13.6466 5.18314 13.6611L5.20036 12.6612ZM1.12383 11.3004C1.51289 12.2397 2.25914 12.986 3.19841 13.375L3.5811 12.4512C2.88685 12.1636 2.33527 11.612 2.04771 10.9178L1.12383 11.3004ZM14.1654 8.16683C14.1654 8.95024 14.1651 9.51275 14.1348 9.95664C14.1048 10.396 14.0471 10.6826 13.9497 10.9178L14.8736 11.3004C15.0299 10.9231 15.099 10.515 15.1325 10.0247C15.1656 9.53889 15.1654 8.93656 15.1654 8.16683H14.1654ZM10.8142 13.6611C11.6511 13.6466 12.2623 13.5973 12.799 13.375L12.4163 12.4512C12.0725 12.5935 11.634 12.6468 10.797 12.6612L10.8142 13.6611ZM13.9497 10.9178C13.6621 11.612 13.1105 12.1636 12.4163 12.4512L12.799 13.375C13.7383 12.986 14.4845 12.2397 14.8736 11.3004L13.9497 10.9178ZM8.9987 2.3335C10.0995 2.3335 10.89 2.33402 11.5066 2.39265C12.1158 2.45057 12.5034 2.56165 12.8124 2.75102L13.3349 1.89838C12.8424 1.59654 12.2837 1.46202 11.6013 1.39714C10.9264 1.33297 10.0802 1.3335 8.9987 1.3335V2.3335ZM15.1654 7.50016C15.1654 6.4187 15.1659 5.57249 15.1017 4.89757C15.0368 4.2152 14.9023 3.65647 14.6005 3.16392L13.7478 3.68642C13.9372 3.99543 14.0483 4.38305 14.1062 4.99222C14.1648 5.60883 14.1654 6.39934 14.1654 7.50016H15.1654ZM12.8124 2.75102C13.1937 2.98464 13.5142 3.30518 13.7478 3.68642L14.6005 3.16392C14.2844 2.64812 13.8507 2.21446 13.3349 1.89838L12.8124 2.75102ZM6.9987 1.3335C5.91724 1.3335 5.07103 1.33297 4.3961 1.39714C3.71374 1.46202 3.155 1.59654 2.66245 1.89838L3.18495 2.75102C3.49397 2.56165 3.88159 2.45057 4.49076 2.39265C5.10737 2.33402 5.89787 2.3335 6.9987 2.3335V1.3335ZM1.83203 7.50016C1.83203 6.39934 1.83256 5.60883 1.89119 4.99222C1.94911 4.38305 2.06018 3.99543 2.24955 3.68642L1.39691 3.16392C1.09508 3.65647 0.960556 4.2152 0.895676 4.89757C0.831504 5.57249 0.832031 6.4187 0.832031 7.50016H1.83203ZM2.66245 1.89838C2.14666 2.21446 1.71299 2.64812 1.39691 3.16392L2.24955 3.68642C2.48318 3.30518 2.80371 2.98464 3.18495 2.75102L2.66245 1.89838ZM7.34311 13.8934C7.20776 13.6647 7.08894 13.4629 6.9734 13.3044C6.85172 13.1374 6.71213 12.9871 6.51861 12.8745L6.01584 13.7389C6.04745 13.7573 6.09051 13.7908 6.16527 13.8934C6.24617 14.0044 6.33759 14.1578 6.48256 14.4027L7.34311 13.8934ZM5.18314 13.6611C5.47587 13.6661 5.66128 13.6698 5.80262 13.6854C5.93469 13.7001 5.98589 13.7215 6.01585 13.7389L6.51861 12.8745C6.32343 12.761 6.12034 12.7145 5.91268 12.6915C5.71429 12.6696 5.47453 12.6659 5.20036 12.6612L5.18314 13.6611ZM9.51481 14.4027C9.65977 14.1578 9.75119 14.0044 9.8321 13.8934C9.90686 13.7908 9.94992 13.7573 9.98152 13.7389L9.47876 12.8745C9.28523 12.9871 9.14565 13.1374 9.02396 13.3044C8.90843 13.4629 8.78961 13.6647 8.65426 13.8934L9.51481 14.4027ZM10.797 12.6612C10.5228 12.6659 10.2831 12.6696 10.0847 12.6915C9.87703 12.7145 9.67393 12.761 9.47876 12.8745L9.98152 13.7389C10.0115 13.7215 10.0627 13.7001 10.1947 13.6854C10.3361 13.6698 10.5215 13.6661 10.8142 13.6611L10.797 12.6612Z"
                        fill="#0BC36B"
                      />
                    </svg>
                    <p style={{ margin: "0px" }}>No Comments</p>
                  </div>
                </div>
                <button>Discover</button>
              </div>
            </div>
          </Col>

          <Col>
            <div className={style.OverServices}>
              <img src={Blog4} alt="" />
              <div className={style.OverServicesTextMain}>
                <h5>A COMPREHENSIVE GUIDE FOR CAR HIRE SERVICES IN GURGAON </h5>

                <div className={style.BlogDetailsMain}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8.00065"
                          cy="4.50016"
                          r="2.66667"
                          stroke="#0BC36B"
                        />
                        <path
                          d="M13.3327 12.1665C13.3327 13.8234 13.3327 15.1665 7.99935 15.1665C2.66602 15.1665 2.66602 13.8234 2.66602 12.1665C2.66602 10.5096 5.05383 9.1665 7.99935 9.1665C10.9449 9.1665 13.3327 10.5096 13.3327 12.1665Z"
                          stroke="#0BC36B"
                        />
                      </svg>
                      <p style={{ margin: "0px" }}>James Colies</p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33398 8.49984C1.33398 5.98568 1.33398 4.7286 2.11503 3.94755C2.89608 3.1665 4.15316 3.1665 6.66732 3.1665H9.33398C11.8481 3.1665 13.1052 3.1665 13.8863 3.94755C14.6673 4.7286 14.6673 5.98568 14.6673 8.49984V9.83317C14.6673 12.3473 14.6673 13.6044 13.8863 14.3855C13.1052 15.1665 11.8481 15.1665 9.33398 15.1665H6.66732C4.15316 15.1665 2.89608 15.1665 2.11503 14.3855C1.33398 13.6044 1.33398 12.3473 1.33398 9.83317V8.49984Z"
                          stroke="#0BC36B"
                        />
                        <path
                          d="M4.66602 3.1665V2.1665"
                          stroke="#0BC36B"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.334 3.1665V2.1665"
                          stroke="#0BC36B"
                          stroke-linecap="round"
                        />
                        <path
                          d="M1.66602 6.5H14.3327"
                          stroke="#0BC36B"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.9993 11.8333C11.9993 12.2015 11.7009 12.5 11.3327 12.5C10.9645 12.5 10.666 12.2015 10.666 11.8333C10.666 11.4651 10.9645 11.1667 11.3327 11.1667C11.7009 11.1667 11.9993 11.4651 11.9993 11.8333Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M11.9993 9.16667C11.9993 9.53486 11.7009 9.83333 11.3327 9.83333C10.9645 9.83333 10.666 9.53486 10.666 9.16667C10.666 8.79848 10.9645 8.5 11.3327 8.5C11.7009 8.5 11.9993 8.79848 11.9993 9.16667Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M8.66732 11.8333C8.66732 12.2015 8.36884 12.5 8.00065 12.5C7.63246 12.5 7.33398 12.2015 7.33398 11.8333C7.33398 11.4651 7.63246 11.1667 8.00065 11.1667C8.36884 11.1667 8.66732 11.4651 8.66732 11.8333Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M8.66732 9.16667C8.66732 9.53486 8.36884 9.83333 8.00065 9.83333C7.63246 9.83333 7.33398 9.53486 7.33398 9.16667C7.33398 8.79848 7.63246 8.5 8.00065 8.5C8.36884 8.5 8.66732 8.79848 8.66732 9.16667Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M5.33333 11.8333C5.33333 12.2015 5.03486 12.5 4.66667 12.5C4.29848 12.5 4 12.2015 4 11.8333C4 11.4651 4.29848 11.1667 4.66667 11.1667C5.03486 11.1667 5.33333 11.4651 5.33333 11.8333Z"
                          fill="#0BC36B"
                        />
                        <path
                          d="M5.33333 9.16667C5.33333 9.53486 5.03486 9.83333 4.66667 9.83333C4.29848 9.83333 4 9.53486 4 9.16667C4 8.79848 4.29848 8.5 4.66667 8.5C5.03486 8.5 5.33333 8.79848 5.33333 9.16667Z"
                          fill="#0BC36B"
                        />
                      </svg>
                      <p style={{ margin: "0px" }}>17 April 2023</p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.72313 14.7586L9.15341 15.0133L8.72313 14.7586ZM9.08453 14.148L8.65426 13.8934L9.08453 14.148ZM6.91284 14.148L6.48256 14.4027V14.4027L6.91284 14.148ZM7.27423 14.7586L7.70451 14.5039V14.5039L7.27423 14.7586ZM1.58577 11.1091L2.04771 10.9178H2.04771L1.58577 11.1091ZM5.19175 13.1611L5.18314 13.6611L5.19175 13.1611ZM3.38975 12.9131L3.19841 13.375L3.19841 13.375L3.38975 12.9131ZM14.4116 11.1091L14.8736 11.3004V11.3004L14.4116 11.1091ZM10.8056 13.1611L10.797 12.6612L10.8056 13.1611ZM12.6076 12.9131L12.799 13.375V13.375L12.6076 12.9131ZM13.0737 2.3247L12.8124 2.75102L13.0737 2.3247ZM14.1742 3.42517L14.6005 3.16392L14.6005 3.16392L14.1742 3.42517ZM2.9237 2.3247L2.66245 1.89838V1.89838L2.9237 2.3247ZM1.82323 3.42517L1.39691 3.16392H1.39691L1.82323 3.42517ZM6.26723 13.3067L6.51861 12.8745L6.51861 12.8745L6.26723 13.3067ZM9.15341 15.0133L9.51481 14.4027L8.65426 13.8934L8.29286 14.5039L9.15341 15.0133ZM6.48256 14.4027L6.84396 15.0133L7.70451 14.5039L7.34311 13.8934L6.48256 14.4027ZM8.29286 14.5039C8.16435 14.721 7.83302 14.721 7.70451 14.5039L6.84396 15.0133C7.35968 15.8846 8.63769 15.8846 9.15341 15.0133L8.29286 14.5039ZM6.9987 2.3335H8.9987V1.3335H6.9987V2.3335ZM14.1654 7.50016V8.16683H15.1654V7.50016H14.1654ZM1.83203 8.16683V7.50016H0.832031V8.16683H1.83203ZM0.832031 8.16683C0.832031 8.93656 0.83176 9.53889 0.864908 10.0247C0.898362 10.515 0.967517 10.9231 1.12383 11.3004L2.04771 10.9178C1.95028 10.6826 1.89257 10.396 1.86259 9.95664C1.8323 9.51275 1.83203 8.95024 1.83203 8.16683H0.832031ZM5.20036 12.6612C4.36341 12.6468 3.92485 12.5935 3.58109 12.4512L3.19841 13.375C3.73506 13.5973 4.34628 13.6466 5.18314 13.6611L5.20036 12.6612ZM1.12383 11.3004C1.51289 12.2397 2.25914 12.986 3.19841 13.375L3.5811 12.4512C2.88685 12.1636 2.33527 11.612 2.04771 10.9178L1.12383 11.3004ZM14.1654 8.16683C14.1654 8.95024 14.1651 9.51275 14.1348 9.95664C14.1048 10.396 14.0471 10.6826 13.9497 10.9178L14.8736 11.3004C15.0299 10.9231 15.099 10.515 15.1325 10.0247C15.1656 9.53889 15.1654 8.93656 15.1654 8.16683H14.1654ZM10.8142 13.6611C11.6511 13.6466 12.2623 13.5973 12.799 13.375L12.4163 12.4512C12.0725 12.5935 11.634 12.6468 10.797 12.6612L10.8142 13.6611ZM13.9497 10.9178C13.6621 11.612 13.1105 12.1636 12.4163 12.4512L12.799 13.375C13.7383 12.986 14.4845 12.2397 14.8736 11.3004L13.9497 10.9178ZM8.9987 2.3335C10.0995 2.3335 10.89 2.33402 11.5066 2.39265C12.1158 2.45057 12.5034 2.56165 12.8124 2.75102L13.3349 1.89838C12.8424 1.59654 12.2837 1.46202 11.6013 1.39714C10.9264 1.33297 10.0802 1.3335 8.9987 1.3335V2.3335ZM15.1654 7.50016C15.1654 6.4187 15.1659 5.57249 15.1017 4.89757C15.0368 4.2152 14.9023 3.65647 14.6005 3.16392L13.7478 3.68642C13.9372 3.99543 14.0483 4.38305 14.1062 4.99222C14.1648 5.60883 14.1654 6.39934 14.1654 7.50016H15.1654ZM12.8124 2.75102C13.1937 2.98464 13.5142 3.30518 13.7478 3.68642L14.6005 3.16392C14.2844 2.64812 13.8507 2.21446 13.3349 1.89838L12.8124 2.75102ZM6.9987 1.3335C5.91724 1.3335 5.07103 1.33297 4.3961 1.39714C3.71374 1.46202 3.155 1.59654 2.66245 1.89838L3.18495 2.75102C3.49397 2.56165 3.88159 2.45057 4.49076 2.39265C5.10737 2.33402 5.89787 2.3335 6.9987 2.3335V1.3335ZM1.83203 7.50016C1.83203 6.39934 1.83256 5.60883 1.89119 4.99222C1.94911 4.38305 2.06018 3.99543 2.24955 3.68642L1.39691 3.16392C1.09508 3.65647 0.960556 4.2152 0.895676 4.89757C0.831504 5.57249 0.832031 6.4187 0.832031 7.50016H1.83203ZM2.66245 1.89838C2.14666 2.21446 1.71299 2.64812 1.39691 3.16392L2.24955 3.68642C2.48318 3.30518 2.80371 2.98464 3.18495 2.75102L2.66245 1.89838ZM7.34311 13.8934C7.20776 13.6647 7.08894 13.4629 6.9734 13.3044C6.85172 13.1374 6.71213 12.9871 6.51861 12.8745L6.01584 13.7389C6.04745 13.7573 6.09051 13.7908 6.16527 13.8934C6.24617 14.0044 6.33759 14.1578 6.48256 14.4027L7.34311 13.8934ZM5.18314 13.6611C5.47587 13.6661 5.66128 13.6698 5.80262 13.6854C5.93469 13.7001 5.98589 13.7215 6.01585 13.7389L6.51861 12.8745C6.32343 12.761 6.12034 12.7145 5.91268 12.6915C5.71429 12.6696 5.47453 12.6659 5.20036 12.6612L5.18314 13.6611ZM9.51481 14.4027C9.65977 14.1578 9.75119 14.0044 9.8321 13.8934C9.90686 13.7908 9.94992 13.7573 9.98152 13.7389L9.47876 12.8745C9.28523 12.9871 9.14565 13.1374 9.02396 13.3044C8.90843 13.4629 8.78961 13.6647 8.65426 13.8934L9.51481 14.4027ZM10.797 12.6612C10.5228 12.6659 10.2831 12.6696 10.0847 12.6915C9.87703 12.7145 9.67393 12.761 9.47876 12.8745L9.98152 13.7389C10.0115 13.7215 10.0627 13.7001 10.1947 13.6854C10.3361 13.6698 10.5215 13.6661 10.8142 13.6611L10.797 12.6612Z"
                        fill="#0BC36B"
                      />
                    </svg>
                    <p style={{ margin: "0px" }}>No Comments</p>
                  </div>
                </div>
                <button>Discover</button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default FrequentQuestion;
