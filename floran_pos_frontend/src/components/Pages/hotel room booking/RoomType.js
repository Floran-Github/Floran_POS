import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getRoomTypes,createRoomType } from "../../../actions/room";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class RoomType extends Component {

state = {
    roomType: ""
}
static propTypes = {
    getRoomTypes: PropTypes.func.isRequired,

}
  render() {
    return (
      <div className="col-12">
        <div className="row">
          <h2>Room Type</h2>
        </div>
        <br />
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <div className="col-12">
                <h4>Create New Room Type</h4>
              </div>
              <div className="col-12">
                <label htmlFor="roomType">
                  <b>Room Type</b>
                </label>
                <input className="form-control" type="text" maxLength={20} />
              </div>
              <div className="col-12">
                  <div className="row">
                      <button className="btn bth-primary">
                          Create
                      </button>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-12">
                <h4>Existing Room Type</h4>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-9">
                        <h5>General</h5>
                      </div>
                      <div className="col-1">
                        <Link className="link" to="/product">
                          <i className="fas fa-edit"></i>
                        </Link>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-1">
                        <Link className="link" to="/product">
                          <i className="fas fa-times"></i>
                        </Link>
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

export default RoomType;
