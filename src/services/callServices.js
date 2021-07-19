// import api from './api'
import { api } from './api';

const getStockData = stock => {
    return api.get(`/stock/${stock}/quote?displayPercent=true`, {params:{token: 'pk_9de12f51c43746bd95b4a270e2cba910'}});
};

const getStockLogo = stock => {
    return api.get(`/stock/${stock}/logo`, {params:{token: 'pk_9de12f51c43746bd95b4a270e2cba910'}});
};

const callServices = {
    getStockData,
    getStockLogo
};

export default callServices;