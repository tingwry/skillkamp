import { TextField, Button, Box } from "@mui/material";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";

function Signup() {
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
    <div>
      <h1>Sign Up</h1>
      <p>
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

        <div className="center">
          <Button type="submit" id="submit" variant="text" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
