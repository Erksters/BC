import React, { useState } from "react";
import RegisterCoin from "./RegisterCoin/RegisterCoin";
import GettingStarted from "./GettingStarted/GettingStarted";
import RegisterWalletAddress from "./RegisterWalletAddress/RegisterWalletAddress";
import RegisterDate from "./RegisterDate/RegisterDate";
import RegisterNotes from "./RegisterNotes/RegisterNotes";
import SummarizeAndUpload from "./SummarizeAndUpload/SummarizeAndUpload";
import Complete from "./Complete/Complete";

const RegisterSketchyCrypto = () => {
  const [UserFlow, setUserFlow] = useState(1);
  const [WalletAddress, setWalletAddress] = useState(undefined);
  const [Notes, setNotes] = useState(undefined);
  const [Coin, setCoin] = useState(null);
  const [DateOfEvent, setDateOfEvent] = useState(new Date());

  //Getting Started
  if (UserFlow === 1) {
    return (
      <div className="centerDiv">
        <GettingStarted UserFlow={UserFlow} setUserFlow={setUserFlow} />
      </div>
    );
  }

  //Register Coin
  if (UserFlow === 2) {
    return (
      <div className="centerDiv">
        <RegisterCoin
          Coin={Coin}
          setCoin={setCoin}
          userFlow={UserFlow}
          setUserFlow={setUserFlow}
        />
      </div>
    );
  }

  //Register Address
  if (UserFlow === 3) {
    return (
      <div className="centerDiv">
        <RegisterWalletAddress
          WalletAddress={WalletAddress}
          setWalletAddress={setWalletAddress}
          userFlow={UserFlow}
          setUserFlow={setUserFlow}
        />
      </div>
    );
  }

  //Register Date of Event
  if (UserFlow === 4) {
    return (
      <div className="centerDiv">
        <RegisterDate
          DateOfEvent={DateOfEvent}
          setDateOfEvent={setDateOfEvent}
          userFlow={UserFlow}
          setUserFlow={setUserFlow}
        />
      </div>
    );
  }

  //Register Notes of what happened
  if (UserFlow === 5) {
    return (
      <div className="centerDiv">
        <RegisterNotes
          Notes={Notes}
          setNotes={setNotes}
          userFlow={UserFlow}
          setUserFlow={setUserFlow}
        />
      </div>
    );
  }

  //Summarize and Upload new information
  if (UserFlow === 6) {
    return (
      <div className="centerDiv">
        <SummarizeAndUpload
          Notes={Notes}
          DateOfEvent={DateOfEvent}
          WalletAddress={WalletAddress}
          Coin={Coin}
          userFlow={UserFlow}
          setUserFlow={setUserFlow}
        />
      </div>
    );
  }

  //Thank you for your help!
  if (UserFlow === 7) {
    return (
      <div className="centerDiv">
        <Complete
          setUserFlow={setUserFlow}
          Coin={Coin}
          WalletAddress={WalletAddress}
        />
      </div>
    );
  }
};

export default RegisterSketchyCrypto;
