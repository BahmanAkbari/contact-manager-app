import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
// This line is Changed
import App from "./App";
// Other line must be changed.
=======
// We changed this line in the github.
import App from "./App"

>>>>>>> 179d5eb463d3ee11cb5245f82502447c49b9dab1
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
