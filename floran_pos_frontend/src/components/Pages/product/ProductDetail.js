import React, { Component } from 'react';


export class ProductDetail extends Component {
 
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
                <a href='/' className='btn btn-tool'>
                  <i className='fas fa-edit'></i>
                </a>
                <a href='/' className='btn btn-tool'>
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
                   {product.product_description}
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


export default ProductDetail;
