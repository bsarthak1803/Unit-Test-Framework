import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from 'terra-base'
import App from "./app2";

ReactDOM.render(
  <Base locale = 'en'>
  <App />
  </Base>, //parent dom
  document.getElementById("root")
);
