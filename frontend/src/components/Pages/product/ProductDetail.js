import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router';


export class ProductDetail extends Component {
  static proptypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  render() {
    const { product } = this.props.location.state;

    return (
      <div className='col-12'>
        <div className='row'>
          <div className='col-8'>
            <h2>Product details</h2>
          </div>
        </div>
        <div className='row'>
          <div className='card'>
            <div className='card-header'>
              <div className='card-tools'>
                <a href='' className='btn btn-tool'>
                  <i className='fas fa-edit'></i>
                </a>
                <a href='' className='btn btn-tool'>
                  <i className='fas fa-times'></i>
                </a>
              </div>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <span>
                    <h4>Name :</h4> {product.product_name}
                  </span>
                  <h4>Description</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore voluptas unde animi illum necessitatibus. Natus in
                    provident beatae, laborum voluptas cumque quisquam eos
                    perferendis ab dolorem quae, dicta dignissimos incidunt.
                  </p>
                </div>
                <div className='col-md-6'>
                  <h4>Quantity Available :</h4> {product.product_quantity}
                  <h4>Cost :</h4>
                  {product.product_price}
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
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(ProductDetail);
