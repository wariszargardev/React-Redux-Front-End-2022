import redux, {createStore} from 'redux'
import {cakeReducer} from "./reducer/cakeReducer";
import {logger} from "redux-logger/src";
import {applyMiddleware} from "redux";

const store = createStore(cakeReducer,
    applyMiddleware(logger))

export default store
