import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Reservation extends Component {
  state = {
    customerId: "",
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-12 reservationHeader">
            <h1 className="">Reservation</h1>
            <Link to="/booking" className="btn btn-danger">
              <i className="fa-solid fa-chevron-left"></i> Back
            </Link>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <Link to="/reservation/new/customer" className="card link">
                  <div className="card-body text-center customerCard">
                    <i class="customIcon fa-solid fa-user-plus"></i>
                    <br />
                    <br />
                    <h2>New Customer</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/reservation/existing/customer" className="card link">
                  <div className="card-body text-center customerCard">
                    <i class="customIcon fa-solid fa-user-check"></i>
                    <br />
                    <br />
                    <h2>Existing Customer</h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
