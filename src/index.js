import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(<App />);

// ➜  media git:(master) npm install @faker-js/faker @reduxjs/toolkit axios classnames json-server react-icons
// ➜  media git:(master) ✗ npm install -D tailwindcss postcss autoprefixer
// ➜  media git:(master) ✗ npx tailwindcss init -p
// ➜  media git:(master) npm run start:server
