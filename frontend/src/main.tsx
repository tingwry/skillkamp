import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./HomePage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/new" element={<NewPage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
