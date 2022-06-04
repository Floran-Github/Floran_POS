import { GET_ROOM, BASE_URL, GET_ROOM_TYPE, CREATE_ROOM_TYPE } from "./types";
import axios from "axios";
import { tokenConfig } from "./auth";

const url = `${BASE_URL}api/rooms/`;

export const getRooms = () => (dispatch, getState) => {
  axios
    .get(`${url}room`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ROOM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getRoomTypes = () => (dispatch, getState) => {
  axios
    .get(`${url}type`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ROOM_TYPE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createRoomType = (Roomtype) => (dispatch, getState) => {
  axios
    .post(`${url}type`, Roomtype, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CREATE_ROOM_TYPE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
