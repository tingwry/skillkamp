import { TextField, Button, Box } from "@mui/material";
import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogInWithEmail from "./LogInWithEmail";

function Login() {
  return (
    <div className="screenCenter">
      <h1 className="center">Log In</h1>
      <p className="center">
        New to this site? <Link to={"/signup"}>Sign Up</Link>
      </p>
      <div className="center">
        <Link to={"/loginWithEmail"}>
          <Button id="submit" variant="outlined" color="primary">
            Log in with Email
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
