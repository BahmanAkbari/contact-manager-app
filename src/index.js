import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// This line is Changed
// We changed this line in the github.
import App from "./App";
// Other line must be changed.
import "./index.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter basename="contact-manager-app">
      <App />
    </BrowserRouter>
  </StrictMode>
);
