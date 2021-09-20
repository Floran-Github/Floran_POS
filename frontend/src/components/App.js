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
class App extends Component {
  async componentDidMount() {
    await store.dispatch(loadUser());
    await store.dispatch(loadProfile());
    console.log('compfffa')
  }

  render() {
    console.log('main app fucking')
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
                  <AuthReqRoute exact path="/product" component={Productpage}></AuthReqRoute>
                  <AuthReqRoute path="/product/create" component={ProductCreate}></AuthReqRoute>
                  <AuthReqRoute exact path="/product/detail" component={ProductDetail}></AuthReqRoute>
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
