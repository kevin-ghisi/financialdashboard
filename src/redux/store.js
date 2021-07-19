import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import mainReducer from "./reducers/main";

const initialState = {
    logo: {
        "url": "https://storage.googleapis.com/iex/api/logos/AAPL.png"
    },
    stockData: [{
        "symbol": "---",
        "companyName": "---",
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
        "latestPrice": 0,
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
        "change": 0,
        "changePercent": 0,
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
    }],
    chartData: [
        {"date":"2021-07-19","minute":"09:30","label":"09:30 AM","high":65.49,"low":65.38,"open":0,"close":65.42,"average":65.436,"volume":843,"notional":55162.17,"numberOfTrades":13},
        {"date":"2021-07-19","minute":"09:31","label":"09:31 AM","high":65.49,"low":65.445,"open":0,"close":65.49,"average":65.472,"volume":300,"notional":19641.5,"numberOfTrades":3},
        {"date":"2021-07-19","minute":"09:32","label":"09:32 AM","high":65.55,"low":65.4,"open":0,"close":65.45,"average":65.477,"volume":637,"notional":41708.57,"numberOfTrades":6},
        {"date":"2021-07-19","minute":"09:33","label":"09:33 AM","high":65.43,"low":64.94,"open":0,"close":64.94,"average":65.251,"volume":3227,"notional":210564.475,"numberOfTrades":49},
        {"date":"2021-07-19","minute":"09:34","label":"09:34 AM","high":65.03,"low":64.82,"open":0,"close":64.99,"average":64.937,"volume":3671,"notional":238382.48,"numberOfTrades":26},
        {"date":"2021-07-19","minute":"09:35","label":"09:35 AM","high":65.23,"low":64.89,"open":0,"close":65.16,"average":65.105,"volume":1609,"notional":104754.52,"numberOfTrades":16},
        {"date":"2021-07-19","minute":"09:36","label":"09:36 AM","high":65.36,"low":65.08,"open":0,"close":65.34,"average":65.293,"volume":2532,"notional":165323.1,"numberOfTrades":20},
        {"date":"2021-07-19","minute":"09:37","label":"09:37 AM","high":65.32,"low":65.23,"open":0,"close":65.23,"average":65.28,"volume":1506,"notional":98311.7,"numberOfTrades":23},
        {"date":"2021-07-19","minute":"09:38","label":"09:38 AM","high":65.27,"low":65.07,"open":0,"close":65.07,"average":65.185,"volume":2334,"notional":152141.61,"numberOfTrades":23},
        {"date":"2021-07-19","minute":"09:39","label":"09:39 AM","high":65.07,"low":64.92,"open":0,"close":64.94,"average":65.004,"volume":2448,"notional":159130.35,"numberOfTrades":38},
        {"date":"2021-07-19","minute":"09:40","label":"09:40 AM","high":65.01,"low":64.88,"open":0,"close":65.01,"average":64.912,"volume":2953,"notional":191683.79,"numberOfTrades":36
    }],
    isChangePositive: null,
    recentStocks: [],
    favoriteStocks: [],
}

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({trace: true});
const store = createStore(
    mainReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
)

export default store;