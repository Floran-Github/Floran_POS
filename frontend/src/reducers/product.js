import { GET_PRODUCT,CREATE_PRODUCT,DELETE_PRODUCT,UPDATE_PROUCT } from "../actions/types";
const initialState = {
    products: [],
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_PRODUCT:
            return{
                ...state,
                products: action.payload
            };
        case CREATE_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload]
            };
        case DELETE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id != action.payload)
            };
        case UPDATE_PROUCT:
            return{
                ...state,
                products: state.products.map(
                    (product) => product.id === action.payload.id ? action.payload : product
                )
            }
        default:
            return state
    }
}
