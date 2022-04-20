import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { loadProfile, loadUser } from "./actions/auth";

import Navbar from "./components/commons/Navbar";
import Mainpage from "./components/Pages/Mainpage";
import ProductCreate from "./components/Pages/product/ProductCreate";
import ProductDetail from "./components/Pages/product/ProductDetail";
import Productpage from "./components/Pages/product/Productpage";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import AuthReqRoute from "./components/commons/AuthReqRoute";
import SupplierPage from "./components/Pages/supplier/SupplierPage";
import SupplierCreate from "./components/Pages/supplier/SupplierCreate";
import PurchaseBilling from "./components/Pages/purchase_billing/PurchaseBilling";
import PurchasePage from "./components/Pages/purchase_billing/PurchasePage";
import outstatebill from "./components/Pages/purchase_billing/outstatebill";
import Inventory from "./components/Pages/restaurant_inventory/Inventory";
import Create_order_page from "./components/Pages/restaurant_inventory/Create_order_page";
import OrderPage from "./components/Pages/restaurant_inventory/OrderPage";
import Dashboard from "./components/Pages/dashboard/Dashboard";
import FloorDashboard from "./components/Pages/floor inventory dashboard/FloorDashboard";
import instatebill from "./components/Pages/purchase_billing/instatebill";
import RoomDashboard from "./components/Pages/hotel room booking/RoomDashboard";
import RoomEdit from "./components/Pages/hotel room booking/RoomEdit";
import bomListPage from "./components/Pages/bill_of_material/bomListPage";
import bomDetailPage from "./components/Pages/bill_of_material/bomDetailPage";
import bomCreatePage from "./components/Pages/bill_of_material/bomCreatePage";
import bomDashboard from "./components/Pages/bill_of_material/bomDashboard";

export class App extends Component {
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

                  <AuthReqRoute
                    exact
                    path="/supplier"
                    component={SupplierPage}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    path="/supplier/create"
                    component={SupplierCreate}
                  ></AuthReqRoute>

                  <AuthReqRoute
                    exact
                    path="/purchase"
                    component={PurchasePage}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/purchase/bill"
                    component={PurchaseBilling}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/purchase/outstate/:id"
                    component={outstatebill}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/purchase/instate/:id"
                    component={instatebill}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/restaurant/inventory"
                    component={Inventory}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/restaurant/order"
                    component={OrderPage}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/restaurant/order/create"
                    component={Create_order_page}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/rooms/dashboard"
                    component={RoomDashboard}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/rooms/edit"
                    component={RoomEdit}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/billOfMaterial"
                    component={bomListPage}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/billOfMaterial/dashboard"
                    component={bomDashboard}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/billOfMaterial/create"
                    component={bomCreatePage}
                  ></AuthReqRoute>
                  <AuthReqRoute
                    exact
                    path="/billOfMaterial/detail/:id"
                    component={bomDetailPage}
                  ></AuthReqRoute>
                </div>
              </Fragment>
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
