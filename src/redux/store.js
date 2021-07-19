import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import reducers from "./reducers";
import searchReducer from "./reducers/search";

const initialState = {
    logo: {
        "url": "https://storage.googleapis.com/iex/api/logos/AAPL.png"
    },
    stockData: [{
        "symbol": "AAPL",
        "companyName": "Apple Inc.",
        "primaryExchange": "NEW YORK STOCK EXCHANGE, INC.",
        "calculationPrice": "close",
        "open": 28.81,
        "openTime": 1607437801023,
        "openSource": "official",
        "close": 28.81,
        "closeTime": 1607461201852,
        "closeSource": "official",
        "high": 29.12,
        "highTime": 1607461198592,
        "highSource": "15 minute delayed price",
        "low": 27.68,
        "lowTime": 1607437803011,
        "lowSource": "15 minute delayed price",
        "latestPrice": 28.81,
        "latestSource": "Close",
        "latestTime": "December 8, 2020",
        "latestUpdate": 1607461201852,
        "latestVolume": 33820759,
        "iexRealtimePrice": 28.815,
        "iexRealtimeSize": 100,
        "iexLastUpdated": 1607461192396,
        "delayedPrice": 28.82,
        "delayedPriceTime": 1607461198592,
        "oddLotDelayedPrice": 28.82,
        "oddLotDelayedPriceTime": 1607461198391,
        "extendedPrice": 28.93,
        "extendedChange": 0.04,
        "extendedChangePercent": 0.00137,
        "extendedPriceTime": 1607471631362,
        "previousClose": 29.49,
        "previousVolume": 42197768,
        "change": -0.16,
        "changePercent": -0.0045,
        "volume": 33820759,
        "iexMarketPercent": 0.01709376134658947,
        "iexVolume": 578127,
        "avgTotalVolume": 60029202,
        "iexBidPrice": 0,
        "iexBidSize": 0,
        "iexAskPrice": 0,
        "iexAskSize": 0,
        "iexOpen": 28.815,
        "iexOpenTime": 1607461192355,
        "iexClose": 28.815,
        "iexCloseTime": 1607461192355,
        "marketCap": 2502673458439,
        "peRatio": 14.23,
        "week52High": 34.68,
        "week52Low": 17.50,
        "ytdChange": -0.1573975163337491,
        "lastTradeTime": 1607461198587,
        "isUSMarketOpen": false
    }]
}

const middleware = [thunk];

const store = createStore(
    searchReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;