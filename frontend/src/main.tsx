import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Footer from "./Footer";
import HomePage from "./HomePage";
import ShopCollection from "./ShopCollection";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <h1 className="text">happy kids</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/shopCollection" element={<ShopCollection />} /> */}
        {/* <Route path="/new" element={<NewPage />} /> */}
      </Routes>
      <hr></hr>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
