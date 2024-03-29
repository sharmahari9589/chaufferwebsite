import { createContext, useState } from "react";
const BookingProcessContext = createContext();
const BookingProcessProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState("active-step1");
  const [WhiteHeader, setWhiteHeader] = useState(true);
  const [visibleNotificationDot, setVisibleNotificationDot] = useState(false);

  const handleSteps = (step) => {
    setActiveStep(step);
  };
  const handleWhiteHeader = (res) => {
    setWhiteHeader(res);
  };

  const handleNotificationDot = (res) => {
    setVisibleNotificationDot(res);
  };

  return (
    <BookingProcessContext.Provider
      value={{
        activeStep,
        handleSteps,
        handleWhiteHeader,
        WhiteHeader,
        handleNotificationDot,
        visibleNotificationDot,
      }}
    >
      {children}
    </BookingProcessContext.Provider>
  );
};

export { BookingProcessProvider, BookingProcessContext };
