import { GET_CUSTOMER } from "../actions/types";

const initialState = {
    customers : []
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_CUSTOMER:
            return{
                ...state,
                customers: action.payload
            }
        default:
            return state
    }
}