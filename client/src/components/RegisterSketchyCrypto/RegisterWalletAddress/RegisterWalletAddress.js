import React from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import swal from "sweetalert";

const RegisterWalletAddress = (props) => {
  const { userFlow, setUserFlow, WalletAddress, setWalletAddress } = props;

  const HandleSubmit = () => {
    if (
      WalletAddress !== undefined &&
      WalletAddress !== null &&
      WalletAddress !== ""
    ) {
      setUserFlow(userFlow + 1);
    } else {
      swal(
        "Oops!",
        "It looks like you didn't add a wallet address. Pleas try again",
        "error"
      );
    }
  };

  return (
    <div>
      <div className="centerDiv">
        <h2>Please Paste in the Wallet Address</h2>
      </div>
      <div className="centerDiv" style={{ marginTop: "1vh" }}>
        <TextField
          id="outlined-basic"
          label="Wallet Address"
          value={WalletAddress}
          variant="outlined"
          onChange={(e) => {
            setWalletAddress(e.target.value);
          }}
        />
      </div>
      <br />
      <div className="centerDiv">
        <Button onClick={HandleSubmit}>Next</Button>
      </div>
    </div>
  );
};

export default RegisterWalletAddress;
