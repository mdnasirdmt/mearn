import MyContext from "../helper/Context";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyContext>
      <App />
    </MyContext>
  </React.StrictMode>
);
