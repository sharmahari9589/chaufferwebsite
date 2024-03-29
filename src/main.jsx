import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./Redux/store.js"; // Import store and persistor

import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {/* Wrap with PersistGate */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
