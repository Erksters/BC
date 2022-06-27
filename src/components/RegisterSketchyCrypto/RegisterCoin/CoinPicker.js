import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CoinPicker = (props) => {
  const { Coin, setCoin } = props;

  return (
    <Autocomplete
      value={Coin}
      onChange={(event, newValue) => {
        setCoin(newValue.ID);
      }}
      disablePortal
      id="combo-box-demo"
      options={top100Coins}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Pick A Coin" />}
    />
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Coins = [
  {
    ID: 1,
    label: "Bitcoin",
    ticker_symb: "BTC\r",
  },
  {
    ID: 2,
    label: "Ethereum",
    ticker_symb: "ETH\r",
  },
  {
    ID: 3,
    label: "Tether",
    ticker_symb: "USDT\r",
  },
  {
    ID: 4,
    label: "USD Coin",
    ticker_symb: "USDC\r",
  },
  {
    ID: 5,
    label: "BNB",
    ticker_symb: "BNB\r",
  },
  {
    ID: 6,
    label: "Cardano",
    ticker_symb: "ADA\r",
  },
  {
    ID: 7,
    label: "XRP",
    ticker_symb: "XRP\r",
  },
  {
    ID: 8,
    label: "Binance USD",
    ticker_symb: "BUSD\r",
  },
  {
    ID: 9,
    label: "Solana",
    ticker_symb: "SOL\r",
  },
  {
    ID: 10,
    label: "Dogecoin",
    ticker_symb: "DOGE\r",
  },
  {
    ID: 11,
    label: "Polkadot",
    ticker_symb: "DOT\r",
  },
  {
    ID: 12,
    label: "Wrapped Bitcoin",
    ticker_symb: "WBTC\r",
  },
  {
    ID: 13,
    label: "TRON",
    ticker_symb: "TRX\r",
  },
  {
    ID: 14,
    label: "Dai",
    ticker_symb: "DAI\r",
  },
  {
    ID: 15,
    label: "Avalanche",
    ticker_symb: "AVAX\r",
  },
  {
    ID: 16,
    label: "Shiba Inu",
    ticker_symb: "SHIB\r",
  },
  {
    ID: 17,
    label: "UNUS SED LEO",
    ticker_symb: "LEO\r",
  },
  {
    ID: 18,
    label: "Polygon",
    ticker_symb: "MATIC\r",
  },
  {
    ID: 19,
    label: "Cronos",
    ticker_symb: "CRO\r",
  },
  {
    ID: 20,
    label: "Litecoin",
    ticker_symb: "LTC\r",
  },
  {
    ID: 21,
    label: "Chainlink",
    ticker_symb: "LINK\r",
  },
  {
    ID: 22,
    label: "FTX Token",
    ticker_symb: "FTT\r",
  },
  {
    ID: 23,
    label: "Uniswap",
    ticker_symb: "UNI\r",
  },
  {
    ID: 24,
    label: "Stellar",
    ticker_symb: "XLM\r",
  },
  {
    ID: 25,
    label: "Bitcoin Cash",
    ticker_symb: "BCH\r",
  },
  {
    ID: 26,
    label: "NEAR Protocol",
    ticker_symb: "NEAR\r",
  },
  {
    ID: 27,
    label: "Monero",
    ticker_symb: "XMR\r",
  },
  {
    ID: 28,
    label: "Bitcoin BEP2",
    ticker_symb: "BTCB\r",
  },
  {
    ID: 29,
    label: "Ethereum Classic",
    ticker_symb: "ETC\r",
  },
  {
    ID: 30,
    label: "Algorand",
    ticker_symb: "ALGO\r",
  },
  {
    ID: 31,
    label: "Flow",
    ticker_symb: "FLOW\r",
  },
  {
    ID: 32,
    label: "Cosmos",
    ticker_symb: "ATOM\r",
  },
  {
    ID: 33,
    label: "VeChain",
    ticker_symb: "VET\r",
  },
  {
    ID: 34,
    label: "Tezos",
    ticker_symb: "XTZ\r",
  },
  {
    ID: 35,
    label: "Hedera",
    ticker_symb: "HBAR\r",
  },
  {
    ID: 36,
    label: "Decentraland",
    ticker_symb: "MANA\r",
  },
  {
    ID: 37,
    label: "ApeCoin",
    ticker_symb: "APE\r",
  },
  {
    ID: 38,
    label: "KuCoin Token",
    ticker_symb: "KCS\r",
  },
  {
    ID: 39,
    label: "The Sandbox",
    ticker_symb: "SAND\r",
  },
  {
    ID: 40,
    label: "Filecoin",
    ticker_symb: "FIL\r",
  },
  {
    ID: 41,
    label: "Internet Computer",
    ticker_symb: "ICP\r",
  },
  {
    ID: 42,
    label: "Helium",
    ticker_symb: "HNT\r",
  },
  {
    ID: 43,
    label: "Theta Network",
    ticker_symb: "THETA\r",
  },
  {
    ID: 44,
    label: "Elrond",
    ticker_symb: "EGLD\r",
  },
  {
    ID: 45,
    label: "Zcash",
    ticker_symb: "ZEC\r",
  },
  {
    ID: 46,
    label: "TrueUSD",
    ticker_symb: "TUSD\r",
  },
  {
    ID: 47,
    label: "Aave",
    ticker_symb: "AAVE\r",
  },
  {
    ID: 48,
    label: "BitTorrent",
    ticker_symb: "BTTOLD\r",
  },
  {
    ID: 49,
    label: "EOS",
    ticker_symb: "EOS\r",
  },
  {
    ID: 50,
    label: "Axie Infinity",
    ticker_symb: "AXS\r",
  },
  {
    ID: 51,
    label: "Bitcoin SV",
    ticker_symb: "BSV\r",
  },
  {
    ID: 52,
    label: "Huobi Token",
    ticker_symb: "HT\r",
  },
  {
    ID: 53,
    label: "Maker",
    ticker_symb: "MKR\r",
  },
  {
    ID: 54,
    label: "Klaytn",
    ticker_symb: "KLAY\r",
  },
  {
    ID: 55,
    label: "The Graph",
    ticker_symb: "GRT\r",
  },
  {
    ID: 56,
    label: "Pax Dollar",
    ticker_symb: "USDP\r",
  },
  {
    ID: 57,
    label: "BitTorrent-New",
    ticker_symb: "BTT\r",
  },
  {
    ID: 58,
    label: "eCash",
    ticker_symb: "XEC\r",
  },
  {
    ID: 59,
    label: "IOTA",
    ticker_symb: "MIOTA\r",
  },
  {
    ID: 60,
    label: "THORChain",
    ticker_symb: "RUNE\r",
  },
  {
    ID: 61,
    label: "Neutrino USD",
    ticker_symb: "USDN\r",
  },
  {
    ID: 62,
    label: "Neo",
    ticker_symb: "NEO\r",
  },
  {
    ID: 63,
    label: "Fantom",
    ticker_symb: "FTM\r",
  },
  {
    ID: 64,
    label: "Waves",
    ticker_symb: "WAVES\r",
  },
  {
    ID: 65,
    label: "Quant",
    ticker_symb: "QNT\r",
  },
  {
    ID: 66,
    label: "USDD",
    ticker_symb: "USDD\r",
  },
  {
    ID: 67,
    label: "Chiliz",
    ticker_symb: "CHZ\r",
  },
  {
    ID: 68,
    label: "OKB",
    ticker_symb: "OKB\r",
  },
  {
    ID: 69,
    label: "Nexo",
    ticker_symb: "NEXO\r",
  },
  {
    ID: 70,
    label: "Stacks",
    ticker_symb: "STX\r",
  },
  {
    ID: 71,
    label: "Loopring",
    ticker_symb: "LRC\r",
  },
  {
    ID: 72,
    label: "PancakeSwap",
    ticker_symb: "CAKE\r",
  },
  {
    ID: 73,
    label: "PAX Gold",
    ticker_symb: "PAXG\r",
  },
  {
    ID: 74,
    label: "Zilliqa",
    ticker_symb: "ZIL\r",
  },
  {
    ID: 75,
    label: "Dash",
    ticker_symb: "DASH\r",
  },
  {
    ID: 76,
    label: "Basic Attention Token",
    ticker_symb: "BAT\r",
  },
  {
    ID: 77,
    label: "STEPN",
    ticker_symb: "GMT\r",
  },
  {
    ID: 78,
    label: "Enjin Coin",
    ticker_symb: "ENJ\r",
  },
  {
    ID: 79,
    label: "Curve DAO Token",
    ticker_symb: "CRV\r",
  },
  {
    ID: 80,
    label: "Kusama",
    ticker_symb: "KSM\r",
  },
  {
    ID: 81,
    label: "Celo",
    ticker_symb: "CELO\r",
  },
  {
    ID: 82,
    label: "Kava",
    ticker_symb: "KAVA\r",
  },
  {
    ID: 83,
    label: "Gala",
    ticker_symb: "GALA\r",
  },
  {
    ID: 84,
    label: "Terra Classic",
    ticker_symb: "LUNC\r",
  },
  {
    ID: 85,
    label: "Amp",
    ticker_symb: "AMP\r",
  },
  {
    ID: 86,
    label: "Gnosis",
    ticker_symb: "GNO\r",
  },
  {
    ID: 87,
    label: "Decred",
    ticker_symb: "DCR\r",
  },
  {
    ID: 88,
    label: "Harmony",
    ticker_symb: "ONE\r",
  },
  {
    ID: 89,
    label: "XDC Network",
    ticker_symb: "XDC\r",
  },
  {
    ID: 90,
    label: "WEMIX",
    ticker_symb: "WEMIX\r",
  },
  {
    ID: 91,
    label: "NEM",
    ticker_symb: "XEM\r",
  },
  {
    ID: 92,
    label: "Arweave",
    ticker_symb: "AR\r",
  },
  {
    ID: 93,
    label: "Fei USD",
    ticker_symb: "FEI\r",
  },
  {
    ID: 94,
    label: "GateToken",
    ticker_symb: "GT\r",
  },
  {
    ID: 95,
    label: "Mina",
    ticker_symb: "MINA\r",
  },
  {
    ID: 96,
    label: "Holo",
    ticker_symb: "HOT\r",
  },
  {
    ID: 97,
    label: "1inch Network",
    ticker_symb: "1INCH\r",
  },
  {
    ID: 98,
    label: "Convex Finance",
    ticker_symb: "CVX\r",
  },
  {
    ID: 99,
    label: "Qtum",
    ticker_symb: "QTUM\r",
  },
  {
    ID: 100,
    label: "Bitcoin Gold",
    ticker_symb: "BTG\r",
  },
];

export default CoinPicker;
