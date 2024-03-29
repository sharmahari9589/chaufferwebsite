import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CheckForCarDetails = () => {
  const navigate = useNavigate;
  useEffect(() => {
    console.log("check outter");
    if (
      !localStorage.getItem("DistanceCarInfo") ||
      !localStorage.getItem("DistanceCarExtraInfo") ||
      !localStorage.getItem("TimeCarInfo") ||
      !localStorage.getItem("TimeCarExtraInfo")
    ) {
      console.log("check inner");
      navigate("/");
    } else {
      return;
    }
  }, []); // Ensure this effect runs only once on mount

  // Return null as there's no UI component to render
};
