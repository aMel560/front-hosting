import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import App from "./App";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./App/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
