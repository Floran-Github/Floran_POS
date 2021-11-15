import axios from 'axios';
import { AUTH_ERROR,USER_LOADED,USER_LOADING,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT_SUCCESS,REGISTER_SUCCESS,REGISTER_FAIL,PROFILE_FAIL,PROFILE_SUCCESS } from "./types";
import { BASE_URL } from './types';
// settting up config
const url = `${BASE_URL}api/auth/`

export const tokenConfig = getState => {
    const token = getState().auth.token;

    //header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // if token, add to headers config
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config
}


// LoadUser function that will be called whenever new website is loaded for user authentication purpose
export const loadUser = () => (dispatch,getState) => {
    dispatch({ type: USER_LOADING});

    axios.get(`${url}user`,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }
    ).catch(
        err => {
            dispatch({
                type: AUTH_ERROR
            })
        }
    )
    

}

export const loadProfile = () => (dispatch,getState) => {
    axios.get(`${url}hotel_detail/`,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: PROFILE_SUCCESS,
                payload: res.data
            })
        }
    ).catch(
        err => {
            dispatch({
                type:PROFILE_FAIL
            })
        }
    )
}
// 
export const profileLoad = () => (dispatch,getState) => {
    axios.get(`${url}hotel_detail/`,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: PROFILE_SUCCESS,
                payload: res.data
            })
        }).catch(
            err => {
            dispatch({
                type:PROFILE_FAIL
            })
        }
    )
}

// Login function
export const login = (username,password) => (dispatch,getState) =>{
    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request Body
    const body = JSON.stringify({
        username,
        password
    })
   
    axios.post(`${url}login`,body,config).then(
        res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }
    ).catch(
        err => {
            dispatch({
                type: LOGIN_FAIL
            });
    })
}

//logout user
export const logout = () => (dispatch,getState) => {

    axios.post(`${url}logout/`,null,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: LOGOUT_SUCCESS,
            })
        }
    ).catch(
        err => {
            dispatch({
                type:AUTH_ERROR
            })
        }
    )
}

// register 
export const register = ({ username, password , email}) => dispatch =>{
    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request Body

    const body = JSON.stringify({
        username,
        password,
        email
    })
   

    axios.post(`${url}register/`,body,config)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        // dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: REGISTER_FAIL
        });
    })
}

//Create Profile 
export const createProfile = Profile => (dispatch,getState) => {
    axios.post(`${url}hotel_detail/`,Profile,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: PROFILE_SUCCESS,
                payload: res.data
            })
        }
    ).catch(
        dispatch({
            type: PROFILE_FAIL
        })
    )
}

