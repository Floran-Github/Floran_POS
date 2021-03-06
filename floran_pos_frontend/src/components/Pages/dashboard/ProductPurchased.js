import React, { Component } from 'react'

export class ProductPurchased extends Component {
  render() {
    return (
      <div className="w-100 mr-3 p-2">
      <p className="fs-2 fw-bold">Most Purchased Product (Current Month)</p>
      <div className="table-responsive">
        <table
          className="table table-bordered table-hover"
          data-page-length="100"
        >
          <thead className="table-light">
            <tr>
              <th>Sr.No</th>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {this.props.most_purchased_product.map((item,index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.product_name}</td>
                <td>{item.product_quantity}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

export default ProductPurchased

