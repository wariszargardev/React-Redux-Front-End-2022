import React, {useState} from 'react';
import {buyCake} from "../../store/action/CakeAction";
import {connect} from "react-redux";

const BuyNoOfCake = (props) => {
    const [noOfCake, setCake]= useState(0)
    const buyCakeFromStore = () =>{
        props.buyCake(noOfCake)
    }

    const changeHandler = (e) =>{
        setCake(e.target.value)
    }
    return (
        <div>
            <h1>No of cake available in store {props.cake}</h1>
            <div>
                <label>Buy no of cake: </label>
                <input type={"number"} name={"noOfCake"} value={noOfCake} onChange={changeHandler}/>
            </div>

            <button onClick={buyCakeFromStore}>Buy Cake</button>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cake: state.noOfCakes
    }
}

const mapDisPatchToProps = (dispatch) =>{
    return{
        buyCake: (quantity) => dispatch(buyCake(quantity))
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(BuyNoOfCake);