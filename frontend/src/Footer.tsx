import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <h2 className="text">happy kids</h2>
      <div className="footerContainer">
        <div className="footerCard">
          <p>Home</p>
          <p>Shop Collection</p>
          <p>Our Story</p>
          <p>Contact</p>
        </div>
        <div className="footerCard">
          <Link to={"https://www.facebook.com/wix"} target="_blank">
            <img
              className="icon"
              src="https://drive.google.com/uc?export=view&id=1WVnvEWR_W_QOYa38lzR42cppuTS8lMky"
            ></img>
          </Link>
          <Link to={"https://www.pinterest.com/wixcom/"} target="_blank">
            <img
              className="icon"
              src="https://drive.google.com/uc?export=view&id=1LPkzBCaZNWu48cuA83LXYKdNux8sW1fy"
            ></img>
          </Link>
          <Link to={"https://www.instagram.com/wix/"} target="_blank">
            <img
              className="icon"
              src="https://drive.google.com/uc?export=view&id=1S6SY6VtqKPXAqq-2srtnwdKIsAfZrEp0"
            ></img>
          </Link>
        </div>
        <div className="footerCard">
          <p>Shipping & Returns</p>
          <p>Store Policy</p>
          <p>Payment Methods</p>
          <p>FAQ</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
