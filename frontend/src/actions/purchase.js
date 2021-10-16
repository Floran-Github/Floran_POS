import { GET_PURCHASE,CREATE_PURCHASE,DELETE_PURCHASE,UPDATE_PURCHASE } from "../actions/types";
import axios from "axios";
import { tokenConfig } from "./auth";

const url = '/api/purchase/';

export const getPurchase = () => (dispatch,getState) => {
    axios.get(url,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: GET_PURCHASE,
                payload: res.data
            })
        }
    )
}



export const createPurchase = Bill => (dispatch,getState) => {
    axios.post('/api/purchase/',Bill,tokenConfig(getState)).then(
        res => {
            console.log(res.data)
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
}