import { TextField, Button, Box } from "@mui/material";
import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

function Signup() {
  const onChange = () => {};
  const navigate = useNavigate();
  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
    }
  );

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    const data = new FormData(evt.currentTarget);
    const jsonData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    fetch("http://localhost:4000/signup", {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((response) => console.log("Success:", JSON.stringify(response)))
      .then(() => navigate("/"))
      .catch((error) => {
        alert("Signup failed.");
        console.error("Error:", error);
      });
  };

  const handleInput = (evt: any) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <>
      <div className="closedBtn">
        <Link to={"/"}>X</Link>
      </div>
      <div className="screenCenter">
        <h1 className="center">Sign Up</h1>
        <p className="center">
          Already a member? <Link to={"/login"}>Log In</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="center">
            <TextField
              id="email"
              label="Email"
              name="email"
              variant="standard"
              onChange={handleInput}
            />
          </div>
          <div className="center">
            <TextField
              id="password"
              label="Password"
              name="password"
              variant="standard"
              onChange={handleInput}
            />
          </div>
          <ReCAPTCHA
            sitekey="6Le_5JolAAAAAFMdtDEeEu_VqVqzjwe0h6pNidHX"
            onChange={onChange}
          />
          <div className="center">
            <Button type="submit" id="submit" variant="text" color="primary">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
