// import api from './api'
import { api } from './api';

const getStockData = stock => {
    return api.get(`/stock/${stock}/quote?displayPercent=true`, {params:{token: 'pk_9de12f51c43746bd95b4a270e2cba910'}});
};

const getStockLogo = stock => {
    return api.get(`/stock/${stock}/logo`, {params:{token: 'pk_9de12f51c43746bd95b4a270e2cba910'}});
};

const getChartData = stock => {
    return api.get(`/stock/${stock}/chart/dynamic`, 
        {
            params: {
                token: 'pk_9de12f51c43746bd95b4a270e2cba910',
                chartInterval: 30
            }   
        });
};

const callServices = {
    getStockData,
    getStockLogo,
    getChartData
};

export default callServices;