import React from 'react';
import {buyCake} from "../../store/action/CakeAction";
import {connect} from "react-redux";

const CakeContainer = (props) => {
    const {noOfCakes, buyCake} = props
    const buyCakeFromStore = (e) =>{
        buyCake()
    }
    return (
        <div>
            <h1>Number of cake {noOfCakes}</h1>
            <button onClick={buyCakeFromStore}>Buy cake</button>
        </div>
    );
};
const mapStateToProps = (state)=>{
    return{
        noOfCakes: state.cake.noOfCakes
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);