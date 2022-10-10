import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {buyCake} from "../../store/action/CakeAction";

const BuyNoOfCakeUsingHooks = () => {

    const cake = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()

    const [noOfCake, setCake]= useState(0)

    const buyCakeFromStore = () =>{
        dispatch(buyCake(noOfCake))
    }

    const changeHandler = (e) =>{
        setCake(e.target.value)
    }

    return (
        <div>
            <h1>No of cake available in store {cake}</h1>
            <div>
                <label>Buy no of cake: </label>
                <input type={"number"} name={"noOfCake"} value={noOfCake} onChange={changeHandler}/>
            </div>

            <button onClick={buyCakeFromStore}>Buy Cake</button>
        </div>
    );
};


export default BuyNoOfCakeUsingHooks;