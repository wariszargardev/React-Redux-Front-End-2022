import redux, {createStore} from 'redux'
// import {cakeReducer} from "./reducer/cakeReducer";
import {logger} from "redux-logger/src";
import {applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

// const store = createStore(cakeReducer,
//     applyMiddleware(logger))

const store = createStore(rootReducer, applyMiddleware(thunk,logger))

export default store
