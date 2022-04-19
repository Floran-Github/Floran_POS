import { GET_FLOORINV } from "../actions/types";
const initialState = {
    floorinventory : []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action){
    switch(action.type){
        case GET_FLOORINV:
            return{
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}