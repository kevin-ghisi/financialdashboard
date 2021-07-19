import { combineReducers } from 'redux';
import searchReducer from "./search";

const reducers = combineReducers({
    searchReducer: () => [],
});

export default reducers;