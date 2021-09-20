import { AUTH_ERROR,USER_LOADED,USER_LOADING,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT_SUCCESS,REGISTER_SUCCESS,REGISTER_FAIL,PROFILE_FAIL,PROFILE_SUCCESS } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    profileExists:null,
    user: null,
    user_profile: null
}

export default function(state=initialState, action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading: true
            }

        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user:action.payload
            }

        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {
                    ...state,
                    token: null,
                    user: null,
                    user_profile: null,
                    profileExists:false,
                    isAuthenticated: false,
                    isLoading: false
                }
                
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        
        case PROFILE_SUCCESS:
            return{
                ...state,
                user_profile: action.payload,
                profileExists:true,
            }
        case PROFILE_FAIL:
            return{
                ...state,
                user_profile: null,
                profileExists:false,
            }

        default:
            return state;
    }
}