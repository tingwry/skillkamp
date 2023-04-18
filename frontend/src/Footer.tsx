import React from "react";
import { Link } from "react-router-dom";

function Footer(props: any) {
  const { setTab } = props;
  return (
    <>
      <h2 className="text">happy kids</h2>
      <div className="footerContainer">
        <div className="footerCard">
          <button onClick={() => setTab("2")}>Shop All</button>
          <p>Home</p>
          <p>Shop Collection</p>
          <p>Our Story</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
