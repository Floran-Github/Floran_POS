import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { retreiveBillOfMaterial } from "../../../actions/billofmaterial";

export class bomDetailPage extends Component {
  static propTypes = {
    bomDetail: PropTypes.array.isRequired,
    floorItem: PropTypes.array.isRequired,
    kitchenItem: PropTypes.array.isRequired,
    retreiveBillOfMaterial: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.retreiveBillOfMaterial(this.props.match.params.id);
  }

  render() {
    let bomDetail = this.props.bomDetail;
    let floorItem = this.props.floorItem;
    let kitchenItem = this.props.kitchenItem;

    console.log(bomDetail);
    console.log(floorItem);
    console.log(kitchenItem);

    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <h1>{bomDetail.name} Detail</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={bomDetail.photo}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-header">
                    <div className="card-tools">
                      <Link className="link" to="/billOfMaterial">
                        <i className="fas fa-edit"></i>
                      </Link>

                      <Link className="link" to="/billOfMaterial">
                        <i className="fas fa-times"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Code</label>
                        </h5>
                        <h5 className="col">
                          <b>{bomDetail.id}</b>
                        </h5>
                      </div>

                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Name</label>
                        </h5>
                        <h5 className="col">{bomDetail.name}</h5>
                      </div>

                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Desription</label>
                        </h5>
                        <p className="col">{bomDetail.description}</p>
                      </div>

                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Production Cost</label>
                        </h5>
                        <h5 className="col">{bomDetail.production_cost}</h5>
                      </div>

                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Selling Cost</label>
                        </h5>
                        <h5 className="col">{bomDetail.price}</h5>
                      </div>

                      <div className="form-group border-bottom row">
                        <h5 className="col">
                          <label>Item Receipe</label>
                        </h5>
                        <p className="col receipe-p">{bomDetail.receipe}</p>
                      </div>
                    </div>
                    <div className="row">
                      <h3>Kitchen Items used</h3>
                      <div className="row">
                        {kitchenItem.length !== 0 ? (
                          kitchenItem.map((data, index) => (
                            <div className="col-md-4 col-12">
                              <div className="card">
                                <div className="card-body text-center">
                                  <h3>{data.name}</h3>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <h3 className="col-12 text-center text-muted">
                            No Kitchen item Used
                          </h3>
                        )}
                        {}
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <h3>Inventory Items used</h3>
                      <div className="row">
                        {floorItem.map((item, index) => (
                          <div className="col-md-4 col-12">
                            <div className="card">
                              <div className="card-body text-center">
                                <h3>{item.name}</h3>
                              </div>
                            </div>
                          </div>
                        ))}
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

const mapStateToProps = (state) => ({
  bomDetail: state.billofmaterial.bomDetail,
  floorItem: state.billofmaterial.floorItem,
  kitchenItem: state.billofmaterial.kitchenItem,
});

export default connect(mapStateToProps, { retreiveBillOfMaterial })(
  bomDetailPage
);
