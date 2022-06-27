import React from "react";
import { Button } from "@material-ui/core";

const GettingStarted = (props) => {
  const { UserFlow, setUserFlow } = props;

  const HandleSubmit = () => {
    setUserFlow(UserFlow + 1);
  };

  return (
    <div>
      <div className="centerDiv">
        <h3>Getting Started</h3>
      </div>
      <div className="centerDiv">
        <h4>Things you'll provide:</h4>
      </div>
      <div className="centerDiv">
        <ul>
          <li>Crypto Coin</li>
          <li>Address of the Wallet</li>
          <li>Date when it happened</li>
          <li>Notes on what happened</li>
        </ul>
      </div>
      <div className="centerDiv">
        <Button onClick={HandleSubmit}>Next</Button>
      </div>
    </div>
  );
};

export default GettingStarted;
