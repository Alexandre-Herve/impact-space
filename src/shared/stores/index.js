import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerStateReducer } from 'redux-react-router';
import * as appReducers from '../reducers';
import promise from '../middleware/promise';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);
const reducers = {router: routerStateReducer, ...appReducers};
const app = combineReducers(reducers);


export default createStoreWithMiddleWare(app);
