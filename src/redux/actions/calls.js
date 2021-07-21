import { GET_STOCK_CHART, GET_STOCK_DATA, GET_STOCK_LOGO, SET_CHANGE, ADD_FAVORITE_STOCK, ADD_RECENT_STOCK, REMOVE_FAVORITE_STOCK } from './types'

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

        dispatch({
            type: ADD_RECENT_STOCK,
            payload: res.data,
        });
    } catch (err) {
        alert("Código de ação ("+stock+") não encontrado!");
        console.log(err);
    }

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

// export const getLogo = (stock) => async (dispatch) => {
//     try {
//         const res = await callServices.getStockLogo(stock);

//         dispatch({
//             type: GET_STOCK_LOGO,
//             payload: res.data,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };

// export const getChart = (stock) => async (dispatch) => {
//     try {
//         const res = await callServices.getChartData(stock);

//         dispatch({
//             type: GET_STOCK_CHART,
//             payload: res.data,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };

export const addFavorite = (stock) => (dispatch) => {
    dispatch({
        type: ADD_FAVORITE_STOCK,
        payload: stock,
    });
};

export const removeFavorite = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_FAVORITE_STOCK,
        payload: id,
    });
};

// export const addRecent = (stock) => (dispatch) => {
//     dispatch({
//         type: ADD_RECENT_STOCK,
//         payload: stock,
//     });
// };

export function formatNumber(value) {
    const number = value.toFixed(2);
    return number;
}

export function formatName(name) {
    const text = name.replace(/ .*/, '');
    return text;
}