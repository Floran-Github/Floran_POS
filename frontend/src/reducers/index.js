import { combineReducers } from "redux";
import auth from "./auth";
import product from "./product";
import supplier from "./supplier";
export default combineReducers({
    auth,
    product,
    supplier
});