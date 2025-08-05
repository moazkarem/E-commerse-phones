import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import FocusProvider from "./Components/Contexts/FocusProvider.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { LocaleProvider } from "./i18n/LocaleProvider.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/X-Beat/">
        <FocusProvider>
          <Provider store={store}>
            <LocaleProvider>
              <App />
            </LocaleProvider>
          </Provider>
        </FocusProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
