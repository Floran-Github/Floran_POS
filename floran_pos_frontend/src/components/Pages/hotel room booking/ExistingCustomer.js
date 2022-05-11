import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCustomer } from "../../../actions/customers";

export class ExistingCustomer extends Component {
  state = {
    inputValue: "",
  };
  static propTypes = {
    getCustomer: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
  };
  inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    this.setState({
      inputValue: lowerCase,
    });
  };
  componentDidMount() {
    this.props.getCustomer();
  }
  render() {
    console.log(this.props.customers);

    const filterData = this.props.customers.filter((data) => {
      if (this.state.inputValue === "") {
        return data;
      } else {
        return data.name
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase());
      }
    });
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 reservationHeader">
            <h1 className="">Existing Customer</h1>
            <Link to="/reservation" className="btn btn-danger ">
              <i className="fa-solid fa-chevron-left"></i> Back
            </Link>
          </div>
        </div>
        <div className="row text-center searchArea">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="search customer by name .."
              onChange={(e) => this.inputHandler(e)}
            />
          </div>
          
        </div>
        <div className="row">
          {filterData.length === 0 ? (
              <div className="row">
                  <div className="col-12 text-center">
                    <br />
                    <br />
                  <h4 className="text-muted">No Customer Found</h4>
                  </div>
              </div>
          ) : (
            filterData.map((value, index) => (
              <div className="col-md-3" key={index}>
                <Link to={{pathname:"/reservation/booking",customerId:value.id,customerName:value.name}} className="card link">
                  <div className="card-body">
                    <b>
                      <h4>Name :</h4>
                    </b>
                    <h5>{value.name}</h5>
                    <div className="row">
                      <div className="col-md-8">
                        <b>
                          <h5>Phone Number :</h5>
                        </b>
                        <h6>{value.mobile_number}</h6>
                      </div>
                      <div className="col-md-4">
                        <b>
                          <h5>Age :</h5>
                        </b>
                        <h6>{value.age}</h6>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customer.customers,
});

export default connect(mapStateToProps, { getCustomer })(ExistingCustomer);
