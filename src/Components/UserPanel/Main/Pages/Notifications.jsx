import React, { useContext, useEffect, useState } from "react";
import "./Pages.css";
import axios from "axios";
import { BaseUrl } from "../../../../Env";
import Cookies from "js-cookie";
import { NotificationSvg } from "../../../../../public/Svgs/Svg";
import { BookingProcessContext } from "../../../Landingpage/BookingProcessContext";

const Notifications = () => {
  const [notification, setNotification] = useState([]);
  const { handleNotificationDot } = useContext(BookingProcessContext);
  const token = Cookies.get("token");

  const BecomeAChauffeur = async () => {
    try {
      let url = `${BaseUrl}/getNotification`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNotification(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    BecomeAChauffeur();
  }, []);

  return (
    <>
      <h2 className="mt-2">Notifications</h2>
      <p className="mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. :
      </p>

      <div className="col-lg-9 right">
        <div className="box shadow-sm rounded bg-white mb-3">
          <div className="box-title border-bottom p-3">
            <h6 className="m-0">Recent</h6>
          </div>

          {notification.map((item, index) => (
            <div key={index} className="box-body p-0">
              <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header gap-2">
                <div className="dropdown-list-image mr-3">
                  {NotificationSvg}
                </div>
                <div className="font-weight-bold mr-1">
                  <div className="text-truncate">
                    <DateFormateComponent item={item?.createdAt} />
                  </div>
                  <div className="small">{item?.notificationDescription}</div>
                </div>
                <span className="ml-auto mb-auto">
                  <br />
                  <div className="text-right text-muted pt-1">
                    <DateDifferenceComponent
                      item={item?.createdAt}
                      handleNotificationDot={handleNotificationDot}
                    />
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const DateFormateComponent = ({ item }) => {
  const formattedDate = item
    ? new Date(item).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      })
    : "";

  return (
    <>
      <h5>{formattedDate}</h5>
    </>
  );
};

const DateDifferenceComponent = ({ item, handleNotificationDot }) => {
  // Convert the "created at" string to a Date object
  const createdAtDate = new Date(item);

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - createdAtDate;

  // Convert the time difference to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (daysDifference === 0) {
    handleNotificationDot(true);
  }

  return (
    <>
      <p
        style={{
          margin: "0px",
          textAlign: "end",
          marginTop: "6px",
          fontSize: "12px",
          color: `${daysDifference === 0 ? "green" : `#000`}`,
          fontWeight: `${daysDifference === 0 ? "500" : `700`}`,
        }}
      >
        {`${daysDifference === 0 ? "New" : `${daysDifference} Day's Old`}`}
      </p>
    </>
  );
};

export default Notifications;
