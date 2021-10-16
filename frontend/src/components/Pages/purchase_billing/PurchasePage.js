import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPurchase } from '../../../actions/purchase';
import { getSuppliers } from '../../../actions/supplier';
export class PurchasePage extends Component {

    static proptypes = {
      instate_data: PropTypes.array.isRequired, 
      outstate_data: PropTypes.array.isRequired,
      suppliers: PropTypes.array.isRequired,
      getSuppliers: PropTypes.func.isRequired,
      getPurchase: PropTypes.func.isRequired,
    }

    componentDidMount(){
      this.props.getPurchase();
      this.props.getSuppliers();

    }

    supplierName = (id) => {
      var supplier_name = ''
      this.props.suppliers.map((sdata,index) => (
        parseInt(sdata.id) == parseInt(id) ? supplier_name = sdata.name : 'pr'
      ))
      return supplier_name
    }

    render() {
  
        return (
          <Fragment>
            <div className='col-12'>
              <div className='row'>
                <div className='col-md-10 col-6'>
                  <h2>Purchase </h2>
                </div>
                <div className='col-md-2 col-6'>
                  <a href='/purchase/bill' className='btn btn-secondary'>
                    <i className='fas fa-plus'></i> Add Bill
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                        <h2>Inter State Purchase</h2>
                    </div>
                    <div className="card-body">
                      <div className='table-responsive'>
                        <table
                          className='table table-bordered table-hover'
                          data-page-length='100'
                        >
                          <thead className='table-light'>
                            <tr>
                              <th>Invoice Number</th>
                              <th>Supplier Name</th>
                              <th>Purchase Date</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody className='table-light'>
                            {
                            this.props.instate_data.map((data,index) => (
                              <tr key={index}>
                                <td>
                                  {data.invNumber}
                                </td>
                                <td>
                                  {this.supplierName(data.supplier_id)}
                                </td>
                                <td>
                                  {data.date}
                                </td>
                                <td>
                                  {data.total_amount}
                                </td>
                              </tr>
                            ))}
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                        <h2>Intra State Purchase</h2>
                    </div>
                    <div className="card-body">
                      <div className='table-responsive'>
                        <table
                          className='table table-bordered table-hover'
                          data-page-length='100'
                        >
                          <thead className='table-light'>
                            <tr>
                              <th>Invoice Number</th>
                              <th>Supplier Name</th>
                              <th>Purchase Date</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody className='table-light'>
                         {
                          this.props.outstate_data.map((data,index) => (
                            <tr key={index}>
                            <td>
                              {data.invNumber}
                            </td>
                            <td>
                              {this.supplierName(data.supplier_id)}
                            </td>
                            <td>
                              {data.date}
                            </td>
                            <td>
                              {data.total_amount}
                            </td>
                          </tr>
                          ))
                        }
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </Fragment>
        )
    }
}

const mapStateToProps = state => ({
  instate_data: state.purchase.instate_data,
  outstate_data: state.purchase.outstate_data,
  suppliers: state.supplier.suppliers
})

export default connect(mapStateToProps, {getPurchase,getSuppliers})(PurchasePage)
