import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import logger from 'redux-logger';


export const middleware = [logger];

export const store = createStore(allReducers, applyMiddleware(...middleware));

export default store;