import axios from "axios";
import { AUTH_ERROR, LOGIN, LOGOUT, REGISTER } from "../actionsTypes/authActionsTypes";

export const register = (user) => async (dispatch) => {
    
    try {

        const res= await axios.post('  http://localhost:3000/users', user);

        dispatch({
            type:REGISTER,
            payload: res.data,
        });

    }catch(error)
      {
        dispatch({
            type:AUTH_ERROR,
            payload: error,
        });
      }
};

export const login = (userData, navigate) => async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:3000/users/");
        const filtredUser = res.data.find( (el) => el.email === userData.email && el.password === userData.password);

        if (filtredUser) {
        dispatch({
            type:LOGIN, //action mteei
            payload: {
                isAuthenticatedd: true,
                user: filtredUser,
                successMessage: "Success",
                errors: false,
            },

        });

        localStorage.setItem("id", filtredUser.id);
        navigate("/profile");

    } else {
        dispatch({
            type: AUTH_ERROR,
            payload: {
                isAuthenticated: false,
                user: {},
                successMessage: false,
                errors: " Invalid Email or Password",
            }
        })
    }
    }catch(error)
    {
      dispatch({
          type:AUTH_ERROR,
          payload: error,
      });
    }
};

export const logout = (navigate) => (dispatch) => {
    sessionStorage.removeItem("id");
    navigate("/");
    dispatch({
        type: LOGOUT,
    });
};

export const currentUser = (id) => async (dispatch) => {

    try {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        // dispatch the action to the reducer
        dispatch({
            type: LOGIN,
            payload: {
                isAuthenticated: true,
                user: res.data,
                successMessage: "Success",
                errors: false,
            }
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error,
        });
    }
};