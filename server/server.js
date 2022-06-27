const mysql = require("mysql");
const express = require("express");
const formidable = require("express-formidable");

var app = express();

app.use(formidable());

var connection = mysql.createConnection({
  host: "localhost",
  user: "tempUser1",
  password: "tempUser1",
  database: "banned_crypto",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//Insert sketchy wallets
app.post("/api/insert_complaint", (req, res) => {
  connection.query(
    `
    INSERT INTO Wallets(ID, Address, Coin_ID)
    Values( default, "${req.fields.WalletAddress}", ${req.fields.Coin_ID})
    on duplicate key update ID=ID;
    `,
    function (error, results, fields) {
      if (error) throw error;
      console.log("Done");
    }
  );

  connection.query(
    `
    INSERT INTO Complaints( Wallet_ID, Notes, Primitive_Date)
    Select W.ID, 
    "${req.fields.Notes}" as Notes,
    '${req.fields.DateOfEvent}' as Primitive_Date
    From Wallets as W
    Inner Join Coins
    ON W.Coin_ID = Coins.ID
    Where W.Address = "${req.fields.WalletAddress}" and W.Coin_ID= ${req.fields.Coin_ID};
    `,
    function (error, results, fields) {
      if (error) throw error;
      console.log("Done");

      res.json(results);
    }
  );

  console.log("Made it passed that 2");
});

//Quick Test
app.get("/", (req, res) => {
  console.log("Server is Awake!");
  res.send(
    JSON.stringify({ status: 200 }) // <==== req.body will be a parsed JSON object
  );
});

//Searching sketchy wallets
app.post("/api/search_by_wallet_with_exact", (req, res) => {
  if (
    req.fields.WalletAddress === "" ||
    req.fields.WalletAddress === undefined ||
    req.fields.WalletAddress === "undefined" ||
    req.fields.Coin_ID === undefined ||
    req.fields.Coin_ID === "undefined" ||
    req.fields.WalletAddress === null ||
    req.fields.WalletAddress === "null" ||
    req.fields.Coin_ID === null ||
    req.fields.Coin_ID === "null"
  ) {
    console.log("Search has undefined or null or empty Wallet Address");
    res.status(200).send([]);
  } else {
    connection.query(
      `
        SELECT Comp.ID, Comp.Notes, Comp.Primitive_Date
        FROM banned_crypto.complaints as Comp
        Inner Join Wallets
        ON Wallets.ID = Comp.Wallet_ID
        Where Wallet_ID = (Select W.ID 
            From Wallets as W
            Inner Join Coins
            ON W.Coin_ID = Coins.ID
            Where W.address = "${req.fields.WalletAddress}" and W.Coin_ID = ${req.fields.Coin_ID});  
        `,
      function (error, results, fields) {
        if (error) {
          throw error;
        }
        res.json(results);
      }
    );
  }
});

//Show Coin_Symb_and_count_by_coin_type
app.get("/api/show_Coin_Symb_and_count", (req, res) => {
  connection.query(
    `
      Select C.Coin_Symb, Count(*) as count
      From Wallets as W, Coins as C
      Where W.Coin_ID = C.ID
      Group By Coin_Symb_ID
      `,
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

//show top 100 newly added wallets
app.get("/api/show_recent_100", (req, res) => {
  connection.query(
    `
      Select W.ID, W.address, C.Coin_Symb
      From Wallets as W, Coins as C
      Where W.Coin_ID = C.ID
      order by W.ID DESC
      Limit 100
      `,
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

//get_all_known_coins
app.get("/api/get_all_known_coins", (req, res) => {
  connection.query(
    `
      SELECT * FROM banned_crypto.Coins;
      `,
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
      console.log("Pinged /get_all_known_coins");
    }
  );
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
