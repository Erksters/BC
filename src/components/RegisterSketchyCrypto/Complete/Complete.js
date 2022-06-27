import React from "react";
import { Button } from "@material-ui/core";

const Complete = (props) => {
  const { setUserFlow, WalletAddress, Coin } = props;

  var delayInMilliseconds = 8000;

  setTimeout(function () {
    window.location.href =
      "http://localhost:3000/search?wallet=" +
      WalletAddress +
      "&coin=" +
      Coin.ID;
  }, delayInMilliseconds);

  const HandleSubmit = () => {
    setUserFlow(1);
    window.location.href = "/";
  };

  return (
    <>
      <h3>You have Successfully submitted your data to our database!</h3>
      <h4> Thank you for your help!</h4>
      <h4>
        {" "}
        You will be redirected to the information page regarding that wallet in
        8 seconds
      </h4>
      <Button onClick={HandleSubmit}>Return Home</Button>
    </>
  );
};

export default Complete;
