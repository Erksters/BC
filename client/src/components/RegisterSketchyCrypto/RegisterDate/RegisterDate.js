import React from "react";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";

const RegisterDate = (props) => {
  const { userFlow, setUserFlow, DateOfEvent, setDateOfEvent } = props;

  const HandleSubmit = () => {
    console.log("Submitting Coin");
    if (DateOfEvent.getTime() <= new Date().getTime()) {
      setUserFlow(userFlow + 1);
    }
  };

  console.log(userFlow);

  return (
    <>
      <h3>Tell us when this happened</h3>

      <FormControl
        variant="outlined"
        className="InputStyle"
        style={{
          border: "solid 1px",
          borderColor: "gray",
          borderRadius: 5,
          padding: 6,
        }}
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDateTimePicker
            variant="inline"
            label="Date when the Incident Happened"
            value={DateOfEvent}
            onChange={(value) => setDateOfEvent(new Date(value))}
            format="MM/dd/yyyy"
          />
        </MuiPickersUtilsProvider>
      </FormControl>
      <Button onClick={HandleSubmit}>Next</Button>
    </>
  );
};

export default RegisterDate;
