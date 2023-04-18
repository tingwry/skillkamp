import { TextField, Button, Box } from "@mui/material";
import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

function LogInWithEmail() {
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

    fetch("http://localhost:4000/login", {
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
        alert("Login failed.");
        console.error("Error:", error);
      });
  };

  const handleInput = (evt: any) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <div className="screenCenter">
      <h1 className="center">Log In</h1>
      <p className="center">
        New to this site? <Link to={"/signup"}>Sign Up</Link>
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
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LogInWithEmail;
