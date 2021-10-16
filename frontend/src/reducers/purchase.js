import { GET_PURCHASE,CREATE_PURCHASE,DELETE_PURCHASE,UPDATE_PURCHASE } from "../actions/types";
const initialState = {
    instate_data: [],
    outstate_data: [],
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_PURCHASE:
            return{
                ...state,
                ...action.payload
            };
        
        case CREATE_PURCHASE:
            return{
                ...state,
                purchaseDetail: [...state.purchaseDetail,action.payload]
            }
        default:
            return state
    }
}