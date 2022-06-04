import { CREATE_ROOM_TYPE, GET_ROOM, GET_ROOM_TYPE } from "../actions/types";

const initialState = {
  rooms: [],
  roomType: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROOM:
      return {
        ...state,
        rooms: action.payload,
      };

    case GET_ROOM_TYPE:
      return {
        ...state,
        roomType: action.payload
      }
    case CREATE_ROOM_TYPE:
      return {
        ...state,
        roomType: [...state.roomType,action.payload]
      }
    default:
      return state;
  }
}
