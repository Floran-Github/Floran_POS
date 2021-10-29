import { combineReducers } from "redux";
import auth from "./auth";
import product from "./product";
import supplier from "./supplier";
import purchase from "./purchase";
import floorinventory from "./floorinventory";
import order from "./order";
export default combineReducers({
    auth,
    product,
    supplier,
    purchase,
    floorinventory,
    order
});