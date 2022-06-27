import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import swal from "sweetalert";
import Results from "./Results";
import CoinPicker from "../RegisterSketchyCrypto/RegisterCoin/CoinPicker";

const Search = () => {
  const params = new URLSearchParams(window.location.search);
  const [WalletAddress, setWalletAddress] = useState(params.get("wallet"));
  const [Coin, setCoin] = useState(params.get("coin"));
  const [Complaints, setComplaints] = useState([]);

  useEffect(() => {
    var formData = new FormData();
    formData.append("WalletAddress", WalletAddress);
    formData.append("Coin_ID", Coin);
    fetch("/api/search_by_wallet_with_exact", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setComplaints(data);
      });
  }, []);

  const HandleSubmit = () => {
    if (
      WalletAddress !== undefined &&
      WalletAddress !== null &&
      WalletAddress !== "" &&
      Coin !== null &&
      Coin !== undefined &&
      Coin !== 0
    ) {
      window.location.href =
        "http://localhost:3000/search?wallet=" +
        WalletAddress +
        "&coin=" +
        Coin;
    } else {
      swal(
        "Oops!",
        "It looks like you didn't add a wallet address. Pleas try again",
        "error"
      );
    }
  };

  return (
    <div className="centerDiv">
      <div className="centerDiv" style={{ display: "block" }}>
        {Complaints.length === 0 &&
        WalletAddress !== null &&
        Coin !== null &&
        Coin !== 0 ? (
          <>
            <div className="centerDiv">
              <h2>Look's good </h2>
            </div>
            <div className="centerDiv">
              <h3>"{WalletAddress}" might be a safe</h3>
            </div>
          </>
        ) : (
          <>
            {Complaints.length === 0 ? (
              <>
                <div className="centerDiv">
                  <h2>Please Paste in the Wallet Address </h2>
                </div>
                <div className="centerDiv">
                  <h3>Then Select the Crypto Coin network it belongs to</h3>
                </div>
              </>
            ) : (
              <>
                <div className="centerDiv">
                  <h2>Warning for {WalletAddress} </h2>
                </div>
                <div className="centerDiv">
                  <Results Complaints={Complaints} />
                </div>
                <div className="centerDiv">
                  <h3>Search for another Wallet Address</h3>
                </div>
              </>
            )}
          </>
        )}
        <br />
        <div className="centerDiv">
          <TextField
            id="outlined-basic"
            label="Wallet Address"
            variant="outlined"
            value={WalletAddress}
            onChange={(e) => {
              setWalletAddress(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="centerDiv">
          <CoinPicker Coin={Coin} setCoin={setCoin} />
        </div>

        <div className="centerDiv">
          <Button onClick={HandleSubmit}>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
