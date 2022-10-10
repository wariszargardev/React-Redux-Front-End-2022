import {BUY_ICE_CREAM} from "../actionType/IceCreamActionTYpes";

const initialState = {
    noOfIceCream: 20
}

export const iceCreamReducer = (state= initialState, action) =>{
    switch (action.type){
        case BUY_ICE_CREAM:
            return{
                noOfIceCream: state.noOfIceCream - action.payload
            }
        default:
            return state
    }
}