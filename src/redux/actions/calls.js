import { GET_STOCK_CHART, GET_STOCK_DATA, GET_STOCK_LOGO, SET_CHANGE, ADD_FAVORITE_STOCK, ADD_RECENT_STOCK } from './types'

import callServices from "../../services/callServices"

export const getStock = (stock) => async (dispatch) => {
    try {
        const res = await callServices.getStockData(stock);

        if (Math.sign(res.data.change) === 1 || Math.sign(res.data.change) === 0) {
            dispatch({
                type: SET_CHANGE,
                payload: true,
            });
        } else {
            dispatch({
                type: SET_CHANGE,
                payload: false,
            });
        }
    
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

export const getChart = (stock) => async (dispatch) => {
    try {
        const res = await callServices.getChartData(stock);

        dispatch({
            type: GET_STOCK_CHART,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const addFavorite = (stock) => (dispatch) => {
    dispatch({
        type: ADD_FAVORITE_STOCK,
        payload: stock,
    });
};

export const addRecent = (stock) => (dispatch) => {
    dispatch({
        type: ADD_RECENT_STOCK,
        payload: stock,
    });
};