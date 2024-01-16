import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
