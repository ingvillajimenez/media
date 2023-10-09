import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ➜  media git:(master) npm install @faker-js/faker @reduxjs/toolkit axios classnames json-server react-icons
// ➜  media git:(master) ✗ npm install -D tailwindcss postcss autoprefixer
// ➜  media git:(master) ✗ npx tailwindcss init -p
