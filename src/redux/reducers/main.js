import { GET_STOCK_CHART, GET_STOCK_DATA, SET_CHANGE, ADD_RECENT_STOCK, ADD_FAVORITE_STOCK, REMOVE_FAVORITE_STOCK } from '../actions/types'

const initialState = {
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
                        id: Math.random(),
                        payload,
                        isPositive: state.isChangePositive
                    }
                ]
            }

        case REMOVE_FAVORITE_STOCK:
            const newFavorites = state.favoriteStocks.filter(a => a.id !== payload)
            // "Mutate" the existing state to save the new array
            return {
                ...state,
                favoriteStocks: newFavorites
            }

        case ADD_RECENT_STOCK:
            return {
                ...state,
                recentStocks: [
                    ...state.recentStocks,
                    {
                        id: Math.random(),
                        ...state.stockData[0],
                        isPositive: state.isChangePositive
                    }
                ]
            }

        default:
            return state;
    }
};
  
export default mainReducer;