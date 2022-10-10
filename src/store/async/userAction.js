import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./userActionType";

export const fetchUserRequest =()=>{
    return{
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (data) =>{
    return{
        type: FETCH_USER_SUCCESS,
        payload: data
    }
}

export const fetchUserFailure= (error) =>{
    return{
        type: FETCH_USER_FAILURE,
        payload: error
    }
}


export const fetchUsers = () =>{
    return (dispatch) =>{
        dispatch(fetchUserRequest())
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                dispatch(fetchUserSuccess(data))
            })
            .catch((error)=>{
                dispatch(fetchUserFailure(error.message))
            })
    }
}