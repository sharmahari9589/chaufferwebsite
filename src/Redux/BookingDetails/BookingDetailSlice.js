import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  BookingDetail: [],
  Timezone: "",
  Distance: "",
  Time: "",
  startdate: "",
  startTime: "",
  startLocation: "",
  endLocation: "",
};
const BookingDetails = createSlice({
  name: "BookingDetails",
  initialState,
  reducers: {
    addBookingDetail: (state, action) => {
      state.BookingDetail = action.payload;
      // state.addCreative = Array.from(new Set([...state.addCreative, action.payload]));
    },
    addTimezone: (state, action) => {
      state.Timezone = action.payload;
    },
    addDistance: (state, action) => {
      state.Distance = action.payload;
    },
    addTime: (state, action) => {
      state.Time = action.payload;
    },
    addStartDate: (state, action) => {
      state.startdate = action.payload;
    },
    addStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    addStartLocation: (state, action) => {
      state.startLocation = action.payload;
    },
    addEndLocation: (state, action) => {
      state.endLocation = action.payload;
    },
  },
});

export const {
  addBookingDetail,
  addTimezone,
  addDistance,
  addTime,
  addStartDate,
  addStartTime,
  addStartLocation,
  addEndLocation,
} = BookingDetails.actions;
export default BookingDetails.reducer;
