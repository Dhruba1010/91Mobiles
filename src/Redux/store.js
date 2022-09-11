import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as AppReducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    AuthReducer, AppReducer
});

const composeEnhancer = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));