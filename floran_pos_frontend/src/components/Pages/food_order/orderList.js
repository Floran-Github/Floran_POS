import React, { Component } from "react";

export class orderList extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <h1>Orders</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <h4 className="col-12">
                    <u>Order No: 1</u>
                  </h4>
                  <div className="col-12">
                    <div className="row">
                      <h3 className="col-6">
                        <b>Customer Name:</b>
                      </h3>
                      <h3 className="col-6">Khan Farhan</h3>
                    </div>
                  </div>
                  <div className="col-12">
                    <h2>Order Items</h2>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-8">
                        <h3>Burger</h3>
                      </div>
                      <div className="col-4">Qty: 1</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-8">
                        <h3>Cream Pasta</h3>
                      </div>
                      <div className="col-4">Qty: 1</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-8">
                        <h3>Small Cola</h3>
                      </div>
                      <div className="col-4">Qty: 1</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <button className="btn btn-primary">
                            Preparing
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <button className="btn btn-success">
                            Prepared
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default orderList;
