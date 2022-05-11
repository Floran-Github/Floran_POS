import { GET_BOOKING,BASE_URL } from "./types";
import { tokenConfig } from "./auth";
import axios from "axios";

const url = `${BASE_URL}api/rooms/booking`

export const getBooking = () => (dispatch,getState) => {
    axios.get(url,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: GET_BOOKING,
                payload: res.data
            })
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
}