import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <script src="node_modules/vara/src/vara.min.js"></script>
    <App />
  </React.StrictMode>
);
