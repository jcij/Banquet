// import React, { Suspense } from "react";
// css
import "./styles/main.scss";
import "simplebar/src/simplebar.css";
import "toastr/build/toastr.min.css";
// library
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// redux
import store, { persistor } from "./store";
// components
// import { Loader } from "./components";
//
import App from "./App";

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </HelmetProvider>,
  document.getElementById("root")
);
