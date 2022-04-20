import { GET_BILL_OF_MATERIAL,BASE_URL, DETAIL_BILL_OF_MATERIAL } from "./types";
import axios from "axios";
import { tokenConfig } from "./auth";

const url = `${BASE_URL}api/billOfMaterial`;

export const getBillOfMaterial = () => (dispatch,getState) => {
    axios.get(url,tokenConfig(getState)).then(
        res => {
            console.log(res.data)
            dispatch({
                type:GET_BILL_OF_MATERIAL,
                payload:res.data
            })
        }
    ).catch(
        err => {
            console.log(err);
        }
    )
}

export const retreiveBillOfMaterial = (id) => (dispatch,getState) => {
    axios.get(`${url}/${id}`,tokenConfig(getState)).then(
        res => {
         dispatch({
             type: DETAIL_BILL_OF_MATERIAL,
             payload:res.data
         })   
        }
    )
}

