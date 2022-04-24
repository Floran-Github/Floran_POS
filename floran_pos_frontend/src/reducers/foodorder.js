import { GET_MENU, CREATE_ORDER } from "../actions/types";

const initialState = {
    veg : [],
    nonVeg: [],
    drink: [],
    combo: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_MENU:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}