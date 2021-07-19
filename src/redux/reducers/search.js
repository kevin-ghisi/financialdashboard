import { GET_STOCK_DATA, GET_STOCK_LOGO } from '../actions/types'

const initialState = {
    logo: {
        
    },
    stockData: {

    }
}

function searchReducer(search = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case GET_STOCK_DATA:
            console.log(payload)
            return {
                ...search,
                stockData: [payload],
            }
  
        case GET_STOCK_LOGO:
            return {
                ...search,
                logo: payload,
            }

        default:
            return search;
    }
};
  
export default searchReducer;