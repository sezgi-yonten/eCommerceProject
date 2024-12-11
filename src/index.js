import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // TailwindCSS burada yüklenmiş olmalı
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
