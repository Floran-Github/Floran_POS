import axios from "axios";
import { tokenConfig } from "./auth";
import { BASE_URL, GET_MENU } from "./types";

const url = `${BASE_URL}api/restaurant`

export const getMenu = () => (dispatch,getState) => {
    axios.get(`${url}/order`,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: GET_MENU,
                payload: res.data
            })
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
}