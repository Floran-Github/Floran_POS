import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getBillOfMaterial } from "../../../actions/billofmaterial";

export class bomListPage extends Component {
  constructor(props){
    super(props);
  }

  static propTypes = {
    billOfMaterial: PropTypes.array.isRequired
  };

  componentDidMount(){
    if(this.props.billOfMaterial.length === 0){
      this.props.getBillOfMaterial();
    }
  }
  render() {
    let billOfMaterialList;

    if(this.props.billOfMaterial.length === 0){
      billOfMaterialList = []
    } else{
      billOfMaterialList = this.props.billOfMaterial
    }
    console.log(billOfMaterialList)
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <h1 className="float-start">Bill Of Material</h1>
            <div className="float-end">
              <a href="/billOfMaterial/create" className="btn btn-primary">
                <i className="fas fa-plus"></i>Add New Item
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {
            billOfMaterialList.map((data,index) => (

          <Link
          key={index}
            to={`/billOfMaterial/detail/${data.id}`}
            className="col-lg-2 col-md-4 col-12 customcard-link"
          >
            <div className="card">
              <img
                src={data.photo}
                className="card-img-top"
                alt="pop"
              />
              <div className="card-body">
                <h2>
                  <b>{data.name}</b>
                </h2>
                <h5>
                  <b>Production cost : </b>{data.production_cost}
                </h5>
                <h5>
                  <b>Selling cost : </b>{data.price}
                </h5>
              </div>
            </div>
          </Link>
            ))
          }
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  billOfMaterial: state.billofmaterial.billOfMaterial
})

export default connect(mapStateToProps,{getBillOfMaterial})(bomListPage)