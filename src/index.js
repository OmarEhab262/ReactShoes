import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App";
import { BrowserRouter as R } from "react-router-dom";
import "./all.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <R>
    <App />
  </R>
);
