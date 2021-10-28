import { GET_FLOORINV } from "../actions/types";
const initialState = {
    floorinventory : [],
    invPrdData : [],
}

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