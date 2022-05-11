import axios from "axios";
import { tokenConfig } from "./auth";
import { BASE_URL, GET_CUSTOMER, CREATE_CUSTOMER } from "./types";

const url = `${BASE_URL}api/rooms/customerDetail`;

export const getCustomer = () => (dispatch, getState) => {
  axios
    .get(url, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CUSTOMER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createCustomer = (Customer) => (dispatch, getState) => {
  axios
    .post(url, Customer, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CREATE_CUSTOMER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
