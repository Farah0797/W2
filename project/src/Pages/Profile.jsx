import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../JS/actions/authActions";

export default function Profile() {
    
    const id = sessionStorage.getItem("id");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentUser(id, dispatch));
    }, [dispatch, id]);

    const user = useSelector((state) => state.authReducer.user);
    return <div>
        <h1>Profile</h1>
        {user && (
            <>
            <h2>{user.email}</h2>
            </>
        )};
        
        </div>;
};

