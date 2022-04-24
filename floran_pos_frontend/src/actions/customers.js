import axios from "axios";
import { tokenConfig } from "./auth";
import { BASE_URL, GET_CUSTOMER } from "./types";

const url = `${BASE_URL}api/rooms`

export const getCustomer = () => (dispatch,getState) => {
    axios.get(`${url}/customerDetail`,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: GET_CUSTOMER,
                payload: res.data
            })
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
}