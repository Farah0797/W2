import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { register } from "../JS/actions/authActions";

export default function RegisterForm() {

    

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const dispatch = useDispatch();
    return (
        <div className="app">
            <form >
            <h1>Register</h1>
            <input name="username"  placeholder="UserName" onChange={handleChange} />
            <input name="email" placeholder="E-mail" onChange={handleChange} />
            <input name="password" placeholder="Password" onChange={handleChange} />
            <input name="firstname" placeholder="FirstName" onChange={handleChange} />
            <input name="lastname" placeholder="LastName" onChange={handleChange} />
            
            <button
            onClick={() => {
                dispatch(register( user,dispatch));
            }}>Regsiter</button>
            </form>
        </div>
    );
    
}