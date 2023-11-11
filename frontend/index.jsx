import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Principal } from "@dfinity/principal";


const CURRENT_USER_ID = Principal.fromText(import.meta.env.VITE_CURRENT_USER_ID);
export default CURRENT_USER_ID;
console.log(CURRENT_USER_ID);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
