import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRooms } from "../../../actions/room";
export class BookingRoom extends Component {
  state = {
    roomNumber: "",
  };
  static propTypes = {
    getRooms: PropTypes.func.isRequired,
    rooms: PropTypes.array.isRequired,
  };
  componentDidMount() {
    this.props.getRooms();
  }

  roomSelected = (id) => {
    this.setState({
      roomNumber: id,
    });
  };
  render() {
    console.log(this.props.location.customerId);
    if (this.props.location.customerId === undefined) {
      return <Redirect to={"/reservation/existing/customer"} />;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 reservationHeader">
            <h1 className="">Existing Customer</h1>
            <Link to="/reservation" className="btn btn-danger">
              <i className="fa-solid fa-chevron-left"></i> Back
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Booking For :</h4>
            <strong>
              <h2>{this.props.location.customerName}</h2>
            </strong>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-12">
                <b>
                  <h5>Number of people</h5>
                </b>
              </div>
              <div className="col-12">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Number of People"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <b>
                  <h5>Coming From</h5>
                </b>
              </div>
              <div className="col-12">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Coming from"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <b>
                  <h5>Going to</h5>
                </b>
              </div>
              <div className="col-12">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Going to"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <b>
                  <h5>Booking From</h5>
                </b>
              </div>
              <div className="col-12">
                <input className="form-control" type="date" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <b>
                  <h5>Booking Till</h5>
                </b>
              </div>
              <div className="col-12">
                <input className="form-control" type="date" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <b>
                  <h5>Check In</h5>
                </b>
              </div>
              <div className="col-12">
                <input className="form-control" type="datetime-local" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <b>
                  <h5>Check Out</h5>
                </b>
              </div>
              <div className="col-12">
                <input className="form-control" type="datetime-local" />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h2>Rooms Available</h2>
            <div className="row">
              {this.props.rooms.map((value, index) => (
                <div
                  className="col-md-4"
                  key={index}
                  onClick={() => this.roomSelected(value.id)}
                >
                  <div
                    className={
                      this.state.roomNumber === value.id
                        ? "card text-white bg-secondary pointer"
                        : "card pointer"
                    }
                  >
                    <div className="card-body">
                      <h3>Room Number : {value.room_number}</h3>
                      <hr />
                      <h5>Type : {value.room_type.roomType}</h5>
                      <h5>Number of person : {value.number_of_person}</h5>
                      <h5>
                        Smoking : {value.smoking ? "Allowed" : "Not Allowed"}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row alignCenter">
          <div className="col-11">
            <div className="row">
              <button className="btn btn-success">
                <h5>Book Room</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rooms: state.room.rooms,
});

export default connect(mapStateToProps, { getRooms })(BookingRoom);
