// Steps.js

import React, { useState } from "react";
import "./Steps.css";

const YourComponent = ({ setActiveStep, activeStep }) => {
  const handleProcessStepClick = (stepClass) => {
    setActiveStep(stepClass);
  };

  const data = [
    { num: 1, type: "Service Class", path: "services" },
    { num: 2, type: "Log in" },
    { num: 3, type: "Pickup Info" },
    { num: 4, type: "Checkout" },
    { num: 5, type: "Payment" },
  ];

  return (
    <div className={`process-wrap ${activeStep} process-width`}>
      <div className="process-main">
        {data.map((step) => (
          <div className="col-3" key={`step-${step.num}`} style={{}}>
            <div className="process-step-cont">
              <span className="process-label"> {step.type}</span>
              <div
                className={`process-step step-${step.num}`}
                // onClick={() => handleProcessStepClick(`active-step${step.num}`)}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
