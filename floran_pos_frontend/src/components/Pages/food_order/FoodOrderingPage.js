import React, { Component } from "react";
import { getMenu } from "../../../actions/foodorder";
import { getCustomer } from "../../../actions/customers";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export class FoodOrderingPage extends Component {
  state = {
    isCustomerSelected: false,

    customerName: "",
    customerId: "",

    bomItem: [],
    comboItem: [],
    orderItem: [],

    totalAmount: 0,
  };

  static propTypes = {
    veg: PropTypes.array.isRequired,
    nonVeg: PropTypes.array.isRequired,
    drink: PropTypes.array.isRequired,
    combo: PropTypes.array.isRequired,
    customers: PropTypes.array.isRequired,
    getCustomer: PropTypes.func.isRequired,
    getMenu: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (this.props.customers.length === 0) {
      this.props.getCustomer();
    }
    this.props.getMenu();
  }

  selectCustomer = (e) => {
    console.log(e.target.value);
    console.log(e.target.options[e.target.selectedIndex].text);
    this.setState({
      customerName: e.target.options[e.target.selectedIndex].text,
      customerId: e.target.value,
      isCustomerSelected: true,
    });
  };

  addItem = (data,type) => {
    let orderList = this.state.orderItem;
    orderList.push(data);
    let vegList = this.state.veg;
    let nonvegList = this.state.nonVeg;
    let drinkList = this.state.drink;
    let comboList = this.state.combo;
    let total = this.state.totalAmount;

    if(type === "nonveg"){
      nonvegList.push(data)
    } else if(type === "veg"){
      vegList.push(data)
    } else if(type === "drink"){
      drinkList.push(data)
    } else if(type === "combo"){
      comboList.push(data)
    }

    total += data.price
    this.setState({
      orderItem : orderList,
      veg: vegList,
      nonVeg: nonvegList,
      drink: drinkList,
      combo: comboList,
      totalAmount: total
    })
  }

  render() {
    console.log(this.props.veg);
    console.log(this.props.nonVeg);
    console.log(this.props.drink);
    console.log(this.props.combo);
    return (
      <div className="container-fluid">
        {this.state.isCustomerSelected ? (
          <div className="col-md-12">
            <br />
            <div className="row">
              <div className="col-md-7 order-area">
                {this.props.nonVeg.length !== 0 ? (
                  <div className="row">
                    <div className="col-12">
                      <h2>Non Veg Items</h2>
                    </div>
                    <div className="col-12 row">
                      {
                        this.props.nonVeg.map((data,index) => (

                      <div className="col-lg-2 col-md-4 col-6" key={index} onClick={() => this.addItem(data)}>
                        <div className="card nonVeg">
                          <div className="card-body">
                            <h4 className="itemtitle">{data.name}</h4>
                            <h5 className="text-end">25</h5>
                          </div>
                        </div>
                      </div>
                        ))
                      }
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.props.veg.length !== 0 ? (
                  <div className="row">
                    <div className="col-12">
                      <h2>Veg Items</h2>
                    </div>
                    <div className="col-12 row">
                      {
                        this.props.veg.map((data,index) => (

                      <div className="col-lg-2 col-md-4 col-6" key={index} onClick={() => this.addItem(data)}>
                        <div className="card veg">
                          <div className="card-body">
                            <h4 className="itemtitle">{data.name}</h4>
                            <h5 className="text-end">25</h5>
                          </div>
                        </div>
                      </div>
                        ))
                      }
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.props.drink.length !== 0 ? (
                  <div className="row">
                    <div className="col-12">
                      <h2>Drink</h2>
                    </div>
                    <div className="col-12 row">
                      {
                        this.props.drink.map((data,index) => (

                      <div className="col-lg-2 col-md-4 col-6" key={index} onClick={() => this.addItem(data)}>
                        <div className="card drink">
                          <div className="card-body">
                            <h4 className="itemtitle">{data.name}</h4>
                            <h5 className="text-end">25</h5>
                          </div>
                        </div>
                      </div>
                        ))
                      }
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.props.combo.length !== 0 ? (
                  <div className="row">
                    <div className="col-12">
                      <h2>Combo</h2>
                    </div>
                    <div className="col-12 row">
                      {
                        this.props.combo.map((data,index) => (

                      <div className="col-lg-2 col-md-4 col-6" key={index} onClick={() => this.addItem(data)}>
                        <div className="card combo">
                          <div className="card-body">
                            <h4 className="itemtitle">{data.name}</h4>
                            <h5 className="text-end">25</h5>
                          </div>
                        </div>
                      </div>
                        ))
                      }
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="col-md-5">
                <div className="card purchase_entiry_card">
                  <div className="card-body">
                    <div className="scrollableDiv">
                      <div className="row">
                        <div className="col-12">
                          <h4>Customer Name :</h4>
                          <h3>{this.state.customerName}</h3>
                        </div>
                        <hr />
                        <div className="col-12">
                          <h4>Order Items</h4>
                          <div className="row">
                            {
                              this.state.orderItem.map((data,index) => (

                              <div className="col-12">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-6">{data.name}</div>
                                      <div className="col-4 qtySection">
                                        <button className="btn btn-primary">
                                          <i className="fas fa-minus"></i>
                                        </button>
                                        1
                                        <button className="btn btn-primary">
                                          <i className="fas fa-plus"></i>
                                        </button>
                                      </div>
                                      <button className="col-md-2 btn btn-danger">
                                        <i className="fas fa-trash"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                      <div className="row totalCardArea">
                        <div className="col-12">
                          <div className="row">
                            <h6 className="col-6">
                              <b>Subtotal :</b>
                            </h6>
                            <h6 className="col-6">{this.state.totalAmount}</h6>
                            <h6 className="col-6">
                              <b>GST Tax :</b>
                            </h6>
                            <h6 className="col-6">{parseFloat(this.state.totalAmount) * 0.5}</h6>
                            <h4 className="col-6">
                              <b>Total:</b>
                            </h4>
                            <h4 className="col-6">{parseFloat(this.state.totalAmount) + (parseFloat(this.state.totalAmount) * 0.5)}</h4>
                          </div>
                          <br />
                          <Link to="/orders/list" className="col-12 row btn btn-success">
                              <h3 className="col-12 text-center">
                                Proceed to checkout
                              </h3>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-12">
              <h3>Customer Name:</h3>
            </div>
            <div className="col-md-5">
              <select
                name="customer"
                id="customer"
                onChange={this.selectCustomer}
                className="form-select"
                defaultValue="none"
              >
                <option value="none" disabled>
                  Select the customer
                </option>
                <option key={1} value={1}>
                  Khan Zaki
                </option>
                <option key={2} value={2}>
                  Khan Farhan
                </option>
                <option key={3} value={3}>
                  Daniyal Dolare
                </option>
              </select>
            </div>
            <br />
            <br />
            <br />
            <h2 className="col-12 text-center text-muted">
              Select customer first
            </h2>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  veg: state.foodorder.veg,
  nonVeg: state.foodorder.nonVeg,
  drink: state.foodorder.drink,
  combo: state.foodorder.combo,
  customers: state.customer.customers,
});

export default connect(mapStateToProps, { getCustomer, getMenu })(
  FoodOrderingPage
);
