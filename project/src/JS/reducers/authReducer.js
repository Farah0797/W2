import { AUTH_ERROR, LOGIN, LOGOUT, REGISTER } from "../actionsTypes/authActionsTypes";

const initialState = {

    isAuthenticated: false,
    user: {},
    successMessage: "false",
    errors: false,
};

export const authReducer = ( state = initialState, action ) => {

    switch (action.type) {
       
        case LOGIN:
            return{ ...state,
            isAuthenticated: action.payload.isAuthenticated,
            user: action.payload.user,
            successMessage: action.payload.successMessage,
            errors: action.payload.errors,
        };

        case REGISTER:
            return{ ...state, users: action.payload};

        case LOGOUT:
            return {};

        case AUTH_ERROR:
                return {
                    ...state,
                    isAuthenticated: action.payload.isAuthenticated,
                    user: action.payload.user,
                    successMessage: action.payload.successMessage,
                    errors: action.payload.errors,
                };

        case 'CURRENT_USER':
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user,

            }

        default:

        return state;   
    }
    
};