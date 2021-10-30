import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

// HOOKS
import Navbar from "./commons/Navbar";
import Mainpage from "./Pages/Mainpage";
import ProductCreate from "./Pages/product/ProductCreate";
import ProductDetail from "./Pages/product/ProductDetail";
import Productpage from "./Pages/product/Productpage";
import CreateHotelDetail from "./users/CreateHotelDetail";
import Login from "./users/Login";
import Register from "./users/Register";
import AuthReqRoute from "./commons/AuthReqRoute";
import { loadProfile, loadUser } from "../actions/auth";
import SupplierPage from "./Pages/supplier/SupplierPage";
import SupplierCreate from "./Pages/supplier/SupplierCreate";
import PurchaseBilling from "./Pages/purchase_billing/PurchaseBilling";
import PurchasePage from "./Pages/purchase_billing/PurchasePage";
import outstatebill from "./Pages/purchase_billing/outstatebill";
import Inventory from "./Pages/restaurant_inventory/Inventory";
import Create_order_page from "./Pages/restaurant_inventory/Create_order_page";
import OrderPage from "./Pages/restaurant_inventory/OrderPage";
import Dashboard from "./Pages/dashboard/Dashboard";
import FloorDashboard from "./Pages/floor inventory dashboard/FloorDashboard";

class App extends Component {
  async componentDidMount() {
    await store.dispatch(loadUser());
    await store.dispatch(loadProfile());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path="/" component={Mainpage}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/createHotel" component={CreateHotelDetail}></Route>
              <Fragment>
                <Navbar />
                <div className=" mainContainer">
                  <AuthReqRoute
                    exact
                    path="/dashboard"
                    component={Dashboard}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/floorinventory"
                    component={FloorDashboard}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/product"
                    component={Productpage}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    path="/product/create"
                    component={ProductCreate}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/product/detail"
                    component={ProductDetail}
                  ></AuthReqRoute>

                  <AuthReqRoute exact path="/supplier" component={SupplierPage}></AuthReqRoute>
                  <AuthReqRoute path="/supplier/create" component={SupplierCreate}></AuthReqRoute>
                  
                  <AuthReqRoute exact path="/purchase" component={PurchasePage}></AuthReqRoute>
                  <AuthReqRoute exact path="/purchase/bill" component={PurchaseBilling}></AuthReqRoute>
                  <AuthReqRoute exact path="/purchase/outstate/inv" component={outstatebill}></AuthReqRoute>
                  <AuthReqRoute exact path="/restaurant/inventory" component={Inventory}></AuthReqRoute>
                  <AuthReqRoute exact path="/restaurant/order" component={OrderPage}></AuthReqRoute>
                  <AuthReqRoute exact path="/restaurant/order/create" component={Create_order_page}></AuthReqRoute>
                </div>
              </Fragment>
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("app"));
