import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {buyCake} from "../../store/action/CakeAction";

const HooksCakeContainer = () => {
    const noOfCakes = useSelector((state)=> state.cake.noOfCakes)
    const dispatch = useDispatch()

    const buyOneCake = () => {
        dispatch(buyCake())
    }
    return (
        <div>
            <h1>No.of cakes {noOfCakes}</h1>
            <button onClick={buyOneCake}>Buy one Cake</button>
        </div>
    );
};

export default HooksCakeContainer;