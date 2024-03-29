import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Landingpage/HeroSection/Hero";
import Main from "./Components/Landingpage/MainContainer/Main";
import BookingProcess from "./Components/Landingpage/BookingProcess/BookingProcess";
import BookingInfoMain from "./Components/Landingpage/BookingProcess/BookingInfo/BookingInfoMain";
import ServiceClass from "./Components/Landingpage/BookingProcess/BookingInfo/ServiceClass/ServiceClass";
import PickupInfo from "./Components/Landingpage/BookingProcess/BookingInfo/PickupInfo/PickupInfo";
import Payment from "./Components/Landingpage/BookingProcess/BookingInfo/Payment/Payment";
import CheckOut from "./Components/Landingpage/BookingProcess/BookingInfo/Checkout/CheckOut";
import Login from "./Components/Landingpage/BookingProcess/Login/Login";
import { BookingProcessProvider } from "./Components/Landingpage/BookingProcessContext";
import OurServices from "./Components/Landingpage/Pages/OurServices/OurServices";
import OurServices2 from "./Components/Landingpage/Pages/OurServices/OurService/OurServices2";
import Aboutus from "./Components/Landingpage/Pages/AboutUs/Aboutus";
import Category from "./Components/Landingpage/Pages/Category/Category";
import ContactUs from "./Components/Landingpage/Pages/ContactUs/ContactUs";
import Blog from "./Components/Landingpage/Pages/Blog/Blog";
import FrequentQuestion from "./Components/Landingpage/Pages/FrequentQuestion/FrequentQuestion";
import UserMain from "./Components/UserPanel/Main/Main";
import UpcomingRides from "./Components/UserPanel/Main/Pages/UpcomingRides";
import Disclaimer from "./Components/Landingpage/Pages/Disclaimer/Disclaimer";
import Influencer from "./Components/Landingpage/Pages/Influencer/Influencer";
import PastRides from "./Components/UserPanel/Main/Pages/PastRides";
import ChangePassword from "./Components/UserPanel/Main/Pages/ChangePassword";
import ContactDetails from "./Components/UserPanel/Main/Pages/ContactDetails";
import Notifications from "./Components/UserPanel/Main/Pages/Notifications";
import UserLogin from "./Components/UserPanel/Auth/Login";
import UpComingDetails from "./Components/UserPanel/Main/Pages/UpComingDetails";
import PastRideDetails from "./Components/UserPanel/Main/Pages/PastRideDetails";
import ShuttleService from "./Components/Landingpage/Pages/OurServices/ShuttleService/ShuttleService";
import AirportTransfer from "./Components/Landingpage/Pages/OurServices/AirportTransfer/AirportTransfer";
import CityToCity from "./Components/Landingpage/Pages/OurServices/CityToCity/CityToCity";
import Hourlybooking from "./Components/Landingpage/Pages/OurServices/HourlyBooking/Hourlybooking";
import BlogSummery from "./Components/Landingpage/Pages/Blog/BlogSummery/Blog";
import TermsAndCondition from "./Components/Landingpage/Pages/TermsAndCondition/TermsAndCondition";
import Policy from "./Components/Landingpage/Pages/Policy/Policy";
import BecomeChauffeur from "./Components/Landingpage/Pages/BecomeChauffeur/BecomeChauffeur";
import Otp from "./Components/UserPanel/Main/Pages/Otp";
import Spinner from "./Components/Landingpage/Pages/Spinner/Spinner";
import PageNotFound from "./Components/Landingpage/Pages/Page404/PageNotFound";
function App() {
  return (
    <BrowserRouter>
      <BookingProcessProvider>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Hero />} />
            <Route path="bookingProcess" element={<BookingProcess />}>
              <Route path="" element={<BookingInfoMain />}>
                <Route index element={<Navigate replace to="services" />} />
                <Route path="services" element={<ServiceClass />} />
                <Route
                  path="pickup-info/:cartype/:price/:mode"
                  element={<PickupInfo />}
                />
                <Route path="checkout" element={<CheckOut />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="payment/:id" element={<Payment />} />
            </Route>
            <Route path="services" element={<OurServices />} />
            <Route path="services2" element={<OurServices2 />} />
            {/* {/ services sub page /} */}
            <Route
              path="services2/airporttransfer"
              element={<AirportTransfer />}
            />
            <Route path="services2/CityToCity" element={<CityToCity />} />
            <Route path="services2/Hourlybooking" element={<Hourlybooking />} />
            <Route
              path="services2/ShuttleService"
              element={<ShuttleService />}
            />

            <Route path="aboutus" element={<Aboutus />} />
            <Route path="category" element={<Category />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blogsummery/:id" element={<BlogSummery />} />
            <Route path="becomepartner" element={<BecomeChauffeur />} />

            <Route path="questions" element={<FrequentQuestion />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="influencer" element={<Influencer />} />
            <Route path="terms&condition" element={<TermsAndCondition />} />
            <Route path="policy" element={<Policy />} />
          </Route>

          {/* {/ User Dashboard Routes With Outlet Start /} */}
          <Route path="/login" element={<UserLogin />} />
          <Route path="otp" element={<Otp />} />
          <Route path="spinner" element={<Spinner />} />

          <Route path="/user" element={<UserMain />}>
            <Route index element={<Navigate replace to="upcomingRides" />} />
            <Route path="upcomingRides" element={<UpcomingRides />} />
            <Route path="upcomingRides/:id" element={<UpComingDetails />} />

            <Route path="pastRides" element={<PastRides />} />
            <Route path="pastride/:id" element={<PastRideDetails />} />
            <Route path="contactDetails" element={<ContactDetails />} />
            {/*<Route path="language" element={<Language/>}/>
            <Route path="payment" element={<Payment/>}/>*/}
            <Route path="notifications" element={<Notifications />} />
            <Route path="changePassword" element={<ChangePassword />} />
          </Route>
          {/* {/ User Dashboard Routes With Outlet End /} */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BookingProcessProvider>
    </BrowserRouter>
  );
}

export default App;
