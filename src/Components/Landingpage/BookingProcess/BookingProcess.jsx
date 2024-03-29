import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import YourComponent from "./Steps/Steps";
import { Outlet } from "react-router-dom";
import { BookingProcessContext } from "../BookingProcessContext";
import style from "./BookingProcess.module.css";

const BookingProcess = () => {
  // const [activeStep, setActiveStep] = useState("active-step1");

  const { handleSteps, activeStep, handleWhiteHeader } = useContext(
    BookingProcessContext
  );

  useEffect(() => {
    handleWhiteHeader(false);
    return () => {
      handleWhiteHeader(true);
    };
  }, []);
  return (
    <Container className={style.BookingProcessMain}>
      <div>
        <YourComponent activeStep={activeStep} setActiveStep={handleSteps} />
      </div>
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default BookingProcess;
