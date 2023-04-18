import { TextField, Button, Box } from "@mui/material";
import React, { useReducer } from "react";

function QuestionForm() {
  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    }
  );

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    const data = new FormData(evt.currentTarget);
    const jsonData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    };

    fetch("http://localhost:4000/questions", {
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
        alert("Submitted failed.");
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
      <form onSubmit={handleSubmit}>
        <div className="center">
          <TextField
            id="firstName"
            label="First Name"
            name="firstName"
            variant="standard"
            onChange={handleInput}
          />
          <TextField
            id="lastName"
            label="Last Name"
            name="lastName"
            variant="standard"
            onChange={handleInput}
          />
        </div>
        <div className="center">
          <TextField
            required
            id="email"
            label="Email"
            name="email"
            variant="standard"
            onChange={handleInput}
          />
        </div>
        <div className="center">
          <TextField
            id="subject"
            label="Subject"
            name="subject"
            variant="standard"
            onChange={handleInput}
          />
        </div>
        <div className="center">
          <TextField
            id="message"
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="standard"
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

export default QuestionForm;
