import { GET_STOCK_CHART, GET_STOCK_DATA, GET_STOCK_LOGO, SET_CHANGE, ADD_RECENT_STOCK, ADD_FAVORITE_STOCK, REMOVE_FAVORITE_STOCK } from '../actions/types'

const initialState = {
    logo: {
        
    },
    stockData: {

    },
    chartData: [],
    isChangePositive: null,
    recentStocks: [],
    favoriteStocks: [],
}

function mainReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case GET_STOCK_DATA:
            return {
                ...state,
                stockData: [payload],
            }

        case SET_CHANGE:
            return {
                ...state,
                isChangePositive: payload,
            }
  
        case GET_STOCK_LOGO:
            return {
                ...state,
                logo: payload,
            }

        case GET_STOCK_CHART:
            return {
                ...state,
                chartData: payload.data,
            }

        case ADD_FAVORITE_STOCK:
            return {
                ...state,
                favoriteStocks: [
                    ...state.favoriteStocks,
                    {
                        payload,
                        logo: state.logo,
                        isPositive: state.isChangePositive
                    }
                ]
            }

        case ADD_RECENT_STOCK:
        return {
            ...state,
            recentStocks: [
                ...state.recentStocks,
                {
                    stock: state.stockData[0],
                    logo: state.logo,
                    isPositive: state.isChangePositive
                }
            ]
        }

        default:
            return state;
    }
};
  
export default mainReducer;