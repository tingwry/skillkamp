import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import QuestionForm from "./QuestionForm";

function ContactUs() {
  return (
    <>
      <h2 className="text">Contact Us</h2>
      <div className="footerContainer">
        <div className="footerCard">
          <p className="text">VISIT US</p>
          <p>&nbsp;</p>
          <p>
            500 Terry Francois St.<br></br> San Francisco, CA 94158 <br></br>
            123-456-7890
          </p>
        </div>

        <div className="footerCard">
          <p className="text">OPENING HOURS</p>
          <p>&nbsp;</p>
          <p>
            Mon - Fri: 7am - 10pm.<br></br> Saturday: 8am - 10pm <br></br>
            ​Sunday: 8am - 11pm
          </p>
        </div>

        <div className="footerCard">
          <p className="text">CUSTOMER SERVICE</p>
          <p>&nbsp;</p>
          <p>
            1-800-000-000<br></br> 123-456-7890 <br></br>
            info@mysite.com
          </p>
        </div>
      </div>

      <p className="text">FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</p>
      <QuestionForm />
    </>
  );
}

export default ContactUs;
