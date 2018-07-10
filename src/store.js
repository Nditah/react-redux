/*
 * src/store.js
 * It holds application state
 * It allows access to state via getState() method 
 * which returns the current state tree of your app.
 * It allows state to be updated via dispatch(action) method 
 * which sends an action, consequently triggering a state change.
 * It registers listeners via subscribe(listener) which adds a change listener.
 * It handles unregistering of listeners via the function returned by subscribe(listener).
*/

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}