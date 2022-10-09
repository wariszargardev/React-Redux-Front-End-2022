import {BUY_CAKE, RE_STOCK_CAKE} from "../actionType/CakeActionType";

const INITIAL_STATE= {
    noOfCakes: 10
}

export const cakeReducer=(state= INITIAL_STATE, {type, payload})=>{
    switch (type){
        case BUY_CAKE:
            return{
                ...state,
                noOfCakes: state.noOfCakes - payload
            }
        case RE_STOCK_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes + payload
            }
        default:
            return state
    }
}