import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {buyIceCream} from "../../store/action/IceCreamAction";

const IceCreamContainer = () => {
    const noOfIceCream = useSelector(state => state.iceCream.noOfIceCream)
    const dispatch = useDispatch()

    const buyIceCreamFromStore = ( ) =>{
        dispatch(buyIceCream())
    }
    return (
        <div>
            <h1>No of IceCream {noOfIceCream}</h1>
            <button onClick={buyIceCreamFromStore}>Buy icecream</button>
        </div>
    );
};

export default IceCreamContainer;