import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ➜  media git:(master) npm install @faker-js/faker @reduxjs/toolkit axios classnames json-server react-icons
// ➜  media git:(master) ✗ npm install -D tailwindcss postcss autoprefixer
// ➜  media git:(master) ✗ npx tailwindcss init -p
// ➜  media git:(master) npm run start:server
// ➜  media git:(master) npm install react-redux
