import { GET_BOOKING } from "../actions/types";

const initialState = {
  date: [],
  bookingDetail: [],
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKING:
      return {
        ...state,
        ...action.payload
      };
    default:
        return state
  }
}
