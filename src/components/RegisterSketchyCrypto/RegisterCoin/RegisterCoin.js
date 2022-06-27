import React from "react";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import CoinPicker from "./CoinPicker";

const RegisterCoin = (props) => {
  const { userFlow, setUserFlow, Coin, setCoin } = props;
  console.log("COIN", Coin);

  const HandleSubmit = () => {
    if (Coin !== undefined && Coin != null) {
      console.log("Coin", Coin);

      setUserFlow(userFlow + 1);
    }
  };

  console.log(userFlow);

  return (
    <div>
      <br />
      <div className="centerDiv">
        <h2>Pick the Coin type for the Wallet Address</h2>
      </div>
      <br />

      <div className="centerDiv">
        <CoinPicker Coin={Coin} setCoin={setCoin} />
      </div>

      <br />

      <div className="centerDiv">
        <Button onClick={HandleSubmit}>Next</Button>
      </div>
    </div>
  );
};

export default RegisterCoin;
