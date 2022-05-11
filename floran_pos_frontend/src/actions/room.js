import { GET_ROOM,BASE_URL } from "./types";
import axios from "axios";
import { tokenConfig } from "./auth";

const url = `${BASE_URL}api/rooms/room`;

export const getRooms = () => (dispatch,getState) => {
    axios.get(url,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: GET_ROOM,
                payload: res.data
            })
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
}