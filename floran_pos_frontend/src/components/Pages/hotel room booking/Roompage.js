import React, { Component } from "react";
import { getRooms } from "../../../actions/room";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Roompage extends Component {
  static propTypes = {
    rooms: PropTypes.array.isRequired,
    getRooms: PropTypes.array.isRequired,
  };

  componentDidMount() {
    if (this.props.rooms.length === 0) {
      this.props.getRooms();
    }
  }
  render() {
    return (
      <div className="col-12">
        <div className="row">
            <div className="col-9">

          <h2>Rooms</h2>
            </div>
            <div className="col-1">
                <Link to="/" className="btn btn-primary">
                    Add New Room
                </Link>
            </div>
            <div className="col-2">
                <Link to="/rooms/types" className="btn btn-primary">
                    Create New Room Type
                </Link>
            </div>
        </div>
        <div className="row">
          {this.props.rooms.map((value, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <div className="card-header">
                  <div className="card-tools">
                    <Link className="link" to="/product">
                      <i className="fas fa-edit"></i>
                    </Link>

                    <Link className="link" to="/product">
                      <i className="fas fa-times"></i>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <h3>Room Number : {value.room_number}</h3>
                  <hr />
                  <h5>Type : {value.room_type.roomType}</h5>
                  <h5>Number of person : {value.number_of_person}</h5>
                  <h5>Smoking : {value.smoking ? "Allowed" : "Not Allowed"}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rooms: state.room.rooms,
});
export default connect(mapStateToProps, { getRooms })(Roompage);
