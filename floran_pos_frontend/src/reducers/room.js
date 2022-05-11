import { GET_ROOM } from "../actions/types";

const initialState = {
  rooms: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROOM:
      return {
        ...state,
        rooms: action.payload,
      };
    default:
      return state;
  }
}
