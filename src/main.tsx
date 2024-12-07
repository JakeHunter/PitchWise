// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Feed from "./components/Feed";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Feed />
  </React.StrictMode>
);
