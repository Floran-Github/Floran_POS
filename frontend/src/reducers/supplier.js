import { GET_SUPPLIER,CREATE_SUPPLIER,UPDATE_SUPPLIER,DELETE_SUPPLIER } from "../actions/types";

const initialState = {
    suppliers : [],
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_SUPPLIER:
            return{
                ...state,
                suppliers: action.payload
            };
        case CREATE_SUPPLIER:
            return{
                ...state,
                suppliers: [...state.suppliers,action.payload]
            }
        case UPDATE_SUPPLIER:
            return{
                ...state,
                suppliers: state.suppliers.map(
                    (sup) => sup.id === action.payload.id ? action.payload : sup
                )
            }
        case DELETE_SUPPLIER:
            return{
                ...state,
                suppliers: state.suppliers.filter(sup => sup.id != action.payload)
            }
        
        default:
            return state
    }
}