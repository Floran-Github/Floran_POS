import { GET_CUSTOMER,CREATE_CUSTOMER } from "../actions/types";

const initialState = {
    customers : [],
    customerId: "",
    customerCreated: false,
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_CUSTOMER:
            return{
                ...state,
                customers: action.payload
            }
        case CREATE_CUSTOMER:
            return{
                ...state,
                customers: [...state.customers,action.payload],
                customerId: action.payload.id,
                customerCreated: true
            }
        default:
            return state
    }
}