import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "./styles/base.css";
import "./styles/laponia.css";
import "./styles/ruka.css";
import App from "./App";
import { I18nProvider } from "./lib/i18n";
import { LightboxProvider } from "./components/Lightbox";
import { LazyMotion, domAnimation } from "./lib/motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nProvider>
      <LazyMotion features={domAnimation} strict>
        <LightboxProvider>
          <App />
        </LightboxProvider>
      </LazyMotion>
    </I18nProvider>
  </React.StrictMode>,
);
