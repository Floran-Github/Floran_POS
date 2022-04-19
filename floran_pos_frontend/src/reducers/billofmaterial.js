import { DETAIL_BILL_OF_MATERIAL, GET_BILL_OF_MATERIAL } from "../actions/types";

const initialState = {
  billOfMaterial: [],
  bomDetail: [],
  floorItem: [],
  kitchenItem: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BILL_OF_MATERIAL:
      return {
        ...state,
        billOfMaterial: action.payload,
      };
    case DETAIL_BILL_OF_MATERIAL:
        return{
            ...state,
            ...action.payload
        }

    default:
      return state;
  }
}
