import { Paper, Typography, TextField, Button, Icon, Box } from "@mui/material";
import React, { useReducer } from "react";

function questionForm() {
  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      name: "",
      email: "",
    }
  );

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();

    let data = { formInput };

    fetch("https://pointy-gauge.glitch.me/api/form", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => console.log("Success:", JSON.stringify(response)))
      .catch((error) => console.error("Error:", error));
  };

  const handleInput = (evt: { target: { name: any; value: any } }) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <div>
      <Paper>
        <Typography variant="h5" component="h3">
          form name
        </Typography>
        <Typography component="p">description</Typography>

        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="firstName" label="First Name" variant="standard" />
            <TextField id="lastName" label="Last Name" variant="standard" />
            <TextField required id="email" label="Email" variant="standard" />
            <TextField id="subject" label="Subject" variant="standard" />
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="standard"
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Subscribe <Icon>send</Icon>
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default questionForm;
