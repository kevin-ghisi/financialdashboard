import { GET_STOCK_DATA, GET_STOCK_LOGO } from './types'

import callServices from "../../services/callServices"

export const getStock = (stock) => async (dispatch) => {
    try {
        const res = await callServices.getStockData(stock);
    
        dispatch({
            type: GET_STOCK_DATA,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const getLogo = (stock) => async (dispatch) => {
    try {
        const res = await callServices.getStockLogo(stock);

        dispatch({
            type: GET_STOCK_LOGO,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};