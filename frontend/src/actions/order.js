import { GET_ORDER } from "./types";
import axios from "axios";
import { tokenConfig } from "./auth";

const url = '/api/floorinventory/order/'

export const getOrders = () => (dispatch,getState) =>{
    axios.get(url,tokenConfig(getState)).then(
        res => {
            dispatch({
                type:GET_ORDER,
                payload: res.data
            })
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
}

export const createOrder = Order => (dispatch,getState) =>{
    axios.post(url,Order,tokenConfig(getState)).then(
        res => {
            console.log(res.data)
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
}