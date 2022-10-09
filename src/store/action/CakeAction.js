import {BUY_CAKE, RE_STOCK_CAKE} from "../actionType/CakeActionType";

export const buyCake=(quantity= 1)=>{
    return{
        type: BUY_CAKE,
        payload: quantity
    }
}

export const reStockCake =(quantity=1) =>{
    return{
        type: RE_STOCK_CAKE,
        payload: quantity
    }
}