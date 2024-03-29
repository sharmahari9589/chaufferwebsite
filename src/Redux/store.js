import { configureStore } from "@reduxjs/toolkit";
import BookingDetailReducer from "./BookingDetails/BookingDetailSlice";
import BookingTimeDetailSlice from "./BookingDetails/BookingTimeDetailSlice";
import UserSlice from "./UserSlice/UserSlice";
const store = configureStore({
  reducer: {
    BookingDetailsDistance: BookingDetailReducer,
    BookingDetailsTime: BookingTimeDetailSlice,
    UserDetails: UserSlice,
  },
});

export default store;

// prsist logic
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // or whatever storage you want to use
// import BookingDetailReducer from "./BookingDetails/BookingDetailSlice";
// import BookingTimeDetailSlice from "./BookingDetails/BookingTimeDetailSlice";

// const persistConfig = {
//   key: "root",
//   storage,
//   // Add any specific configuration options for redux-persist here, if needed
// };

// // const rootReducer = {
// //   BookingDetailsDistance: BookingDetailReducer,
// //   BookingDetailsTime: BookingTimeDetailSlice,
// //   // Add other reducers if you have more
// // };
// const rootReducer = combineReducers({
//   BookingDetailsDistance: BookingDetailReducer,
//   BookingDetailsTime: BookingTimeDetailSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };
