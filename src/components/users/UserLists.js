import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchUsers} from "../../store/async/userAction";

const UserLists = () => {
    const {error, loading, users} = useSelector(state => state.users )
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            {loading ?
                "Loading Data" :
                users.map((user, index)=>(
                    <div>
                        <p><b>ID: </b>{user.id}</p>
                        <p><b>Name: </b>{user.name}</p>
                        <p><b>Email: </b>{user.email}</p>
                    </div>
                ))
            }

            {error ? error : ""}
        </div>
    );
};

export default UserLists;