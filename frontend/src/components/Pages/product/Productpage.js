import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../../actions/product';

export class Productpage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  static proptypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    this.props.getProducts();
  }

  redirectToProductDetail = (product) => {
    this.props.history.push('/product/detail', { product: product });
  };

  render() {
    var productList;
    if (this.props.products.length === 0 && this.props.products[0] === 0) {
      productList = [];
    } else {
      productList = this.props.products;
    }

    return (
      <Fragment>
        <div className='col-12'>
          <div className='row'>
            <div className='col-md-10 col-6'>
              <h2>Products</h2>
            </div>
            <div className='col-md-2 col-6'>
              <a href='/product/create' className='btn btn-secondary'>
                <i className='fas fa-plus'></i> New Product
              </a>
            </div>
          </div>
          <div className='table-responsive'>
            <table
              className='table table-bordered table-hover'
              data-page-length='100'
            >
              <thead className='table-light'>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody className='table-light'>
                {this.props.products.map((product, index) => (
                  <tr
                    key={product.id}
                    data-item={index}
                    onClick={(e) => this.redirectToProductDetail(product)}
                  >
                    <td>{index + 1}</td>
                    <td>{product.product_name}</td>
                    <td>{product.product_quantity}</td>
                    <td>{product.product_price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
    products: state.product.products
})

export default connect(mapStateToProps,{getProducts})(Productpage)