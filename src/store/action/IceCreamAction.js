import {BUY_ICE_CREAM} from "../actionType/IceCreamActionTYpes";

export const buyIceCream = (quantity= 1)=>{
    return{
        type: BUY_ICE_CREAM,
        payload: quantity
    }
}