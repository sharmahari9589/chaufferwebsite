import React, { useContext, useEffect, useState } from "react";
import { BookingProcessContext } from "../../../BookingProcessContext";
import { useNavigate } from "react-router-dom";
import style from "./Checkout.module.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useForm } from "react-hook-form";
const bookUrl = `${BaseUrl}/get-book`;
const checkOutUrl = `${BaseUrl}/checkout`;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BaseUrl } from "../../../../../Env";
const CheckOut = () => {
  const { handleSteps } = useContext(BookingProcessContext);
  const [selectedTitle, setSelectedTitle] = useState("USD");
  const [amount, setAmount] = useState({});
  const [data, setData] = useState({});
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let token;

  token = Cookies.get("token");

  useEffect(() => {
    handleSteps("active-step4");

    if (
      !localStorage.getItem("DistanceCarInfo") &&
      !localStorage.getItem("DistanceCarExtraInfo") &&
      !localStorage.getItem("TimeCarInfo") &&
      !localStorage.getItem("TimeCarExtraInfo")
    ) {
      localStorage.clear();
      navigate("/"); // Call navigate function to redirect
    }
    getData();
  }, []);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    setDisable(true);
    console.log("clicked");
    let headers = {
      Authorization: `Bearer ${token}`,
    };

    let body = JSON.parse(localStorage.getItem("formData"));

    let res = await axios.post(`${BaseUrl}/create-booking`, body, {
      headers,
    });
    await axios.post(
      `${BaseUrl}/checkout/${res?.data?.data?._id}`,
      {
        paymentUrl: `https://exactlane.com/bookingProcess/payment/${res?.data?.data?._id}`,
      },
      { headers }
    );
    if (res?.data?.data?._id) {
      navigate(`/bookingProcess/payment/${res?.data?.data?._id}`);
      setTimeout(() => {
        toast.success("Booking created succesfully");
      }, 1000);
      localStorage.clear("formData");
    } else {
      toast.error("Something went vwrong");
    }
  };

  async function getData() {
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    let res = await axios.get(
      `${bookUrl}/${window.location.href.split("/")[5]}`,
      { headers }
    );
    setData(res.data.data);
    setAmount(res.data.data.finalPrice);
  }

  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  return (
    <div className={style.CheckOutMain} style={{}}>
      <form className={style.PickMain} onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: "100%", display: "flex", gap: "10px" }}>
          <div className={style.PickUpDeatilsFormFields}>
            <label className={style.SelectLabel} htmlFor="titleSelect">
              Amount
            </label>
            <input
              className={style.SelectFeild}
              type="number"
              placeholder="Enter amount"
              value={localStorage.getItem("finalPrice")}
              name="amount"
              {...register("amount")}
              disabled
            />
          </div>

          <div className={style.PickUpDeatilsFormFields}>
            <label className={style.SelectLabel} htmlFor="titleSelect">
              currency
            </label>
            <select
              id="titleSelect"
              value={selectedTitle}
              onChange={handleTitleChange}
              className={style.SelectFeild}
              name="currency"
              {...register("currency")}
            >
              {/* <option className={style.DefaultSelect} value="">
                Select currency
              </option> */}
              <option value="USD">USD</option>
              {/* <option value="mrs">IND</option> */}
            </select>
          </div>
        </div>

        {!disable && (
          <button
            type="submit"
            className={style.button}
            // onClick={() => setDisable(true)}
          >
            Confirm booking
          </button>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default CheckOut;
