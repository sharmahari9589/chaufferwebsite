import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  BookingDetailTime: [],
  TimezoneForTime: "",

  startdateForTime: "",
  startTimeForTime: "",
  startLocationForTime: "",
  durationForTime: "",
};
const BookingTimeDetails = createSlice({
  name: "BookingTimeDetails",
  initialState,
  reducers: {
    addBookingDetailForTime: (state, action) => {
      state.BookingDetailTime = action.payload;
      // state.addCreative = Array.from(new Set([...state.addCreative, action.payload]));
    },
    addTimezoneForTime: (state, action) => {
      state.TimezoneForTime = action.payload;
    },

    addStartDateForTime: (state, action) => {
      state.startdateForTime = action.payload;
    },
    addStartTimeForTime: (state, action) => {
      state.startTimeForTime = action.payload;
    },
    addStartLocationForTime: (state, action) => {
      state.startLocationForTime = action.payload;
    },
    addDurationForTime: (state, action) => {
      state.durationForTime = action.payload;
    },
  },
});

export const {
  addBookingDetailForTime,
  addTimezoneForTime,
  addStartDateForTime,
  addStartTimeForTime,
  addStartLocationForTime,
  addDurationForTime,
} = BookingTimeDetails.actions;
export default BookingTimeDetails.reducer;
