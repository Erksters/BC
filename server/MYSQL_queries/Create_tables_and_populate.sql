CREATE DATABASE banned_crypto;
USE banned_crypto;

Create table Coins (
	ID int NOT NULL auto_increment,
    Coin_Name nvarchar(30),
	Coin_Symb nvarchar(10),
    Unique (Coin_Symb),
    Primary Key (ID)
);

LOAD DATA INFILE'E:/mysql_data/Uploads/bigdata2.csv' 
INTO TABLE Coins 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

Create table Wallets(
	ID int NOT NULL auto_increment, 
	Address nvarchar(100) NOT NULL, 
	Coin_ID int NOT NULL,
    PRIMARY KEY (ID),
    Unique (Address, Coin_ID),
    foreign key (Coin_ID) References Coins(ID)
);

Create table Complaints(
	ID int NOT NULL auto_increment, 
	Wallet_ID int NOT NULL, 
    Notes nvarchar(1000) NOT NULL, 
    Primitive_Date date NOT NULL,
    PRIMARY KEY (ID),
    foreign key (Wallet_ID) References Wallets(ID)
);

/*
Insert a new Wallet, will increment Primary ID (ID) even if nothing is inserted to the table
*/
INSERT INTO Wallets(ID, Address, Coin_ID)
Values( default, "123456", 2)
on duplicate key update ID=ID;


/*
Insert a new Complaint
Date can be entered as string, Year-Month-Day
*/

/*
Insert into complaints and find the wallet ID. Replace text with req.fields.Notes && req.fields.Date
*/
INSERT INTO Complaints( Wallet_ID, Notes, Primitive_Date)
Select 
W.ID, 
"They hacked me 3" as Notes,
'2018-12-13' as Primitive_Date
From Wallets as W
Inner Join Coins
ON W.Coin_ID = Coins.ID
Where W.Address = '7777777777' and W.Coin_ID= 3;


/*
Show Wallets and their network coin symbol 
COMPLETE
*/

Select W.ID as Wallet_ID, W.address as Wallet_Address, C.Coin_Symb
From Wallets as W, Coins as C
Where W.Coin_ID = C.ID
Limit 100;

/*
search by addresss and show me the ticker symbol
COMPLETE
*/
Select W.ID, W.address, C.Coin_Symb
From Wallets as W, Coins as C
Where W.Address = '454445445' and W.Coin_ID= C.ID;







/*
Count how many wallets we've added per coin
COMPLETE
*/
Select C.Coin_Symb, Count(*) as Number_Of_Wallets
From Wallets as W, Coins as C
Where W.Coin_ID= C.ID
Group By Coin_Symb


