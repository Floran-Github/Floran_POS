import { GET_PRODUCT,CREATE_PRODUCT,DELETE_PRODUCT,UPDATE_PROUCT } from "./types"
import axios from "axios";
import { tokenConfig } from "./auth";

const url = '/api/product/'

export const getProducts = () => (dispatch,getState) =>{
    console.log('product get call')
    axios.get(url,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            })
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
}

export const createProduct = Product => (dispatch,getState) => {
    console.log('product create call')
    console.log (Product)
    axios.post('/api/product/',Product,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: CREATE_PRODUCT,
                payload: res.data
            })
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
}
export const updateProduct = Product => (dispatch,getState) => {
    axios.patch(url,Product,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: UPDATE_PROUCT,
                payload: res.data
            })
        }
    ).catch(
        err => {
            console.log(err)
        }
    )
}

export const deleteProduct = (id) => (dispatch,getState) => {
    axios.delete(url+`${id}/` ,tokenConfig(getState)).then(
        res => {
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            });
        }
    ).catch( err => console.log(err))
}