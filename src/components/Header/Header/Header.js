import React from "react";
import NavigationBar from "../NavigationBar/NavBar";
import header from "./Bitcoin.jpg";
import "./Header.css";

/**
  Link to image 
  https://pixabay.com/illustrations/bitcoin-cryptocurrency-crypto-3089728/
  */
const Header = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#eeeeee" }}>
        <a className="centerDiv" href="/">
          <img src={header} alt="physical bitcoin coin" />
        </a>
      </div>
      <div>
        <br />
        <NavigationBar />
      </div>
    </div>
  );
};

export default Header;
