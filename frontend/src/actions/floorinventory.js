import { GET_FLOORINV } from "./types";
import axios from "axios";
import { tokenConfig } from "./auth";

const url  = '/api/floorinventory/'

export const getFloorInventoryItems = () => (dispatch,getState) =>{
    axios.get(url,tokenConfig(getState)).then(
        res => {
            dispatch({
                type:GET_FLOORINV,
                payload: res.data
            })
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
}