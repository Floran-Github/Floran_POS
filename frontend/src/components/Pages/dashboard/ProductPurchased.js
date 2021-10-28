import React from "react";

const ProductPurchased = () => {
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
            <tr>
              <td>1</td>
              <td>Laptop</td>
              <td>4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Laptop</td>
              <td>4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Laptop</td>
              <td>4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Laptop</td>
              <td>4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Laptop</td>
              <td>4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Laptop</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPurchased;
