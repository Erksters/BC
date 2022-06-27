import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";

const RegisterNotes = (props) => {
  const { userFlow, setUserFlow, Notes, setNotes } = props;

  const HandleSubmit = () => {
    console.log("Submitting Notes");
    if (Notes !== "" && Notes.length < 1000) {
      setUserFlow(userFlow + 1);
    }
  };

  return (
    <>
      <h3>Give us some notes for future users</h3>
      <TextField
        id="outlined-multiline-static"
        label="Enter details below"
        multiline
        rows={4}
        placeholder="Write a bit of info..."
        onChange={(e) => {
          setNotes(e.target.value);
        }}
      />
      <Button onClick={HandleSubmit}>Next</Button>
    </>
  );
};

export default RegisterNotes;
