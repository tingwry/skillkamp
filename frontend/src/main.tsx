import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import LogInWithEmail from "./auth/LogInWithEmail";
import Signup from "./auth/Signup";
import Footer from "./Footer";
import HomePage from "./HomePage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginWithEmail" element={<LogInWithEmail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
