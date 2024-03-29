import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
};
const UserDetails = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    addUserDetail: (state, action) => {
      state.user = action.payload;
      // state.addCreative = Array.from(new Set([...state.addCreative, action.payload]));
    },
  },
});

export const { addUserDetail } = UserDetails.actions;
export default UserDetails.reducer;
