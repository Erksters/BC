import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
const SummarizeAndUpload = (props) => {
  const { userFlow, setUserFlow, Notes, WalletAddress, Coin, DateOfEvent } =
    props;

  const HandleSubmit = async () => {
    console.log("Submitting Notes");
    var formData = new FormData();
    formData.append("WalletAddress", WalletAddress);
    formData.append("Coin_ID", Coin.ID);
    formData.append(
      "DateOfEvent",
      `${DateOfEvent.getFullYear()}-${DateOfEvent.getMonth()}-${DateOfEvent.getDate()}`
    );
    formData.append("Notes", Notes);

    await fetch("/api/insert_complaint", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertId) {
          setUserFlow(userFlow + 1);
        }
      });
  };

  return (
    <>
      <h3>Summarize and Complete the ReCAPTCHA</h3>
      <ReCAPTCHA
        sitekey="6LfUjXogAAAAAD3fbHNYCXOXT_DKPJXlDtqqhyLT"
        onChange={HandleSubmit}
      />
    </>
  );
};

export default SummarizeAndUpload;
