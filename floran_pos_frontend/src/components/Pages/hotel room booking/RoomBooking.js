import React, { Component } from "react";
import { connect } from "react-redux";
import { getBooking } from "../../../actions/booking";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class RoomBooking extends Component {
  d = new Date();
  i = 0;
  test = [];

  monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  state = {
    nxt: 0,
    id: 0,
  };

  static propTypes = {
    date: PropTypes.array.isRequired,
    bookingDetail: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    getBooking: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (this.props.date.length === 0) {
      this.props.getBooking();
    }
  }

  bookedOrunbookedDiv = (val, nextVal, prevValue) => {
    console.log(val);
    console.log(nextVal);
    console.log("---");
    if (val === 2) {
      let bookingData = this.props.bookingDetail[this.state.id];
      if (nextVal === 1) {
        // this.setState({
        //   nxt: 1,
        //   id: this.state.id + 1,
        // });

        return (
          <div className="bigBookedroom">
            <h6>Booking Number : 1</h6>
            <h5>Customer Name : Khan zaki</h5>
          </div>
        );
      } else {
        return (
          <div className="bookedRoom">
            <h6>Booking Number : 1</h6>
            <h5>Customer Name : Khan zaki</h5>
          </div>
        );
      }
    } else {
      if (prevValue === 2) {
   
      } else {
        return <div className="bookedRoom">&nbsp;</div>;
      }
    }
  };
  render() {
    for (this.i = 0; this.i <= 100; this.i++) {
      this.test.push(0);
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <h2 className="col-12">Room Booking</h2>
          <div className="bookingMenuRow">
            <select
              name="customer"
              id={this.d.getMonth()}
              defaultValue={this.d.getMonth()}
            >
              {this.monthsName.map((value, index) => (
                <option key={index} value={index}>
                  {value}
                </option>
              ))}
            </select>
            <Link to="/reservation" className="btn btn-primary">New Reservation</Link>
          </div>

          <div className="bookingTable">
            <div className="bookingRow">
              <div className="bookingCorner">Room Number</div>
              {this.props.date.map((val, index) => (
                <div className="bookingHeader" key={index}>
                  {val} - {this.monthsName[this.d.getMonth()]}
                </div>
              ))}
            </div>
            <div className="bookingRow">
              {this.props.data.map((val1, index) =>
                Object.keys(val1).map((v, i) => (
                  <>
                    <div className="roomNumber">{v}</div>
                    {val1[v].map((value, ind) =>
                      value === 2 ? (
                        this.bookedOrunbookedDiv(
                          value,
                          val1[v][ind + 1],
                          val1[v][ind + 1]
                        )
                      ) : value === 1 ? (
                        this.bookedOrunbookedDiv(
                          value,
                          val1[v][ind + 1],
                          val1[v][ind - 1]
                        )
                      ) : (
                        <div className="unbookedRoom">&nbsp;</div>
                      )
                    )}
                  </>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  date: state.booking.date,
  bookingDetail: state.booking.bookingDetail,
  data: state.booking.data,
});

export default connect(mapStateToProps, { getBooking })(RoomBooking);
