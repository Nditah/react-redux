/*
 * src/reducers/rootReducer.js
 * It combines all reducers in the app into a single index reducer.
*/

import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';

export default combineReducers({
    simpleReducer
});