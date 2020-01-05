import React from "react";
import ReactDom from "react-dom";
import App from "./App.js"
import { HashRouter as Router } from "react-router-dom"

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)
