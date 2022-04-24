import { combineReducers } from "redux";
import auth from "./auth";
import product from "./product";
import supplier from "./supplier";
import purchase from "./purchase";
import floorinventory from "./floorinventory";
import order from "./order";
import retail_dashboard from "./retail_dashboard";
import floorinventory_dashboard from "./floorinventory_dashboard";
import billofmaterial from "./billofmaterial";
import foodorder from "./foodorder";
import customer from "./customer";
export default combineReducers({
    auth,
    product,
    supplier,
    purchase,
    floorinventory,
    order,
    retail_dashboard,
    floorinventory_dashboard,
    billofmaterial,
    foodorder,
    customer
});